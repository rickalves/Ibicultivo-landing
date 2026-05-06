"use client";

import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLaptop, faSeedling, faChartPie, faCheck, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import RevealWrapper from "@/components/ui/RevealWrapper";
import { agricultorFeatures, tecnicoFeatures } from "@/lib/constants";

export default function Audiences() {
  return (
    <section id="funcionalidades" style={{ padding: "8rem 5%", background: "#FAF7F2" }}>
      <RevealWrapper>
        <div style={{ marginBottom: "3.5rem" }}>
          <span style={{ fontSize: "0.74rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "#3D8C41", marginBottom: "0.8rem", display: "block" }}>
            Para quem é o Ibicultivo
          </span>
          <h2 style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "clamp(2rem, 4vw, 3.2rem)", fontWeight: 700, lineHeight: 1.08, letterSpacing: "-0.03em", color: "#0F1A10" }}>
            Uma ferramenta, <em style={{ fontStyle: "italic", color: "#2D6B30" }}>dois perfis</em>, um objetivo
          </h2>
          <p style={{ fontSize: "1rem", color: "#5A6B5C", lineHeight: 1.75, maxWidth: 520, marginTop: "0.9rem" }}>
            Do agricultor familiar ao técnico agrícola — cada um com a interface que precisa e os dados que importam.
          </p>
        </div>
      </RevealWrapper>

      <div className="audience-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }}>
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
            ctaHref="#"
            ctaLabel="Começar grátis"
            image="https://images.unsplash.com/photo-1595113316349-9fa4eb24f884?w=900&q=80&fit=crop"
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
            ctaHref="#planos"
            ctaLabel="Ver plano Cooperativa"
            image="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=900&q=80&fit=crop"
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

function AudCard({ variant, badgeIcon, badgeLabel, bodyIcon, title, desc, features, ctaHref, ctaLabel, image, imageAlt }: AudCardProps) {
  const isAg = variant === "agricultor";

  const accentColor = isAg ? "#82C987" : "#F5B84A";
  const badgeBorder = isAg ? "rgba(130,201,135,0.4)" : "rgba(232,150,42,0.4)";
  const badgeColor = isAg ? "#B8E3BB" : "#F5B84A";
  const overlayGradient = isAg
    ? "linear-gradient(to top, rgba(10,28,11,0.96) 0%, rgba(10,28,11,0.55) 50%, rgba(10,28,11,0.15) 100%)"
    : "linear-gradient(to top, rgba(20,48,22,0.96) 0%, rgba(20,48,22,0.50) 50%, rgba(20,48,22,0.12) 100%)";
  const iconBg = isAg ? "rgba(130,201,135,0.15)" : "rgba(232,150,42,0.15)";
  const iconBorder = isAg ? "rgba(130,201,135,0.25)" : "rgba(232,150,42,0.25)";
  const checkBg = isAg ? "rgba(130,201,135,0.2)" : "rgba(232,150,42,0.2)";
  const ctaBg = isAg ? "#82C987" : "#E8962A";
  const ctaColor = isAg ? "#0F2010" : "#0F1A10";

  return (
    <div
      style={{
        borderRadius: "var(--r-xl)",
        overflow: "hidden",
        position: "relative",
        minHeight: 580,
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        transition: "transform 0.4s cubic-bezier(.25,.46,.45,.94), box-shadow 0.4s",
        cursor: "default",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-6px)";
        e.currentTarget.style.boxShadow = "0 24px 60px rgba(15,32,16,0.2)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      {/* Image */}
      <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
        <Image src={image} alt={imageAlt} fill style={{ objectFit: "cover" }} />
        <div style={{ position: "absolute", inset: 0, background: overlayGradient }} />
      </div>

      {/* Badge */}
      <div
        style={{
          position: "absolute",
          top: "1.5rem",
          left: "1.5rem",
          zIndex: 2,
          background: "rgba(255,255,255,0.1)",
          border: `1px solid ${badgeBorder}`,
          backdropFilter: "blur(10px)",
          color: badgeColor,
          fontSize: "0.72rem",
          fontWeight: 500,
          letterSpacing: "0.06em",
          textTransform: "uppercase",
          padding: "0.4rem 1rem",
          borderRadius: 100,
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
        }}
      >
        {badgeIcon} {badgeLabel}
      </div>

      {/* Body */}
      <div style={{ padding: "2rem 2.2rem 2.4rem", position: "relative", zIndex: 1 }}>
        <div
          style={{
            width: 48,
            height: 48,
            borderRadius: 12,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "1rem",
            fontSize: "1.2rem",
            background: iconBg,
            color: accentColor,
            border: `1px solid ${iconBorder}`,
          }}
        >
          {bodyIcon}
        </div>

        <h3
          style={{
            fontFamily: "var(--font-cormorant), serif",
            fontSize: "1.85rem",
            fontWeight: 700,
            color: "#fff",
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
            marginBottom: "0.8rem",
          }}
        >
          {title}
        </h3>

        <p style={{ fontSize: "0.87rem", color: "rgba(255,255,255,0.58)", lineHeight: 1.7, marginBottom: "1.4rem" }}>
          {desc}
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: "0.55rem" }}>
          {features.map((f) => (
            <div key={f} style={{ display: "flex", alignItems: "center", gap: "0.7rem", fontSize: "0.82rem", color: "rgba(255,255,255,0.82)" }}>
              <div style={{ width: 20, height: 20, borderRadius: "50%", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.65rem", background: checkBg, color: accentColor }}>
                <FontAwesomeIcon icon={faCheck} />
              </div>
              {f}
            </div>
          ))}
        </div>

        <a
          href={ctaHref}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            marginTop: "1.6rem",
            fontSize: "0.85rem",
            fontWeight: 500,
            textDecoration: "none",
            padding: "0.7rem 1.4rem",
            borderRadius: "var(--r-sm)",
            background: ctaBg,
            color: ctaColor,
            transition: "all 0.2s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = isAg ? "#6dba72" : "#d4821f";
            e.currentTarget.style.transform = "translateY(-1px)";
            e.currentTarget.style.boxShadow = isAg
              ? "0 6px 20px rgba(130,201,135,0.4)"
              : "0 6px 20px rgba(232,150,42,0.45)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = ctaBg;
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "none";
          }}
        >
          {ctaLabel} <FontAwesomeIcon icon={faArrowRight} />
        </a>
      </div>
    </div>
  );
}
