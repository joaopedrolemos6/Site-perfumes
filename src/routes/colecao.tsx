import { createFileRoute } from "@tanstack/react-router";
import { ProductGrid } from "@/components/ProductGrid";
import { Reveal } from "@/components/Reveal";
import { products } from "@/data/products";

const title = "Coleção — Atelier Onze";
const description =
  "Todos os perfumes do Atelier Onze: amadeirados, almiscarados, especiados e terrosos, em edições de até quinhentos frascos.";

export const Route = createFileRoute("/colecao")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: Colecao,
});

function Colecao() {
  return (
    <>
      <header className="px-6 pb-24 pt-40 md:px-12 md:pb-32 md:pt-56">
        <div className="mx-auto max-w-[1600px]">
          <Reveal>
            <p className="eyebrow">Coleção</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="display-xl mt-6 max-w-3xl">Todos os perfumes</h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-8 max-w-md text-sm leading-loose text-muted-foreground">
              Cada edição é numerada e datada. Amostras de 2 ml acompanham qualquer pedido.
            </p>
          </Reveal>
        </div>
      </header>
      <ProductGrid products={products} />
    </>
  );
}
