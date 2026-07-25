# Handoff: geoff-ayap.site — continue in Claude Code

Paste this whole file as your first message to Claude Code in the `personal-site` repo.

---

## Context

This is a React Router v7 (framework mode) + Cloudflare Workers personal site, built on
Cloudflare's official `react-router-starter-template`. A prior Claude session designed and
built the first pass; this handoff continues that work locally.

**Repo**: https://github.com/gundam0910/personal-site
**Domain**: geoff-ayap.site (registered on Namecheap, not yet pointed at Cloudflare)
**Owner**: Geoffrey Ayap — Senior Software Engineer, 15+ yrs, 98Labs Inc., PH-based, open to
remote/international/freelance work.

## What's already built (in `personal-site-code.zip`, extract over the repo root)

- **Design system**: custom DaisyUI v5 theme in `app/app.css` — two themes, `ledger-dark`
  (default) and `ledger-light`, ink-navy/amber/teal palette. Fonts: Space Grotesk (display),
  IBM Plex Sans (body), IBM Plex Mono (data/labels) — loaded via Google Fonts in `app/root.tsx`,
  with a no-flash inline theme script.
- **Components** (`app/components/`): `Header.tsx`, `Footer.tsx`, `PageLayout.tsx`,
  `ThemeToggle.tsx` (persists to localStorage), and `SystemLedger.tsx` — the signature element:
  a dashboard-style "systems log" list with pulsing status dots, used on Home and Experience.
- **Content**: centralized in `app/lib/data.ts` (profile, stats, systems/experience, projects,
  skills, nav) — **placeholder copy pulled from Geoffrey's real background, needs a content
  pass** (see Next Steps).
- **Routes**: `/` (`home.tsx`), `/about`, `/experience`, `/projects`, `/contact`, all wired in
  `app/routes.ts`.
- **Contact form**: `app/routes/contact.tsx` (client form, Zod validation) posts to
  `app/routes/api.contact.ts` (Cloudflare Worker resource route, Zod validation server-side).
  Email sending is stubbed — commented-out Resend integration, not wired up yet.
- **Config**: `wrangler.json` has `routes` for `geoff-ayap.site` and `www.geoff-ayap.site`
  (`custom_domain: true`) — domain isn't attached in Cloudflare yet, so don't deploy expecting
  it to resolve until that's done. `public/robots.txt` and `public/sitemap.xml` added.
- **Dependencies added**: `daisyui`, `lucide-react`, `zod`, `@cloudflare/workers-types` (this
  last one was missing from the stock template and needed for `tsc -b` to pass).

**Verified working**: `npx tsc -b` (typecheck) and `npm run build` both pass clean. `npm run dev`
was NOT verified end-to-end in the sandbox this was built in (Miniflare couldn't resolve a
`Request.cf` object due to sandbox network restrictions unrelated to the code) — should just
work in a normal local environment, but confirm first thing.

## Known issue to be aware of

`lucide-react` (installed at v1.26) dropped brand/logo icons (`Github`, `Linkedin`, etc.) at
some point. `Footer.tsx` works around this with small inline SVG marks instead of lucide icons
for GitHub/LinkedIn — this is intentional, not a bug, don't "fix" it by re-importing those from
lucide-react.

## Next steps, roughly in order

1. **Extract `personal-site-code.zip` over the repo root**, `npm install`, run `npx tsc -b` and
   `npm run dev` to confirm everything still checks out locally.
2. **Content pass**: go through `app/lib/data.ts` and replace placeholders —
   - `profile.email`, `profile.linkedin` are placeholders, need real values
   - `systems[].period` — date ranges are unconfirmed/overlapping in the source CV, verify
     before publishing
   - `projects` array — confirm the Flutter super-app POC entry is something Geoffrey wants
     public, or drop it
3. **Contact form email**: decide on a provider (Resend is stubbed in
   `app/routes/api.contact.ts`), get an API key, wire it up, set it via
   `npx wrangler secret put RESEND_API_KEY` (don't hardcode it).
4. **Cloudflare domain setup**: add `geoff-ayap.site` as a custom domain in the Cloudflare
   dashboard (or via `wrangler`), then update Namecheap DNS to point at Cloudflare nameservers.
   `wrangler.json` routes are already configured for this.
5. **Deploy**: `npm run build && npm run deploy` (or `npx wrangler versions upload` /
   `versions deploy` for a staged rollout).
6. **Polish pass** (lower priority): OpenGraph image, favicon replacement (still using the
   template default), Lighthouse pass on mobile, add a `/projects/:slug` detail route if the
   card grid isn't enough.

## Design intent (for consistency if you extend it)

The design is deliberately grounded in Geoffrey's background — core banking, government
systems, uptime-critical infrastructure — via a "systems status dashboard" motif: monospace
labels, status dots, a ledger-style list. Keep new UI consistent with that rather than defaulting
to generic hero-with-gradient patterns. Full rationale was worked out using Anthropic's
frontend-design guidance if you want to see the reasoning — otherwise just match what's in
`app/app.css` and `SystemLedger.tsx`.
