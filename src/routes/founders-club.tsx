import { createFileRoute } from "@tanstack/react-router";
import { Medal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FOUNDERS_TIERS, FOUNDER_BADGES } from "@/lib/cpl-data";

export const Route = createFileRoute("/founders-club")({ 
  head: () => ({
    meta: [
      { title: "Founders Club — Craps Player League" },
      {
        name: "description",
        content:
          "Join the CPL Founders Club. Be part of history and support the world's first competitive craps league from the ground up.",
      },
      { property: "og:title", content: "CPL Founders Club" },
      {
        property: "og:description",
        content:
          "Be part of history. Support the league from the ground up.",
      },
    ],
  }),
  component: FoundersClubPage,
});

/*
 * NOTE FOR DEV: Payment links will be added by Brian after approval.
 * Do NOT activate the "Join Now" buttons — they intentionally href="#" for now.
 * Do NOT invent or modify tier names, order, or descriptions.
 */

/** Badge image with graceful fallback if file not yet uploaded */
function BadgeImg({
  src,
  alt,
  size = "lg",
}: {
  src: string;
  alt: string;
  size?: "sm" | "lg";
}) {
  const dim = size === "lg" ? "h-24 w-24" : "h-16 w-16";
  const inner = size === "lg" ? "h-20 w-20" : "h-12 w-12";
  const iconSize = size === "lg" ? "h-10 w-10" : "h-6 w-6";

  return (
    <div
      className={`${dim} flex items-center justify-center overflow-hidden rounded-full border-2 border-border bg-cpl-cream`}
    >
      <img
        src={src}
        alt={alt}
        className={`${inner} object-contain drop-shadow-md`}
        onError={(e) => {
          (e.currentTarget as HTMLImageElement).style.display = "none";
          (
            e.currentTarget.nextElementSibling as HTMLElement | null
          )?.style.removeProperty("display");
        }}
      />
      <Medal
        className={`${iconSize} text-cpl-navy/30`}
        style={{ display: "none" }}
      />
    </div>
  );
}

function FoundersClubPage() {
  return (
    <div>
      {/* ── HERO ────────────────────────────────────────────────────────── */}
      <section className="cpl-gradient relative overflow-hidden pb-20 pt-16 text-white md:pb-28 md:pt-24">
        {/* Dot grid */}
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "28px 28px",
          }}
        />

        <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6">
          {/* Show general Founder badge in hero */}
          <div className="mx-auto flex h-24 w-24 items-center justify-center overflow-hidden rounded-full border-2 border-cpl-gold/40 bg-white/10 backdrop-blur">
            <img
              src={FOUNDER_BADGES.general}
              alt="CPL Founder Badge"
              className="h-20 w-20 object-contain drop-shadow-lg"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).style.display = "none";
                (
                  e.currentTarget.nextElementSibling as HTMLElement | null
                )?.style.removeProperty("display");
              }}
            />
            <Medal
              className="h-10 w-10 text-cpl-gold"
              style={{ display: "none" }}
            />
          </div>

          <h1 className="mt-6 font-display text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            The Founders Club
          </h1>
          <p className="mt-5 text-lg text-white/80 sm:text-xl">
            Be part of history. The CPL Founders Club is for visionaries who want
            to support the league from the ground up — and be recognized forever.
          </p>
        </div>

        {/* Diagonal cut */}
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 overflow-hidden leading-[0]">
          <svg
            viewBox="0 0 1440 56"
            preserveAspectRatio="none"
            className="h-14 w-full"
            aria-hidden
          >
            <path d="M0,56 L1440,0 L1440,56 Z" fill="var(--cpl-cream, #fafaf8)" />
          </svg>
        </div>
      </section>

      {/* ── BADGE EXPLAINER ───────────────────────────────────────────────── */}
      <section className="bg-cpl-cream py-14">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <p className="text-sm font-bold uppercase tracking-widest text-cpl-red">
            Your Recognition
          </p>
          <h2 className="mt-2 font-display text-2xl font-bold text-cpl-navy sm:text-3xl">
            Every Founder Receives Two Badges
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            All Founders Club members receive the official{" "}
            <span className="font-semibold text-cpl-navy">CPL Founder Badge</span>.
            Members in Tiers 1–3 additionally receive their{" "}
            <span className="font-semibold text-cpl-navy">tier-specific badge</span>.
            Founding Legacy Investors (Tier 4) bear the Founder Badge as their mark.
          </p>

          {/* Badge duo example */}
          <div className="mt-8 inline-flex items-center gap-4 rounded-2xl border-2 border-border bg-white px-8 py-6 shadow-md">
            <div className="flex flex-col items-center gap-2">
              <BadgeImg src={FOUNDER_BADGES.general} alt="CPL Founder Badge" />
              <span className="text-xs font-bold uppercase tracking-wide text-cpl-navy">
                Founder Badge
              </span>
              <span className="text-[10px] text-muted-foreground">(All members)</span>
            </div>
            <span className="font-display text-2xl font-bold text-muted-foreground">+</span>
            <div className="flex flex-col items-center gap-2">
              <BadgeImg src={FOUNDER_BADGES.member} alt="Tier Badge" />
              <span className="text-xs font-bold uppercase tracking-wide text-cpl-navy">
                Tier Badge
              </span>
              <span className="text-[10px] text-muted-foreground">(Tiers 1–3)</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── MEMBERSHIP TIERS ───────────────────────────────────────────────── */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-widest text-cpl-red">
              Membership Tiers
            </p>
            <h2 className="mt-2 font-display text-3xl font-bold text-cpl-navy sm:text-4xl">
              Choose Your Legacy
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {FOUNDERS_TIERS.map((tier) => (
              <div
                key={tier.name}
                className={`relative overflow-hidden rounded-2xl border-2 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl ${tier.accent}`}
              >
                {/* Top accent gradient stripe */}
                <div className={`h-2 w-full bg-gradient-to-r ${tier.accentGrad}`} />

                <div className="flex h-full flex-col p-6">
                  {/* Tier number */}
                  <div className="text-xs font-bold uppercase tracking-widest text-cpl-blue">
                    Tier {tier.tier}
                  </div>

                  {/* Tier name */}
                  <h3 className="mt-3 font-display text-xl font-bold leading-tight text-cpl-navy">
                    {tier.name}
                  </h3>
                  <div className="mt-1 text-sm font-semibold text-cpl-red">
                    {tier.tagline}
                  </div>

                  {/* Badge display */}
                  <div className="mt-5 flex items-center gap-3">
                    {/* General Founder badge — all tiers */}
                    <div className="flex flex-col items-center gap-1">
                      <BadgeImg src={FOUNDER_BADGES.general} alt="Founder Badge" size="sm" />
                      <span className="text-[10px] font-bold uppercase tracking-wide text-muted-foreground">
                        Founder
                      </span>
                    </div>

                    {/* Tier badge — tiers 1–3 only */}
                    {tier.tierBadgeSrc ? (
                      <>
                        <span className="font-display text-lg font-bold text-muted-foreground/60">
                          +
                        </span>
                        <div className="flex flex-col items-center gap-1">
                          <BadgeImg src={tier.tierBadgeSrc} alt={`${tier.name} Badge`} size="sm" />
                          <span className="text-[10px] font-bold uppercase tracking-wide text-muted-foreground">
                            Tier Badge
                          </span>
                        </div>
                      </>
                    ) : (
                      // Top tier: callout instead
                      <div className="ml-2 rounded-lg bg-cpl-gold/10 px-3 py-2 text-center ring-1 ring-cpl-gold/30">
                        <div className="text-[10px] font-bold uppercase tracking-wide text-cpl-gold">
                          Charter<br />Founder
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Description */}
                  <p className="mt-5 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {tier.description}
                  </p>

                  {/* CTA — inactive until Brian adds payment links */}
                  <Button
                    asChild
                    className="mt-6 w-full bg-cpl-red text-white hover:bg-cpl-red/90"
                  >
                    <a href="#">Join Now</a>
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-10 text-center text-xs text-muted-foreground">
            Membership enrollment opens soon. For early inquiries, please use the{" "}
            <a href="/contact" className="font-semibold text-cpl-blue hover:underline">
              contact page
            </a>
            .
          </p>
        </div>
      </section>
    </div>
  );
}
