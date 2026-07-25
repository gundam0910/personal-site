# Personal Site — Build Prompt

Use this as the system/kickoff prompt for Claude Code (or paste into a fresh chat) to scaffold the site in one pass.

---

## Prompt

Build a professional personal portfolio site with the following spec.

### Stack
- **Framework**: React Router v7 (framework mode, not library mode) — file-based routing under `app/routes/`
- **Deployment**: Cloudflare Workers (via `@cloudflare/vite-plugin` + `wrangler`), not Pages — use the official RR7 + Cloudflare template as the base (`npx create-cloudflare@latest --framework=react-router` or `npx create-react-router@latest --template cloudflare`)
- **Language**: TypeScript, strict mode
- **Styling**: Tailwind CSS v4 + DaisyUI (use the `corporate`/`business` DaisyUI theme as base, then customize the palette to a distinct primary/accent — avoid default DaisyUI blue). Support light/dark via DaisyUI's `data-theme` + a toggle in the header.
- **Forms/Validation**: Zod for the contact form schema
- **Icons**: lucide-react
- **Fonts**: pick one modern sans (e.g. Inter or Geist) via `next/font`-equivalent self-hosted approach — no runtime Google Fonts fetch (perf)
- **Package manager**: npm

### Site structure
- `/` — Hero + condensed About + featured Projects (2-3) + CTA to Contact
- `/about` — Full bio, career narrative, tech philosophy
- `/experience` — Timeline: 98Labs Inc. (Senior Software Engineer, 15+ yrs total experience), with case-study callouts for:
  - Metrobank Core Banking & Tellering System
  - National government health digitalization initiative
  - PICK.A.ROO Merchant Portal (frontend docs, KT, technical handover)
- `/projects` — Card grid, filterable by tag (React/Next.js/Angular/Laravel/etc.), each links to a detail route `/projects/:slug`
- `/contact` — Form (name, email, message) validated with Zod, submits to a Cloudflare Worker route (`app/routes/api.contact.ts`) that sends via an email API (Resend or similar) — **stub the API key as an env var, don't hardcode, prompt me for it separately**
- Global: sticky header w/ nav + theme toggle, footer w/ social links (GitHub, LinkedIn placeholders)

### Content seed (placeholder copy — I'll refine)
- **Positioning**: Senior Software Engineer, 15+ years, full-stack (JS/TS + PHP), based in the Philippines, open to remote/international roles, local PH roles, and freelance/consulting
- **Core stack tags**: React, Next.js, Angular, Node.js, TypeScript, PHP (Laravel/Lumen), PostgreSQL, MongoDB, GCP/AWS, Docker/K8s
- **Tone**: direct, technical, no-fluff — mirror how a senior engineer writes a LinkedIn "About," not marketing copy

### Non-functional requirements
- Lighthouse 90+ on Performance/SEO/Accessibility (lazy-load images, `<img loading="lazy">`, preconnect for fonts, semantic HTML, meta tags + OpenGraph per route via RR7's `meta` export)
- Responsive: mobile-first, test at 375px / 768px / 1280px
- `wrangler.jsonc` configured for a custom domain binding (I'll supply the domain)
- Basic `robots.txt` + `sitemap.xml` generation
- ESLint + Prettier configured
- `.env.example` for any secrets (contact form email API key)
- README with local dev (`npm run dev`), build, and `wrangler deploy` instructions

### Explicitly out of scope for this pass
- CMS/blog — flag as a possible phase 2, don't build it now
- Auth — this is a public static/SSR site, no login
- Analytics — leave a commented-out slot for GA4/Plausible, don't wire it up yet

### Deliverable order (easiest first)
1. Scaffold + Tailwind/DaisyUI theme + layout shell (header/footer/nav)
2. Home + About (static content, no forms)
3. Experience timeline
4. Projects grid + detail route
5. Contact form + Worker API route + Zod validation
6. SEO/meta pass + Lighthouse tuning
7. Deployment config + README

---

## Notes for you (Geoffrey)
- If you want, I can also generate the actual scaffold code here in chat instead of just the prompt — say the word and I'll start on step 1.
- You'll need to supply: domain name, email API key (Resend/etc.), and real GitHub/LinkedIn URLs before the contact form and footer are fully wired.
