import type * as React from "react";
import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { Trophy, Star } from "lucide-react";
import { leaderboardQuery } from "@/lib/cpl-queries";

export const Route = createFileRoute("/leaderboard")({ 
  head: () => ({
    meta: [
      { title: "Official Leaderboard — Craps Player League" },
      {
        name: "description",
        content:
          "The official Craps Player League leaderboard. See the current World Champion and full player rankings.",
      },
      { property: "og:title", content: "CPL Official Leaderboard" },
      {
        property: "og:description",
        content: "See the current World Champion and full CPL rankings.",
      },
    ],
  }),
  component: LeaderboardPage,
});

function RankBadge({ rank }: { rank: number }) {
  const base = "inline-grid h-10 w-10 shrink-0 place-items-center rounded-full font-display text-sm font-bold";
  if (rank === 2) return <span className={`${base} bg-gray-200 text-cpl-navy`}>{rank}</span>;
  if (rank === 3) return <span className={`${base} bg-amber-700/85 text-white`}>{rank}</span>;
  return <span className={`${base} bg-cpl-cream text-cpl-navy border border-border`}>{rank}</span>;
}

function LeaderboardPage() {
  const { data = [] } = useQuery(leaderboardQuery());
  const champion = data[0];
  const rest = data.slice(1);

  return (
    <div className="min-h-screen bg-white">

      {/* ── PRESENTING SPONSOR — reserved ───────────────────────────────── */}
      <div className="border-b border-border bg-cpl-cream">
        <div className="mx-auto max-w-6xl px-4 py-3 sm:px-6">
          <div className="flex h-16 items-center justify-center rounded-lg border-2 border-dashed border-border bg-white">
            <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
              Presenting Sponsor — Reserved
            </span>
          </div>
        </div>
      </div>

      {/* ── PAGE HEADER ─────────────────────────────────────────────────── */}
      <div className="cpl-gradient relative overflow-hidden pb-16 pt-12">
        {/* Dot grid */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "24px 24px",
          }}
        />
        <div className="relative mx-auto max-w-6xl px-4 text-center sm:px-6">
          <Trophy className="mx-auto h-12 w-12 text-cpl-gold drop-shadow-lg" strokeWidth={1.5} />
          <h1 className="mt-4 font-display text-5xl font-bold tracking-tight text-white sm:text-6xl">
            Official Standings
          </h1>
          <p className="mt-2 text-sm font-bold uppercase tracking-widest text-white/60">
            Craps Player League · Season 1
          </p>
        </div>

        {/* Diagonal cut into white */}
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 overflow-hidden leading-[0]">
          <svg
            viewBox="0 0 1440 56"
            preserveAspectRatio="none"
            className="h-14 w-full"
            aria-hidden
          >
            <path d="M0,56 L1440,0 L1440,56 Z" fill="white" />
          </svg>
        </div>
      </div>

      {/* ── CHAMPION CARD ─────────────────────────────────────────────────── */}
      {champion && (
        <section className="bg-white px-4 pb-0 pt-2 sm:px-6">
          <div className="mx-auto max-w-5xl">
            <div className="overflow-hidden rounded-2xl border-2 border-cpl-navy shadow-2xl">
              <div className="cpl-gradient p-8">
                <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                  {/* Left — name + scores */}
                  <div>
                    <div className="inline-flex items-center gap-2 rounded-full bg-cpl-gold/20 px-3 py-1 text-xs font-bold uppercase tracking-widest text-cpl-gold ring-1 ring-cpl-gold/40">
                      <Trophy className="h-3.5 w-3.5" />
                      Current World Champion
                    </div>
                    <h2 className="mt-4 font-display text-6xl font-bold tracking-tight text-white sm:text-7xl">
                      {champion.player_name}
                    </h2>
                    <div className="mt-4 flex flex-wrap gap-6 text-sm">
                      <div>
                        <span className="text-white/60">Dice Score: </span>
                        <span className="font-display text-xl font-bold text-white">
                          {champion.best_dice_score}
                        </span>
                      </div>
                      <div>
                        <span className="text-white/60">Bank Score: </span>
                        <span className="font-display text-xl font-bold text-white">
                          {champion.best_bank_score.toLocaleString()}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Right — big score */}
                  <div className="shrink-0 rounded-2xl bg-white/10 px-8 py-6 text-center ring-1 ring-white/20 backdrop-blur">
                    <div className="text-xs font-bold uppercase tracking-widest text-white/60">
                      Total Score
                    </div>
                    <div className="mt-1 font-display text-7xl font-bold leading-none text-cpl-gold sm:text-8xl">
                      {champion.total_score.toLocaleString()}
                    </div>
                    <div className="mt-3 inline-flex items-center gap-1 rounded-full bg-cpl-gold/15 px-3 py-1 text-xs font-bold uppercase tracking-widest text-cpl-gold ring-1 ring-cpl-gold/30">
                      <Star className="h-3 w-3" />
                      Rank #1
                    </div>
                  </div>
                </div>
              </div>
              {/* Sponsor zone inside champion card — reserved */}
              {/*
                CHAMPION SPONSOR AREA — reserved.
                Do not display until Brian activates.
              */}
            </div>
          </div>
        </section>
      )}

      {/* ── FULL STANDINGS TABLE ─────────────────────────────────────────────── */}
      <section className="bg-white py-10">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
            <h2 className="font-display text-2xl font-bold text-cpl-navy">
              Full Standings
            </h2>
            <span className="text-xs font-bold uppercase tracking-widest text-cpl-blue">
              1,500 pts = Level 5 · Championship Eligible
            </span>
          </div>

          <div className="mb-5 rounded-xl border border-border bg-cpl-cream px-5 py-4 text-sm text-cpl-navy">
            <span className="font-semibold">Total Score = Best Dice Score + Best Bank Score.</span>{" "}
            <span className="text-muted-foreground">
              Scores reflect personal bests across all sanctioned events.
            </span>
          </div>

          <div className="overflow-hidden rounded-2xl border-2 border-border shadow-lg">
            <table className="w-full text-left">
              <thead className="bg-cpl-navy text-white">
                <tr>
                  <th className="px-5 py-4 text-xs font-bold uppercase tracking-widest">
                    Rank
                  </th>
                  <th className="px-5 py-4 text-xs font-bold uppercase tracking-widest">
                    Player
                  </th>
                  <th className="px-5 py-4 text-right text-xs font-bold uppercase tracking-widest">
                    Total
                  </th>
                  <th className="hidden px-5 py-4 text-right text-xs font-bold uppercase tracking-widest md:table-cell">
                    Dice
                  </th>
                  <th className="hidden px-5 py-4 text-right text-xs font-bold uppercase tracking-widest md:table-cell">
                    Bank
                  </th>
                  {/* Badge column — reserved for future player badge display */}
                  <th className="hidden px-5 py-4 text-center text-xs font-bold uppercase tracking-widest lg:table-cell">
                    <span className="text-white/40">Badge</span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {(() => {
                  const lastLevel5Rank = rest.reduce<number | null>(
                    (acc, p) => (p.total_score >= 1500 ? p.rank : acc),
                    null,
                  );
                  const rows: React.ReactNode[] = [];

                  rest.forEach((p) => {
                    rows.push(
                      <tr
                        key={p.rank}
                        className={`hover:bg-cpl-cream transition-colors ${
                          p.total_score >= 1500 ? "bg-cpl-gold/5" : "bg-white"
                        }`}
                      >
                        <td className="px-5 py-4">
                          <RankBadge rank={p.rank} />
                        </td>
                        <td className="px-5 py-4 font-display text-lg font-bold text-cpl-navy">
                          {p.player_name}
                        </td>
                        <td className="px-5 py-4 text-right">
                          <span className="font-display text-xl font-bold text-cpl-red">
                            {p.total_score.toLocaleString()}
                          </span>
                        </td>
                        <td className="hidden px-5 py-4 text-right text-sm text-muted-foreground md:table-cell">
                          {p.best_dice_score}
                        </td>
                        <td className="hidden px-5 py-4 text-right text-sm text-muted-foreground md:table-cell">
                          {p.best_bank_score.toLocaleString()}
                        </td>
                        {/* Badge column — reserved, empty until player badges are implemented */}
                        <td className="hidden px-5 py-4 text-center lg:table-cell">
                          <span className="text-xs text-border">—</span>
                        </td>
                      </tr>,
                    );

                    if (lastLevel5Rank !== null && p.rank === lastLevel5Rank) {
                      rows.push(
                        <tr key="level5-divider">
                          <td
                            colSpan={6}
                            className="border-y-2 border-cpl-gold/40 bg-cpl-gold/10 px-5 py-2.5 text-center text-xs font-bold uppercase tracking-widest text-cpl-navy"
                          >
                            <Star className="mr-1 inline h-3 w-3 text-cpl-gold" />
                            Level 5 Threshold · 1,500 pts · Championship Eligible
                            <Star className="ml-1 inline h-3 w-3 text-cpl-gold" />
                          </td>
                        </tr>,
                      );
                    }
                  });

                  return rows;
                })()}
              </tbody>
            </table>
          </div>

          {/* Bottom sponsor zone — reserved */}
          <div className="mt-8 flex h-16 items-center justify-center rounded-xl border-2 border-dashed border-border bg-cpl-cream">
            <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
              Event Sponsor — Reserved
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
