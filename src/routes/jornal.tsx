import { createFileRoute } from "@tanstack/react-router";
import { EditorialCard } from "@/components/EditorialCard";
import { Reveal } from "@/components/Reveal";
import { journal } from "@/data/journal";

const title = "Jornal — Atelier Onze";
const description =
  "Ensaios curtos sobre matérias-primas, método de ateliê e o uso discreto de perfume.";

export const Route = createFileRoute("/jornal")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: Jornal,
});

function Jornal() {
  return (
    <>
      <header className="px-6 pb-24 pt-40 md:px-12 md:pb-32 md:pt-56">
        <div className="mx-auto max-w-[1600px]">
          <Reveal>
            <p className="eyebrow">Jornal</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="display-xl mt-6 max-w-3xl">Notas de ateliê</h1>
          </Reveal>
        </div>
      </header>

      <section className="px-6 pb-32 md:px-12 md:pb-48">
        <div className="mx-auto grid max-w-[1600px] gap-x-12 gap-y-20 md:grid-cols-3">
          {journal.map((item, i) => (
            <EditorialCard key={item.title} item={item} index={i} />
          ))}
        </div>
      </section>
    </>
  );
}
