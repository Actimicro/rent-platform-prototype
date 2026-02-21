# RENT OS UI Shell Prototype

Next.js App Router + Tailwind prototype with a premium SaaS-style landing and role-based internal dashboard shell.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## What is implemented

- Landing page (`/`) with:
  - hero section,
  - hot offers ticker (marquee),
  - academy teasers with circular video placeholders,
  - community cards (forum / roadmap / changelog).
- Internal shell (`/(app)` group) with:
  - sidebar,
  - topbar,
  - demo role switcher.
- Role dashboard (`/dashboard`) with role-adapted widgets.
- Mock data source: `src/shared/mock/demoData.ts`.

## Demo roles

Role switcher supports:

- `guest`
- `tenant`
- `owner`
- `realtor`
- `manager`
- `admin`

You can switch role from the topbar selector or by URL query:

- `http://localhost:3000/dashboard?role=tenant`
- `http://localhost:3000/dashboard?role=admin`

Sidebar items and dashboard widgets update according to role.

## Production check

```bash
npm run build
```

Build must complete successfully.

## Vercel

Deployment URL (placeholder): `https://your-vercel-project-url.vercel.app`
