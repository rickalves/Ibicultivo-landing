"use client";

import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSeedling } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import RevealWrapper from "@/components/ui/RevealWrapper";
import { whatsappUrl } from "@/lib/constants";

export default function CtaFinal() {
  return (
    <section
      id="contato"
      className="relative flex min-h-[480px] items-center justify-center overflow-hidden text-center"
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/cta-verduras.jpg"
          alt="Campo agrícola ao entardecer"
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-g900/86" />
      </div>

      {/* Content */}
      <div className="relative z-[2] max-w-[640px] px-8 py-16">
        <RevealWrapper>
          <span className="mb-[0.8rem] block text-center text-[0.74rem] font-semibold tracking-[0.12em] text-g300 uppercase">
            Programa Piloto
          </span>

          <h2 className="mb-4 font-serif text-[clamp(2rem,4vw,3.2rem)] leading-[1.08] font-bold tracking-[-0.03em] text-white">
            Sua lavoura merece
            <br />
            <em className="text-o300 italic">mais do que um caderno.</em>
          </h2>

          <p className="mb-10 text-[0.98rem] text-white/[0.52]">
            Seja um dos primeiros da Ibiapaba. Acesso gratuito durante o piloto.
          </p>

          <div className="flex flex-col items-stretch gap-4 sm:flex-row sm:justify-center">
            <a
              href="#piloto"
              className="inline-flex items-center justify-center gap-[0.6rem] rounded-md bg-o400 px-8 py-[0.9rem] text-[0.95rem] font-semibold text-ink no-underline shadow-[0_4px_24px_rgba(232,150,42,0.4)] transition-all duration-[250ms] hover:-translate-y-0.5 hover:bg-[#d4821f] hover:shadow-[0_8px_32px_rgba(232,150,42,0.55)]"
            >
              <FontAwesomeIcon icon={faSeedling} /> Quero participar do piloto
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-[0.6rem] rounded-md border-[1.5px] border-white/25 bg-white/10 px-8 py-[0.9rem] text-[0.95rem] font-normal text-white no-underline backdrop-blur-[8px] transition-all duration-[250ms] hover:-translate-y-0.5 hover:bg-white/[0.18]"
            >
              <FontAwesomeIcon icon={faWhatsapp} /> Falar no WhatsApp
            </a>
          </div>
        </RevealWrapper>
      </div>
    </section>
  );
}
