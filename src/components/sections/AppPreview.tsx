import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartBar,
  faSeedling,
  faScaleBalanced,
  faTruck,
} from "@fortawesome/free-solid-svg-icons";
import RevealWrapper from "@/components/ui/RevealWrapper";
import ChartBars from "@/components/ui/ChartBars";
import QRCodeSvg from "@/components/ui/QRCodeSvg";
import { bentoBarHeights, bentoLotes } from "@/lib/constants";
import { cn } from "@/lib/utils";

const dotClass = {
  green: "bg-g400",
  orange: "bg-o400",
  blue: "bg-[#5B8ED6]",
};

const tagClass = {
  green: "bg-g400/12 text-g600",
  orange: "bg-o400/12 text-o600",
};

export default function AppPreview() {
  return (
    <section className="bg-parchment px-[5%] py-32">
      <RevealWrapper>
        <div className="mb-14">
          <span className="mb-[0.8rem] block text-[0.74rem] font-semibold tracking-[0.12em] text-g500 uppercase">
            Plataforma
          </span>
          <h2 className="font-serif text-[clamp(2rem,4vw,3.2rem)] leading-[1.08] font-bold tracking-[-0.03em] text-ink">
            Tudo que você precisa, <em className="text-g600 italic">num só painel</em>
          </h2>
          <p className="mt-[0.9rem] max-w-[520px] text-base leading-[1.75] text-muted">
            Interface limpa, dados em tempo real, sem curva de aprendizado.
          </p>
        </div>
      </RevealWrapper>

      {/* Bento grid */}
      <div className="mt-14 grid grid-cols-12 gap-[1.2rem]">
        {/* Stats card — col-span-7 */}
        <RevealWrapper className="bento-s7 col-span-7">
          <div className="rounded-lg border border-g600/10 bg-g800 p-8 pb-0 transition-[transform,box-shadow] duration-300">
            <div className="mb-[0.8rem] flex items-center gap-[0.5rem] text-[0.7rem] font-medium tracking-[0.08em] text-g300 uppercase">
              <FontAwesomeIcon icon={faChartBar} className="text-[0.75rem]" /> Desempenho desta
              safra
            </div>
            <div className="mb-[0.3rem] font-serif text-[1.2rem] font-semibold text-white">
              Safra de Tomate — Lote #0034 · São Benedito
            </div>
            <div className="mt-[1.4rem] grid grid-cols-2 gap-4">
              {[
                { val: "6", lbl: "Relatórios técnicos (R-01 a R-06)" },
                { val: "5 min", lbl: "Para completar o onboarding" },
              ].map(({ val, lbl }) => (
                <div key={lbl} className="rounded-sm bg-white/[0.06] px-4 py-[0.9rem]">
                  <div className="font-serif text-[1.9rem] leading-none font-bold text-g300">
                    {val}
                  </div>
                  <div className="mt-[3px] text-[0.68rem] text-white/[0.38]">{lbl}</div>
                </div>
              ))}
            </div>
            <ChartBars bars={bentoBarHeights} />
          </div>
        </RevealWrapper>

        {/* Lotes card — col-span-5 */}
        <RevealWrapper delay={1} className="bento-s5 col-span-5">
          <div className="rounded-lg border border-g600/10 bg-cream p-[1.6rem] transition-[transform,box-shadow] duration-300">
            <div className="mb-[0.8rem] flex items-center gap-[0.5rem] text-[0.7rem] font-medium tracking-[0.08em] text-muted uppercase">
              <FontAwesomeIcon icon={faSeedling} className="text-[0.75rem]" /> Cultivos ativos
            </div>
            {bentoLotes.map((lote) => (
              <div
                key={lote.name}
                className="flex items-center gap-[0.85rem] border-b border-g600/[0.08] py-[0.78rem]"
              >
                <div
                  className={cn(
                    "size-[9px] shrink-0 rounded-full",
                    dotClass[lote.dot as keyof typeof dotClass]
                  )}
                />
                <span className="flex-1 text-[0.83rem] font-medium text-ink">{lote.name}</span>
                <span className="text-[0.72rem] text-muted">{lote.area}</span>
                <span
                  className={cn(
                    "rounded-full px-[9px] py-[3px] text-[0.67rem] font-medium",
                    tagClass[lote.tagType as keyof typeof tagClass]
                  )}
                >
                  {lote.tag}
                </span>
              </div>
            ))}
          </div>
        </RevealWrapper>

        {/* QR card — col-span-4 */}
        <RevealWrapper delay={2} className="bento-s4 col-span-4">
          <div className="flex h-full flex-col items-center justify-center rounded-lg border border-g600/10 bg-g700 p-[3.1rem] text-center transition-[transform,box-shadow] duration-300">
            <div className="mb-4">
              <QRCodeSvg />
            </div>
            <p className="text-[0.75rem] leading-[1.55] text-white/65">
              <strong className="font-medium text-g200">QR Code de origem</strong>
              <br />O comprador rastreia a procedência com um scan
            </p>
          </div>
        </RevealWrapper>

        {/* Conformidade card — col-span-4 */}
        <RevealWrapper delay={3} className="bento-s4 col-span-4">
          <div className="h-full rounded-lg border border-g600/10 bg-cream p-[1.6rem] transition-[transform,box-shadow] duration-300">
            <div className="mb-[0.8rem] flex items-center gap-[0.5rem] text-[0.7rem] font-medium tracking-[0.08em] text-muted uppercase">
              <FontAwesomeIcon icon={faScaleBalanced} className="text-[0.75rem]" /> Conformidade
              legal
            </div>
            {[
              { code: "INC 02/2018", label: "Rastreabilidade de hortaliças" },
              { code: "Lei 14.785/2023", label: "Produção vegetal nacional" },
              { code: "EUDR 2023", label: "Exportação para a Europa" },
            ].map(({ code, label }) => (
              <div key={code} className="border-b border-g600/[0.08] py-[0.65rem]">
                <div className="text-[0.78rem] font-semibold text-g700">{code}</div>
                <div className="mt-[2px] text-[0.7rem] text-muted">{label}</div>
              </div>
            ))}
          </div>
        </RevealWrapper>

        {/* Expedições card — col-span-4 */}
        <RevealWrapper delay={4} className="bento-s4 col-span-4">
          <div className="h-full rounded-lg border border-g600/10 bg-g800 p-[1.6rem] transition-[transform,box-shadow] duration-300">
            <div className="mb-[0.8rem] flex items-center gap-[0.5rem] text-[0.7rem] font-medium tracking-[0.08em] text-g300 uppercase">
              <FontAwesomeIcon icon={faTruck} className="text-[0.75rem]" /> Rastreio de expedições
            </div>
            <p className="mb-4 text-[0.82rem] leading-[1.6] text-white/55">
              Comprador, nota fiscal, quantidade e placa registrados por lote.
            </p>
            {[
              "Comprador identificado",
              "Nota fiscal vinculada",
              "Placa do veículo",
              "Quantidade por lote",
            ].map((item) => (
              <div key={item} className="mb-[0.45rem] flex items-center gap-[0.5rem]">
                <div className="size-[6px] shrink-0 rounded-full bg-g400" />
                <span className="text-[0.76rem] text-white/55">{item}</span>
              </div>
            ))}
          </div>
        </RevealWrapper>
      </div>
    </section>
  );
}
