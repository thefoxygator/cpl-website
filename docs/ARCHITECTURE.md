# CPL Website Architecture

## Dual-App Architecture

```
┌─────────────────────────────┐     ┌─────────────────────────────┐
│      CPL Officials App      │     │        CPL Website          │
│     (cplledger)             │     │       (cpl-website)         │
│                             │     │                             │
│  • Event management         │     │  • Public leaderboard       │
│  • Score entry              │     │  • Upcoming events          │
│  • Approval workflow        │     │  • Founders Club            │
│  • 5-state lifecycle        │     │  • League news              │
│    draft→open→closed→       │     │  • About / Contact          │
│    pending→approved         │     │                             │
└──────────────┬──────────────┘     └──────────────┬──────────────┘
               │                                   │
               └──────────┬────────────────────────┘
                          │
               ┌──────────▼──────────┐
               │   Shared Supabase   │
               │  lhojsatlmjyfgrzanmbd│
               │                     │
               │  cpl_leaderboard ←──┼── n8n pipeline
               │  cpl_events         │   (post-approval)
               │  cpl_players        │
               │  cpl_scores         │
               └─────────────────────┘
```

## n8n Automation Pipeline

Triggered by: Supabase Database Webhook on `cpl_events.status = 'approved'`

```
Event Approved
     │
     ▼
n8n Webhook Receiver
     │
     ▼
Fetch All Scores for Event
     │
     ▼
Calculate Personal Bests (per player, per category)
     │
     ▼
Update cpl_leaderboard (best_dice, best_bank, total_score)
     │
     ▼
Recalculate Rankings (ORDER BY total_score DESC)
     │
     ▼
CPL Website reflects instantly ✅
```

## RLS Security Model

| Table | anon | authenticated (member) | authenticated (official) | service_role (n8n) |
|-------|------|----------------------|--------------------------|--------------------|
| `cpl_leaderboard` | SELECT | SELECT | SELECT | ALL |
| `cpl_events` | SELECT (public fields) | SELECT | ALL | ALL |
| `cpl_players` | SELECT | SELECT | ALL | ALL |
| `cpl_scores` | — | — | ALL | ALL |

## Key Business Rules

- Total Score = Best Dice Score + Best Bank Score (personal bests tracked independently)
- Level 5 threshold = 1,500 total score
- Rankings recalculated after every approved event
- Leaderboard write access: service_role only (n8n pipeline)
- Public event ID format: `CPL-XXXXXX-XXX` (generated at approval time)
