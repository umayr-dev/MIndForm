import Link from "next/link";

const columns = [
  {
    title: "Product",
    links: [
      { label: "StableMind overview", href: "#architecture" },
      { label: "Spotlight", href: "#spotlight" },
      { label: "Focus areas", href: "#focus" },
      { label: "Mission", href: "#mission" },
      { label: "Principles", href: "#future" },
    ],
  },
  {
    title: "Research",
    links: [
      { label: "Research library", href: "#research" },
      { label: "Memory & recall", href: "#focus" },
      { label: "Identity & drift", href: "#focus" },
      { label: "Reflection & governance", href: "#focus" },
      { label: "Continuity & safety", href: "#future" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Architecture deep-dive", href: "#architecture" },
      { label: "Technical notes index", href: "#research" },
      { label: "Contact the lab", href: "#contact" },
      { label: "Careers", href: "#contact" },
      { label: "Press", href: "#contact" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About MindForm", href: "#mission" },
      { label: "What we build", href: "#spotlight" },
      { label: "Partnerships", href: "#contact" },
      { label: "Open questions", href: "#research" },
    ],
  },
  {
    title: "Legal & policies",
    links: [
      { label: "Terms of use", href: "#contact" },
      { label: "Privacy policy", href: "#contact" },
      { label: "Responsible disclosure", href: "#contact" },
      { label: "Usage policy", href: "#contact" },
      { label: "Cookie preferences", href: "#contact" },
    ],
  },
] as const;

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="mx-auto max-w-[1400px] px-4 py-16 sm:px-6 sm:py-20 lg:px-10">
        <div className="flex flex-col gap-14 xl:flex-row xl:justify-between xl:gap-20">
          <div className="max-w-md shrink-0 xl:max-w-sm">
            <p className="text-[16px] font-semibold tracking-tight text-white">MindForm</p>
            <p className="mt-4 text-[14px] leading-relaxed text-zinc-500">
              An AI identity and continuity lab—memory, reflection, and persistence for agents
              people live beside. Engineering continuity, not only larger context windows.
            </p>
            <div className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-[12px] text-zinc-600">
              {/* <span className="font-mono uppercase tracking-wider">San Francisco · Remote</span> */}
            </div>
          </div>

          <div className="grid flex-1 grid-cols-2 gap-x-8 gap-y-12 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 xl:gap-x-10">
            {columns.map((col) => (
              <div key={col.title}>
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-zinc-500">
                  {col.title}
                </p>
                <ul className="mt-4 space-y-2.5">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <Link
                        href={l.href}
                        className="text-[13px] leading-snug text-zinc-400 transition hover:text-white"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-5 border-t border-white/10 pt-10 text-[12px] text-zinc-600 lg:flex-row lg:flex-wrap lg:items-center lg:justify-between">
          <p>© {new Date().getFullYear()} MindForm. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
            <Link href="#contact" className="transition hover:text-zinc-400">
              Terms
            </Link>
            <span className="text-zinc-800">·</span>
            <Link href="#contact" className="transition hover:text-zinc-400">
              Privacy
            </Link>
            <span className="text-zinc-800">·</span>
            <Link href="#contact" className="transition hover:text-zinc-400">
              Usage policy
            </Link>
            <span className="text-zinc-800">·</span>
            <Link href="#contact" className="transition hover:text-zinc-400">
              Security
            </Link>
            <span className="text-zinc-800">·</span>
            <span className="text-zinc-600">Status</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
