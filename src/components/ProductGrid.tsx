import { ProductCard } from "@/components/ProductCard";
import { Reveal } from "@/components/Reveal";
import type { Product } from "@/data/products";

export function ProductGrid({
  products,
  eyebrow,
  title,
}: {
  products: Product[];
  eyebrow?: string;
  title?: string;
}) {
  return (
    <section id="colecao" className="px-6 pb-32 md:px-12 md:pb-48">
      <div className="mx-auto max-w-[1600px]">
        {(eyebrow || title) && (
          <div className="mb-16 md:mb-24">
            {eyebrow && (
              <Reveal>
                <p className="eyebrow">{eyebrow}</p>
              </Reveal>
            )}
            {title && (
              <Reveal delay={0.1}>
                <h2 className="display-lg mt-6 max-w-2xl">{title}</h2>
              </Reveal>
            )}
          </div>
        )}

        <div className="grid grid-cols-1 gap-x-10 gap-y-20 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-16">
          {products.map((p, i) => (
            <ProductCard key={p.slug} product={p} index={i % 3} />
          ))}
        </div>
      </div>
    </section>
  );
}
