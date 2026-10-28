-- Run this ONLY if you already ran setup.sql earlier (adds the Principal name/message table).
-- ---- Principal / Vice Principal name + message text ----
create table if not exists public.site_text (
  key text primary key check (key in ('principal','vice_principal')),
  data jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);
alter table public.site_text enable row level security;
grant select on public.site_text to anon, authenticated;
grant insert, update, delete on public.site_text to authenticated;
drop policy if exists "public read" on public.site_text;
drop policy if exists "admin all" on public.site_text;
create policy "public read" on public.site_text for select to anon, authenticated using (true);
create policy "admin all" on public.site_text for all to authenticated using (public.is_admin()) with check (public.is_admin());
