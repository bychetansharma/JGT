/*
# Create enquiries table for contact form submissions

1. Purpose
   Stores enquiries submitted by procurement/project managers through the
   website's contact form. This is a no-auth public website, so submissions
   are written by the anon-key client. The data is intentionally public-write
   (any site visitor can submit an enquiry) but NOT public-read — only
   server-side / service-role access should read the records.

2. New Tables
   - `enquiries`
     - `id` (uuid, primary key)
     - `name` (text, not null) — submitter's full name
     - `company` (text, nullable) — organisation name
     - `email` (text, not null) — contact email
     - `phone` (text, nullable) — contact phone
     - `service` (text, nullable) — service category of interest
     - `message` (text, not null) — enquiry details
     - `created_at` (timestamptz, default now())

3. Security — RLS
   - Enable RLS on `enquiries`.
   - INSERT policy for `anon, authenticated` so the public contact form can
     submit enquiries without signing in. WITH CHECK (true) is acceptable
     here because anyone may submit — the form is intentionally open.
   - SELECT / UPDATE / DELETE are intentionally NOT granted to anon or
     authenticated. Only the service-role key (server-side, bypasses RLS)
     can read or manage submitted enquiries. This protects submitters' data.

4. Notes
   - No `user_id` column — this is a single-tenant, no-auth site.
   - No auth.uid() usage anywhere in these policies.
*/

CREATE TABLE IF NOT EXISTS enquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  company text,
  email text NOT NULL,
  phone text,
  service text,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE enquiries ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_enquiries" ON enquiries;
CREATE POLICY "anon_insert_enquiries"
ON enquiries FOR INSERT
TO anon, authenticated
WITH CHECK (true);
