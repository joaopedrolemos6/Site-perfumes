import { Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import heroImage from "@/assets/hero.jpg";
import { EASE } from "@/components/Reveal";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);

  return (
    <section ref={ref} className="relative h-[100svh] w-full overflow-hidden">
      <motion.div className="absolute inset-0" style={{ y }}>
        <motion.img
          src={heroImage}
          alt="Frasco de perfume em still life editorial sobre fundo neutro"
          width={1600}
          height={1104}
          className="h-full w-full object-cover"
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: EASE }}
        />
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-transparent to-background/40" />

      <div className="relative flex h-full items-end px-6 pb-20 md:px-12 md:pb-28">
        <motion.div
          className="max-w-3xl"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.95, ease: EASE, delay: 0.25 }}
        >
          <p className="eyebrow">Coleção de inverno</p>
          <h1 className="display-xl mt-6">Silêncio,{"\u00A0"}medido em gotas</h1>
          <p className="mt-8 max-w-md text-sm leading-relaxed text-muted-foreground">
            Seis composições feitas em pequenos lotes, engarrafadas à mão e datadas.
          </p>
          <Link to="/colecao" className="btn-quiet mt-10">
            <span>Explorar coleção</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
