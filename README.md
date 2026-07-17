# Jhojhu Golden Transport

Project transportation specialists supporting infrastructure and industrial projects across India, Nepal, and Bhutan.

[![Open in Bolt](https://bolt.new/static/open-in-bolt.svg)](https://bolt.new/~/sb1-k4a7qdhf)

## Tech Stack

- Vite + React 18 + TypeScript
- Tailwind CSS
- Supabase (enquiries / contact form storage)
- lucide-react icons

## Local Development

```bash
npm install
cp .env.example .env   # then fill in your Supabase keys
npm run dev
```

## Deploy to Vercel

This project is a standard Vite SPA — Vercel auto-detects the framework. A `vercel.json` is included for explicit configuration.

### Option A — Vercel Dashboard (import from GitHub)

1. Push this repository to GitHub.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repository.
3. Vercel auto-detects Vite. The build command (`npm run build`) and output directory (`dist`) are pre-configured in `vercel.json`.
4. Under **Environment Variables**, add:
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`
5. Click **Deploy**.

### Option B — Vercel CLI

```bash
npm i -g vercel
vercel              # preview deploy
vercel --prod       # production deploy
```

Set the environment variables in the Vercel dashboard or via:

```bash
vercel env add VITE_SUPABASE_URL
vercel env add VITE_SUPABASE_ANON_KEY
```

## Deploy to Netlify

A `netlify.toml` is included with the build command, publish directory, and SPA redirect pre-configured.

### Option A — Netlify Dashboard (import from GitHub)

1. Push this repository to GitHub.
2. Go to [app.netlify.com/start](https://app.netlify.com/start) and import the repository.
3. Netlify auto-detects the build settings from `netlify.toml`:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
4. Under **Site settings → Environment variables**, add:
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`
5. Click **Deploy site**.

### Option B — Netlify CLI

```bash
npm i -g netlify-cli
netlify deploy              # preview deploy
netlify deploy --prod       # production deploy
```

Set the environment variables in the Netlify dashboard or via:

```bash
netlify env:set VITE_SUPABASE_URL your-supabase-url
netlify env:set VITE_SUPABASE_ANON_KEY your-supabase-anon-key
```

## Environment Variables

| Variable | Description | Required |
|---|---|---|
| `VITE_SUPABASE_URL` | Supabase project URL | Yes |
| `VITE_SUPABASE_ANON_KEY` | Supabase anon (public) key | Yes |

> `.env` is gitignored. Never commit real keys. Use `.env.example` as a template and set production values in Vercel Project Settings.

## Build

```bash
npm run build      # outputs to dist/
npm run typecheck  # TypeScript check
npm run lint       # ESLint
```
