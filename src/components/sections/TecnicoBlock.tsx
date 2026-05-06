"use client";

import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTableColumns, faFileExport, faPlug, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { tecnicoFeatureList } from "@/lib/constants";

const iconMap = {
  "fa-table-columns": faTableColumns,
  "fa-file-export": faFileExport,
  "fa-plug": faPlug,
};

export default function TecnicoBlock() {
  return (
    <div className="tecnico-block" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", minHeight: 580 }}>
      {/* Photo */}
      <div className="tec-photo" style={{ position: "relative", overflow: "hidden", minHeight: 400 }}>
        <Image
          src="https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=900&q=80&fit=crop&crop=top"
          alt="Técnico agrícola em campo"
          fill
          style={{ objectFit: "cover", objectPosition: "center top" }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to right, rgba(15,32,16,0.25), transparent)",
          }}
        />
      </div>

      {/* Content */}
      <div
        style={{
          background: "#0F2010",
          padding: "5rem 4rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <span style={{ fontSize: "0.74rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "#82C987", marginBottom: "0.8rem", display: "block" }}>
          Para o técnico agrícola
        </span>

        <h2 style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "clamp(1.8rem, 3vw, 2.6rem)", fontWeight: 700, lineHeight: 1.08, letterSpacing: "-0.03em", color: "#fff" }}>
          Monitore dezenas de
          <br />
          <em style={{ fontStyle: "italic", color: "#F5B84A" }}>produtores</em> de uma tela
        </h2>

        <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.5)", lineHeight: 1.75, maxWidth: 400, marginTop: "0.9rem", marginBottom: "2.5rem" }}>
          Chega de planilha. O Ibicultivo centraliza todos os seus produtores com dados reais.
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: "1.2rem", marginBottom: "2.5rem" }}>
          {tecnicoFeatureList.map((feat) => (
            <div key={feat.title} style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
              <div
                style={{
                  width: 42,
                  height: 42,
                  flexShrink: 0,
                  borderRadius: "var(--r-sm)",
                  background: "rgba(61,140,65,0.12)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "1px solid rgba(61,140,65,0.2)",
                  fontSize: "1rem",
                  color: "#82C987",
                }}
              >
                <FontAwesomeIcon icon={iconMap[feat.icon as keyof typeof iconMap]} />
              </div>
              <div>
                <h4 style={{ fontSize: "0.88rem", fontWeight: 500, color: "#fff", marginBottom: 3 }}>{feat.title}</h4>
                <p style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.42)", lineHeight: 1.55 }}>{feat.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <a
          href="#planos"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.4rem",
            width: "fit-content",
            fontSize: "0.88rem",
            fontWeight: 600,
            color: "#fff",
            padding: "0.55rem 1.4rem",
            borderRadius: "var(--r-sm)",
            background: "#235025",
            textDecoration: "none",
            boxShadow: "0 2px 12px rgba(45,107,48,0.25)",
            transition: "all 0.2s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "#2D6B30";
            e.currentTarget.style.transform = "translateY(-1px)";
            e.currentTarget.style.boxShadow = "0 6px 20px rgba(45,107,48,0.35)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "#235025";
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "0 2px 12px rgba(45,107,48,0.25)";
          }}
        >
          Ver plano Cooperativa <FontAwesomeIcon icon={faArrowRight} />
        </a>
      </div>
    </div>
  );
}
