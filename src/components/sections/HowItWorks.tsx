import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faPenToSquare,
  faQrcode,
  faHandHoldingDollar,
} from "@fortawesome/free-solid-svg-icons";
import RevealWrapper from "@/components/ui/RevealWrapper";
import { steps } from "@/lib/constants";

const iconMap = {
  "fa-house": faHouse,
  "fa-pen-to-square": faPenToSquare,
  "fa-qrcode": faQrcode,
  "fa-hand-holding-dollar": faHandHoldingDollar,
};

export default function HowItWorks() {
  return (
    <section id="como" className="relative overflow-hidden bg-g900 px-[5%] py-32">
      <div className="how-bg-orb" />

      <RevealWrapper>
        <div className="mb-16">
          <span className="mb-[0.8rem] block text-[0.74rem] font-semibold tracking-[0.12em] text-g300 uppercase">
            Como funciona
          </span>
          <h2 className="font-serif text-[clamp(2rem,4vw,3.2rem)] leading-[1.08] font-bold tracking-[-0.03em] text-white">
            Do plantio ao comprador <em className="text-g300 italic">em 4 passos</em>
          </h2>
          <p className="mt-[0.9rem] max-w-[520px] text-base leading-[1.75] text-white/45">
            Fluxo pensado para quem trabalha debaixo do sol — rápido, direto e sem burocracia.
          </p>
        </div>
      </RevealWrapper>

      <div className="steps-grid relative mt-16 grid grid-cols-4 gap-8">
        <div className="steps-connector" />

        {steps.map((step, i) => (
          <RevealWrapper key={step.title} delay={(i + 1) as 1 | 2 | 3 | 4}>
            <div className="step-card relative z-[1] text-center">
              <div className="step-orb step-orb-wrap relative mx-auto mb-[1.4rem] flex size-[78px] items-center justify-center rounded-full border-[1.5px] border-g600 bg-g800 text-[1.4rem] text-g300 transition-all duration-300">
                <FontAwesomeIcon icon={iconMap[step.icon as keyof typeof iconMap]} />
              </div>
              <p className="mb-[0.4rem] text-[0.92rem] font-semibold text-white">{step.title}</p>
              <p className="text-[0.78rem] leading-[1.65] text-white/[0.42]">{step.desc}</p>
            </div>
          </RevealWrapper>
        ))}
      </div>
    </section>
  );
}
