export default function PolicyHero() {
  return (
    <section className="bg-parchment px-[5%] py-24">
      <div className="max-w-[760px]">
        <span className="mb-[0.8rem] block text-[0.74rem] font-semibold tracking-[0.12em] text-g500 uppercase">
          Ibicultivo · Privacidade
        </span>
        <h1 className="font-serif text-[clamp(2.2rem,5vw,3.8rem)] leading-[1.06] font-bold tracking-[-0.03em] text-ink">
          Política de <em className="text-g700 italic">Privacidade</em>
        </h1>
        <p className="mt-4 max-w-[560px] text-base leading-[1.75] text-muted">
          Transparência sobre como coletamos, usamos e protegemos seus dados pessoais — em
          conformidade com a Lei Geral de Proteção de Dados (LGPD · Lei 13.709/2018) e o Marco Civil
          da Internet (Lei 12.965/2014).
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-6">
          <span className="rounded-full border border-g300/30 bg-g300/10 px-4 py-[0.35rem] text-[0.73rem] font-medium tracking-wide text-g600">
            LGPD · Lei 13.709/2018
          </span>
          <span className="rounded-full border border-g300/30 bg-g300/10 px-4 py-[0.35rem] text-[0.73rem] font-medium tracking-wide text-g600">
            Marco Civil · Lei 12.965/2014
          </span>
          <span className="rounded-full border border-g300/30 bg-g300/10 px-4 py-[0.35rem] text-[0.73rem] font-medium tracking-wide text-g600">
            ANPD
          </span>
        </div>
        <p className="mt-8 text-[0.78rem] text-muted/60">
          Última atualização:{" "}
          <time dateTime="2026-05-22" className="font-medium text-muted">
            22 de maio de 2026
          </time>
        </p>
      </div>
    </section>
  );
}
