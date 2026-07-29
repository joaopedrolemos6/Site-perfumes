import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/Hero";
import { Philosophy } from "@/components/Philosophy";
import { ProductGrid } from "@/components/ProductGrid";
import { NotesSection } from "@/components/NotesSection";
import { products } from "@/data/products";

const title = "Atelier Onze — Perfumaria de nicho em pequenos lotes";
const description =
  "Seis composições de perfumaria de nicho, feitas em pequenos lotes e engarrafadas à mão. Amadeirados, almiscarados e terrosos.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <Philosophy />
      <ProductGrid products={products.slice(0, 3)} eyebrow="Coleção" title="Seis composições" />
      <NotesSection />
    </>
  );
}
