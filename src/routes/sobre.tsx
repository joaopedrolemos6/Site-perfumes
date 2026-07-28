import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import philosophy from "@/assets/philosophy.jpg";

const title = "Sobre — Atelier Onze";
const description =
  "A casa de perfumaria Atelier Onze: pequenos lotes, listas curtas de matérias-primas e edições numeradas entre São Paulo e Grasse.";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: Sobre,
});

function Sobre() {
  return (
    <>
      <header className="px-6 pb-24 pt-40 md:px-12 md:pb-32 md:pt-56">
        <div className="mx-auto max-w-[1600px]">
          <Reveal>
            <p className="eyebrow">Sobre</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="display-xl mt-6 max-w-4xl">Uma casa pequena, por escolha</h1>
          </Reveal>
        </div>
      </header>

      <section className="px-6 pb-32 md:px-12 md:pb-48">
        <div className="mx-auto grid max-w-[1600px] gap-16 md:grid-cols-[1fr_1.1fr] md:gap-24">
          <div className="max-w-lg space-y-6 text-sm leading-loose text-muted-foreground">
            <Reveal>
              <p>
                O Atelier Onze nasceu de uma limitação voluntária: nunca mais de onze
                matérias-primas por fórmula. O que parecia restrição virou método.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <p>
                Trabalhamos com destilarias familiares em Grasse e produtores no interior de São
                Paulo. Cada lote é macerado por seis semanas antes de ser engarrafado, rotulado e
                datado à mão.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <p>
                Não fazemos lançamentos sazonais. Uma composição entra na coleção quando está
                pronta — e sai quando o estoque termina.
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.15}>
            <img
              src={philosophy}
              alt="Frasco de perfume sobre prateleira de pedra em interior claro"
              width={1200}
              height={1400}
              loading="lazy"
              className="h-[75vh] w-full object-cover"
            />
          </Reveal>
        </div>
      </section>
    </>
  );
}
