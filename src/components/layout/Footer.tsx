import { SITE, PRIVACY_POLICY_URL } from "@/config/site";
import { Logo } from "@/components/ui/Logo";
import { Icon } from "@/components/ui/Icon";
import styles from "./Footer.module.css";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer} role="contentinfo">
      <div className="container">
        <div className={styles.content}>
          <div className={styles.brandBox}>
            <a href="#inicio" aria-label={`${SITE.name} — voltar ao início`} className={styles.brandLink}>
              <Logo />
            </a>
            <p className={styles.tagline}>{SITE.shortAbout}</p>
          </div>

          <div className={styles.noticeBox}>
            <p className={styles.dataNotice}>
              <strong>Tratamento de dados:</strong> As informações fornecidas neste site são utilizadas exclusivamente para dar prosseguimento ao atendimento comercial solicitado, respeitando a privacidade e os direitos dos titulares conforme a Lei Geral de Proteção de Dados (LGPD).
            </p>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © {currentYear} {SITE.name}. Todos os direitos reservados.
          </p>

          <div className={styles.links}>
            <a href={PRIVACY_POLICY_URL} className={styles.privacyLink}>
              Política de Privacidade
            </a>
            <a href="#inicio" className={styles.backToTop}>
              Voltar ao topo <Icon name="arrowUp" size={14} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
