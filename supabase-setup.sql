-- Im Supabase SQL-Editor ausführen (einmalig)
create table if not exists dashboard_state (
  id text primary key,
  data jsonb not null,
  updated_at timestamptz default now()
);
alter table dashboard_state enable row level security;
-- Einfache Policy für Single-User-Nutzung (Zugriff via anon key):
create policy "dashboard_rw" on dashboard_state
  for all using (true) with check (true);
