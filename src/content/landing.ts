/**
 * ============================================================================
 * CONTEÚDO EDITORIAL DA LANDING PAGE — META MÁXIMA DIGITAL
 * ============================================================================
 * Estrutura estrita de 6 seções comerciais, copy transparente, sem promessas
 * irreais ou dados inventados.
 * ============================================================================
 */

/** Chamada de ação única e consistente em toda a página. */
export const CTA_LABEL = "Quero meu diagnóstico gratuito";

/** SEÇÃO 1 — HERO */
export const HERO = {
  badge: "MARKETING E VENDAS PARA ESCOLAS",
  title: "Sua escola precisa de mais matrículas, não apenas de mais leads.",
  subtitle:
    "Unimos tráfego pago, estratégia comercial e tecnologia para ajudar sua escola a atrair alunos, aproveitar melhor os contatos e vender com mais estratégia.",
  cta: CTA_LABEL,
  microcopy:
    "Uma primeira conversa para identificar oportunidades de melhoria na sua operação.",
  quickProof: {
    tag: "Estudo de Caso Real",
    text: "Instituto Meta Máxima: reestruturação da jornada de atração, qualificação e atendimento comercial para matrículas.",
  },
};

/** SEÇÃO 2 — PROBLEMA */
export const PROBLEM = {
  title: "Mais leads não resolvem um processo comercial que não converte.",
  subtitle:
    "O problema pode estar em diferentes etapas da operação, e não necessariamente apenas no anúncio.",
  pains: [
    {
      title: "Leads que esfriam",
      text: "O interessado demonstra interesse, mas não recebe acompanhamento adequado.",
    },
    {
      title: "Anúncios sem vendas",
      text: "Chegam contatos, mas não fica claro o que realmente gera matrículas.",
    },
    {
      title: "Falta de acompanhamento",
      text: "Oportunidades se perdem entre a primeira mensagem e o fechamento.",
    },
  ],
};

/** SEÇÃO 3 — MÉTODO */
export const METHOD = {
  title: "Do primeiro clique à matrícula.",
  subtitle:
    "Uma estratégia que conecta aquisição, atendimento e decisão comercial.",
  steps: [
    {
      num: "01",
      name: "ATRAIR",
      desc: "Campanhas e criativos para alcançar o público adequado.",
    },
    {
      num: "02",
      name: "QUALIFICAR",
      desc: "Identificação de oportunidades com maior aderência à oferta.",
    },
    {
      num: "03",
      name: "CONVERTER",
      desc: "Estratégias para melhorar o atendimento e o acompanhamento comercial.",
    },
    {
      num: "04",
      name: "ANALISAR",
      desc: "Monitoramento dos indicadores para identificar gargalos e otimizar a operação.",
    },
  ],
  cta: CTA_LABEL,
};

/** SEÇÃO 4 — PROVA REAL (CASE INSTITUTO META MÁXIMA) */
export const CASE_STUDY = {
  title: "Resultados que vão além dos cliques.",
  subtitle:
    "Estudo da operação de marketing e conversão da qual a equipe participou ativamente no Instituto Meta Máxima.",
  context:
    "Instituição de ensino com demanda de ampliar a captação de novos alunos, organizar o fluxo de atendimento aos interessados no WhatsApp e reduzir perdas no processo de matrícula.",
  whatWasDone:
    "Desenvolvimento de campanhas de tráfego pago (Meta Ads) com criativos focados na oferta pedagógica, qualificação do fluxo de atendimento no WhatsApp para recepção rápida dos interessados, organização do acompanhamento comercial e monitoramento das taxas de conversão de lead a aluno matriculado.",
  verificationNotice:
    "Os indicadores quantitativos de faturamento e volume de matrículas estão em processo de consolidação documental junto à direção da instituição para publicação com auditoria prévia, preservando o compromisso de transparência.",
  cta: CTA_LABEL,
};

/** SEÇÃO 5 — OBJEÇÕES E FAQ */
export const FAQ = {
  title: "Antes de começar, o que você precisa saber.",
  subtitle:
    "Respostas diretas e transparentes sobre como trabalhamos.",
  items: [
    {
      q: "Quanto preciso investir?",
      a: "O investimento depende dos objetivos, da estrutura comercial, do segmento e dos serviços necessários. Após entender a operação, avaliamos um escopo e um orçamento compatíveis com a realidade do negócio. O investimento em anúncios deve ser considerado separadamente da contratação da agência.",
    },
    {
      q: "Vocês garantem aumento nas vendas?",
      a: "Não prometemos um número de vendas ou faturamento sem considerar as condições do negócio. Trabalhamos com estratégia, acompanhamento e otimização para melhorar a aquisição e a conversão de oportunidades.",
    },
    {
      q: "Em quanto tempo posso ter resultados?",
      a: "O início das campanhas e a evolução dos indicadores dependem da estrutura disponível, do investimento, da oferta, do público e do processo comercial. Os primeiros dados podem surgir rapidamente, mas resultados consistentes exigem acompanhamento e otimização. Não estabeleça prazos garantidos sem evidência.",
    },
    {
      q: "Como funciona o primeiro contato?",
      a: "Você informa seu nome, WhatsApp e segmento. Em seguida, abre uma conversa no WhatsApp com uma mensagem pronta. A equipe entende seus objetivos, identifica os principais desafios e avalia se a Meta Máxima Digital pode ajudar.",
    },
  ],
  cta: CTA_LABEL,
};

/** SEÇÃO 6 — CTA FINAL E FORMULÁRIO */
export const FORM = {
  title: "Vamos identificar o que pode melhorar nas suas vendas?",
  subtitle:
    "Conte um pouco sobre sua empresa. O próximo passo é uma conversa objetiva sobre suas oportunidades comerciais.",
  segments: [
    "Escola ou curso profissionalizante",
    "Comércio ou varejo",
    "Clínica ou prestação de serviços",
    "Restaurante ou alimentação",
    "Outro segmento",
  ],
  submit: CTA_LABEL,
  microcopy:
    "Seus dados serão utilizados para dar continuidade ao contato solicitado. Consulte nossa Política de Privacidade.",
};
