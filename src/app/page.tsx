import { ArchitectureSection } from "@/components/mindform/architecture-section";
import { CtaSection } from "@/components/mindform/cta-section";
import { FutureSection } from "@/components/mindform/future-section";
import { HeroSection } from "@/components/mindform/hero-section";
import { ProblemSection } from "@/components/mindform/problem-section";
import { ProductDemoSection } from "@/components/mindform/product-demo-section";
import { SiteHeader } from "@/components/mindform/site-header";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="relative flex-1">
        <HeroSection />
        <ProblemSection />
        <ArchitectureSection />
        <ProductDemoSection />
        <FutureSection />
        <CtaSection />
      </main>
      <footer className="relative z-10 border-t border-white/[0.06] px-6 py-10 text-center">
        <p className="font-mono text-[10px] uppercase tracking-[0.35em] text-zinc-600">
          MindForm · cinematic concept · persistent identity research
        </p>
      </footer>
    </>
  );
}
