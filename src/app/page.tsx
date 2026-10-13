import { Hero } from "@/components/sections/Hero";
import { Problem } from "@/components/sections/Problem";
import { Method } from "@/components/sections/Method";
import { CaseStudy } from "@/components/sections/CaseStudy";
import { Faq } from "@/components/sections/Faq";
import { LeadForm } from "@/components/sections/LeadForm";

export default function HomePage() {
  return (
    <>
      {/* SEÇÃO 1 — HERO */}
      <Hero />

      {/* SEÇÃO 2 — PROBLEMA */}
      <Problem />

      {/* SEÇÃO 3 — MÉTODO */}
      <Method />

      {/* SEÇÃO 4 — PROVA REAL */}
      <CaseStudy />

      {/* SEÇÃO 5 — OBJEÇÕES E FAQ */}
      <Faq />

      {/* SEÇÃO 6 — CTA FINAL E FORMULÁRIO */}
      <LeadForm />
    </>
  );
}
