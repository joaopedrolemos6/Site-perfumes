import { Link } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { formatPrice, type Product } from "@/data/products";

export function ProductCard({ product, index = 0 }: { product: Product; index?: number }) {
  return (
    <Reveal as="article" delay={index * 0.08}>
      <Link to="/produto/$slug" params={{ slug: product.slug }} className="group block">
        <div className="overflow-hidden bg-[var(--sand)]">
          <img
            src={product.image}
            alt={`Frasco do perfume ${product.name}`}
            width={1000}
            height={1250}
            loading="lazy"
            className="aspect-[4/5] w-full object-cover transition-[transform,box-shadow] duration-[600ms] group-hover:scale-[1.03]"
            style={{ transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)" }}
          />
        </div>
        <div className="mt-6 flex items-start justify-between gap-6">
          <div className="min-w-0">
            <h3 className="label-xs">{product.name}</h3>
            <p className="mt-2 text-xs text-muted-foreground">{product.notes}</p>
          </div>
          <span className="shrink-0 text-xs tabular-nums text-muted-foreground">
            {formatPrice(product.price)}
          </span>
        </div>
      </Link>
    </Reveal>
  );
}
