import journal1 from "@/assets/journal-1.jpg";
import journal2 from "@/assets/journal-2.jpg";
import journal3 from "@/assets/journal-3.jpg";
import type { Editorial } from "@/components/EditorialCard";

export const journal: Editorial[] = [
  {
    title: "O que não entra na fórmula",
    category: "Ateliê",
    date: "Março 2026",
    image: journal1,
    excerpt:
      "Sobre a decisão de manter listas curtas de matérias-primas e o que se perde ao acrescentar mais uma nota.",
  },
  {
    title: "Colheita tardia em Grasse",
    category: "Matéria-prima",
    date: "Fevereiro 2026",
    image: journal2,
    excerpt:
      "Três dias entre destilarias, acompanhando o final da colheita e a primeira extração da estação.",
  },
  {
    title: "Como usar menos perfume",
    category: "Ensaio",
    date: "Janeiro 2026",
    image: journal3,
    excerpt:
      "Duas aplicações bastam. Um argumento breve a favor da discrição e da pele como suporte.",
  },
];
