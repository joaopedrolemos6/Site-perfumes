import { createFileRoute, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { Reveal } from "@/components/Reveal";
import { ProductGrid } from "@/components/ProductGrid";
import { useCart } from "@/context/cart";
import { formatPrice, getProduct, products, type Product } from "@/data/products";

export const Route = createFileRoute("/produto/$slug")({
  loader: ({ params }) => {
    const product = getProduct(params.slug);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Indisponível — Atelier Onze" }, { name: "robots", content: "noindex" }] };
    }
    const title = `${loaderData.product.name} — Atelier Onze`;
    const description = loaderData.product.description;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
      ],
    };
  },
  component: ProdutoPage,
});

function ProdutoPage() {
  const { product } = Route.useLoaderData() as { product: Product };
  const [size, setSize] = useState(product.sizes[1] ?? product.sizes[0]);
  const { add } = useCart();

  const related = products.filter((p) => p.slug !== product.slug).slice(0, 3);

  return (
    <>
      <div className="grid md:grid-cols-2">
        <div className="bg-[var(--sand)] md:sticky md:top-0 md:h-screen">
          <img
            src={product.image}
            alt={`Frasco do perfume ${product.name}`}
            width={1000}
            height={1250}
            className="h-full max-h-[70vh] w-full object-cover md:max-h-none"
          />
        </div>

        <div className="px-6 py-24 md:px-16 md:py-40">
          <div className="mx-auto max-w-md">
            <Reveal>
              <p className="eyebrow">{product.family}</p>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="display-lg mt-6">{product.name}</h1>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-4 text-sm text-muted-foreground">{product.notes}</p>
            </Reveal>
            <Reveal delay={0.24}>
              <p className="mt-10 text-sm leading-loose text-muted-foreground">
                {product.description}
              </p>
            </Reveal>

            <Reveal delay={0.32}>
              <div className="glass mt-12 p-6">
                <p className="eyebrow">Tamanho</p>
                <div className="mt-5 flex flex-wrap gap-3">
                  {product.sizes.map((s) => (
                    <button
                      key={s.ml}
                      onClick={() => setSize(s)}
                      className={`label-xs border px-5 py-3 transition-colors duration-500 ${
                        s.ml === size.ml
                          ? "border-foreground text-foreground"
                          : "border-foreground/25 text-muted-foreground hover:border-foreground/50"
                      }`}
                      style={{ transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)" }}
                    >
                      {s.ml} ml
                    </button>
                  ))}
                </div>
                <div className="mt-6 flex items-baseline justify-between">
                  <span className="eyebrow">Preço</span>
                  <span className="text-sm tabular-nums">{formatPrice(size.price)}</span>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.4}>
              <button
                className="btn-quiet mt-8 w-full"
                onClick={() =>
                  add({
                    slug: product.slug,
                    name: product.name,
                    size: size.ml,
                    price: size.price,
                    image: product.image,
                  })
                }
              >
                <span>Adicionar à sacola</span>
              </button>
            </Reveal>

            <div className="mt-20 space-y-10">
              {product.composition.map((c, i) => (
                <Reveal key={c.stage} delay={i * 0.1}>
                  <div className="flex items-baseline gap-4">
                    <span className="text-xs tabular-nums text-muted-foreground">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="h-px flex-1 bg-foreground/15" />
                    <span className="eyebrow">{c.stage}</span>
                  </div>
                  <h2 className="label-xs mt-5">{c.name}</h2>
                  <p className="mt-2 text-sm leading-loose text-muted-foreground">{c.text}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="pt-32 md:pt-48">
        <ProductGrid products={related} eyebrow="Também da casa" title="Composições próximas" />
      </div>
    </>
  );
}
