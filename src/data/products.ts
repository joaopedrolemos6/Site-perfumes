import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";
import product5 from "@/assets/product-5.jpg";
import product6 from "@/assets/product-6.jpg";

export type Product = {
  slug: string;
  name: string;
  family: string;
  notes: string;
  price: number;
  image: string;
  description: string;
  composition: { stage: string; name: string; text: string }[];
  sizes: { ml: number; price: number }[];
};

export const products: Product[] = [
  {
    slug: "ombre-13",
    name: "Ombre 13",
    family: "Amadeirado",
    notes: "Cedro · Vetiver · Âmbar seco",
    price: 890,
    image: product1,
    description:
      "Uma sombra longa ao fim da tarde. Madeiras secas repousam sobre âmbar, sem doçura, sem pressa. Feito em pequenos lotes e engarrafado à mão.",
    composition: [
      { stage: "Topo", name: "Bergamota fria", text: "Uma abertura curta, quase mineral." },
      { stage: "Coração", name: "Cedro do Atlas", text: "Madeira seca, respirada em silêncio." },
      { stage: "Fundo", name: "Âmbar e vetiver", text: "Persistência baixa, calor prolongado." },
    ],
    sizes: [
      { ml: 15, price: 420 },
      { ml: 50, price: 890 },
      { ml: 100, price: 1390 },
    ],
  },
  {
    slug: "lin-blanc",
    name: "Lin Blanc",
    family: "Almiscarado",
    notes: "Almíscar branco · Íris · Linho",
    price: 820,
    image: product2,
    description:
      "O cheiro de tecido limpo secando ao sol. Almíscares brancos e íris em pó, transparentes, quase invisíveis sobre a pele.",
    composition: [
      { stage: "Topo", name: "Aldeídos suaves", text: "Luz difusa sobre o tecido." },
      { stage: "Coração", name: "Íris em pó", text: "Fria, seca, ligeiramente terrosa." },
      { stage: "Fundo", name: "Almíscar branco", text: "Uma segunda pele." },
    ],
    sizes: [
      { ml: 15, price: 390 },
      { ml: 50, price: 820 },
      { ml: 100, price: 1290 },
    ],
  },
  {
    slug: "papier-noir",
    name: "Papier Noir",
    family: "Especiado",
    notes: "Pimenta preta · Papel · Incenso",
    price: 940,
    image: product3,
    description:
      "Tinta fresca sobre papel de algodão. Pimenta preta e incenso frio em uma composição contida, quase arquivística.",
    composition: [
      { stage: "Topo", name: "Pimenta preta", text: "Seca, granulada, breve." },
      { stage: "Coração", name: "Papel e tinta", text: "Uma nota de arquivo, fria." },
      { stage: "Fundo", name: "Incenso", text: "Fumaça sem calor." },
    ],
    sizes: [
      { ml: 15, price: 450 },
      { ml: 50, price: 940 },
      { ml: 100, price: 1490 },
    ],
  },
  {
    slug: "terre-brune",
    name: "Terre Brune",
    family: "Terroso",
    notes: "Vetiver · Patchouli · Baunilha seca",
    price: 980,
    image: product4,
    description:
      "Terra depois da chuva. Vetiver e patchouli aterram uma baunilha sem açúcar, retida, quase mineral.",
    composition: [
      { stage: "Topo", name: "Terra molhada", text: "Petricor, um instante." },
      { stage: "Coração", name: "Patchouli", text: "Verde escuro, sem doçura." },
      { stage: "Fundo", name: "Baunilha seca", text: "Calor sem açúcar." },
    ],
    sizes: [
      { ml: 15, price: 470 },
      { ml: 50, price: 980 },
      { ml: 100, price: 1540 },
    ],
  },
  {
    slug: "verre-clair",
    name: "Verre Clair",
    family: "Cítrico",
    notes: "Neroli · Petitgrain · Musgo",
    price: 780,
    image: product5,
    description:
      "Uma janela aberta no início da manhã. Neroli e petitgrain sobre musgo, com uma clareza que não se anuncia.",
    composition: [
      { stage: "Topo", name: "Neroli", text: "Fresco, floral, translúcido." },
      { stage: "Coração", name: "Petitgrain", text: "Folha verde, amarga na medida." },
      { stage: "Fundo", name: "Musgo de carvalho", text: "Sombra sob a luz." },
    ],
    sizes: [
      { ml: 15, price: 370 },
      { ml: 50, price: 780 },
      { ml: 100, price: 1240 },
    ],
  },
  {
    slug: "bois-nu",
    name: "Bois Nu",
    family: "Amadeirado",
    notes: "Sândalo · Cashmeran · Sal",
    price: 1050,
    image: product6,
    description:
      "Madeira crua, sem verniz. Sândalo cremoso e uma nota salina que mantém a composição sóbria do começo ao fim.",
    composition: [
      { stage: "Topo", name: "Sal mineral", text: "Um ar frio de litoral." },
      { stage: "Coração", name: "Sândalo", text: "Leitoso, denso, contido." },
      { stage: "Fundo", name: "Cashmeran", text: "Um véu de madeira macia." },
    ],
    sizes: [
      { ml: 15, price: 490 },
      { ml: 50, price: 1050 },
      { ml: 100, price: 1650 },
    ],
  },
];

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}

export const formatPrice = (value: number) =>
  new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL", minimumFractionDigits: 0 }).format(
    value,
  );
