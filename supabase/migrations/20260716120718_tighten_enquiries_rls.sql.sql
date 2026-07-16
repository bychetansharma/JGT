/*
# Tighten enquiries INSERT RLS policy

1. Problem
   The previous INSERT policy used `WITH CHECK (true)`, which allowed any
   row to be inserted with no validation — effectively bypassing RLS.
   This is flagged as a security risk because it places no restriction on
   the content of inserted rows.

2. Fix
   Drop the permissive policy and replace it with one whose WITH CHECK
   clause enforces meaningful constraints on the submitted enquiry:
   - `name` is required and non-empty (length 2–200)
   - `email` is required and looks like an email (contains "@")
   - `message` is required and non-empty (length 10–5000)
   - `company`, `phone`, `service` are optional but bounded in length
     when provided, preventing unbounded payload writes.

   These constraints do not authenticate the submitter (the contact form
   is intentionally public), but they ensure only well-formed enquiry
   rows can be written — closing the unrestricted-access gap while
   keeping the public form functional.

3. Security
   - INSERT remains the only policy granted to anon/authenticated.
   - SELECT/UPDATE/DELETE are still NOT granted to anon/authenticated;
     only the service-role key can read or manage enquiries.
   - No user_id / auth.uid() usage (single-tenant, no-auth site).
*/

DROP POLICY IF EXISTS "anon_insert_enquiries" ON enquiries;

CREATE POLICY "anon_insert_enquiries"
ON enquiries FOR INSERT
TO anon, authenticated
WITH CHECK (
  name IS NOT NULL
  AND char_length(name) BETWEEN 2 AND 200
  AND email IS NOT NULL
  AND char_length(email) BETWEEN 5 AND 254
  AND email LIKE '%@%'
  AND message IS NOT NULL
  AND char_length(message) BETWEEN 10 AND 5000
  AND (company IS NULL OR char_length(company) <= 200)
  AND (phone IS NULL OR char_length(phone) <= 30)
  AND (service IS NULL OR char_length(service) <= 100)
);
