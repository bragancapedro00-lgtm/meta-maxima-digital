import { Hero } from "@/components/sections/Hero";
import { Problem } from "@/components/sections/Problem";
import { Solutions } from "@/components/sections/Solutions";
import { Differential } from "@/components/sections/Differential";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Education } from "@/components/sections/Education";
import { Profiles } from "@/components/sections/Profiles";
import { Faq } from "@/components/sections/Faq";
import { LeadForm } from "@/components/sections/LeadForm";
import { FinalCta } from "@/components/sections/FinalCta";

export default function HomePage() {
  return (
    <>
      {/* Seção 2: Hero Principal */}
      <Hero />

      {/* Seção 3: Identificação do Problema */}
      <Problem />

      {/* Seção 4: Apresentação das Soluções */}
      <Solutions />

      {/* Seção 5: Diferencial Estratégico */}
      <Differential />

      {/* Seção 6: Como Funciona */}
      <HowItWorks />

      {/* Seção 7: Foco no Setor Educacional */}
      <Education />

      {/* Seção 8: Perfil dos Clientes */}
      <Profiles />

      {/* Seção 9: Perguntas Frequentes */}
      <Faq />

      {/* Seção 10: Formulário Final de Conversão */}
      <LeadForm />

      {/* Seção 11: Chamada Final */}
      <FinalCta />
    </>
  );
}
