import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserTie, faBuilding, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import RevealWrapper from "@/components/ui/RevealWrapper";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";

interface Partner {
  icon: IconDefinition;
  type: string;
  benefit: string;
  how: string;
  iconBoxClass: string;
  benefitClass: string;
}

const partners: Partner[] = [
  {
    icon: faUserTie,
    type: "Técnico / Agrônomo",
    benefit: "Primeiros 5 clientes gratuitamente. Desconto progressivo por indicação.",
    how: "O técnico leva a plataforma para todos os seus clientes — cada agrônomo é um canal de distribuição.",
    iconBoxClass: "bg-g100 border-g600/20 text-g600",
    benefitClass: "text-g600",
  },
  {
    icon: faBuilding,
    type: "Cooperativa / Sindicato",
    benefit: "Painel coletivo de conformidade sem custo para a cooperativa.",
    how: "A cooperativa indica o Ibicultivo aos associados e recebe visão agregada da rastreabilidade de todos os filiados.",
    iconBoxClass: "bg-o400/12 border-o600/20 text-o600",
    benefitClass: "text-o600",
  },
  {
    icon: faCartShopping,
    type: "Supermercado / Exportador",
    benefit: "Integração direta com histórico de lotes recebidos.",
    how: "O comprador exige QR code de origem — o Ibicultivo é a solução pronta que o fornecedor já tem.",
    iconBoxClass: "bg-g100 border-g700/20 text-g700",
    benefitClass: "text-g700",
  },
];

export default function Partnerships() {
  return (
    <section id="parcerias" className="bg-parchment px-[5%] py-32">
      <RevealWrapper>
        <div className="mb-16 text-center">
          <span className="mb-[0.8rem] block text-[0.74rem] font-semibold tracking-[0.12em] text-g500 uppercase">
            Parcerias
          </span>
          <h2 className="font-serif text-[clamp(2rem,4vw,3.2rem)] leading-[1.08] font-bold tracking-[-0.03em] text-ink">
            Trabalhamos com quem
            <br />
            <em className="text-g600 italic">move a cadeia agrícola</em>
          </h2>
        </div>
      </RevealWrapper>

      <div className="partners-grid mx-auto grid max-w-[1100px] grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {partners.map((p, i) => (
          <RevealWrapper key={p.type} delay={(i + 1) as 1 | 2 | 3}>
            <div className="box-border h-full rounded-lg border border-g600/10 bg-cream p-[2.2rem]">
              <div
                className={`mb-[1.4rem] flex size-[46px] items-center justify-center rounded-[10px] border text-base ${p.iconBoxClass}`}
              >
                <FontAwesomeIcon icon={p.icon} />
              </div>
              <h3 className="mb-[0.8rem] font-serif text-[1.3rem] font-bold text-ink">{p.type}</h3>
              <p
                className={`mb-[0.8rem] text-[0.9rem] leading-[1.5] font-medium ${p.benefitClass}`}
              >
                {p.benefit}
              </p>
              <p className="text-[0.82rem] leading-[1.65] text-muted">{p.how}</p>
            </div>
          </RevealWrapper>
        ))}
      </div>
    </section>
  );
}
