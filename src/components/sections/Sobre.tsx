import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMountainSun, faPeopleGroup, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import RevealWrapper from "@/components/ui/RevealWrapper";
import { originStats } from "@/lib/constants";
import { cn } from "@/lib/utils";

const iconMap = {
  "fa-mountain-sun": faMountainSun,
  "fa-people-group": faPeopleGroup,
  "fa-location-dot": faLocationDot,
};

export default function Sobre() {
  return (
    <section id="sobre" className="relative overflow-hidden bg-parchment px-[5%] py-32">
      <div className="sobre-orb" />

      <div className="sobre-grid grid grid-cols-2 items-center gap-20">
        {/* Founder quote */}
        <RevealWrapper>
          <div className="relative">
            <div className="quote-mark font-serif" />
            <p className="relative z-[1] mb-8 pl-8 font-serif text-2xl leading-[1.55] font-normal text-ink italic">
              Nascemos na Serra da Ibiapaba. Vimos de perto como um produtor de tomate perde a venda
              por não ter como provar de onde vem. O Ibicultivo foi construído para mudar isso.
            </p>
            <div className="pl-8">
              <p className="text-[0.88rem] font-semibold text-ink">Time Ibicultivo</p>
              <p className="text-[0.75rem] text-muted">Guaraciaba do Norte — CE</p>
            </div>
          </div>
        </RevealWrapper>

        {/* Origin stats */}
        <RevealWrapper delay={2}>
          <div>
            {originStats.map((stat, i) => (
              <div
                key={stat.val}
                className={cn(
                  "flex items-center gap-6 pb-[1.6rem]",
                  i > 0 && "pt-[1.6rem]",
                  i < originStats.length - 1 && "border-b border-g600/10"
                )}
              >
                <div className="flex size-[46px] shrink-0 items-center justify-center rounded-[10px] border border-g600/15 bg-g100 text-base text-g600">
                  <FontAwesomeIcon icon={iconMap[stat.icon as keyof typeof iconMap]} />
                </div>
                <div>
                  <div className="font-serif text-[1.8rem] leading-none font-bold text-g700">
                    {stat.val}
                  </div>
                  <div className="mt-[3px] text-[0.78rem] leading-[1.5] text-muted">{stat.ctx}</div>
                </div>
              </div>
            ))}
          </div>
        </RevealWrapper>
      </div>
    </section>
  );
}
