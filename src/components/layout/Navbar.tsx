"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Logo from "@/components/ui/Logo";

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
      className={cn(
        "fixed top-0 right-0 left-0 z-[500] flex h-[68px] items-center justify-between px-[5%]",
        "border-b border-g600/12 bg-cream/90 backdrop-blur-[20px] backdrop-saturate-[180%]",
        "transition-shadow duration-300",
        scrolled && "shadow-[0_4px_24px_rgba(15,32,16,0.08)]"
      )}
    >
      {/* Logo */}
      <Link href="/" className="flex items-center no-underline">
        <Logo variant="light" height={64} />
      </Link>

      {/* Nav links */}
      <div className="nav-links-group flex gap-10">
        {[
          { href: "#funcionalidades", label: "Funcionalidades" },
          { href: "#como", label: "Como funciona" },
          { href: "#piloto", label: "Piloto" },
          { href: "#sobre", label: "Sobre" },
        ].map(({ href, label }) => (
          <a key={href} href={href} className="nav-link">
            {label}
          </a>
        ))}
      </div>

      {/* Actions */}
      <div className="flex items-center gap-3">
        <a
          href="https://app.ibicultivo.com.br"
          className="navbar-btn-secondary rounded-sm border-[1.5px] border-g600/25 px-[1.2rem] py-2 text-[0.88rem] font-medium text-g700 no-underline transition-all duration-200 hover:bg-g600/[0.06]"
        >
          Entrar
        </a>
        <a
          href="#piloto"
          className="rounded-sm bg-g700 px-[1.4rem] py-[0.55rem] text-[0.88rem] font-semibold text-white no-underline shadow-[0_2px_12px_rgba(45,107,48,0.25)] transition-all duration-200 hover:-translate-y-px hover:bg-g600 hover:shadow-[0_6px_20px_rgba(45,107,48,0.3)]"
        >
          Participar do piloto
        </a>
      </div>
    </nav>
  );
}
