"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Search, X } from "lucide-react";
import { searchIndex, type SearchItem } from "@/data/search-index";

type Props = {
  open: boolean;
  onClose: () => void;
};

function filterItems(query: string): SearchItem[] {
  const q = query.trim().toLowerCase();
  if (!q) return searchIndex;
  return searchIndex.filter((item) => {
    const blob = `${item.title} ${item.description} ${item.group}`.toLowerCase();
    return blob.includes(q);
  });
}

export function SiteSearchDialog({ open, onClose }: Props) {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const results = useMemo(() => filterItems(query), [query]);

  useEffect(() => {
    if (!open) return;
    setQuery("");
    const t = window.setTimeout(() => inputRef.current?.focus(), 50);
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.clearTimeout(t);
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, onClose]);

  const onBackdrop = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (e.target === e.currentTarget) onClose();
    },
    [onClose],
  );

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center bg-black/85 px-4 pt-[12vh] sm:pt-[15vh]"
      role="dialog"
      aria-modal="true"
      aria-labelledby="site-search-heading"
      onMouseDown={onBackdrop}
    >
      <div
        className="w-full max-w-xl overflow-hidden rounded-2xl border border-white/10 bg-zinc-950 shadow-2xl"
        onMouseDown={(e) => e.stopPropagation()}
      >
        <h2 id="site-search-heading" className="sr-only">
          Search MindForm
        </h2>
        <div className="flex items-center gap-3 border-b border-white/10 px-4 py-3">
          <Search className="size-5 shrink-0 text-zinc-500" strokeWidth={1.75} aria-hidden />
          <input
            ref={inputRef}
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search pages…"
            className="min-w-0 flex-1 bg-transparent text-[15px] text-white placeholder:text-zinc-600 outline-none"
            autoComplete="off"
            aria-label="Search site sections"
          />
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-2 text-zinc-500 transition hover:bg-white/10 hover:text-white"
            aria-label="Close search"
          >
            <X className="size-5" strokeWidth={1.75} />
          </button>
        </div>
        <ul className="max-h-[min(50vh,360px)] overflow-y-auto py-2" role="listbox">
          {results.length === 0 ? (
            <li className="px-4 py-8 text-center text-[14px] text-zinc-500">Nothing matches that.</li>
          ) : (
            results.map((item) => (
              <li key={item.id} role="option">
                <a
                  href={item.href}
                  onClick={onClose}
                  className="block px-4 py-3 transition hover:bg-white/5"
                >
                  <p className="text-[11px] font-medium uppercase tracking-wider text-zinc-600">
                    {item.group}
                  </p>
                  <p className="mt-1 text-[15px] font-medium text-white">{item.title}</p>
                  <p className="mt-0.5 text-[13px] text-zinc-500">{item.description}</p>
                </a>
              </li>
            ))
          )}
        </ul>
        <p className="border-t border-white/10 px-4 py-2.5 text-center text-[11px] text-zinc-600">
          <kbd className="rounded border border-white/15 bg-white/5 px-1.5 py-0.5 font-mono text-zinc-400">
            Esc
          </kbd>{" "}
          to close
        </p>
      </div>
    </div>
  );
}
