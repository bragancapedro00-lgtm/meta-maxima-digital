import { Icon } from "@/components/ui/Icon";
import styles from "./HeroMap.module.css";

/**
 * Visualização conceitual do caminho entre o anúncio e a venda.
 * Sem números: não representa resultados reais de clientes.
 */
const STAGES = [
  { name: "Anúncio", desc: "Meta Ads · Instagram", chip: "Público definido" },
  { name: "Lead", desc: "Formulário · WhatsApp", chip: "Qualificação" },
  { name: "Atendimento", desc: "Primeiro contato e retorno", chip: "Ponto de atenção", flag: true },
  { name: "Proposta", desc: "Apresentação e negociação", chip: "Acompanhamento" },
  { name: "Venda", desc: "Faturamento", chip: "Conversão", final: true },
];

export function HeroMap() {
  return (
    <figure className={styles.map} aria-labelledby="mapa-legenda">
      {/* Versão completa (tablet e desktop) */}
      <div className={styles.panel}>
        <div className={styles.head}>
          <div>
            <p className={styles.headTitle}>Mapa comercial</p>
            <p className={styles.headSub}>Do anúncio à venda</p>
          </div>
          <span className={`mono ${styles.tag}`}>Visualização conceitual</span>
        </div>

        <div className={styles.stages}>
          <span className={styles.rail} aria-hidden="true">
            <span className={styles.signalTrack}>
              <span className={styles.signal} />
            </span>
          </span>
          <ol>
          {STAGES.map((s, i) => (
            <li
              key={s.name}
              className={`${styles.stage} ${s.flag ? styles.flag : ""} ${s.final ? styles.final : ""}`}
              style={{ "--i": i } as React.CSSProperties}
            >
              <span className={styles.node} aria-hidden="true">
                {s.final ? <Icon name="check" size={12} strokeWidth={2.5} /> : null}
              </span>
              <span className={styles.stageText}>
                <span className={styles.stageName}>{s.name}</span>
                <span className={styles.stageDesc}>{s.desc}</span>
              </span>
              <span className={styles.chip}>
                {s.flag && <Icon name="alert" size={14} />}
                {s.chip}
              </span>
            </li>
          ))}
          </ol>
        </div>
      </div>

      {/* Anotações flutuantes (somente telas largas) */}
      <div className={`${styles.float} ${styles.floatCrm}`} aria-hidden="true">
        <p className={`mono ${styles.floatLabel}`}>CRM · exemplo</p>
        <p className={styles.floatTitle}>Novo contato</p>
        <div className={styles.pills}>
          <span>Novo</span>
          <span className={styles.pillActive}>Em atendimento</span>
          <span>Proposta</span>
        </div>
      </div>

      <div className={`${styles.float} ${styles.floatDiag}`} aria-hidden="true">
        <span className={styles.diagIcon}>
          <Icon name="target" size={18} />
        </span>
        <div>
          <p className={styles.floatTitle}>Gargalo identificado</p>
          <p className={styles.floatText}>Contatos esfriam entre o lead e o atendimento.</p>
        </div>
      </div>

      {/* Versão compacta (celular) */}
      <div className={styles.compact} aria-hidden="true">
        <div className={styles.compactHead}>
          <span className={styles.headTitle}>Do anúncio à venda</span>
          <span className={`mono ${styles.tag}`}>Conceitual</span>
        </div>
        <div className={styles.compactWrap}>
          <span className={styles.compactRail}>
            <span className={styles.compactTrack}>
              <span className={styles.compactSignal} />
            </span>
          </span>
          <ol className={styles.compactRow}>
          {STAGES.map((s, i) => (
            <li
              key={s.name}
              className={`${styles.compactStage} ${s.flag ? styles.flag : ""} ${s.final ? styles.final : ""}`}
              style={{ "--i": i } as React.CSSProperties}
            >
              <span className={styles.node} />
              <span className={styles.compactLabel}>{s.name}</span>
            </li>
          ))}
          </ol>
        </div>
      </div>

      <figcaption id="mapa-legenda" className={styles.caption}>
        <Icon name="info" size={14} />
        Ilustração conceitual de como analisamos cada etapa. Não representa resultados de clientes.
      </figcaption>
    </figure>
  );
}
