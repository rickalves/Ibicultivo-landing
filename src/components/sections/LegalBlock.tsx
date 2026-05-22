import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faScaleBalanced } from "@fortawesome/free-solid-svg-icons";
import RevealWrapper from "@/components/ui/RevealWrapper";

const regulations = [
  {
    code: "INC 02/2018",
    title: "Rastreabilidade de frutas e hortaliças",
    desc: "MAPA/SDA — Exige registro de toda a cadeia de produção e rastreabilidade obrigatória para frutas e hortaliças frescas destinadas ao mercado interno.",
  },
  {
    code: "Lei 14.785/2023",
    title: "Rastreabilidade da produção vegetal",
    desc: "Estabelece a rastreabilidade como obrigação em toda a cadeia de produção vegetal no Brasil, incluindo registro de responsável técnico com CREA e ART.",
  },
  {
    code: "EUDR 2023",
    title: "Mercado europeu exige comprovação de origem",
    desc: "Regulamento da União Europeia que barra importações sem rastreabilidade completa da origem. Afeta diretamente exportações brasileiras de alimentos.",
  },
];

export default function LegalBlock() {
  return (
    <section className="bg-cream px-[5%] py-24">
      <RevealWrapper>
        <div className="mb-14 text-center">
          <span className="mb-[0.8rem] block text-[0.74rem] font-semibold tracking-[0.12em] text-g500 uppercase">
            Conformidade legal
          </span>
          <h2 className="font-serif text-[clamp(2rem,4vw,3.2rem)] leading-[1.08] font-bold tracking-[-0.03em] text-ink">
            A lei já exige.
            <br />
            <em className="text-g600 italic">O mercado já cobra.</em>
          </h2>
          <p className="mx-auto mt-[0.9rem] max-w-[520px] text-base leading-[1.75] text-muted">
            Rastreabilidade não é diferencial — é obrigação legal. O Ibicultivo gera automaticamente
            todos os registros que a lei exige.
          </p>
        </div>
      </RevealWrapper>

      <div className="legal-grid mx-auto grid max-w-[1100px] grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {regulations.map((reg, i) => (
          <RevealWrapper key={reg.code} delay={(i + 1) as 1 | 2 | 3}>
            <div className="box-border h-full rounded-lg border border-g600/10 bg-white p-8">
              <div className="mb-[1.2rem] inline-flex items-center gap-[0.5rem] rounded-sm bg-g100 px-[0.8rem] py-[0.3rem]">
                <FontAwesomeIcon icon={faScaleBalanced} className="text-[0.7rem] text-g600" />
                <span className="text-[0.7rem] font-semibold tracking-[0.06em] text-g600">
                  {reg.code}
                </span>
              </div>
              <h3 className="mb-[0.7rem] font-serif text-[1.25rem] leading-[1.25] font-bold text-ink">
                {reg.title}
              </h3>
              <p className="text-[0.83rem] leading-[1.65] text-muted">{reg.desc}</p>
            </div>
          </RevealWrapper>
        ))}
      </div>
    </section>
  );
}
