"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import RevealWrapper from "@/components/ui/RevealWrapper";

const pilotoBenefits = [
  "Acesso gratuito completo durante o piloto",
  "Suporte direto com a equipe via WhatsApp",
  "Sua opinião molda o produto final",
];

const pilotoFields = [
  { name: "nome", label: "Nome completo", placeholder: "João Silva", type: "text" },
  { name: "municipio", label: "Município", placeholder: "São Benedito", type: "text" },
  { name: "cultura", label: "Cultura principal", placeholder: "Tomate, maracujá...", type: "text" },
  { name: "telefone", label: "WhatsApp", placeholder: "(85) 9 9999-9999", type: "tel" },
] as const;

type FormState = { nome: string; municipio: string; cultura: string; telefone: string };

export default function Plans() {
  const [form, setForm] = useState<FormState>({
    nome: "",
    municipio: "",
    cultura: "",
    telefone: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, origem: "programa-piloto" }),
      });
      if (!res.ok) throw new Error();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="piloto" className="bg-g800 px-[5%] py-32">
      <div className="mx-auto max-w-[960px]">
        <RevealWrapper>
          <div className="mb-[4.5rem] text-center">
            <span className="mb-[0.8rem] block text-[0.74rem] font-semibold tracking-[0.12em] text-g300 uppercase">
              Programa Piloto
            </span>
            <h2 className="font-serif text-[clamp(2rem,4vw,3.2rem)] leading-[1.08] font-bold tracking-[-0.03em] text-white">
              Seja o primeiro da
              <br />
              <em className="text-o300 italic">sua região</em>
            </h2>
            <p className="mx-auto mt-[0.9rem] max-w-[560px] text-base leading-[1.75] text-white/55">
              Estamos selecionando os primeiros produtores e técnicos da Serra da Ibiapaba para
              testar a plataforma gratuitamente e ajudar a construir a ferramenta ideal para a nossa
              região.
            </p>
          </div>
        </RevealWrapper>

        <div className="plans-row grid grid-cols-2 items-start gap-20">
          {/* Benefits */}
          <RevealWrapper delay={1}>
            <div>
              {pilotoBenefits.map((text) => (
                <div key={text} className="mb-8 flex items-start gap-4">
                  <div className="flex size-[30px] shrink-0 items-center justify-center rounded-full border border-g300/30 bg-g300/15 text-[0.75rem] text-g300">
                    <FontAwesomeIcon icon={faCheck} />
                  </div>
                  <p className="mt-1 text-[1.05rem] leading-[1.6] text-white/75">{text}</p>
                </div>
              ))}
            </div>
          </RevealWrapper>

          {/* Form */}
          <RevealWrapper delay={2}>
            {status === "sent" ? (
              <div className="rounded-lg border border-g300/25 bg-g300/[0.08] p-12 text-center">
                <div className="mb-4 text-[2.5rem] text-g300">✓</div>
                <h3 className="mb-[0.6rem] font-serif text-[1.6rem] text-white">
                  Recebemos sua inscrição!
                </h3>
                <p className="text-[0.9rem] text-white/50">
                  Entraremos em contato pelo WhatsApp em breve.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="rounded-lg border border-white/10 bg-white/[0.04] p-10"
              >
                {pilotoFields.map(({ name, label, placeholder, type }) => (
                  <div key={name} className="mb-[1.2rem]">
                    <label className="mb-[0.4rem] block text-[0.78rem] font-medium tracking-[0.04em] text-white/50">
                      {label}
                    </label>
                    <input
                      required
                      type={type}
                      placeholder={placeholder}
                      value={form[name]}
                      onChange={(e) => setForm((f) => ({ ...f, [name]: e.target.value }))}
                      className="box-border w-full rounded-sm border border-white/12 bg-white/[0.06] px-4 py-3 text-[0.9rem] text-white transition-colors duration-200 outline-none placeholder:text-white/30 focus:border-g300/50 focus:outline-none"
                    />
                  </div>
                ))}
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="mt-[0.4rem] flex w-full cursor-pointer items-center justify-center gap-[0.6rem] rounded-md bg-o400 px-8 py-[0.9rem] text-[0.95rem] font-semibold text-ink shadow-[0_4px_24px_rgba(232,150,42,0.3)] transition-colors duration-200 hover:bg-[#d4821f] disabled:cursor-wait"
                >
                  <FontAwesomeIcon icon={faPaperPlane} />
                  {status === "sending" ? "Enviando..." : "Quero participar do piloto"}
                </button>
                {status === "error" && (
                  <p className="mt-[0.8rem] text-center text-[0.8rem] text-o300">
                    Algo deu errado. Tente novamente ou fale por WhatsApp.
                  </p>
                )}
              </form>
            )}
          </RevealWrapper>
        </div>
      </div>
    </section>
  );
}
