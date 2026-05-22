"use client";

import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShieldHalved,
  faBell,
  faFileExport,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { tecnicoFeatureList } from "@/lib/constants";

const iconMap = {
  "fa-shield-halved": faShieldHalved,
  "fa-bell": faBell,
  "fa-file-export": faFileExport,
};

export default function TecnicoBlock() {
  return (
    <div className="tecnico-block grid min-h-[580px] grid-cols-2">
      {/* Photo */}
      <div className="tec-photo relative min-h-[400px] overflow-hidden">
        <Image
          src="/images/plantacao-tomate.jpg"
          alt="Plantação de tomate na Serra da Ibiapaba"
          fill
          className="object-cover object-top"
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(15,32,16,0.25),transparent)]" />
      </div>

      {/* Content */}
      <div className="flex flex-col justify-center bg-g900 px-16 py-20">
        <span className="mb-[0.8rem] block text-[0.74rem] font-semibold tracking-[0.12em] text-g300 uppercase">
          Para o técnico agrícola
        </span>

        <h2 className="font-serif text-[clamp(1.8rem,3vw,2.6rem)] leading-[1.08] font-bold tracking-[-0.03em] text-white">
          Monitore dezenas de
          <br />
          <em className="text-o300 italic">produtores</em> de uma tela
        </h2>

        <p className="mt-[0.9rem] mb-10 max-w-[400px] text-base leading-[1.75] text-white/50">
          Chega de planilha. O Ibicultivo centraliza todos os seus produtores com dados reais.
        </p>

        <div className="mb-10 flex flex-col gap-[1.2rem]">
          {tecnicoFeatureList.map((feat) => (
            <div key={feat.title} className="flex items-start gap-4">
              <div className="flex size-[42px] shrink-0 items-center justify-center rounded-sm border border-g500/20 bg-g500/12 text-base text-g300">
                <FontAwesomeIcon icon={iconMap[feat.icon as keyof typeof iconMap]} />
              </div>
              <div>
                <h4 className="mb-[3px] text-[0.88rem] font-medium text-white">{feat.title}</h4>
                <p className="text-[0.78rem] leading-[1.55] text-white/[0.42]">{feat.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <a
          href="#piloto"
          className="inline-flex w-fit items-center gap-[0.4rem] rounded-sm bg-g700 px-[1.4rem] py-[0.55rem] text-[0.88rem] font-semibold text-white no-underline shadow-[0_2px_12px_rgba(45,107,48,0.25)] transition-all duration-200 hover:-translate-y-px hover:bg-g600 hover:shadow-[0_6px_20px_rgba(45,107,48,0.35)]"
        >
          Ver plano Cooperativa <FontAwesomeIcon icon={faArrowRight} />
        </a>
      </div>
    </div>
  );
}
