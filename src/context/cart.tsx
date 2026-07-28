import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

export type CartItem = {
  slug: string;
  name: string;
  size: number;
  price: number;
  image: string;
  qty: number;
};

type CartState = {
  items: CartItem[];
  isOpen: boolean;
  open: () => void;
  close: () => void;
  add: (item: Omit<CartItem, "qty">) => void;
  remove: (slug: string, size: number) => void;
  count: number;
  total: number;
};

const CartContext = createContext<CartState | null>(null);
const STORAGE_KEY = "atelier-cart";

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setItems(JSON.parse(raw));
    } catch {
      /* ignore */
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      /* ignore */
    }
  }, [items]);

  const value = useMemo<CartState>(() => {
    return {
      items,
      isOpen,
      open: () => setIsOpen(true),
      close: () => setIsOpen(false),
      add: (item) => {
        setItems((prev) => {
          const found = prev.find((i) => i.slug === item.slug && i.size === item.size);
          if (found) {
            return prev.map((i) =>
              i.slug === item.slug && i.size === item.size ? { ...i, qty: i.qty + 1 } : i,
            );
          }
          return [...prev, { ...item, qty: 1 }];
        });
        setIsOpen(true);
      },
      remove: (slug, size) =>
        setItems((prev) => prev.filter((i) => !(i.slug === slug && i.size === size))),
      count: items.reduce((sum, i) => sum + i.qty, 0),
      total: items.reduce((sum, i) => sum + i.qty * i.price, 0),
    };
  }, [items, isOpen]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
