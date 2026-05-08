"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSeedling, faRocket, faHandshake, faCheck } from "@fortawesome/free-solid-svg-icons";
import RevealWrapper from "@/components/ui/RevealWrapper";
import { plans } from "@/lib/constants";

const iconMap = {
  "fa-seedling": faSeedling,
  "fa-rocket": faRocket,
  "fa-handshake": faHandshake,
};

export default function Plans() {
  return (
    <section id="planos" style={{ padding: "8rem 5%", background: "#FAF7F2" }}>
      <RevealWrapper>
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <span style={{ fontSize: "0.74rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "#3D8C41", marginBottom: "0.8rem", display: "block", textAlign: "center" }}>
            Planos e preços
          </span>
          <h2 style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "clamp(2rem, 4vw, 3.2rem)", fontWeight: 700, lineHeight: 1.08, letterSpacing: "-0.03em", color: "#0F1A10", textAlign: "center" }}>
            Comece grátis. <em style={{ fontStyle: "italic", color: "#2D6B30" }}>Cresça no seu ritmo.</em>
          </h2>
          <p style={{ fontSize: "1rem", color: "#5A6B5C", lineHeight: 1.75, maxWidth: 520, marginTop: "0.9rem", margin: "0.9rem auto 0" }}>
            Sem fidelidade. Cancele quando quiser. Suporte em português.
          </p>
        </div>
      </RevealWrapper>

      <div className="plans-row" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "3rem", maxWidth: 1200, margin: "0 auto" }}>
        {plans.map((plan, i) => (
          <RevealWrapper key={plan.type} delay={(i + 1) as 1 | 2 | 3}>
            <PlanCard plan={plan} />
          </RevealWrapper>
        ))}
      </div>
    </section>
  );
}

function PlanCard({ plan }: { plan: typeof plans[0] }) {
  const isMid = plan.mid;

  return (
    <div
      style={{
        borderRadius: "var(--r-lg)",
        border: isMid ? "1px solid #2D6B30" : "1px solid rgba(45,107,48,0.12)",
        padding: "2.2rem",
        position: "relative",
        overflow: "hidden",
        transition: "transform 0.3s, box-shadow 0.3s",
        background: isMid ? "#1A3A1C" : "#FAF7F2",
        height: "100%",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-4px)";
        e.currentTarget.style.boxShadow = "0 20px 48px rgba(15,32,16,0.09)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      {/* Badge */}
      {"badge" in plan && plan.badge && (
        <span
          style={{
            position: "absolute",
            top: -1,
            left: "50%",
            transform: "translateX(-50%)",
            background: "linear-gradient(90deg, #C87820, #E8962A)",
            color: "#fff",
            fontSize: "0.68rem",
            fontWeight: 600,
            letterSpacing: "0.04em",
            padding: "4px 16px",
            borderRadius: "0 0 var(--r-sm) var(--r-sm)",
          }}
        >
          {plan.badge}
        </span>
      )}

      {/* Icon */}
      <div
        style={{
          width: 44,
          height: 44,
          borderRadius: 10,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "1.2rem",
          fontSize: "1rem",
          background: isMid ? "rgba(130,201,135,0.1)" : "#E8F5E9",
          color: isMid ? "#82C987" : "#2D6B30",
          border: isMid ? "1px solid rgba(130,201,135,0.2)" : "1px solid rgba(45,107,48,0.12)",
        }}
      >
        <FontAwesomeIcon icon={iconMap[plan.icon as keyof typeof iconMap]} />
      </div>

      <p style={{ fontSize: "0.73rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.5rem", color: isMid ? "#82C987" : "#5A6B5C" }}>
        {plan.type}
      </p>

      <p
        style={{
          fontFamily: "var(--font-cormorant), serif",
          fontSize: ("smallPrice" in plan && plan.smallPrice) ? "1.7rem" : "2.6rem",
          fontWeight: 700,
          lineHeight: 1,
          letterSpacing: "-0.03em",
          marginBottom: "0.25rem",
          color: isMid ? "#fff" : "#0F1A10",
        }}
      >
        {plan.price}
      </p>

      <p style={{ fontSize: "0.78rem", marginBottom: "1.2rem", color: isMid ? "rgba(255,255,255,0.4)" : "#5A6B5C" }}>
        {plan.period}
      </p>

      <div style={{ height: 1, margin: "1.2rem 0", background: isMid ? "rgba(255,255,255,0.1)" : "rgba(45,107,48,0.1)" }} />

      <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem", marginBottom: "2rem" }}>
        {plan.features.map((f) => (
          <div key={f} style={{ display: "flex", alignItems: "center", gap: "0.6rem", fontSize: "0.82rem", color: isMid ? "rgba(255,255,255,0.78)" : "#0F1A10" }}>
            <FontAwesomeIcon icon={faCheck} style={{ fontSize: "0.72rem", width: 18, textAlign: "center", flexShrink: 0, color: isMid ? "#82C987" : "#3D8C41" }} />
            {f}
          </div>
        ))}
      </div>

      <a
        href="#"
        style={{
          display: "block",
          textAlign: "center",
          padding: "0.85rem",
          borderRadius: "var(--r-sm)",
          fontWeight: 600,
          fontSize: "0.88rem",
          textDecoration: "none",
          transition: "all 0.2s",
          ...(isMid
            ? { background: "linear-gradient(135deg, #C87820, #E8962A)", color: "#fff", boxShadow: "0 4px 20px rgba(200,120,32,0.35)" }
            : { background: "#F2EDE4", color: "#235025", border: "1.5px solid rgba(45,107,48,0.18)" }),
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-1px)";
          if (isMid) {
            e.currentTarget.style.boxShadow = "0 8px 28px rgba(200,120,32,0.5)";
          } else {
            e.currentTarget.style.background = "#e8ddd0";
          }
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0)";
          if (isMid) {
            e.currentTarget.style.boxShadow = "0 4px 20px rgba(200,120,32,0.35)";
          } else {
            e.currentTarget.style.background = "#F2EDE4";
          }
        }}
      >
        {plan.cta}
      </a>
    </div>
  );
}
