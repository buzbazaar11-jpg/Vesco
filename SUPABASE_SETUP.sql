-- ============================================================
-- VESCO VISION — Supabase Setup for: iqpiludkvfprmamfottz
-- Run this entire file in your Supabase SQL Editor
-- ============================================================

-- 1. ENABLE UUID extension
create extension if not exists "uuid-ossp";

-- ============================================================
-- 2. TABLES
-- ============================================================

-- Pages table (for Visual Page Builder at /p/:slug)
create table if not exists public.pages (
  id            uuid primary key default uuid_generate_v4(),
  slug          text not null unique,
  title_en      text not null default '',
  title_ko      text not null default '',
  description_en text not null default '',
  description_ko text not null default '',
  blocks        jsonb not null default '[]'::jsonb,
  published     boolean not null default false,
  created_at    timestamptz not null default now(),
  updated_at    timestamptz not null default now()
);

-- Resources / Downloads table
create table if not exists public.resources (
  id          uuid primary key default uuid_generate_v4(),
  title       text not null,
  category    text not null default 'Other',
  file_url    text not null default '',
  file_path   text not null default '',
  restricted  boolean not null default false,
  sort_order  integer not null default 0,
  created_at  timestamptz not null default now(),
  updated_at  timestamptz not null default now()
);

-- Site settings (key-value store for logo, contact info, page overrides)
create table if not exists public.site_settings (
  key        text primary key,
  value      jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);

-- User roles (admin / editor)
create type if not exists public.app_role as enum ('admin', 'editor');

create table if not exists public.user_roles (
  id         uuid primary key default uuid_generate_v4(),
  user_id    uuid not null references auth.users(id) on delete cascade,
  role       public.app_role not null default 'admin',
  created_at timestamptz not null default now(),
  unique (user_id, role)
);

-- ============================================================
-- 3. ROW LEVEL SECURITY
-- ============================================================

alter table public.pages         enable row level security;
alter table public.resources     enable row level security;
alter table public.site_settings enable row level security;
alter table public.user_roles    enable row level security;

-- Helper: check if current user is admin
create or replace function public.is_admin()
returns boolean
language sql stable security definer
as $$
  select exists (
    select 1 from public.user_roles
    where user_id = auth.uid() and role = 'admin'
  );
$$;

-- PAGES: anyone can read published pages, only admins can write
create policy "Public can read published pages"
  on public.pages for select
  using (published = true);

create policy "Admins can do everything on pages"
  on public.pages for all
  using (public.is_admin())
  with check (public.is_admin());

-- RESOURCES: public can read unrestricted ones, admins can write
create policy "Public can read unrestricted resources"
  on public.resources for select
  using (restricted = false);

create policy "Admins can do everything on resources"
  on public.resources for all
  using (public.is_admin())
  with check (public.is_admin());

-- SITE SETTINGS: admins only
create policy "Admins can read site_settings"
  on public.site_settings for select
  using (public.is_admin());

create policy "Admins can write site_settings"
  on public.site_settings for all
  using (public.is_admin())
  with check (public.is_admin());

-- USER ROLES: users can read their own role, admins can manage
create policy "Users can read own role"
  on public.user_roles for select
  using (user_id = auth.uid());

create policy "Admins can manage user_roles"
  on public.user_roles for all
  using (public.is_admin())
  with check (public.is_admin());

-- ============================================================
-- 4. STORAGE BUCKET — "images" (PUBLIC)
-- ============================================================
-- Run this in Supabase Dashboard → Storage → New bucket:
--   Name: images
--   Public: YES (toggle ON)
--
-- Or via SQL:
insert into storage.buckets (id, name, public)
values ('images', 'images', true)
on conflict (id) do update set public = true;

-- Allow anyone to read from the images bucket
create policy "Public read images"
  on storage.objects for select
  using (bucket_id = 'images');

-- Allow authenticated users (admins) to upload
create policy "Authenticated users can upload images"
  on storage.objects for insert
  with check (bucket_id = 'images' and auth.role() = 'authenticated');

-- Allow authenticated users to update/replace
create policy "Authenticated users can update images"
  on storage.objects for update
  using (bucket_id = 'images' and auth.role() = 'authenticated');

-- Allow authenticated users to delete
create policy "Authenticated users can delete images"
  on storage.objects for delete
  using (bucket_id = 'images' and auth.role() = 'authenticated');

-- ============================================================
-- 5. MAKE YOURSELF AN ADMIN
-- ============================================================
-- After signing up at /admin, run this with YOUR user ID:
-- (Find your user ID in Supabase Dashboard → Authentication → Users)
--
-- insert into public.user_roles (user_id, role)
-- values ('<YOUR-USER-UUID-HERE>', 'admin');

-- ============================================================
-- DONE! Your Supabase is fully configured.
-- Next steps:
-- 1. Go to Supabase → Storage → Create bucket named "images" → set PUBLIC = ON
-- 2. Sign up at yoursite.com/admin
-- 3. Get your user UUID from Authentication → Users
-- 4. Run the insert above to make yourself admin
-- ============================================================
