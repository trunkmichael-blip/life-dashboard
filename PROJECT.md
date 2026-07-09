# Lebens-Dashboard — Projektdokumentation

> Zweck dieser Datei: Vollständiger Einstieg für Menschen und KI-Assistenten.
> Bei Weiterentwicklung in einem neuen Chat: diese Datei + `public/index.html` lesen.

**Live:** https://lebens-dashboard-michi.netlify.app (PWA am iPhone-Homescreen)
**Stand:** 2026-07-09 · Version siehe `window.DASHBOARD_VERSION` in `public/index.html` (Browser-Console beim Laden)

---

## 1. Zweck & Nutzungskontext

Persönliches Steuerungs-Dashboard für einen Hybrid-Athleten (Kraft + Laufen):
To-Dos, Habits, Trainings- & Wochenplan, Kalender, Kalorien-/Makro-Tracking mit
Kalorien-Cycling, Gesundheitsmetriken (Apple Health), Finanzen. Befüllung primär
per integriertem Claude-Chat (Freitext → strukturierte Befehle) und automatischem
iPhone-Health-Sync. Nutzer arbeitet teils auf gesperrtem Firmenrechner →
**alle Deployments browserbasiert** (GitHub-Upload → Netlify Auto-Deploy), kein CLI.

## 2. Architektur

| Baustein | Technik | Ort |
|---|---|---|
| Frontend | Eine HTML-Datei, React 18 UMD (selbst gehostet), eigene Template-Runtime („dc-runtime") | `public/index.html`, `public/vendor/` |
| Design | „Liquid Glass" (Claude-Design-Export): dunkles Violett `oklch(0.14 0.025 290)`, Magenta-Akzent `oklch(0.75 0.15 320)`, Grün `oklch(0.72 0.15 150)`, Glass-Karten mit backdrop-blur, Fonts Inter / JetBrains Mono / Material Symbols (Google Fonts) | CSS in `index.html` |
| Hosting | Netlify, Site `lebens-dashboard-michi` (ID `3ab5f02b-e8f8-4e5b-abac-5a3f0a5e8189`), Auto-Deploy aus GitHub `main` | `netlify.toml` (publish `public`, functions `netlify/functions`) |
| KI-Chat | Netlify Function als Proxy zur Anthropic API (Modell `claude-sonnet-4-6`) | `netlify/functions/chat.mjs` |
| Health-Ingest | Netlify Function, Token-gesichert, schreibt mit Service-Key | `netlify/functions/health-sync.mjs` |
| Datenbank | Supabase (Projekt-Ref `oqhcxwqdrkvesnuzdwzh`), Zugriff Frontend nur lesend/schreibend via anon key | Konfig in `public/config.js` |

### Datenfluss
```
iPhone-Kurzbefehl ──POST──▶ /.netlify/functions/health-sync ──▶ Supabase health_metrics
Dashboard-Chat ──POST──▶ /.netlify/functions/chat ──▶ Anthropic API
Frontend ◀──REST (anon key)──▶ Supabase (dashboard_state lesen/schreiben, health_metrics nur lesen)
```

## 3. Supabase-Schema

| Tabelle | Spalten | Zweck |
|---|---|---|
| `dashboard_state` | `id text pk` (immer `'main'`), `data jsonb`, `updated_at` | Gesamter App-Zustand (siehe 4.) |
| `health_metrics` | `day date pk`, `metrics jsonb`, `updated_at` | Ein Eintrag pro Tag, Teil-Updates werden serverseitig gemerged |

RLS aktiv. `dashboard_state`: Vollzugriff via Policy (Single-User). `health_metrics`:
anon nur SELECT; Schreiben ausschließlich über `health-sync` mit Service-Key.
Nach Schema-Änderungen nötig: `grant usage on schema public to anon, authenticated;`
und `notify pgrst, 'reload schema';`

## 4. App-Zustand (`dashboard_state.data`)

```json
{
  "todos":    [{ "text": "...", "priority": "Hoch|Mittel|Niedrig", "done": false }],
  "habits":   [{ "name": "...", "done": false, "streak": 0 }],
  "sport":    [{ "name": "...", "time": "HH:MM", "duration": "90 min", "detail": "", "status": "Geplant|Erledigt" }],
  "weekPlan": [{ "day": "Mo|Di|Mi|Do|Fr|Sa|So", "label": "...", "time": "HH:MM", "duration": "..." }],
  "events":   [{ "date": "YYYY-MM-DD", "time": "HH:MM", "title": "...", "tag": "Meeting|Fokus|Ausdauer|Privat|Termin", "dur_min": 60 }],
  "goals":    { "kcal_goal": 2200, "protein_goal": 195, "carbs_goal": 220, "fat_goal": 70 },
  "financeCfg": { "netto": 3240, "saved": 780, "fixkosten": [{ "name": "...", "amount": 0 }], "income": [{ "name": "...", "amount": 0 }] },
  "chatMessages": "letzte 20",
  "day": "YYYY-MM-DD"
}
```

Regeln: `sport` leert sich bei Tageswechsel; Habits `done` wird täglich zurückgesetzt
(Streak +1 nur bei Erledigung). Beim Laden werden Alt-Daten normalisiert
(Kategorie-Strings aus `detail` entfernt, Sport-Tags neu klassifiziert).

## 5. Chat-Befehlssatz (`[CMD]{json}` am Antwortende, geparst in `applyChatCommands`)

| Aktion | Parameter | Hinweise |
|---|---|---|
| `add_todo` | text, priority | |
| `complete_todo` / `delete_todo` | text (Teiltext) | |
| `toggle_habit` | name, done | Streak-Logik automatisch |
| `set_sport` | sessions[] | Ersetzt HEUTIGE Liste komplett; nur Ad-hoc-Abweichungen |
| `set_week_sport` | plan[] (day/label/time/duration) | Wiederkehrender Wochenplan, fehlende Tage = Ruhetag |
| `set_week_day` | day, label, time, duration | Einzelnen Wochentag ändern; label "Ruhetag" = leeren |
| `add_event` / `delete_event` | title, time, date?, tag, dur_min | date fehlt = heute |
| `set_goals` | kcal_goal?, protein_goal?, carbs_goal?, fat_goal? | Nur genannte Felder |
| `set_finance` | netto?, saved? | |
| `set_fixkosten` / `set_income` | name, amount | amount 0 = Posten entfernen |

**Auto-Logik (keine Befehle nötig):** Sport-Kategorisierung per Schlüsselwort
(`classifySport`: Krafttraining/Lauftraining/Ausdauer/Fußball/Mobility/Training);
Sporteinheiten mit Uhrzeit erscheinen automatisch im Tageskalender; Kalender-Einträge
mit Tag Sport/Kraft/Ausdauer erscheinen automatisch im Sport-Modul; heutiger
Wochenplan-Eintrag erscheint in HEUTE + Kalender.

## 6. Health-Sync (iPhone-Kurzbefehl „Health Sync")

POST `…/.netlify/functions/health-sync`, Header `x-sync-token`, JSON (alles Zahlen):

| Feld | Quelle (Kurzbefehl-Variable) |
|---|---|
| steps / active_kcal / resting_kcal | schritte / aktiv / ruheenergie |
| rhr / hrv | rhf / hrv (Durchschnitt heute) |
| sleep_h | Schlafanalyse: Messungen (letzte 1 Tage, Wert ≠ „Im Bett") → Details „Dauer" → Summe ÷ 60 |
| kcal_in / protein_g / carbs_g / fat_g | zufuhr / protein / carbs / fette (aus Ernährungs-App via Apple Health) |

Server-Whitelist zusätzlich: `kcal_goal, protein_goal, carbs_goal, fat_goal,
sleep_score, sleep_deep_min, sleep_rem_min, sleep_core_min, hrv_baseline,
rhr_baseline, spo2, weight_kg`. Rundung serverseitig (kcal/g/bpm ganzzahlig;
sleep_h/weight_kg 1 Dezimale). Automationen: nach Schlaf-Fokus-Ende + täglich 22:30
+ manuell via Homescreen-Icon.

## 7. Frontend-Datenbindung (Fallback-Prinzip)

Jedes Modul: **echte Daten > Demo-Platzhalter**. Prioritäten bei Zielen:
Health-Sync (`*_goal`) > Chat (`goals`) > Default (2200/195/220/70).
Gesundheit: heutiger `health_metrics`-Eintrag, sonst jüngster verfügbarer Tag.
7-Tage-Trends (HRV/Ruhepuls/Kalorienbilanz) aus `health_metrics`-Historie ab
2 echten Datenpunkten. Schlaf-Ring zeigt Dauer (`sleep_h`), Ziel-Referenz 8 h,
Status-Schwellen 6/7 h. Recovery-Score berechnet: 0.4·HRV/Basis + 0.3·Basis/RHF
+ 0.3·SleepScore.

**Noch Demo (nicht angebunden):** Kalender-Wochenansicht, MSCI-Widget,
Motivations-Zitate, Übersicht-Highlights.

## 8. Netlify Env-Vars

| Key | Zweck |
|---|---|
| `ANTHROPIC_API_KEY` | Chat-Proxy |
| `SUPABASE_URL` | health-sync Ziel (`https://oqhcxwqdrkvesnuzdwzh.supabase.co`) |
| `SUPABASE_SERVICE_KEY` | health-sync Schreibrecht — NIE ins Frontend/Repo |
| `HEALTH_SYNC_TOKEN` | Auth des Kurzbefehls (muss Header-Wert exakt entsprechen) |
| `SECRETS_SCAN_OMIT_KEYS` | `SUPABASE_URL` (öffentlicher Wert, Scanner-Ausnahme) |

Env-Änderungen greifen erst nach neuem Deploy (Trigger deploy).

## 9. Update-Workflow & Debugging

1. Änderung beschreiben (Claude-Chat) → gepatchte Dateien als ZIP
2. GitHub → Upload files → Ordner `public` (und ggf. `netlify`) reinziehen → Commit
   — **`config.js` nie überschreiben** (enthält befüllte Supabase-Werte)
3. Netlify Auto-Deploy (~1 min) → Hard-Reload (`Strg+F5`)
4. Console-Check: `Lebens-Dashboard vJJJJ-MM-TT-N` — Version muss zur Lieferung passen

| Symptom | Ursache |
|---|---|
| Demo-Werte trotz Sync | Kein heutiger `health_metrics`-Eintrag / veralteter Deploy (Version prüfen) |
| `Supabase: HTTP 404` | Tabelle fehlt oder Rechte → grant + `notify pgrst` |
| `invalid x-api-key` | `ANTHROPIC_API_KEY` fehlt/falsch + Redeploy vergessen |
| Seite zeigt Roh-Code | Runtime muss separate Datei bleiben (`vendor/dc-runtime.js`), nie inline |
| `<polyline>`-Warnungen | Kosmetisch (Erst-Render), ignorieren |

## 10. Gelernte Stolpersteine (nicht wiederholen)

- React von CDN im Artefakt/Netlify unzuverlässig → UMD-Dateien selbst hosten (`/vendor/`)
- `dc-runtime` inline im HTML kollidiert mit eigener Template-Engine → separate Datei
- `supabaseUrl` = nur Basis-Domain, ohne `/rest/v1`, ohne Slash am Ende
- Netlify Secrets-Scanner blockiert Build bei öffentlichem `SUPABASE_URL` im Code → Omit-Key
- Neue Tabellen brauchen explizite Grants + PostgREST-Schema-Reload
- Deklarationsreihenfolge in `renderVals()` beachten (TDZ) — vor Auslieferung
  Laufzeittest mit leerem UND befülltem State

## 11. Roadmap-Kandidaten

Kalender-Wochenansicht live · echte Schlafphasen (Kurzbefehl: 3 Blöcke Tief/REM/Kern
→ `sleep_*_min`) · MSCI/Depot-Anbindung · Supabase-Auth statt offener Policy ·
CSV-Datenexport als Backup-Automatik
