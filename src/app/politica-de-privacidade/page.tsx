import type { Metadata } from "next";
import Link from "next/link";
import { SITE, WHATSAPP_NUMBER } from "@/config/site";
import { formatBrazilianPhone } from "@/lib/whatsapp";
import styles from "./privacy.module.css";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description:
    "Informações sobre finalidade, retenção, compartilhamento e direitos dos titulares de dados da Meta Máxima Digital.",
  alternates: {
    canonical: "/politica-de-privacidade/",
  },
};

export default function PrivacyPolicyPage() {
  const formattedPhone = WHATSAPP_NUMBER ? formatBrazilianPhone(WHATSAPP_NUMBER) : "";

  return (
    <div className={`section ${styles.wrapper}`}>
      <div className="container">
        <nav aria-label="Navegação secundária" className={styles.backNav}>
          <Link href="/" className={styles.backLink}>
            ← Voltar para a página inicial
          </Link>
        </nav>

        <article className={styles.content}>
          <header className={styles.header}>
            <span className={`mono ${styles.tag}`}>Privacidade e LGPD</span>
            <h1 className={`h1 ${styles.title}`}>Política de Privacidade</h1>
            <p className={styles.updatedAt}>Última atualização: Outubro de 2026</p>
          </header>

          <section className={styles.sectionBlock}>
            <h2>1. Apresentação e Compromisso</h2>
            <p>
              A <strong>{SITE.name}</strong> valoriza a privacidade, a transparência e a segurança das informações dos visitantes e potenciais parceiros comerciais. Este documento esclarece as práticas reais de tratamento de dados pessoais coletados por meio da nossa landing page, em consonância com as diretrizes da Lei Geral de Proteção de Dados (Lei nº 13.709/2018 — LGPD).
            </p>
          </section>

          <section className={styles.sectionBlock}>
            <h2>2. Dados Coletados e Finalidade do Tratamento</h2>
            <p>
              Adotamos o princípio da necessidade e da minimização da coleta de dados. Por meio do nosso formulário de diagnóstico, coletamos apenas:
            </p>
            <ul>
              <li><strong>Nome completo ou de contato:</strong> para identificar com quem estamos dialogando;</li>
              <li><strong>WhatsApp com DDD:</strong> para viabilizar a conversa de diagnóstico comercial solicitada;</li>
              <li><strong>Segmento de atuação:</strong> para compreender o contexto da sua operação e direcionar a análise inicial.</li>
            </ul>
            <p>
              <strong>Finalidade única:</strong> Viabilizar o atendimento comercial solicitado pelo visitante e elaborar uma avaliação estratégica preliminar para seu negócio. Não condicionamos o atendimento à aceitação de listas de e-mail marketing genéricas.
            </p>
          </section>

          <section className={styles.sectionBlock}>
            <h2>3. Dinâmica do Envio via WhatsApp</h2>
            <p>
              Ao preencher e enviar o formulário, as informações informadas geram uma mensagem estruturada no aplicativo WhatsApp oficial (wa.me) direcionada ao canal de atendimento da Meta Máxima Digital.
            </p>
            <p>
              A abertura da conversa no navegador ou aplicativo não constitui envio automático de dados a um banco de dados externo: o envio efetivo da mensagem é realizado e confirmado diretamente pelo próprio titular dentro da plataforma do WhatsApp.
            </p>
          </section>

          <section className={styles.sectionBlock}>
            <h2>4. Compartilhamento de Dados</h2>
            <p>
              A Meta Máxima Digital não vende, não aluga e não comercializa dados pessoais com terceiros. As informações trafegam exclusivamente por meio do serviço de mensagens WhatsApp (operado pela Meta Platforms Inc.) para viabilizar a comunicação solicitada.
            </p>
          </section>

          <section className={styles.sectionBlock}>
            <h2>5. Cookies e Tecnologias de Rastreamento</h2>
            <p>
              Podemos utilizar tecnologias de mensuração (como o Meta Pixel e ferramentas de análise de tráfego) para entender a efetividade técnica e o alcance de nossas campanhas de anúncios.
            </p>
            <p>
              Essas ferramentas registram eventos anônimos de navegação (como visualização de página e interações com botões de contato). <strong>Nenhum dado pessoal</strong> (nome, telefone ou mensagem digitada) é transmitido aos servidores de publicidade nos parâmetros de rastreamento de eventos.
            </p>
          </section>

          <section className={styles.sectionBlock}>
            <h2>6. Retenção e Descarte</h2>
            <p>
              Os dados de contato permanecem arquivados no histórico de mensagens do WhatsApp enquanto houver relacionamento comercial ativo, interesse mútuo de atendimento ou cumprimento de obrigações legais, sendo excluídos mediante solicitação do titular.
            </p>
          </section>

          <section className={styles.sectionBlock}>
            <h2>7. Direitos dos Titulares de Dados</h2>
            <p>
              Conforme previsto no art. 18 da LGPD, você possui o direito de:
            </p>
            <ul>
              <li>Confirmar a existência de tratamento dos seus dados;</li>
              <li>Acessar e atualizar suas informações cadastrais;</li>
              <li>Solicitar a correção de dados incompletos ou inexatos;</li>
              <li>Solicitar a exclusão definitiva dos seus dados dos nossos canais de atendimento.</li>
            </ul>
          </section>

          <section className={styles.sectionBlock}>
            <h2>8. Canal de Contato para Privacidade</h2>
            <p>
              Para esclarecer qualquer dúvida sobre o tratamento de seus dados ou para solicitar a exclusão de seu contato, fale diretamente com nossa equipe pelo canal oficial de WhatsApp {formattedPhone ? `(${formattedPhone})` : ""}.
            </p>
          </section>
        </article>
      </div>
    </div>
  );
}
