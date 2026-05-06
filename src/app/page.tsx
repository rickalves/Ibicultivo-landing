import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import MarqueeStrip from "@/components/sections/MarqueeStrip";
import Audiences from "@/components/sections/Audiences";
import HowItWorks from "@/components/sections/HowItWorks";
import SerraBlock from "@/components/sections/SerraBlock";
import AppPreview from "@/components/sections/AppPreview";
import TecnicoBlock from "@/components/sections/TecnicoBlock";
import Plans from "@/components/sections/Plans";
import Sobre from "@/components/sections/Sobre";
import CtaFinal from "@/components/sections/CtaFinal";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <MarqueeStrip />
        <Audiences />
        <HowItWorks />
        <SerraBlock />
        <AppPreview />
        <TecnicoBlock />
        <Plans />
        <Sobre />
        <CtaFinal />
      </main>
      <Footer />
    </>
  );
}
