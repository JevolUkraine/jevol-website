create table if not exists public.contact_submissions (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null,
  email text not null,
  phone text,
  message text not null
);

alter table public.contact_submissions enable row level security;

create policy "Allow public insert"
  on public.contact_submissions
  for insert
  to anon
  with check (true);

grant insert on public.contact_submissions to anon;
grant select, update, delete on public.contact_submissions to service_role;
