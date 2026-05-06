import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartBar, faSeedling, faMapLocationDot, faStar } from "@fortawesome/free-solid-svg-icons";
import RevealWrapper from "@/components/ui/RevealWrapper";
import ChartBars from "@/components/ui/ChartBars";
import MapCanvas from "@/components/ui/MapCanvas";
import ScoreRing from "@/components/ui/ScoreRing";
import QRCodeSvg from "@/components/ui/QRCodeSvg";
import { bentoBarHeights, bentoLotes } from "@/lib/constants";

const dotColor = { green: "#5AAD5F", orange: "#E8962A", blue: "#5B8ED6" };
const tagStyle = {
  green: { background: "rgba(90,173,95,0.12)", color: "#2D6B30" },
  orange: { background: "rgba(232,150,42,0.12)", color: "#A05A10" },
};

export default function AppPreview() {
  return (
    <section style={{ padding: "8rem 5%", background: "#F2EDE4" }}>
      <RevealWrapper>
        <div style={{ marginBottom: "3.5rem" }}>
          <span style={{ fontSize: "0.74rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "#3D8C41", marginBottom: "0.8rem", display: "block" }}>
            Plataforma
          </span>
          <h2 style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "clamp(2rem, 4vw, 3.2rem)", fontWeight: 700, lineHeight: 1.08, letterSpacing: "-0.03em", color: "#0F1A10" }}>
            Tudo que você precisa, <em style={{ fontStyle: "italic", color: "#2D6B30" }}>num só painel</em>
          </h2>
          <p style={{ fontSize: "1rem", color: "#5A6B5C", lineHeight: 1.75, maxWidth: 520, marginTop: "0.9rem" }}>
            Interface limpa, dados em tempo real, sem curva de aprendizado.
          </p>
        </div>
      </RevealWrapper>

      {/* Bento grid */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(12, 1fr)", gap: "1.2rem", marginTop: "3.5rem" }}>

        {/* Stats card — col-span-7 */}
        <RevealWrapper className="bento-s7" style={{ gridColumn: "span 7" } as React.CSSProperties}>
          <div
            style={{
              background: "#1A3A1C",
              borderRadius: "var(--r-lg)",
              border: "1px solid rgba(45,107,48,0.1)",
              padding: "2rem 2rem 0",
              transition: "transform 0.3s, box-shadow 0.3s",
            }}
          >
            <div style={{ fontSize: "0.7rem", fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase", color: "#82C987", marginBottom: "0.8rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <FontAwesomeIcon icon={faChartBar} style={{ fontSize: "0.75rem" }} /> Desempenho desta safra
            </div>
            <div style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "1.2rem", fontWeight: 600, color: "#fff", marginBottom: "0.3rem" }}>
              Safra de Tomate — Lote #0034 · São Benedito
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginTop: "1.4rem" }}>
              {[{ val: "7,3t", lbl: "Produção estimada" }, { val: "R$41k", lbl: "Receita projetada" }].map(({ val, lbl }) => (
                <div key={lbl} style={{ background: "rgba(255,255,255,0.06)", borderRadius: "var(--r-sm)", padding: "0.9rem 1rem" }}>
                  <div style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "1.9rem", fontWeight: 700, color: "#82C987", lineHeight: 1 }}>{val}</div>
                  <div style={{ fontSize: "0.68rem", color: "rgba(255,255,255,0.38)", marginTop: 3 }}>{lbl}</div>
                </div>
              ))}
            </div>
            <ChartBars bars={bentoBarHeights} />
          </div>
        </RevealWrapper>

        {/* Lotes card — col-span-5 */}
        <RevealWrapper delay={1} className="bento-s5" style={{ gridColumn: "span 5" } as React.CSSProperties}>
          <div style={{ background: "#FAF7F2", borderRadius: "var(--r-lg)", border: "1px solid rgba(45,107,48,0.1)", padding: "1.6rem", transition: "transform 0.3s, box-shadow 0.3s" }}>
            <div style={{ fontSize: "0.7rem", fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase", color: "#5A6B5C", marginBottom: "0.8rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <FontAwesomeIcon icon={faSeedling} style={{ fontSize: "0.75rem" }} /> Cultivos ativos
            </div>
            {bentoLotes.map((lote) => (
              <div key={lote.name} style={{ display: "flex", alignItems: "center", gap: "0.85rem", padding: "0.78rem 0", borderBottom: "1px solid rgba(45,107,48,0.08)" }}>
                <div style={{ width: 9, height: 9, borderRadius: "50%", flexShrink: 0, background: dotColor[lote.dot as keyof typeof dotColor] }} />
                <span style={{ fontSize: "0.83rem", fontWeight: 500, color: "#0F1A10", flex: 1 }}>{lote.name}</span>
                <span style={{ fontSize: "0.72rem", color: "#5A6B5C" }}>{lote.area}</span>
                <span style={{ fontSize: "0.67rem", fontWeight: 500, padding: "3px 9px", borderRadius: 100, ...tagStyle[lote.tagType] }}>{lote.tag}</span>
              </div>
            ))}
          </div>
        </RevealWrapper>

        {/* QR card — col-span-4 */}
        <RevealWrapper delay={2} className="bento-s4" style={{ gridColumn: "span 4" } as React.CSSProperties}>
          <div style={{ background: "#235025", borderRadius: "var(--r-lg)", border: "1px solid rgba(45,107,48,0.1)", padding: "3.1rem", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", transition: "transform 0.3s, box-shadow 0.3s" }}>
            <div style={{ marginBottom: "1rem" }}><QRCodeSvg /></div>
            <p style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.65)", lineHeight: 1.55 }}>
              <strong style={{ color: "#B8E3BB", fontWeight: 500 }}>QR Code de origem</strong>
              <br />O comprador rastreia a procedência com um scan
            </p>
          </div>
        </RevealWrapper>

        {/* Map card — col-span-4 */}
        <RevealWrapper delay={3} className="bento-s4" style={{ gridColumn: "span 4" } as React.CSSProperties}>
          <div style={{ background: "#0F2010", borderRadius: "var(--r-lg)", border: "1px solid rgba(45,107,48,0.1)", padding: "1.6rem", transition: "transform 0.3s, box-shadow 0.3s" }}>
            <div style={{ fontSize: "0.7rem", fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase", color: "#82C987", marginBottom: "0.8rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <FontAwesomeIcon icon={faMapLocationDot} style={{ fontSize: "0.75rem" }} /> Lotes no mapa
            </div>
            <MapCanvas />
          </div>
        </RevealWrapper>

        {/* Score card — col-span-4 */}
        <RevealWrapper delay={4} className="bento-s4" style={{ gridColumn: "span 4" } as React.CSSProperties}>
          <div style={{ background: "#FAF7F2", borderRadius: "var(--r-lg)", border: "1px solid rgba(45,107,48,0.1)", padding: "1.6rem", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", transition: "transform 0.3s, box-shadow 0.3s" }}>
            <div style={{ fontSize: "0.7rem", fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase", color: "#5A6B5C", marginBottom: "1.2rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <FontAwesomeIcon icon={faStar} style={{ fontSize: "0.75rem" }} /> Índice de qualidade
            </div>
            <ScoreRing />
            <p style={{ fontSize: "0.76rem", color: "#5A6B5C", textAlign: "center", lineHeight: 1.5 }}>
              Lote #0034 · Tomate Italiano
              <br />
              <strong style={{ color: "#2D6B30", fontWeight: 500 }}>Excelente procedência</strong>
            </p>
          </div>
        </RevealWrapper>
      </div>
    </section>
  );
}
