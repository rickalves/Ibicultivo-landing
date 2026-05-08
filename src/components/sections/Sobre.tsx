import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMountainSun, faPeopleGroup, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import RevealWrapper from "@/components/ui/RevealWrapper";
import { originStats } from "@/lib/constants";

const iconMap = {
  "fa-mountain-sun": faMountainSun,
  "fa-people-group": faPeopleGroup,
  "fa-location-dot": faLocationDot,
};

export default function Sobre() {
  return (
    <section id="sobre" style={{ padding: "8rem 5%", background: "#F2EDE4", position: "relative", overflow: "hidden" }}>
      <div className="sobre-orb" />

      <div className="sobre-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "center" }}>

        {/* Quote block */}
        <RevealWrapper>
          <div style={{ position: "relative" }}>
            <div
              className="quote-mark"
              style={{ fontFamily: "var(--font-cormorant), serif" }}
            >
              &ldquo;
            </div>
            <p
              style={{
                fontFamily: "var(--font-cormorant), serif",
                fontSize: "1.5rem",
                fontWeight: 400,
                fontStyle: "italic",
                color: "#0F1A10",
                lineHeight: 1.55,
                paddingLeft: "2rem",
                marginBottom: "2rem",
                position: "relative",
                zIndex: 1,
              }}
            >
              Antes eu não sabia quanto cada lote me dava de lucro. Com o Ibicultivo, consigo
              comparar safra por safra e vender o tomate com mais valor porque o comprador vê de
              onde vem.
            </p>
            <div style={{ paddingLeft: "2rem", display: "flex", alignItems: "center", gap: "1rem" }}>
              <div style={{ width: 48, height: 48, borderRadius: "50%", overflow: "hidden", border: "2px solid #82C987", flexShrink: 0, position: "relative" }}>
                <Image
                  src="/images/avatar-agricultor.jpg"
                  alt="Produtor Francisco Alves"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div>
                <p style={{ fontSize: "0.88rem", fontWeight: 600, color: "#0F1A10" }}>Francisco Alves</p>
                <p style={{ fontSize: "0.75rem", color: "#5A6B5C" }}>Produtor de tomate · São Benedito — CE</p>
              </div>
            </div>
          </div>
        </RevealWrapper>

        {/* Origin stats */}
        <RevealWrapper delay={2}>
          <div>
            {originStats.map((stat, i) => (
              <div
                key={stat.val}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1.5rem",
                  padding: "1.6rem 0",
                  borderBottom: i < originStats.length - 1 ? "1px solid rgba(45,107,48,0.1)" : "none",
                  paddingTop: i === 0 ? 0 : "1.6rem",
                }}
              >
                <div
                  style={{
                    width: 46,
                    height: 46,
                    borderRadius: 10,
                    flexShrink: 0,
                    background: "#E8F5E9",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1rem",
                    color: "#2D6B30",
                    border: "1px solid rgba(45,107,48,0.15)",
                  }}
                >
                  <FontAwesomeIcon icon={iconMap[stat.icon as keyof typeof iconMap]} />
                </div>
                <div>
                  <div style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "1.8rem", fontWeight: 700, color: "#235025", lineHeight: 1 }}>
                    {stat.val}
                  </div>
                  <div style={{ fontSize: "0.78rem", color: "#5A6B5C", lineHeight: 1.5, marginTop: 3 }}>
                    {stat.ctx}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </RevealWrapper>
      </div>
    </section>
  );
}
