"use client";

import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faLaptop,
  faSeedling,
  faChartPie,
  faCheck,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { cva } from "class-variance-authority";
import RevealWrapper from "@/components/ui/RevealWrapper";
import { cn } from "@/lib/utils";
import { agricultorFeatures, tecnicoFeatures } from "@/lib/constants";

export default function Audiences() {
  return (
    <section id="funcionalidades" className="bg-parchment px-[5%] py-32">
      <RevealWrapper>
        <div className="mb-14">
          <span className="mb-[0.8rem] block text-[0.74rem] font-semibold tracking-[0.12em] text-g500 uppercase">
            Para quem é o Ibicultivo
          </span>
          <h2 className="font-serif text-[clamp(2rem,4vw,3.2rem)] leading-[1.08] font-bold tracking-[-0.03em] text-ink">
            Uma ferramenta, <em className="text-g700 italic">dois perfis</em>, um objetivo
          </h2>
          <p className="mt-[0.9rem] max-w-[520px] text-base leading-[1.75] text-muted">
            Do agricultor familiar ao técnico agrícola — cada um com a interface que precisa e os
            dados que importam.
          </p>
        </div>
      </RevealWrapper>

      <div className="audience-grid grid grid-cols-2 gap-8">
        {/* Agricultor */}
        <RevealWrapper delay={1}>
          <AudCard
            variant="agricultor"
            badgeIcon={<FontAwesomeIcon icon={faUser} />}
            badgeLabel="Para o Agricultor"
            bodyIcon={<FontAwesomeIcon icon={faSeedling} />}
            title="Simples como anotar no caderno. Poderoso como nunca foi."
            desc="Sem complicação técnica. Cadastre seu cultivo, registre plantio e colheita, e gere um QR Code para valorizar seu produto na hora da venda."
            features={agricultorFeatures}
            ctaHref="#piloto"
            ctaLabel="Quero participar do piloto"
            image="/images/agricultor.jpg"
            imageAlt="Agricultor colhendo tomate"
          />
        </RevealWrapper>

        {/* Técnico */}
        <RevealWrapper delay={2}>
          <AudCard
            variant="tecnico"
            badgeIcon={<FontAwesomeIcon icon={faLaptop} />}
            badgeLabel="Para o Técnico"
            bodyIcon={<FontAwesomeIcon icon={faChartPie} />}
            title="Gerencie múltiplos produtores. Decida com dados reais."
            desc="Dashboards completos, relatórios por safra, monitoramento de insumos e apoio técnico embasado em dados confiáveis."
            features={tecnicoFeatures}
            ctaHref="#piloto"
            ctaLabel="Quero participar do piloto"
            image="/images/tecnico-tablet.jpg"
            imageAlt="Técnico agrícola com tablet"
          />
        </RevealWrapper>
      </div>
    </section>
  );
}

interface AudCardProps {
  variant: "agricultor" | "tecnico";
  badgeIcon: React.ReactNode;
  badgeLabel: string;
  bodyIcon: React.ReactNode;
  title: string;
  desc: string;
  features: string[];
  ctaHref: string;
  ctaLabel: string;
  image: string;
  imageAlt: string;
}

const badgeVariants = cva(
  "absolute top-6 left-6 z-[2] flex items-center gap-[0.5rem] rounded-full border bg-white/10 px-4 py-[0.4rem] text-[0.72rem] font-medium tracking-[0.06em] uppercase backdrop-blur-[10px]",
  {
    variants: {
      variant: {
        agricultor: "border-g300/40 text-g500",
        tecnico: "border-o400/40 text-o400",
      },
    },
  }
);

const overlayVariants = cva("absolute inset-0", {
  variants: {
    variant: {
      agricultor:
        "bg-[linear-gradient(to_top,rgba(10,28,11,1)_0%,rgba(10,28,11,0.82)_45%,rgba(10,28,11,0.35)_75%,rgba(10,28,11,0.08)_100%)]",
      tecnico:
        "bg-[linear-gradient(to_top,rgba(20,48,22,1)_0%,rgba(20,48,22,0.80)_45%,rgba(20,48,22,0.32)_75%,rgba(20,48,22,0.06)_100%)]",
    },
  },
});

const iconBoxVariants = cva(
  "mb-4 flex size-[48px] items-center justify-center rounded-[12px] border text-[1.2rem]",
  {
    variants: {
      variant: {
        agricultor: "border-g300/25 bg-g300/15 text-g300",
        tecnico: "border-o400/25 bg-o400/15 text-o300",
      },
    },
  }
);

const checkVariants = cva(
  "flex size-[20px] shrink-0 items-center justify-center rounded-full text-[0.65rem]",
  {
    variants: {
      variant: {
        agricultor: "bg-g300/20 text-g300",
        tecnico: "bg-o400/20 text-o300",
      },
    },
  }
);

const ctaVariants = cva(
  "mt-[1.6rem] inline-flex items-center gap-[0.5rem] rounded-sm px-[1.4rem] py-[0.7rem] text-[0.85rem] font-medium no-underline transition-all duration-200 hover:-translate-y-px",
  {
    variants: {
      variant: {
        agricultor:
          "bg-g300 text-g900 hover:bg-[#6dba72] hover:shadow-[0_6px_20px_rgba(130,201,135,0.4)]",
        tecnico:
          "bg-o400 text-ink hover:bg-[#d4821f] hover:shadow-[0_6px_20px_rgba(232,150,42,0.45)]",
      },
    },
  }
);

function AudCard({
  variant,
  badgeIcon,
  badgeLabel,
  bodyIcon,
  title,
  desc,
  features,
  ctaHref,
  ctaLabel,
  image,
  imageAlt,
}: AudCardProps) {
  return (
    <div className="relative flex min-h-[580px] cursor-default flex-col justify-end overflow-hidden rounded-xl transition-[transform,box-shadow] duration-[400ms] hover:-translate-y-[6px] hover:shadow-[0_24px_60px_rgba(15,32,16,0.2)]">
      {/* Image */}
      <div className="absolute inset-0 z-0">
        <Image src={image} alt={imageAlt} fill className="object-cover" />
        <div className={overlayVariants({ variant })} />
      </div>

      {/* Badge */}
      <div className={badgeVariants({ variant })}>
        {badgeIcon} {badgeLabel}
      </div>

      {/* Body */}
      <div className="relative z-[1] px-[2.2rem] pt-8 pb-[2.4rem]">
        <div className={iconBoxVariants({ variant })}>{bodyIcon}</div>

        <h3 className="mb-[0.8rem] font-serif text-[1.85rem] leading-[1.1] font-bold tracking-[-0.02em] text-white [text-shadow:0_2px_16px_rgba(0,0,0,0.8),0_1px_4px_rgba(0,0,0,0.6)]">
          {title}
        </h3>

        <p className="mb-[1.4rem] text-[0.87rem] leading-[1.7] text-white/80 [text-shadow:0_1px_6px_rgba(0,0,0,0.6)]">
          {desc}
        </p>

        <div className="flex flex-col gap-[0.55rem]">
          {features.map((f) => (
            <div
              key={f}
              className="flex items-center gap-[0.7rem] text-[0.82rem] text-white/90 [text-shadow:0_1px_4px_rgba(0,0,0,0.5)]"
            >
              <div className={checkVariants({ variant })}>
                <FontAwesomeIcon icon={faCheck} />
              </div>
              {f}
            </div>
          ))}
        </div>

        <a href={ctaHref} className={cn(ctaVariants({ variant }))}>
          {ctaLabel} <FontAwesomeIcon icon={faArrowRight} />
        </a>
      </div>
    </div>
  );
}
