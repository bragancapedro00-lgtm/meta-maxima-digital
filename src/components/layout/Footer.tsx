import { SITE, SOCIAL_LINKS, PRIVACY_POLICY_URL } from "@/config/site";
import { Logo } from "@/components/ui/Logo";
import { Icon } from "@/components/ui/Icon";
import styles from "./Footer.module.css";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer} role="contentinfo">
      <div className="container">
        <div className={styles.top}>
          <div className={styles.brandCol}>
            <a href="#inicio" aria-label={`${SITE.name} — voltar ao topo`}>
              <Logo />
            </a>
            <p className={styles.about}>{SITE.shortAbout}</p>
          </div>

          <div className={styles.navCol}>
            <p className={styles.navTitle}>Navegação</p>
            <ul className={styles.links}>
              <li>
                <a href="#solucoes">Soluções</a>
              </li>
              <li>
                <a href="#como-funciona">Como funciona</a>
              </li>
              <li>
                <a href="#escolas">Setor Educacional</a>
              </li>
              <li>
                <a href="#perguntas-frequentes">Perguntas frequentes</a>
              </li>
              <li>
                <a href="#contato">Falar com especialista</a>
              </li>
            </ul>
          </div>

          {/* Redes sociais oficiais somente se cadastradas */}
          {SOCIAL_LINKS.length > 0 && (
            <div className={styles.socialCol}>
              <p className={styles.navTitle}>Canais oficiais</p>
              <ul className={styles.socialList}>
                {SOCIAL_LINKS.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.socialLink}
                    >
                      <span>{link.label}</span>
                      <Icon name="external" size={14} />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © {currentYear} {SITE.name}. Todos os direitos reservados.
          </p>

          <div className={styles.legal}>
            {PRIVACY_POLICY_URL ? (
              <a href={PRIVACY_POLICY_URL} className={styles.legalLink}>
                Política de Privacidade
              </a>
            ) : null}
            <a href="#inicio" className={styles.backToTop}>
              Voltar ao topo <Icon name="arrowUp" size={14} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
