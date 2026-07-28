import { EditorialCard } from "@/components/EditorialCard";
import { Reveal } from "@/components/Reveal";
import { journal } from "@/data/journal";

export function EditorialSection() {
  return (
    <section className="px-6 pb-32 md:px-12 md:pb-48">
      <div className="mx-auto max-w-[1600px]">
        <div className="mb-16 md:mb-24">
          <Reveal>
            <p className="eyebrow">Jornal</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="display-lg mt-6 max-w-2xl">Notas de ateliê</h2>
          </Reveal>
        </div>

        <div className="grid gap-x-12 gap-y-20 md:grid-cols-3">
          {journal.map((item, i) => (
            <EditorialCard key={item.title} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
