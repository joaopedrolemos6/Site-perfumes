import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import philosophy from "@/assets/philosophy.jpg";
import { Reveal } from "@/components/Reveal";

export function Philosophy() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

  return (
    <section className="px-6 py-32 md:px-12 md:py-48">
      <div className="mx-auto grid max-w-[1600px] items-center gap-16 md:grid-cols-2 md:gap-24">
        <div className="max-w-lg">
          <Reveal>
            <p className="eyebrow">Filosofia</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="display-lg mt-6">Menos, porém inteiro</h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-8 text-sm leading-loose text-muted-foreground">
              Cada fórmula começa com uma lista de matérias-primas que cabe em uma linha. Retiramos
              tudo que apenas decora e mantemos o que sustenta. O resultado é uma perfumaria que
              não pede atenção — ela permanece.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <p className="mt-6 text-sm leading-loose text-muted-foreground">
              Trabalhamos com destilarias em Grasse e no interior de São Paulo. Nenhuma edição
              excede quinhentos frascos.
            </p>
          </Reveal>
        </div>

        <div ref={ref} className="overflow-hidden">
          <motion.img
            src={philosophy}
            alt="Interior claro com um frasco de perfume sobre prateleira de pedra"
            width={1200}
            height={1400}
            loading="lazy"
            className="h-[70vh] w-full object-cover"
            style={{ y }}
          />
        </div>
      </div>
    </section>
  );
}
