import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { CPL_LOGO_URL } from "@/lib/cpl-data";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/leaderboard", label: "Leaderboard" },
  { to: "/founders-club", label: "Founders Club" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

/**
 * Coming-soon league pages — nav placeholders only.
 * Routes and pages are not yet implemented.
 * Do not add links until pages are built.
 */
const LEAGUE_SOON = [
  "Player Profiles",
  "Teams",
  "Awards",
  "Heroes",
  "Hall of Fame",
];

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [leagueOpen, setLeagueOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="cpl-stripe h-1 w-full" />

      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-3"
          onClick={() => setMobileOpen(false)}
        >
          <img src={CPL_LOGO_URL} alt="CPL Logo" className="h-10 w-10 shrink-0" />
          <span className="font-display text-lg font-bold tracking-tight text-cpl-navy sm:text-xl">
            Craps Player League
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="rounded-md px-3 py-2 text-sm font-semibold text-foreground transition-colors hover:bg-accent hover:text-cpl-red"
              activeProps={{ className: "text-cpl-red bg-accent" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}

          {/* League dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setLeagueOpen(true)}
            onMouseLeave={() => setLeagueOpen(false)}
          >
            <button className="flex items-center gap-1 rounded-md px-3 py-2 text-sm font-semibold text-muted-foreground transition-colors hover:bg-accent hover:text-cpl-navy">
              League
              <ChevronDown className="h-3.5 w-3.5" />
            </button>

            {leagueOpen && (
              <div className="absolute right-0 top-full z-50 mt-1 w-52 rounded-xl border border-border bg-background shadow-2xl">
                <div className="p-2">
                  <div className="mb-1 px-2 py-1 text-[10px] font-bold uppercase tracking-widest text-cpl-blue">
                    Coming Soon
                  </div>
                  {LEAGUE_SOON.map((label) => (
                    <div
                      key={label}
                      className="flex cursor-default items-center justify-between rounded-md px-3 py-2 text-sm text-muted-foreground"
                    >
                      {label}
                      <span className="rounded bg-cpl-cream px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-cpl-navy">
                        Soon
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="rounded-md p-2 text-foreground md:hidden"
          aria-label="Toggle menu"
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile nav panel */}
      {mobileOpen && (
        <nav className="border-t border-border bg-background md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col px-4 py-2 sm:px-6">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setMobileOpen(false)}
                className="rounded-md px-3 py-3 text-sm font-semibold text-foreground hover:bg-accent hover:text-cpl-red"
                activeProps={{ className: "text-cpl-red bg-accent" }}
                activeOptions={{ exact: item.to === "/" }}
              >
                {item.label}
              </Link>
            ))}

            {/* Coming-soon section in mobile menu */}
            <div className="mt-2 border-t border-border pt-2">
              <div className="px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-cpl-blue">
                League — Coming Soon
              </div>
              {LEAGUE_SOON.map((label) => (
                <div
                  key={label}
                  className="flex cursor-default items-center justify-between rounded-md px-3 py-3 text-sm text-muted-foreground"
                >
                  {label}
                  <span className="rounded bg-cpl-cream px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-cpl-navy">
                    Soon
                  </span>
                </div>
              ))}
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
