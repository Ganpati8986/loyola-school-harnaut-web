-- ============================================================
-- School website admin: run this ONCE in Supabase -> SQL Editor
-- BEFORE running: change CLIENT_EMAIL_HERE (and add your own email if you want access too)
-- ============================================================

-- 1) Who is allowed to edit the website
create table if not exists public.admins (email text primary key);
insert into public.admins (email) values
  ('CLIENT_EMAIL_HERE')
on conflict do nothing;
alter table public.admins enable row level security;   -- no policies = not readable via API

create or replace function public.is_admin()
returns boolean language sql stable security definer set search_path = public as $$
  select exists (
    select 1 from public.admins
    where lower(email) = lower(coalesce(auth.jwt() ->> 'email', ''))
  );
$$;
revoke all on function public.is_admin() from public, anon;
grant execute on function public.is_admin() to authenticated;

-- 2) Tables
create table if not exists public.notices (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  description text,
  notice_type text not null default 'NORMAL' check (notice_type in ('NORMAL','IMPORTANT','REMINDER')),
  file_url text, file_path text, file_mime text,
  is_active boolean not null default true,
  created_at timestamptz not null default now()
);

create table if not exists public.gallery_items (
  id uuid primary key default gen_random_uuid(),
  type text not null check (type in ('image','video')),
  category text not null,
  title text,
  image_url text, image_path text,
  video_url text,
  created_at timestamptz not null default now()
);

create table if not exists public.banners (
  id uuid primary key default gen_random_uuid(),
  image_url text not null, image_path text,
  title text, subtitle text, motto text,
  sort_order int not null default 1,
  is_active boolean not null default true,
  created_at timestamptz not null default now()
);

-- 3) Row Level Security: everyone reads (active only), only admins write
do $$
declare t text;
begin
  foreach t in array array['notices','gallery_items','banners'] loop
    execute format('alter table public.%I enable row level security', t);
    execute format('drop policy if exists "public read" on public.%I', t);
    execute format('drop policy if exists "admin all" on public.%I', t);
    execute format('grant select on public.%I to anon, authenticated', t);
    execute format('grant insert, update, delete on public.%I to authenticated', t);
    execute format('create policy "admin all" on public.%I for all to authenticated using (public.is_admin()) with check (public.is_admin())', t);
  end loop;
end $$;

create policy "public read" on public.notices       for select to anon, authenticated using (is_active);
create policy "public read" on public.banners       for select to anon, authenticated using (is_active);
create policy "public read" on public.gallery_items for select to anon, authenticated using (true);

-- 4) Storage bucket (public URLs, 5 MB per file, only images + PDF)
insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values ('site-media', 'site-media', true, 5242880,
        array['image/webp','image/jpeg','image/png','image/gif','application/pdf'])
on conflict (id) do update
  set public = true, file_size_limit = 5242880,
      allowed_mime_types = array['image/webp','image/jpeg','image/png','image/gif','application/pdf'];

drop policy if exists "site-media admin select" on storage.objects;
drop policy if exists "site-media admin insert" on storage.objects;
drop policy if exists "site-media admin update" on storage.objects;
drop policy if exists "site-media admin delete" on storage.objects;
create policy "site-media admin select" on storage.objects for select to authenticated using (bucket_id = 'site-media' and public.is_admin());
create policy "site-media admin insert" on storage.objects for insert to authenticated with check (bucket_id = 'site-media' and public.is_admin());
create policy "site-media admin update" on storage.objects for update to authenticated using (bucket_id = 'site-media' and public.is_admin());
create policy "site-media admin delete" on storage.objects for delete to authenticated using (bucket_id = 'site-media' and public.is_admin());

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
