<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## UI Design Guidelines (Anti-AI Slop)
All front-end UI and component development MUST strictly follow [DESIGN_SYSTEM.md](file:///Users/pranamahendra/Github/SEVA/seva-taxi/DESIGN_SYSTEM.md).
- Background: `#0A0A0A` (Deep Black), zero ambient color gradients or glowing mesh blobs.
- Surface Cards: `#141414` with solid 1px `#262626` borders. Maximum border-radius 8px (no giant pill shapes).
- Shadows: Flat UI (`box-shadow: none`). Zero fuzzy blurs.
- Icons: Never wrap icons in generic colored circles on every card.
- Typography & Copy: Utilitarian, high contrast, tabular numbers for stats, zero AI buzzwords ("Revolutionize", "Seamless", "Empower", "Next-Gen").
