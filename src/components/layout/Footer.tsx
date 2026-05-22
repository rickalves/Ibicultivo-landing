"use client";

import Link from "next/link";
import Logo from "@/components/ui/Logo";

export default function Footer() {
  return (
    <footer className="flex flex-wrap items-center justify-between gap-4 bg-g900 px-[5%] py-[2.8rem]">
      <Link href="/" className="no-underline">
        <Logo variant="dark" height={48} />
      </Link>

      <span className="text-[0.76rem] text-white/30">
        © 2026 Ibicultivo · Guaraciaba do Norte — CE
      </span>

      <div className="flex gap-8">
        {[
          { href: "/termos", label: "Termos" },
          { href: "/privacidade", label: "Privacidade" },
          { href: "mailto:contato@ibicultivo.com.br", label: "contato@ibicultivo.com.br" },
        ].map(({ href, label }) => (
          <a
            key={label}
            href={href}
            className="text-[0.76rem] text-white/[0.32] no-underline transition-colors duration-200 hover:text-white/70"
          >
            {label}
          </a>
        ))}
      </div>
    </footer>
  );
}
