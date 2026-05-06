"use client";

export default function Footer() {
  return (
    <footer
      style={{
        background: "#0F2010",
        padding: "2.8rem 5%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: "1rem",
      }}
    >
      <a href="#" style={{ textDecoration: "none" }}>
        <span
          style={{
            fontFamily: "var(--font-cormorant), serif",
            fontSize: "1.25rem",
            fontWeight: 700,
            color: "#fff",
          }}
        >
          Ibicultivo<span style={{ color: "#E8962A" }}>.</span>
        </span>
      </a>

      <span style={{ fontSize: "0.76rem", color: "rgba(255,255,255,0.3)" }}>
        © 2026 Ibicultivo · Guaraciaba do Norte — CE
      </span>

      <div style={{ display: "flex", gap: "2rem" }}>
        {[
          { href: "#", label: "Termos" },
          { href: "#", label: "Privacidade" },
          { href: "mailto:contato@ibicultivo.com.br", label: "contato@ibicultivo.com.br" },
        ].map(({ href, label }) => (
          <a
            key={label}
            href={href}
            style={{
              fontSize: "0.76rem",
              color: "rgba(255,255,255,0.32)",
              textDecoration: "none",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.7)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.32)")}
          >
            {label}
          </a>
        ))}
      </div>
    </footer>
  );
}
