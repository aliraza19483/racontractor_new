# RA Contractor website (racontractor.in)

Next.js 16 + React 19 + Tailwind 4. Content lives in `src/lib/*.ts` (services, areas, projects, blog, FAQs).

## Run
```bash
cp .env.example .env.local   # fill in your own keys, never share this file
npm install
npm run dev                  # http://localhost:3000
npm run build && npm start
```

## Where to edit SEO content
| What | File |
|---|---|
| Area pages (`/areas/<area>-hyderabad`) | `src/lib/areas.ts` (add an object to `seeds`; page, sitemap, footer, schema update automatically) |
| Services | `src/lib/services.ts`, `src/lib/serviceContent.ts` |
| Projects | `src/lib/projects.ts` |
| Blog / guides | `src/lib/blog.ts` (use `metaTitle` to keep the <title> short) |
| Sitemap dates | `UPDATED` constant in `src/app/sitemap.ts` |
