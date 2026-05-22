"use client";

import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faSeedling, faPlay } from "@fortawesome/free-solid-svg-icons";
import { proofItems } from "@/lib/constants";
import { cn } from "@/lib/utils";

export default function Hero() {
  return (
    <section className="hero-section relative flex min-h-screen flex-col overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero.jpg"
          alt="Campo agrícola verde"
          fill
          priority
          className="object-cover object-center"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(15,32,16,0.88)_0%,rgba(26,58,28,0.75)_45%,rgba(26,58,28,0.50)_70%,rgba(15,32,16,0.70)_100%)]" />
      </div>

      {/* Content */}
      <div className="hero-content relative z-[2] flex max-w-[780px] flex-1 flex-col justify-center px-[5%] pt-[90px] pb-4">
        {/* Eyebrow */}
        <div className="hero-Eyebrow animate-fade-up-d1 mb-8 inline-flex items-center gap-[0.6rem] rounded-full border border-o400/40 bg-o400/15 px-4 py-[0.4rem] text-[0.78rem] font-medium tracking-[0.08em] text-o300 uppercase">
          <span className="animate-breathe-fast inline-block size-[6px] shrink-0 rounded-full bg-o300" />
          <FontAwesomeIcon icon={faLocationDot} />
          Feito na Serra da Ibiapaba — Ceará
        </div>

        {/* H1 */}
        <h1 className="hero-title animate-fade-up-d2 mb-[1.6rem] font-serif text-[clamp(3rem,6.5vw,5.8rem)] leading-none font-bold tracking-[-0.03em] text-white">
          Sua lavoura
          <br />
          <em className="text-g300 italic">organizada.</em>
          <br />
          Sua colheita
          <br />
          <span className="text-o300">valorizada.</span>
        </h1>

        {/* Sub */}
        <p className="hero-sub animate-fade-up-d3 mb-10 max-w-[520px] text-[1.1rem] leading-[1.75] font-light text-white/[0.72]">
          Plataforma de gestão e rastreabilidade agrícola criada para produtores e técnicos da Serra
          da Ibiapaba. Do plantio ao QR Code de origem, tudo em um lugar.
        </p>

        {/* CTAs */}
        <div className="hero-ctas animate-fade-up-d4 flex flex-wrap gap-4">
          <a
            href="#piloto"
            className="inline-flex items-center gap-[0.6rem] rounded-md bg-o400 px-8 py-[0.9rem] text-[0.95rem] font-semibold text-ink no-underline shadow-[0_4px_24px_rgba(232,150,42,0.4)] transition-all duration-[250ms] hover:-translate-y-0.5 hover:bg-[#d4821f] hover:shadow-[0_8px_32px_rgba(232,150,42,0.55)]"
          >
            <FontAwesomeIcon icon={faSeedling} /> Participar do piloto
          </a>
          <a
            href="#como"
            className="inline-flex items-center gap-[0.6rem] rounded-md border-[1.5px] border-white/25 bg-white/10 px-8 py-[0.9rem] text-[0.95rem] font-normal text-white no-underline backdrop-blur-[8px] transition-all duration-[250ms] hover:-translate-y-0.5 hover:bg-white/[0.18]"
          >
            <FontAwesomeIcon icon={faPlay} /> Ver como funciona
          </a>
        </div>
      </div>

      {/* Proof bar — full width, pinned to bottom */}
      <div className="hero-proof animate-fade-up-d5 relative z-[2] flex w-full border-t border-white/12 bg-white/[0.07] backdrop-blur-[12px]">
        {proofItems.map((item, i) => (
          <div
            key={item.label}
            className={cn(
              "flex flex-1 flex-col items-center px-[1.6rem] py-5",
              i < proofItems.length - 1 && "border-r border-white/10"
            )}
          >
            <span className="font-serif text-[1.8rem] leading-none font-bold text-white">
              {item.num}
            </span>
            <span className="mt-[3px] text-[0.7rem] text-white/50">{item.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
