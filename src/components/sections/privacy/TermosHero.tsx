export default function TermosHero() {
  return (
    <section className="bg-parchment px-[5%] py-24">
      <div className="max-w-[760px]">
        <span className="mb-[0.8rem] block text-[0.74rem] font-semibold tracking-[0.12em] text-g500 uppercase">
          Ibicultivo · Termos
        </span>
        <h1 className="font-serif text-[clamp(2.2rem,5vw,3.8rem)] leading-[1.06] font-bold tracking-[-0.03em] text-ink">
          Termos de <em className="text-g700 italic">Uso</em>
        </h1>
        <p className="mt-4 max-w-[560px] text-base leading-[1.75] text-muted">
          Condições gerais que regem o uso da plataforma Ibicultivo — leia atentamente antes de
          criar sua conta ou utilizar qualquer funcionalidade do aplicativo e do site.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-6">
          <span className="rounded-full border border-g300/30 bg-g300/10 px-4 py-[0.35rem] text-[0.73rem] font-medium tracking-wide text-g600">
            CDC · Lei 8.078/1990
          </span>
          <span className="rounded-full border border-g300/30 bg-g300/10 px-4 py-[0.35rem] text-[0.73rem] font-medium tracking-wide text-g600">
            Marco Civil · Lei 12.965/2014
          </span>
          <span className="rounded-full border border-g300/30 bg-g300/10 px-4 py-[0.35rem] text-[0.73rem] font-medium tracking-wide text-g600">
            LGPD · Lei 13.709/2018
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
