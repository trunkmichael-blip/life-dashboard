// Empfängt Gesundheitsdaten (z. B. vom Apple-Kurzbefehl) und schreibt sie nach Supabase.
// Absicherung über Token-Header. Schreiben erfolgt serverseitig mit Service-Key (RLS-sicher).
export default async (req) => {
  if (req.method !== 'POST') return new Response('Method Not Allowed', { status: 405 });

  const env = (k) => (typeof Netlify !== 'undefined' && Netlify.env && Netlify.env.get(k)) || process.env[k];
  const token = env('HEALTH_SYNC_TOKEN');
  const supaUrl = env('SUPABASE_URL');
  const supaKey = env('SUPABASE_SERVICE_KEY');

  if (!token || !supaUrl || !supaKey) {
    return json({ error: 'Server nicht konfiguriert: HEALTH_SYNC_TOKEN / SUPABASE_URL / SUPABASE_SERVICE_KEY fehlen.' }, 500);
  }
  if (req.headers.get('x-sync-token') !== token) {
    return json({ error: 'Ungültiger Token.' }, 401);
  }

  let body;
  try { body = await req.json(); } catch { return json({ error: 'Ungültiges JSON.' }, 400); }

  const day = /^\d{4}-\d{2}-\d{2}$/.test(body.day || '') ? body.day : new Date().toISOString().slice(0, 10);
  const allowed = ['steps','active_kcal','resting_kcal','kcal_in','kcal_goal','protein_g','protein_goal','carbs_g','carbs_goal','fat_g','fat_goal','sleep_h','sleep_score','sleep_deep_min','sleep_rem_min','sleep_core_min','hrv','hrv_baseline','rhr','rhr_baseline','spo2','weight_kg'];
  const oneDecimal = ['sleep_h', 'weight_kg'];
  const incoming = {};
  for (const k of allowed) {
    const v = Number(body[k]);
    if (body[k] !== undefined && body[k] !== null && body[k] !== '' && !Number.isNaN(v)) {
      incoming[k] = oneDecimal.includes(k) ? Math.round(v * 10) / 10 : Math.round(v);
    }
  }
  if (!Object.keys(incoming).length) return json({ error: 'Keine gültigen Messwerte übergeben.', erlaubt: allowed }, 400);

  const H = { apikey: supaKey, Authorization: 'Bearer ' + supaKey, 'Content-Type': 'application/json' };

  // Bestehende Werte des Tages laden und mergen (Teil-Updates möglich)
  const getRes = await fetch(`${supaUrl}/rest/v1/health_metrics?day=eq.${day}&select=metrics`, { headers: H });
  const rows = getRes.ok ? await getRes.json() : [];
  const merged = { ...(rows[0]?.metrics || {}), ...incoming };

  const upRes = await fetch(`${supaUrl}/rest/v1/health_metrics`, {
    method: 'POST',
    headers: { ...H, Prefer: 'resolution=merge-duplicates' },
    body: JSON.stringify({ day, metrics: merged, updated_at: new Date().toISOString() }),
  });
  if (!upRes.ok) return json({ error: 'Supabase-Fehler: HTTP ' + upRes.status }, 502);

  return json({ ok: true, day, gespeichert: merged });
};

const json = (obj, status = 200) =>
  new Response(JSON.stringify(obj), { status, headers: { 'content-type': 'application/json' } });
