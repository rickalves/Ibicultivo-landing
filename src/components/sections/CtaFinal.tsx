"use client";

import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSeedling } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import RevealWrapper from "@/components/ui/RevealWrapper";

export default function CtaFinal() {
  return (
    <section
      id="contato"
      style={{
        position: "relative",
        minHeight: 480,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        overflow: "hidden",
      }}
    >
      {/* Background image */}
      <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
        <Image
          src="/images/cta-verduras.jpg"
          alt="Campo agrícola ao entardecer"
          fill
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
        <div style={{ position: "absolute", inset: 0, background: "rgba(15,32,16,0.86)" }} />
      </div>

      {/* Content */}
      <div style={{ position: "relative", zIndex: 2, padding: "4rem 2rem", maxWidth: 640 }}>
        <RevealWrapper>
          <span style={{ fontSize: "0.74rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "#82C987", display: "block", textAlign: "center", marginBottom: "0.8rem" }}>
            Comece agora
          </span>

          <h2 style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "clamp(2rem, 4vw, 3.2rem)", fontWeight: 700, lineHeight: 1.08, letterSpacing: "-0.03em", color: "#fff", marginBottom: "1rem" }}>
            Sua lavoura merece
            <br />
            <em style={{ fontStyle: "italic", color: "#F5B84A" }}>mais do que um caderno.</em>
          </h2>

          <p style={{ fontSize: "0.98rem", color: "rgba(255,255,255,0.52)", marginBottom: "2.5rem" }}>
            Crie sua conta em menos de 2 minutos. Sem cartão de crédito.
          </p>

          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <a
              href="#"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.6rem",
                background: "#E8962A",
                color: "#0F1A10",
                fontSize: "0.95rem",
                fontWeight: 600,
                padding: "0.9rem 2rem",
                borderRadius: "var(--r-md)",
                textDecoration: "none",
                boxShadow: "0 4px 24px rgba(232,150,42,0.4)",
                transition: "all 0.25s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#d4821f";
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = "0 8px 32px rgba(232,150,42,0.55)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#E8962A";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 4px 24px rgba(232,150,42,0.4)";
              }}
            >
              <FontAwesomeIcon icon={faSeedling} /> Começar gratuitamente
            </a>
            <a
              href="#"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.6rem",
                background: "rgba(255,255,255,0.1)",
                border: "1.5px solid rgba(255,255,255,0.25)",
                color: "#fff",
                fontSize: "0.95rem",
                fontWeight: 400,
                padding: "0.9rem 2rem",
                borderRadius: "var(--r-md)",
                textDecoration: "none",
                backdropFilter: "blur(8px)",
                transition: "all 0.25s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.18)";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.1)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <FontAwesomeIcon icon={faWhatsapp} /> Falar no WhatsApp
            </a>
          </div>
        </RevealWrapper>
      </div>
    </section>
  );
}
