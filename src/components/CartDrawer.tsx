import { AnimatePresence, motion } from "motion/react";
import { X } from "lucide-react";
import { useCart } from "@/context/cart";
import { EASE } from "@/components/Reveal";
import { formatPrice } from "@/data/products";

export function CartDrawer() {
  const { isOpen, close, items, remove, total } = useCart();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 z-[70] bg-foreground/20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: EASE }}
            onClick={close}
          />
          <motion.aside
            className="glass fixed inset-y-0 right-0 z-[80] flex w-full max-w-md flex-col"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.7, ease: EASE }}
            aria-label="Sacola"
          >
            <div className="flex items-center justify-between px-8 py-7">
              <span className="label-xs">Sacola</span>
              <button aria-label="Fechar sacola" onClick={close}>
                <X strokeWidth={1} size={18} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-8">
              {items.length === 0 ? (
                <p className="mt-8 text-sm text-muted-foreground">Sua sacola está vazia.</p>
              ) : (
                <ul className="divide-y divide-border">
                  {items.map((item) => (
                    <li key={`${item.slug}-${item.size}`} className="flex gap-5 py-6">
                      <img
                        src={item.image}
                        alt={item.name}
                        loading="lazy"
                        className="h-24 w-20 object-cover"
                      />
                      <div className="flex min-w-0 flex-1 flex-col">
                        <span className="label-xs">{item.name}</span>
                        <span className="mt-1 text-xs text-muted-foreground">
                          {item.size} ml · {item.qty} un.
                        </span>
                        <button
                          onClick={() => remove(item.slug, item.size)}
                          className="mt-auto self-start text-xs text-muted-foreground link-underline"
                        >
                          Remover
                        </button>
                      </div>
                      <span className="text-sm tabular-nums">{formatPrice(item.price * item.qty)}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div className="border-t border-border px-8 py-7">
              <div className="flex items-center justify-between">
                <span className="label-xs">Subtotal</span>
                <span className="text-sm tabular-nums">{formatPrice(total)}</span>
              </div>
              <button className="btn-quiet mt-6 w-full" disabled={items.length === 0}>
                <span>Finalizar compra</span>
              </button>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
