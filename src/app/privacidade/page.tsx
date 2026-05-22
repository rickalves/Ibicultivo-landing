import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PolicyHero from "@/components/sections/privacy/PolicyHero";
import PolicyContent from "@/components/sections/privacy/PolicyContent";

export const metadata: Metadata = {
  title: "Política de Privacidade — Ibicultivo",
  description:
    "Como o Ibicultivo coleta, usa e protege seus dados pessoais. Em conformidade com a LGPD (Lei 13.709/2018) e o Marco Civil da Internet (Lei 12.965/2014).",
  robots: { index: true, follow: true },
};

export default function PrivacidadePage() {
  return (
    <>
      <Navbar />
      <main>
        <PolicyHero />
        <PolicyContent />
      </main>
      <Footer />
    </>
  );
}
