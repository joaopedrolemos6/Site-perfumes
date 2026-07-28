import { Link } from "@tanstack/react-router";
import { AnimatePresence, motion } from "motion/react";
import { Search, ShoppingBag, X, Menu } from "lucide-react";
import { useEffect, useState } from "react";
import { useCart } from "@/context/cart";
import { EASE } from "@/components/Reveal";

const links = [
  { to: "/colecao", label: "Coleção" },
  { to: "/sobre", label: "Sobre" },
  { to: "/jornal", label: "Jornal" },
  { to: "/contato", label: "Contato" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { count, open } = useCart();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-700 ${
          scrolled ? "glass" : "bg-transparent border-b border-transparent"
        }`}
        style={{ transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)" }}
      >
        <div className="mx-auto grid max-w-[1600px] grid-cols-[auto_1fr_auto] items-center gap-6 px-6 py-5 md:px-12">
          <Link to="/" className="label-xs min-w-0 tracking-[0.28em]">
            Atelier Onze
          </Link>

          <nav className="hidden justify-center gap-10 md:flex">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="label-xs link-underline text-muted-foreground transition-colors duration-500 hover:text-foreground"
                activeProps={{ className: "text-foreground" }}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex shrink-0 items-center gap-5">
            <button aria-label="Buscar" className="hidden text-foreground/80 transition-opacity duration-500 hover:opacity-60 md:block">
              <Search strokeWidth={1} size={18} />
            </button>
            <button
              aria-label="Abrir sacola"
              onClick={open}
              className="relative text-foreground/80 transition-opacity duration-500 hover:opacity-60"
            >
              <ShoppingBag strokeWidth={1} size={18} />
              {count > 0 && (
                <span className="absolute -right-2 -top-1 text-[10px] tabular-nums text-muted-foreground">
                  {count}
                </span>
              )}
            </button>
            <button
              aria-label="Abrir menu"
              onClick={() => setMenuOpen(true)}
              className="text-foreground/80 md:hidden"
            >
              <Menu strokeWidth={1} size={18} />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-[60] bg-background"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: EASE }}
          >
            <div className="flex items-center justify-between px-6 py-5">
              <span className="label-xs tracking-[0.28em]">Atelier Onze</span>
              <button aria-label="Fechar menu" onClick={() => setMenuOpen(false)}>
                <X strokeWidth={1} size={20} />
              </button>
            </div>
            <nav className="mt-16 flex flex-col gap-8 px-6">
              {links.map((l, i) => (
                <motion.div
                  key={l.to}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, ease: EASE, delay: 0.08 * i + 0.1 }}
                >
                  <Link
                    to={l.to}
                    onClick={() => setMenuOpen(false)}
                    className="display-md block"
                  >
                    {l.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
