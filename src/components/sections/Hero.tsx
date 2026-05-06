"use client";

import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faSeedling, faPlay } from "@fortawesome/free-solid-svg-icons";
import { proofItems } from "@/lib/constants";

export default function Hero() {
  return (
    <section
      style={{
        minHeight: "100vh",
        position: "relative",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      {/* Background image */}
      <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
        <Image
          src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1800&q=85&fit=crop"
          alt="Campo agrícola verde"
          fill
          priority
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
        {/* Overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(135deg, rgba(15,32,16,0.88) 0%, rgba(26,58,28,0.75) 45%, rgba(26,58,28,0.50) 70%, rgba(15,32,16,0.70) 100%)",
          }}
        />
      </div>

      {/* Bottom fade */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: 200,
          zIndex: 1,
          background: "linear-gradient(to top, #FAF7F2, transparent)",
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          padding: "0 5%",
          paddingTop: 90,
          maxWidth: 780,
        }}
      >
        {/* Eyebrow */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.6rem",
            background: "rgba(232,150,42,0.15)",
            border: "1px solid rgba(232,150,42,0.4)",
            color: "#F5B84A",
            fontSize: "0.78rem",
            fontWeight: 500,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            padding: "0.4rem 1rem",
            borderRadius: 100,
            marginBottom: "2rem",
            animation: "fadeUp 0.6s ease 0.1s both",
          }}
        >
          <span className="animate-breathe-fast" style={{ width: 6, height: 6, borderRadius: "50%", background: "#F5B84A", flexShrink: 0, display: "inline-block" }} />
          <FontAwesomeIcon icon={faLocationDot} />
          Feito na Serra da Ibiapaba — Ceará
        </div>

        {/* H1 */}
        <h1
          style={{
            fontFamily: "var(--font-cormorant), serif",
            fontSize: "clamp(3rem, 6.5vw, 5.8rem)",
            fontWeight: 700,
            lineHeight: 1.0,
            letterSpacing: "-0.03em",
            color: "#fff",
            marginBottom: "1.6rem",
            animation: "fadeUp 0.6s ease 0.2s both",
          }}
        >
          Sua lavoura
          <br />
          <em style={{ fontStyle: "italic", color: "#82C987" }}>organizada.</em>
          <br />
          Sua colheita
          <br />
          <span style={{ color: "#F5B84A" }}>valorizada.</span>
        </h1>

        {/* Sub */}
        <p
          style={{
            fontSize: "1.1rem",
            fontWeight: 300,
            color: "rgba(255,255,255,0.72)",
            lineHeight: 1.75,
            maxWidth: 520,
            marginBottom: "2.5rem",
            animation: "fadeUp 0.6s ease 0.3s both",
          }}
        >
          Plataforma de gestão e rastreabilidade agrícola criada para produtores e técnicos da
          Serra da Ibiapaba. Do plantio ao QR Code de origem, tudo em um lugar.
        </p>

        {/* CTAs */}
        <div
          style={{
            display: "flex",
            gap: "1rem",
            flexWrap: "wrap",
            marginBottom: "3.5rem",
            animation: "fadeUp 0.6s ease 0.4s both",
          }}
        >
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
            href="#como"
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
            <FontAwesomeIcon icon={faPlay} /> Ver como funciona
          </a>
        </div>

        {/* Proof bar */}
        <div
          style={{
            display: "flex",
            background: "rgba(255,255,255,0.07)",
            border: "1px solid rgba(255,255,255,0.12)",
            borderRadius: "var(--r-md)",
            width: "fit-content",
            overflow: "hidden",
            backdropFilter: "blur(12px)",
            animation: "fadeUp 0.6s ease 0.5s both",
          }}
        >
          {proofItems.map((item, i) => (
            <div
              key={item.label}
              style={{
                padding: "1rem 1.6rem",
                display: "flex",
                flexDirection: "column",
                borderRight: i < proofItems.length - 1 ? "1px solid rgba(255,255,255,0.1)" : "none",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-cormorant), serif",
                  fontSize: "1.8rem",
                  fontWeight: 700,
                  color: "#fff",
                  lineHeight: 1,
                }}
              >
                {item.num}
              </span>
              <span style={{ fontSize: "0.7rem", color: "rgba(255,255,255,0.5)", marginTop: 3 }}>
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
