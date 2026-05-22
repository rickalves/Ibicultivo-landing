import Image from "next/image";
import { serraNumbers } from "@/lib/constants";

export default function SerraBlock() {
  return (
    <div className="relative flex min-h-[580px] items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/serra-paisagem.jpg"
          alt="Paisagem da Serra da Ibiapaba"
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[linear-gradient(105deg,rgba(15,32,16,0.93)_0%,rgba(15,32,16,0.65)_55%,rgba(15,32,16,0.35)_100%)]" />
      </div>

      {/* Content */}
      <div className="relative z-[2] max-w-[660px] px-[5%] py-16">
        <span className="mb-[0.8rem] block text-[0.74rem] font-semibold tracking-[0.12em] text-g300 uppercase">
          Nossa região
        </span>

        <h2 className="font-serif text-[clamp(2rem,4.5vw,3.2rem)] leading-[1.08] font-bold tracking-[-0.03em] text-white">
          A Serra da Ibiapaba
          <br />
          <em className="text-o300 italic">está no coração</em>
          <br />
          do agronegócio cearense
        </h2>

        <p className="mt-4 max-w-[480px] text-[0.98rem] leading-[1.75] text-white/50">
          O Ceará produziu R$ 6,1 bilhões em agronegócio em 2024 — e 6 das 10 maiores cidades
          produtoras estão na Ibiapaba. Maracujá, tomate, abacate, batata-doce: culturas que o
          Ibicultivo já atende.
        </p>

        <div className="number-display mt-10 grid grid-cols-3 gap-10">
          {serraNumbers.map(({ val, label }) => (
            <div key={val}>
              <div className="font-serif text-[2.8rem] leading-none font-bold text-g300">{val}</div>
              <div className="mt-[6px] text-[0.78rem] leading-[1.45] whitespace-pre-line text-white/45">
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
