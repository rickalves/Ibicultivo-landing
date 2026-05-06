"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      id="navbar"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 500,
        height: "68px",
        padding: "0 5%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: "rgba(250,247,242,0.9)",
        backdropFilter: "blur(20px) saturate(180%)",
        borderBottom: "1px solid rgba(45,107,48,0.12)",
        transition: "box-shadow 0.3s",
        boxShadow: scrolled ? "0 4px 24px rgba(15,32,16,0.08)" : "none",
      }}
    >
      {/* Logo */}
      <Link href="#" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "0.4rem" }}>
        <span
          style={{
            fontFamily: "var(--font-cormorant), serif",
            fontSize: "1.55rem",
            fontWeight: 700,
            color: "#235025",
            letterSpacing: "-0.02em",
          }}
        >
          Ibicultivo
        </span>
        <span
          className="animate-breathe"
          style={{
            width: 8,
            height: 8,
            borderRadius: "50%",
            background: "#E8962A",
            marginTop: 2,
            display: "inline-block",
          }}
        />
      </Link>

      {/* Nav links */}
      <div className="nav-links-group" style={{ display: "flex", gap: "2.5rem" }}>
        {[
          { href: "#funcionalidades", label: "Funcionalidades" },
          { href: "#como", label: "Como funciona" },
          { href: "#planos", label: "Planos" },
          { href: "#sobre", label: "Sobre" },
        ].map(({ href, label }) => (
          <a key={href} href={href} className="nav-link">
            {label}
          </a>
        ))}
      </div>

      {/* Actions */}
      <div style={{ display: "flex", gap: "0.75rem", alignItems: "center" }}>
        <a
          href="#"
          style={{
            fontSize: "0.88rem",
            fontWeight: 500,
            color: "#235025",
            padding: "0.5rem 1.2rem",
            borderRadius: "var(--r-sm)",
            border: "1.5px solid rgba(45,107,48,0.25)",
            textDecoration: "none",
            transition: "all 0.2s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(45,107,48,0.06)")}
          onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
        >
          Entrar
        </a>
        <a
          href="#"
          style={{
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
            e.currentTarget.style.boxShadow = "0 6px 20px rgba(45,107,48,0.3)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "#235025";
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "0 2px 12px rgba(45,107,48,0.25)";
          }}
        >
          Começar grátis
        </a>
      </div>
    </nav>
  );
}
