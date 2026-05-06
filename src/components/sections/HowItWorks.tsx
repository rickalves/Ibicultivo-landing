import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faPenToSquare, faQrcode, faHandHoldingDollar } from "@fortawesome/free-solid-svg-icons";
import RevealWrapper from "@/components/ui/RevealWrapper";
import { steps } from "@/lib/constants";

const iconMap = {
  "fa-house": faHouse,
  "fa-pen-to-square": faPenToSquare,
  "fa-qrcode": faQrcode,
  "fa-hand-holding-dollar": faHandHoldingDollar,
};

export default function HowItWorks() {
  return (
    <section
      id="como"
      style={{ padding: "8rem 5%", background: "#0F2010", position: "relative", overflow: "hidden" }}
    >
      <div className="how-bg-orb" />

      <RevealWrapper>
        <div style={{ marginBottom: "4rem" }}>
          <span style={{ fontSize: "0.74rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "#82C987", marginBottom: "0.8rem", display: "block" }}>
            Como funciona
          </span>
          <h2 style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "clamp(2rem, 4vw, 3.2rem)", fontWeight: 700, lineHeight: 1.08, letterSpacing: "-0.03em", color: "#fff" }}>
            Do plantio ao comprador <em style={{ fontStyle: "italic", color: "#82C987" }}>em 4 passos</em>
          </h2>
          <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.45)", lineHeight: 1.75, maxWidth: 520, marginTop: "0.9rem" }}>
            Fluxo pensado para quem trabalha debaixo do sol — rápido, direto e sem burocracia.
          </p>
        </div>
      </RevealWrapper>

      <div
        className="steps-grid"
        style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "2rem", position: "relative", marginTop: "4rem" }}
      >
        <div className="steps-connector" />

        {steps.map((step, i) => (
          <RevealWrapper key={step.title} delay={(i + 1) as 1 | 2 | 3 | 4}>
            <div className="step-card" style={{ textAlign: "center", position: "relative", zIndex: 1 }}>
              <div
                className="step-orb step-orb-wrap"
                style={{
                  width: 78,
                  height: 78,
                  borderRadius: "50%",
                  margin: "0 auto 1.4rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "#1A3A1C",
                  border: "1.5px solid #2D6B30",
                  position: "relative",
                  transition: "all 0.3s",
                  fontSize: "1.4rem",
                  color: "#82C987",
                }}
              >
                <FontAwesomeIcon icon={iconMap[step.icon as keyof typeof iconMap]} />
              </div>
              <p style={{ fontSize: "0.92rem", fontWeight: 600, color: "#fff", marginBottom: "0.4rem" }}>
                {step.title}
              </p>
              <p style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.42)", lineHeight: 1.65 }}>
                {step.desc}
              </p>
            </div>
          </RevealWrapper>
        ))}
      </div>
    </section>
  );
}
