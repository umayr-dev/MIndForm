"use client";

import Link from "next/link";
import { useCallback, useState } from "react";
import { ArrowUpRight, Search } from "lucide-react";
import { SiteSearchDialog } from "@/components/mindform/site-search-dialog";

const centerNav = [
  { href: "#research", label: "Research" },
  { href: "#mission", label: "Mission" },
  { href: "#focus", label: "Focus" },
  { href: "#architecture", label: "StableMind" },
  { href: "#future", label: "Principles" },
];

export function SiteHeader() {
  const [searchOpen, setSearchOpen] = useState(false);
  const closeSearch = useCallback(() => setSearchOpen(false), []);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-white/10 bg-black">
        <div className="mx-auto flex h-[52px] max-w-[1400px] items-center gap-3 px-4 sm:h-[56px] sm:gap-4 sm:px-6 lg:px-8">
          <Link
            href="#"
            className="shrink-0 text-[15px] font-semibold tracking-[-0.02em] text-white"
          >
            mindform
          </Link>

          <nav
            className="hidden flex-1 items-center justify-center gap-5 xl:gap-6 lg:flex"
            aria-label="Primary"
          >
            {centerNav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-[11px] font-semibold uppercase tracking-[0.16em] text-zinc-400 transition-colors hover:text-white"
              >
                {item.label}
              </a>
            ))}
            <button
              type="button"
              onClick={() => setSearchOpen(true)}
              className="text-zinc-500 transition hover:text-white"
              aria-label="Open search"
              aria-expanded={searchOpen}
            >
              <Search className="size-[18px]" strokeWidth={1.75} />
            </button>
          </nav>

          <div className="flex flex-1 items-center justify-end gap-2 sm:gap-3 lg:flex-none">
            <button
              type="button"
              onClick={() => setSearchOpen(true)}
              className="rounded-lg p-2 text-zinc-500 transition hover:bg-zinc-900 hover:text-white lg:hidden"
              aria-label="Open search"
            >
              <Search className="size-[18px]" strokeWidth={1.75} />
            </button>
            <nav className="flex items-center gap-2 overflow-x-auto lg:hidden" aria-label="Mobile">
              {centerNav.slice(0, 3).map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="shrink-0 text-[10px] font-semibold uppercase tracking-wider text-zinc-400"
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <a
              href="#contact"
              className="inline-flex h-9 shrink-0 items-center gap-1.5 rounded-full border border-white/25 bg-black px-3.5 text-[12px] font-semibold uppercase tracking-wide text-white transition hover:border-white hover:bg-white hover:text-black sm:px-4"
            >
              Contact
              <ArrowUpRight className="size-3.5" strokeWidth={2.25} aria-hidden />
            </a>
          </div>
        </div>
      </header>
      <SiteSearchDialog open={searchOpen} onClose={closeSearch} />
    </>
  );
}
