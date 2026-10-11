<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## UI Design Guidelines (Anti-AI Slop)
All front-end UI and component development MUST strictly follow [DESIGN_SYSTEM.md](DESIGN_SYSTEM.md). The site uses the **SEVA Clean Light System** (section 1 of that file) — do not switch pages or sections to a dark theme.
- Canvas: white `#FFFFFF` with `#F8FAFC` for alternating sections. Brand accent SEVA Royal Blue `#225FD2`; green `#10B981` only for live/active status.
- Surface cards: white with 1px `#E2E8F0` borders, radius `rounded-xl`–`rounded-2xl`; subtle shadows only (see section 1.3).
- Keep color restrained: neutral cards and text, color reserved for the primary CTA, status, and data (e.g. map regions).
- Icons: Never wrap icons in generic colored circles on every card.
- Typography & Copy: Utilitarian, high contrast, tabular numbers for stats, zero AI buzzwords ("Revolutionize", "Seamless", "Empower", "Next-Gen").
