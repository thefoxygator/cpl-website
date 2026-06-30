# Phase 3 Verification Checklist

**Status:** In Progress  
**Do NOT publish until all items are verified and Brian approves.**

## Repository & Infrastructure

- [ ] GitHub repo `thefoxygator/cpl-website` created
- [ ] Lovable project created
- [ ] Lovable connected to Supabase project `lhojsatlmjyfgrzanmbd`
- [ ] n8n workflow JSON committed to `n8n/` directory

## Database

- [ ] `cpl_leaderboard` table created with correct schema
- [ ] RLS: anon read allowed, service_role write only
- [ ] `is_cpl_member()` helper function created
- [ ] `member_id` nullable FK on `cpl_players`
- [ ] `handle_new_user` trigger updated for dual routing
- [ ] `cpl_leaderboard` seeded with current 15 players

## CPL Website Pages

- [ ] Homepage — all 10 sections in correct order
  - [ ] 1. Hero
  - [ ] 2. What is the Craps Player League?
  - [ ] 3. How the League Works
  - [ ] 4. Current World Champion
  - [ ] 5. Top 3 Official Leaderboard Preview (links to full leaderboard)
  - [ ] 6. Upcoming Events
  - [ ] 7. Latest League News
  - [ ] 8. Founders Club
  - [ ] 9. Partners & Sponsors
  - [ ] 10. Footer
- [ ] Navigation — all pages linked
- [ ] About page
- [ ] Leaderboard page (`/leaderboard`) — full table, mobile-first
- [ ] Founders Club page — Brian's tiers, payment links NOT active
- [ ] Contact page

## Automation

- [ ] n8n workflow designed and exported as JSON
- [ ] Supabase Database Webhook configuration documented
- [ ] Manual test: approve a test event → leaderboard updates
- [ ] CPL Website reflects changes without manual intervention

## Quality & Security

- [ ] Responsive design — mobile and desktop
- [ ] RLS: no data leakage (anon cannot write)
- [ ] No placeholder advertisements visible
- [ ] Sponsorship expansion areas reserved (clean, hidden until used)
- [ ] Champion Sponsor area hidden until used
- [ ] Brand: Red/White/Blue, professional sports aesthetic
- [ ] CPL logo displayed correctly
- [ ] Mobile usability verified

## Final Gate

- [ ] All above items verified ✅
- [ ] **STOP — await Phase 3 approval from Brian before publishing**
