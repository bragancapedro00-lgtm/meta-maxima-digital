/**
 * Conteúdo editorial da landing page.
 * Toda a copy fica aqui para facilitar ajustes sem mexer nos componentes.
 */
import type { IconName } from "@/components/ui/Icon";

export const NAV_LINKS = [
  { label: "Soluções", href: "#solucoes" },
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Perguntas frequentes", href: "#perguntas-frequentes" },
] as const;

export const HERO = {
  badge: "Marketing e crescimento empresarial",
  subtitle:
    "A Meta Máxima Digital conecta tráfego pago, estratégia comercial e tecnologia para ajudar empresas a atrair clientes, melhorar a conversão e construir um crescimento mais estruturado.",
  benefits: [
    { icon: "target", text: "Atraia oportunidades mais alinhadas ao seu negócio." },
    { icon: "convert", text: "Transforme mais contatos em oportunidades comerciais." },
    { icon: "chart", text: "Acompanhe os resultados com foco em vendas e faturamento." },
  ] satisfies { icon: IconName; text: string }[],
  primaryCta: "Quero aumentar minhas vendas",
  secondaryCta: "Conhecer nossas soluções",
  microcopy:
    "Uma conversa estratégica para entender o momento do seu negócio e identificar oportunidades de crescimento.",
};

export const PROBLEM = {
  title: "Você investe para atrair clientes. Mas o que acontece depois?",
  subtitle:
    "Muitas empresas não precisam apenas de mais divulgação. Precisam conectar aquisição, atendimento e conversão.",
  items: [
    {
      stage: "Aquisição",
      title: "Poucas oportunidades qualificadas",
      text: "Os anúncios geram contatos, mas muitos não têm o perfil ideal para comprar.",
    },
    {
      stage: "Atendimento",
      title: "Leads que não convertem",
      text: "As pessoas demonstram interesse, recebem atendimento e desaparecem antes de fechar negócio.",
    },
    {
      stage: "Estratégia",
      title: "Marketing sem direção clara",
      text: "Há publicações, campanhas e investimentos, mas falta uma estratégia integrada aos objetivos comerciais.",
    },
    {
      stage: "Gestão",
      title: "Falta de previsibilidade",
      text: "É difícil entender quais campanhas trazem clientes, quanto custa conquistar uma venda e onde melhorar.",
    },
  ],
  closing:
    "O próximo passo não é simplesmente investir mais. É entender onde sua operação pode melhorar.",
  cta: "Quero avaliar meu negócio",
};

export const SOLUTIONS = {
  title: "Marketing que não termina no clique.",
  subtitle:
    "Uma estratégia integrada para atrair oportunidades, fortalecer o processo comercial e acompanhar o que realmente importa.",
  services: [
    {
      icon: "megaphone",
      tag: "Aquisição",
      title: "Tráfego pago",
      text: "Planejamento, criação e otimização de campanhas para alcançar o público certo, gerar oportunidades comerciais e melhorar a eficiência do investimento em anúncios.",
      items: [
        "Estratégia de campanhas.",
        "Meta Ads e canais pertinentes ao negócio.",
        "Desenvolvimento de criativos.",
        "Análise de CPL e qualidade dos leads.",
        "Otimização contínua.",
      ],
    },
    {
      icon: "route",
      tag: "Conversão",
      title: "Estratégia de vendas",
      text: "Organização da jornada do cliente para reduzir gargalos entre o primeiro contato e a decisão de compra.",
      items: [
        "Análise da jornada comercial.",
        "Identificação de gargalos.",
        "Estratégias de conversão.",
        "Orientações para acompanhamento dos leads.",
        "Melhoria dos processos comerciais.",
      ],
    },
    {
      icon: "automation",
      tag: "Tecnologia",
      title: "Automação e inteligência artificial",
      text: "Utilização de tecnologia para organizar o atendimento, automatizar tarefas repetitivas e tornar o acompanhamento dos contatos mais eficiente.",
      items: [
        "Fluxos automatizados de atendimento.",
        "Qualificação de contatos.",
        "Integração entre canais e CRM, quando aplicável.",
        "Organização das etapas comerciais.",
        "Apoio ao acompanhamento dos leads.",
      ],
    },
    {
      icon: "layers",
      tag: "Comunicação",
      title: "Estratégia digital e criativos",
      text: "Comunicação visual e planejamento de conteúdo alinhados ao posicionamento da empresa e aos objetivos das campanhas.",
      items: [
        "Criativos para anúncios.",
        "Design gráfico estratégico.",
        "Planejamento de conteúdo.",
        "Comunicação de ofertas.",
        "Consistência de marca.",
      ],
    },
  ] satisfies { icon: IconName; tag: string; title: string; text: string; items: string[] }[],
};

export const DIFFERENTIAL = {
  title: "Não olhamos apenas para o anúncio. Olhamos para o caminho até a venda.",
  steps: [
    { n: "01", title: "Atrair", text: "Campanhas e estratégias para gerar oportunidades." },
    { n: "02", title: "Qualificar", text: "Identificação de contatos alinhados à solução oferecida." },
    { n: "03", title: "Converter", text: "Melhoria da experiência de atendimento e do processo comercial." },
    {
      n: "04",
      title: "Analisar",
      text: "Acompanhamento dos indicadores e identificação de oportunidades de otimização.",
    },
  ],
  closing:
    "Quando marketing e comercial trabalham de forma integrada, fica mais fácil identificar o que funciona, corrigir gargalos e tomar decisões com mais clareza.",
};

export const HOW_IT_WORKS = {
  title: "Da primeira conversa a um plano de ação.",
  steps: [
    {
      label: "Etapa 1",
      title: "Entendemos o cenário",
      text: "Conhecemos seu negócio, sua oferta, seu público, seus desafios e os resultados que deseja alcançar.",
    },
    {
      label: "Etapa 2",
      title: "Identificamos oportunidades",
      text: "Avaliamos as possibilidades de aquisição, conversão e melhoria da operação para identificar prioridades.",
    },
    {
      label: "Etapa 3",
      title: "Estruturamos a estratégia",
      text: "Apresentamos os caminhos recomendados, os serviços pertinentes e os próximos passos para a implementação.",
    },
  ],
  note: "A estratégia e o escopo são definidos de acordo com a realidade e as necessidades de cada empresa.",
  cta: "Quero conversar sobre meu negócio",
};

export const EDUCATION = {
  title: "Sua escola precisa de mais matrículas, não apenas de mais alcance.",
  text: "A captação de alunos exige mais do que anúncios. É necessário conectar a oferta educacional, a campanha, o atendimento aos interessados e o acompanhamento das oportunidades até a matrícula.",
  fronts: [
    "Campanhas para captação de alunos.",
    "Estratégias para melhorar o aproveitamento dos leads.",
    "Organização do acompanhamento comercial.",
  ],
  journey: ["Campanha", "Interessado", "Atendimento", "Visita", "Matrícula"],
  cta: "Quero melhorar a captação da minha escola",
};

export const PROFILES = {
  title: "Uma estratégia adequada ao momento do seu negócio.",
  items: [
    { icon: "trend", text: "Empresas que desejam aumentar as vendas." },
    { icon: "megaphone", text: "Negócios que precisam melhorar seus resultados com tráfego pago." },
    { icon: "convert", text: "Empresas que recebem contatos, mas convertem pouco." },
    { icon: "school", text: "Escolas que desejam ampliar a captação de alunos." },
  ] satisfies { icon: IconName; text: string }[],
  closing:
    "Não existe uma estratégia única para todos os negócios. O primeiro passo é entender onde você está e aonde deseja chegar.",
  cta: "Identificar oportunidades para minha empresa",
};

export const FAQ = {
  title: "Perguntas frequentes",
  intro: "O que costumam perguntar antes da primeira conversa.",
  items: [
    {
      q: "A Meta Máxima Digital atende empresas de quais segmentos?",
      a: "Atendemos negócios que buscam estruturar sua estratégia digital, atrair oportunidades comerciais e melhorar seus processos de aquisição e conversão. A viabilidade de cada projeto é avaliada individualmente.",
    },
    {
      q: "A empresa trabalha apenas com tráfego pago?",
      a: "Não. Além de campanhas de tráfego pago, podemos trabalhar com estratégia comercial, criativos, planejamento digital e soluções de automação, conforme as necessidades do projeto.",
    },
    {
      q: "Já invisto em anúncios, mas não vendo o suficiente. Vocês podem ajudar?",
      a: "Podemos analisar os pontos de atenção da operação, incluindo campanhas, qualidade dos contatos, atendimento e processo comercial, para identificar oportunidades de melhoria. Os resultados dependem de diversos fatores e não podem ser garantidos antecipadamente.",
    },
    {
      q: "Como funciona o primeiro contato?",
      a: "Você preenche o formulário com informações básicas sobre sua empresa e seus objetivos. Depois, suas respostas são encaminhadas pelo canal de contato configurado para que a equipe possa avaliar a solicitação e dar continuidade à conversa.",
    },
    {
      q: "Existe um investimento mínimo?",
      a: "O investimento depende do escopo do projeto, dos serviços necessários e dos objetivos da empresa. As condições são discutidas após o entendimento inicial da demanda.",
    },
    {
      q: "Vocês garantem aumento de faturamento?",
      a: "Nenhuma estratégia séria pode garantir um resultado financeiro específico sem considerar as condições de cada negócio. Nosso trabalho busca estruturar e otimizar os processos de marketing e aquisição para apoiar o crescimento, com acompanhamento dos indicadores pertinentes.",
    },
  ],
};

export const SEGMENT_SCHOOL = "Escola ou instituição de ensino";

export const FORM = {
  title: "Vamos entender como sua empresa pode vender mais.",
  subtitle:
    "Conte um pouco sobre seu negócio e seus objetivos. Com essas informações, poderemos iniciar uma conversa mais direcionada à sua realidade.",
  nextSteps: [
    { title: "Você preenche", text: "Leva cerca de dois minutos. Só os campos marcados são obrigatórios." },
    { title: "O WhatsApp abre", text: "Com uma mensagem pronta, organizada com as suas respostas." },
    { title: "Você confirma o envio", text: "A mensagem só chega até nós quando você toca em enviar no WhatsApp." },
  ],
  segments: [
    SEGMENT_SCHOOL,
    "Comércio",
    "Prestação de serviços",
    "Restaurante ou alimentação",
    "Saúde e bem-estar",
    "Tecnologia",
    "Outro",
  ],
  objectives: [
    "Aumentar as vendas",
    "Aumentar o faturamento",
    "Atrair mais clientes",
    "Melhorar os resultados do tráfego pago",
    "Converter mais leads em clientes",
    "Estruturar o marketing e o comercial",
    "Automatizar o atendimento",
  ],
  situations: [
    "Ainda não invisto em tráfego pago",
    "Já invisto, mas os resultados são baixos",
    "Gero leads, mas tenho dificuldade para vender",
    "Já tenho resultados e quero escalar",
    "Preciso estruturar meu marketing",
  ],
  revenues: [
    "Ainda não faturo",
    "Até R$ 10 mil",
    "De R$ 10 mil a R$ 30 mil",
    "De R$ 30 mil a R$ 100 mil",
    "Acima de R$ 100 mil",
    "Prefiro não informar",
  ],
  submit: "Enviar meus dados pelo WhatsApp",
  privacyNote: "Suas informações serão utilizadas para dar continuidade ao contato comercial solicitado.",
  success: "Seus dados estão prontos. Confirme o envio da mensagem no WhatsApp para concluir o contato.",
};

export const FINAL_CTA = {
  text: "Seu próximo crescimento começa com uma estratégia bem estruturada.",
  cta: "Voltar ao formulário",
};
