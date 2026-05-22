import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import TermosHero from "@/components/sections/privacy/TermosHero";
import TermosContent from "@/components/sections/privacy/TermosContent";

export const metadata: Metadata = {
  title: "Termos de Uso — Ibicultivo",
  description:
    "Condições gerais de uso da plataforma Ibicultivo. Leia antes de criar sua conta ou utilizar qualquer funcionalidade do aplicativo e do site.",
  robots: { index: true, follow: true },
};

export default function TermosPage() {
  return (
    <>
      <Navbar />
      <main>
        <TermosHero />
        <TermosContent />
      </main>
      <Footer />
    </>
  );
}
