# Home Rentals — Admin Dashboard

> Live Project: https://home-rentals.arayaroma.software

Minimal admin UI for managing rental properties. This repo contains a small React + Vite app (TypeScript) with an admin layout, property list, detail modal, and minimal Supabase auth wiring.

## Quick start

1. Install dependencies

```bash
npm install
```

1. Create a `.env` file with required environment variables (examples):

```env
VITE_SUPABASE_URL=
VITE_SUPABASE_PUBLISHABLE_OR_ANON_KEY=
VITE_API_BASE_URL= # e.g. https://api.openweathermap.org/data/2.5/weather
VITE_OPENWEATHER_API_KEY=
```

1. Run the dev server

```bash
npm run dev
```

## Notes / links

- Supabase + Prisma: https://supabase.com/docs/guides/database/prisma
- Supabase auth (password): https://supabase.com/docs/guides/auth
- Input validation with Zod: https://zod.dev/
- Using tailwindcss for styles: https://tailwindcss.com/docs/installation/using-vite
- React Router for protecting the page: https://reactrouter.com/start/declarative/installation
- lucide-react for icons: https://lucide.dev/icons/

## Development hints

- Mock data lives in `src/data/mockProperties.ts` — useful for local UI work.
- Weather is fetched via OpenWeather; set `VITE_OPENWEATHER_API_KEY` and `VITE_API_BASE_URL`.
- Admin layout and header are in `src/routes/admin`.
- To change import aliases, update `tsconfig.json` and `vite.config.ts` as needed.