# CPL Website

Public-facing website for the **Craps Player League (CPL)**.

## Architecture

- **Frontend:** Lovable (React + TypeScript + Tailwind CSS + shadcn/ui)
- **Database:** Supabase (shared with `cplledger` — project `lhojsatlmjyfgrzanmbd`)
- **Automation:** n8n (post-approval leaderboard pipeline)
- **Hosting:** Lovable (preview) → TBD production domain

## Related Repositories

| Repo | Purpose |
|------|--------|
| [`thefoxygator/cplledger`](https://github.com/thefoxygator/cplledger) | CPL Officials internal app — event management, scoring, approvals |
| [`thefoxygator/cpl-website`](https://github.com/thefoxygator/cpl-website) | This repo — CPL public website |
| [`thefoxygator/minimalist-crappy-app`](https://github.com/thefoxygator/minimalist-crappy-app) | CrappinAintEasy — layout reference only |

## Database (Shared Supabase)

Both `cplledger` and `cpl-website` share a single Supabase project.
Database migrations and schema are maintained in `cplledger/supabase/migrations/`.

**Key tables used by this site:**
- `cpl_leaderboard` — public read, populated by n8n automation
- `cpl_events` — public read for upcoming events
- `cpl_players` — player roster (read-only from website)

## n8n Automation

See `n8n/` directory for workflow JSON files.

The post-approval leaderboard pipeline:
1. Supabase Database Webhook fires when `cpl_events.status` → `'approved'`
2. n8n processes personal bests for all players in that event
3. Recalculates total scores (best_dice + best_bank)
4. Updates rankings in `cpl_leaderboard`
5. CPL Website reflects changes instantly — no manual steps

## Development

Frontend is managed in Lovable. Code is synced to this repo via Lovable's GitHub integration.

For database changes, open a PR against `thefoxygator/cplledger`.

## Brand

- Colors: Red, White, Blue — professional sports league
- Logo: CPL official logo
- Reference: CrappinAintEasy (`minimalist-crappy-app`) for layout patterns ONLY — not colors or theme

## Deployment

**STOP — Do not publish until Phase 3 approval from Brian.**

See `docs/PHASE3_CHECKLIST.md` for the verification checklist.
