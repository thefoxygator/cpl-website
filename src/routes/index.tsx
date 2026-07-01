import { createFileRoute, Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import {
  Trophy,
  Dice5,
  TrendingUp,
  Calendar,
  ArrowRight,
  MapPin,
  Wallet,
  ShieldCheck,
  Star,
  Medal,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CPL_LOGO_URL, AWARD_BADGES } from "@/lib/cpl-data";
import { leaderboardQuery, upcomingEventsQuery } from "@/lib/cpl-queries";

export const Route = createFileRoute("/")({ 
  head: () => ({
    meta: [
      { title: "Craps Player League — The Official Craps Player League" },
      {
        name: "description",
        content:
          "The world's first organized competitive craps league. Compete in sanctioned events, earn rankings, and vie for the title of World Champion.",
      },
      { property: "og:title", content: "Craps Player League" },
      {
        property: "og:description",
        content: "Compete. Rank. Rise. The official Craps Player League.",
      },
    ],
  }),
  component: HomePage,
});

const NEWS = [
  {
    title: "2025 Season Underway",
    date: "Jan 2025",
    excerpt:
      "The inaugural CPL season kicks off with sanctioned events across the country.",
  },
  {
    title: "Ranking System Announced",
    date: "Dec 2024",
    excerpt:
      "Learn how dice scores and bank scores combine into your official CPL ranking.",
  },
  {
    title: "World Championship on the Horizon",
    date: "Feb 2025",
    excerpt:
      "The road to the CPL World Championship begins now. Are you on the leaderboard?",
  },
];

/** Diagonal SVG divider — white point cutting into a dark section above */
function DiagonalDividerDown({ fill = "white" }: { fill?: string }) {
  return (
    <div className="pointer-events-none absolute bottom-0 left-0 right-0 overflow-hidden leading-[0]">
      <svg
        viewBox="0 0 1440 56"
        preserveAspectRatio="none"
        className="h-14 w-full"
        aria-hidden
      >
        <path d={`M0,56 L1440,0 L1440,56 Z`} fill={fill} />
      </svg>
    </div>
  );
}

/** Diagonal SVG divider — colored point cutting up from below */
function DiagonalDividerUp({ fill = "white" }: { fill?: string }) {
  return (
    <div className="pointer-events-none absolute top-0 left-0 right-0 overflow-hidden leading-[0]">
      <svg
        viewBox="0 0 1440 56"
        preserveAspectRatio="none"
        className="h-14 w-full"
        aria-hidden
      >
        <path d={`M0,0 L1440,56 L0,56 Z`} fill={fill} />
      </svg>
    </div>
  );
}

function HomePage() {
  const { data: top3 = [] } = useQuery(leaderboardQuery(3));
  const { data: leaderboardAll = [] } = useQuery(leaderboardQuery());
  const { data: openEvents = [] } = useQuery(upcomingEventsQuery());

  return (
    <div className="flex flex-col">
      {/* ── SECTION 1 — HERO ────────────────────────────────────── */}
      <section className="cpl-gradient relative overflow-hidden pb-20 pt-16 md:pb-28 md:pt-24">
        {/* Subtle dot grid */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "28px 28px",
          }}
        />

        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 md:grid-cols-[auto_1fr] md:items-center md:gap-16">
          <img
            src={CPL_LOGO_URL}
            alt="Craps Player League logo"
            className="mx-auto h-44 w-44 shrink-0 drop-shadow-2xl md:h-64 md:w-64"
          />
          <div className="text-center text-white md:text-left">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-white/80 ring-1 ring-white/20">
              <ShieldCheck className="h-3.5 w-3.5 text-cpl-gold" />
              Sanctioned · Official · Competitive
            </div>
            <h1 className="mt-5 font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              The Official<br />
              <span className="text-cpl-gold">Craps Player</span> League
            </h1>
            <p className="mt-4 text-xl font-semibold text-white/80 sm:text-2xl">
              Compete. Rank. Rise.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3 md:justify-start">
              <Button
                asChild
                size="lg"
                className="bg-cpl-red text-white shadow-lg hover:bg-cpl-red/90"
              >
                <Link to="/leaderboard">
                  <Trophy className="mr-2 h-5 w-5" />
                  View Leaderboard
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/40 text-white hover:bg-white/10 hover:text-white"
              >
                <a href="#what-is-cpl">What Is CPL?</a>
              </Button>
            </div>
          </div>
        </div>

        {/* Diagonal cut into next white section */}
        <DiagonalDividerDown fill="white" />
      </section>

      {/* ── QUICK STATS STRIP ────────────────────────────────────── */}
      <section className="border-b border-border bg-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="grid grid-cols-3 divide-x divide-border py-6 text-center">
            <div className="px-4">
              <div className="font-display text-3xl font-bold text-cpl-red sm:text-4xl">
                {leaderboardAll.length || "18"}
              </div>
              <div className="mt-1 text-xs font-bold uppercase tracking-widest text-muted-foreground">
                Ranked Players
              </div>
            </div>
            <div className="px-4">
              <div className="font-display text-3xl font-bold text-cpl-navy sm:text-4xl">
                S1
              </div>
              <div className="mt-1 text-xs font-bold uppercase tracking-widest text-muted-foreground">
                Inaugural Season
              </div>
            </div>
            <div className="px-4">
              <div className="font-display text-3xl font-bold text-cpl-gold sm:text-4xl">
                1,500
              </div>
              <div className="mt-1 text-xs font-bold uppercase tracking-widest text-muted-foreground">
                Pts to Level 5
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 2 — WHAT IS CPL (most prominent) ─────────────────── */}
      <section
        id="what-is-cpl"
        className="relative overflow-hidden bg-cpl-cream pb-24 pt-16 md:pb-32 md:pt-24"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          {/* Section label + headline */}
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-widest text-cpl-red">
              About the League
            </p>
            <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-cpl-navy sm:text-5xl lg:text-6xl">
              What Is the<br />Craps Player League?
            </h2>
          </div>

          {/* Two-column asymmetric layout */}
          <div className="mt-14 grid items-start gap-10 lg:grid-cols-[1fr_420px]">
            {/* Left — main explanation */}
            <div>
              <p className="text-lg leading-relaxed text-foreground/80 md:text-xl">
                The Craps Player League (CPL) is the world's first organized competitive
                craps league — a sanctioned, officially tracked competition for serious
                players. This isn't a casual session at the casino.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-foreground/80 md:text-xl">
                CPL events are run by{" "}
                <span className="font-bold text-cpl-navy">certified CPL Officials</span>.
                Every result is logged, every player earns a place in the official standings,
                and the best rise to World Championship contention.
              </p>

              <div className="mt-8 inline-flex items-center gap-2 text-sm text-muted-foreground">
                <ShieldCheck className="h-4 w-4 text-cpl-blue" />
                All CPL events are run by certified CPL Officials.
              </div>
            </div>

            {/* Right — scoring system cards (stacked) */}
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-4 rounded-xl border-2 border-border bg-white p-5">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-cpl-red text-white">
                  <Dice5 className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-cpl-navy">
                    Dice Score
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-foreground/75">
                    Measures your performance at the table across sanctioned events. Your{" "}
                    <span className="font-semibold">personal best</span> carries all season.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-xl border-2 border-border bg-white p-5">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-cpl-blue text-white">
                  <Wallet className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-cpl-navy">
                    Bank Score
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-foreground/75">
                    Measures bankroll management — how effectively you grow and protect
                    your stack. Tracked independently of your Dice Score.
                  </p>
                </div>
              </div>

              {/* Total Score callout */}
              <div className="rounded-xl border-2 border-cpl-navy bg-cpl-navy p-5 text-white">
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-cpl-gold" />
                  <span className="font-display text-sm font-bold uppercase tracking-wide">
                    Total Score
                  </span>
                </div>
                <p className="mt-2 font-display text-2xl font-bold text-cpl-gold">
                  Best Dice + Best Bank
                </p>
                <p className="mt-1 text-sm text-white/70">
                  Your two personal bests combine into the single number that defines
                  your CPL rank.{" "}
                  <span className="text-cpl-gold font-semibold">1,500 pts = Level 5</span>{" "}
                  — the Championship threshold.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Diagonal cut going the other way */}
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 overflow-hidden leading-[0]">
          <svg
            viewBox="0 0 1440 56"
            preserveAspectRatio="none"
            className="h-14 w-full"
            aria-hidden
          >
            <path d="M0,0 L1440,56 L0,56 Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* ── SECTION 3 — AWARDS SHOWCASE ───────────────────────────── */}
      <section className="border-b border-border bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-widest text-cpl-blue">
              Official Honors
            </p>
            <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-cpl-navy sm:text-4xl">
              Earn Your Place
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base text-muted-foreground">
              CPL award badges are earned through sanctioned play. Each badge represents
              a milestone in your competitive journey.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-6 sm:grid-cols-6">
            {AWARD_BADGES.map((badge) => (
              <div key={badge.id} className="group flex flex-col items-center gap-3">
                <div className="flex h-24 w-24 items-center justify-center overflow-hidden rounded-full border-2 border-border bg-cpl-cream transition-transform group-hover:scale-105">
                  <img
                    src={badge.src}
                    alt={badge.label}
                    className="h-20 w-20 object-contain drop-shadow-md"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).style.display = "none";
                      (e.currentTarget.nextElementSibling as HTMLElement | null)?.style.removeProperty("display");
                    }}
                  />
                  <Medal
                    className="h-10 w-10 text-cpl-navy/30"
                    style={{ display: "none" }}
                  />
                </div>
                <span className="text-center text-xs font-bold uppercase tracking-wide text-cpl-navy">
                  {badge.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 4 — HOW IT WORKS ───────────────────────────────── */}
      <section className="relative overflow-hidden bg-cpl-navy py-16 md:py-20">
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "24px 24px",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-widest text-cpl-gold">
              The Process
            </p>
            <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
              How the League Works
            </h2>
          </div>

          <div className="mt-12 grid gap-0 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Calendar,
                step: "01",
                label: "Attend Events",
                desc: "Play in sanctioned CPL events near you — run by certified officials.",
              },
              {
                icon: Dice5,
                step: "02",
                label: "Log Scores",
                desc: "Your dice and bank scores are recorded and verified officially.",
              },
              {
                icon: TrendingUp,
                step: "03",
                label: "Earn Rankings",
                desc: "Climb the official CPL leaderboard with your personal bests.",
              },
              {
                icon: Trophy,
                step: "04",
                label: "Win the Title",
                desc: "Top players battle for the CPL World Champion title.",
              },
            ].map((step, i) => (
              <div
                key={step.label}
                className={`relative flex flex-col items-center border-border p-8 text-center text-white ${
                  i < 3 ? "sm:border-r border-white/10" : ""
                }`}
              >
                <div className="absolute left-4 top-4 font-display text-5xl font-bold text-white/10 md:text-7xl">
                  {step.step}
                </div>
                <div className="relative grid h-16 w-16 place-items-center rounded-full bg-cpl-red text-white shadow-lg">
                  <step.icon className="h-8 w-8" />
                </div>
                <h3 className="relative mt-4 font-display text-xl font-bold">{step.label}</h3>
                <p className="relative mt-2 text-sm text-white/70">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 5 — CURRENT WORLD CHAMPION ──────────────────────── */}
      <section className="relative overflow-hidden bg-white py-16 md:py-24">
        {/* Angled background accent */}
        <div
          className="absolute inset-y-0 left-0 right-1/2 bg-cpl-cream"
          style={{ clipPath: "polygon(0 0, 100% 0, 85% 100%, 0 100%)" }}
        />

        <div className="relative mx-auto max-w-5xl px-4 sm:px-6">
          <div className="grid items-center gap-8 md:grid-cols-[1fr_auto]">
            {/* Left — title */}
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-cpl-navy px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-cpl-gold">
                <Trophy className="h-4 w-4" />
                Current World Champion
              </div>
              <div className="mt-5 font-display text-6xl font-bold tracking-tight text-cpl-navy sm:text-7xl md:text-8xl">
                Jess
              </div>
              <p className="mt-2 text-sm font-bold uppercase tracking-widest text-muted-foreground">
                Reigning Champion · Season 1
              </p>
              <div className="mt-6 flex flex-wrap gap-6">
                <div className="rounded-xl border-2 border-border bg-white px-6 py-4 text-center shadow-sm">
                  <div className="font-display text-3xl font-bold text-cpl-red">80</div>
                  <div className="mt-1 text-xs font-bold uppercase tracking-widest text-muted-foreground">
                    Dice Score
                  </div>
                </div>
                <div className="rounded-xl border-2 border-border bg-white px-6 py-4 text-center shadow-sm">
                  <div className="font-display text-3xl font-bold text-cpl-blue">1,047</div>
                  <div className="mt-1 text-xs font-bold uppercase tracking-widest text-muted-foreground">
                    Bank Score
                  </div>
                </div>
              </div>
            </div>

            {/* Right — total score */}
            <div className="cpl-gradient rounded-2xl p-8 text-center text-white shadow-2xl">
              <div className="text-xs font-bold uppercase tracking-widest text-white/70">
                Total Score
              </div>
              <div className="mt-1 font-display text-7xl font-bold leading-none text-cpl-gold sm:text-8xl">
                1,127
              </div>
              <div className="mt-4 rounded-lg bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-widest text-white/80 ring-1 ring-white/20">
                <Star className="mr-1 inline h-3 w-3 text-cpl-gold" />
                Level 5 Threshold: 1,500
              </div>
            </div>
          </div>
        </div>
        {/*
          CHAMPION SPONSOR AREA — reserved.
          Hidden until Brian activates a Champion Sponsor.
        */}
      </section>

      {/* ── SECTION 6 — TOP 3 LEADERBOARD ──────────────────────────── */}
      <section className="border-b border-t border-border bg-cpl-cream py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-widest text-cpl-red">
              Official Standings
            </p>
            <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-cpl-navy sm:text-4xl">
              Top 3 Leaderboard
            </h2>
          </div>

          <div className="mt-10 overflow-hidden rounded-xl border-2 border-border shadow-lg">
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
                </tr>
              </thead>
              <tbody className="divide-y divide-border bg-white">
                {top3.map((p) => (
                  <tr
                    key={p.rank}
                    className={p.rank === 1 ? "bg-cpl-gold/10" : "hover:bg-cpl-cream"}
                  >
                    <td className="px-5 py-5">
                      <span
                        className={`inline-grid h-10 w-10 place-items-center rounded-full font-display text-lg font-bold ${
                          p.rank === 1
                            ? "bg-cpl-gold text-cpl-navy shadow-md"
                            : p.rank === 2
                              ? "bg-gray-200 text-cpl-navy"
                              : "bg-amber-700/80 text-white"
                        }`}
                      >
                        {p.rank}
                      </span>
                    </td>
                    <td className="px-5 py-5 font-display text-xl font-bold text-cpl-navy">
                      {p.player_name}
                      {p.rank === 1 && (
                        <Trophy className="ml-2 inline h-4 w-4 text-cpl-gold" />
                      )}
                    </td>
                    <td className="px-5 py-5 text-right font-display text-2xl font-bold text-cpl-red">
                      {p.total_score.toLocaleString()}
                    </td>
                    <td className="hidden px-5 py-5 text-right text-sm text-muted-foreground md:table-cell">
                      {p.best_dice_score}
                    </td>
                    <td className="hidden px-5 py-5 text-right text-sm text-muted-foreground md:table-cell">
                      {p.best_bank_score.toLocaleString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 text-center">
            <Link
              to="/leaderboard"
              className="inline-flex items-center font-semibold text-cpl-blue hover:text-cpl-red"
            >
              View Full Standings
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── SECTION 7 — UPCOMING EVENTS ────────────────────────────── */}
      <section className="border-b border-border bg-white py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-widest text-cpl-blue">
              League Schedule
            </p>
            <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-cpl-navy sm:text-4xl">
              Upcoming Events
            </h2>
          </div>

          {openEvents.length === 0 ? (
            <div className="mx-auto mt-10 max-w-xl rounded-xl border-2 border-dashed border-border bg-cpl-cream p-12 text-center">
              <Calendar className="mx-auto h-10 w-10 text-cpl-blue" />
              <p className="mt-4 font-display text-xl font-bold text-cpl-navy">
                Check Back Soon
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                New sanctioned events are added regularly.
              </p>
            </div>
          ) : (
            <div className="mt-10 grid gap-4 md:grid-cols-2">
              {openEvents.map((e) => (
                <Card key={e.id} className="border-2 border-border hover:shadow-lg transition-shadow">
                  <div className="cpl-stripe h-1 w-full" />
                  <CardContent className="p-6">
                    <h3 className="font-display text-xl font-bold text-cpl-navy">
                      {e.name}
                    </h3>
                    <div className="mt-3 flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4 text-cpl-red" />
                      {e.date}
                    </div>
                    <div className="mt-1 flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4 text-cpl-blue" />
                      {e.location}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── SECTION 8 — LEAGUE NEWS ────────────────────────────────── */}
      <section className="border-b border-border bg-cpl-cream py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-cpl-red">
                League Bulletin
              </p>
              <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-cpl-navy sm:text-4xl">
                Latest News
              </h2>
            </div>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {NEWS.map((n, i) => (
              <Card
                key={n.title}
                className={`overflow-hidden border-2 border-border bg-white transition-all hover:-translate-y-0.5 hover:shadow-xl ${
                  i === 0 ? "md:col-span-1" : ""
                }`}
              >
                <div className="cpl-stripe h-1.5 w-full" />
                <CardContent className="flex h-full flex-col p-6">
                  <div className="text-xs font-bold uppercase tracking-widest text-cpl-blue">
                    {n.date}
                  </div>
                  <h3 className="mt-2 font-display text-xl font-bold text-cpl-navy">
                    {n.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm text-muted-foreground">{n.excerpt}</p>
                  <a
                    href="#"
                    className="mt-5 inline-flex items-center text-sm font-semibold text-cpl-red hover:underline"
                  >
                    Read more <ArrowRight className="ml-1 h-3 w-3" />
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 9 — FOUNDERS CLUB CTA ──────────────────────────── */}
      <section className="relative overflow-hidden bg-cpl-navy py-16 text-white md:py-24">
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "28px 28px",
          }}
        />
        <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6">
          <div className="mx-auto mb-6 inline-grid h-16 w-16 place-items-center rounded-full bg-cpl-gold/20 ring-2 ring-cpl-gold/40">
            <Star className="h-8 w-8 text-cpl-gold" />
          </div>
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Join the Founders Club
          </h2>
          <p className="mt-5 text-lg text-white/80">
            Be part of history. The CPL Founders Club is for visionaries who want to
            support the league from the ground up and be recognized forever.
          </p>
          <div className="mt-8">
            <Button
              asChild
              size="lg"
              className="bg-cpl-gold text-cpl-navy shadow-lg hover:bg-cpl-gold/90"
            >
              <Link to="/founders-club">
                Explore the Founders Club
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ── SECTION 10 — PARTNERS & SPONSORS ────────────────────────── */}
      <section className="border-b border-border bg-white py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-widest text-cpl-blue">
              Partnership
            </p>
            <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-cpl-navy sm:text-4xl">
              Partners &amp; Sponsors
            </h2>
            <p className="mt-3 text-sm text-muted-foreground">
              Sponsorship opportunities available — contact us to partner with the CPL.
            </p>
          </div>

          {/* Reserved sponsorship zones */}
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {[
              "League Sponsors",
              "Champion Sponsor",
              "Event Sponsors",
              "Team Sponsors",
              "Player Sponsors",
            ].map((label) => (
              <div
                key={label}
                className="grid h-32 place-items-center rounded-xl border-2 border-dashed border-border bg-cpl-cream text-center"
              >
                <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
