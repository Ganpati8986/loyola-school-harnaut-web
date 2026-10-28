-- Run this ONLY if you already ran setup.sql earlier (adds the Principal/Faculty photos table).

-- ---- Principal / Vice Principal / Faculty slider photos ----
create table if not exists public.site_images (
  id uuid primary key default gen_random_uuid(),
  slot text not null check (slot in ('principal','vice_principal','faculty')),
  image_url text not null, image_path text,
  sort_order int not null default 1,
  created_at timestamptz not null default now()
);
alter table public.site_images enable row level security;
grant select on public.site_images to anon, authenticated;
grant insert, update, delete on public.site_images to authenticated;
drop policy if exists "public read" on public.site_images;
drop policy if exists "admin all" on public.site_images;
create policy "public read" on public.site_images for select to anon, authenticated using (true);
create policy "admin all" on public.site_images for all to authenticated using (public.is_admin()) with check (public.is_admin());
