import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import notesBg from "@/assets/notes-bg.jpg";
import { Reveal } from "@/components/Reveal";

const notes = [
  {
    n: "01",
    stage: "Topo",
    name: "Bergamota fria",
    text: "Os primeiros minutos. Cítrico seco, quase mineral, sem doçura.",
  },
  {
    n: "02",
    stage: "Coração",
    name: "Cedro do Atlas",
    text: "Madeira respirada em silêncio. É aqui que a composição se instala.",
  },
  {
    n: "03",
    stage: "Fundo",
    name: "Âmbar e vetiver",
    text: "Calor prolongado, projeção baixa. Permanece por doze horas na pele.",
  },
];

export function NotesSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);

  return (
    <section ref={ref} className="relative overflow-hidden">
      <motion.div className="absolute inset-0 -z-10 scale-110" style={{ y }}>
        <img
          src={notesBg}
          alt=""
          aria-hidden
          width={1800}
          height={1000}
          loading="lazy"
          className="h-full w-full object-cover opacity-25"
        />
      </motion.div>

      <div className="mx-auto max-w-[1600px] px-6 py-32 md:px-12 md:py-48">
        <Reveal>
          <p className="eyebrow">Notas olfativas</p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="display-lg mt-6 max-w-2xl">A construção de Ombre 13</h2>
        </Reveal>

        <div className="mt-20 grid gap-px bg-foreground/10 md:grid-cols-3">
          {notes.map((note, i) => (
            <Reveal key={note.n} delay={i * 0.12} className="bg-background/70 p-8 md:p-12">
              <div className="flex items-baseline gap-4">
                <span className="text-xs tabular-nums text-muted-foreground">{note.n}</span>
                <span className="h-px flex-1 bg-foreground/20" />
                <span className="eyebrow">{note.stage}</span>
              </div>
              <h3 className="display-md mt-10">{note.name}</h3>
              <p className="mt-5 text-sm leading-loose text-muted-foreground">{note.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
