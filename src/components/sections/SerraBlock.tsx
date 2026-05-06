import Image from "next/image";
import { serraNumbers } from "@/lib/constants";

export default function SerraBlock() {
  return (
    <div style={{ position: "relative", minHeight: 580, display: "flex", alignItems: "center", overflow: "hidden" }}>
      {/* Background image */}
      <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
        <Image
          src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1800&q=85&fit=crop"
          alt="Paisagem da Serra da Ibiapaba"
          fill
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(105deg, rgba(15,32,16,0.93) 0%, rgba(15,32,16,0.65) 55%, rgba(15,32,16,0.35) 100%)",
          }}
        />
      </div>

      {/* Content */}
      <div style={{ position: "relative", zIndex: 2, padding: "4rem 5%", maxWidth: 660 }}>
        <span
          style={{
            fontSize: "0.74rem",
            fontWeight: 600,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "#82C987",
            marginBottom: "0.8rem",
            display: "block",
          }}
        >
          Nossa região
        </span>

        <h2
          style={{
            fontFamily: "var(--font-cormorant), serif",
            fontSize: "clamp(2rem, 4.5vw, 3.2rem)",
            fontWeight: 700,
            lineHeight: 1.08,
            letterSpacing: "-0.03em",
            color: "#fff",
          }}
        >
          A Serra da Ibiapaba
          <br />
          <em style={{ fontStyle: "italic", color: "#F5B84A" }}>produz R$ 1,9 bilhão</em>
          <br />
          por ano em agronegócio
        </h2>

        <p
          style={{
            color: "rgba(255,255,255,0.5)",
            fontSize: "0.98rem",
            lineHeight: 1.75,
            marginTop: "1rem",
            maxWidth: 480,
          }}
        >
          Maracujá, tomate, abacate, batata-doce — culturas que o Ibicultivo já atende. Uma região
          que merecia uma ferramenta feita para ela.
        </p>

        <div
          className="number-display"
          style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "2.5rem", marginTop: "2.5rem" }}
        >
          {serraNumbers.map(({ val, label }) => (
            <div key={val}>
              <div
                style={{
                  fontFamily: "var(--font-cormorant), serif",
                  fontSize: "2.8rem",
                  fontWeight: 700,
                  color: "#82C987",
                  lineHeight: 1,
                }}
              >
                {val}
              </div>
              <div
                style={{
                  fontSize: "0.78rem",
                  color: "rgba(255,255,255,0.45)",
                  marginTop: 6,
                  lineHeight: 1.45,
                  whiteSpace: "pre-line",
                }}
              >
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
