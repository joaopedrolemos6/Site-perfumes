import { Link } from "@tanstack/react-router";

const columns = [
  {
    title: "Coleção",
    links: [
      { label: "Todos os perfumes", to: "/colecao" },
      { label: "Amadeirados", to: "/colecao" },
      { label: "Almiscarados", to: "/colecao" },
    ],
  },
  {
    title: "Casa",
    links: [
      { label: "Sobre", to: "/sobre" },
      { label: "Contato", to: "/contato" },
    ],
  },
  {
    title: "Atendimento",
    links: [
      { label: "Envio e prazos", to: "/contato" },
      { label: "Trocas", to: "/contato" },
      { label: "Amostras", to: "/contato" },
    ],
  },
] as const;

export function Footer() {
  return (
    <footer className="bg-[var(--wood)] px-6 pb-12 pt-24 md:px-12">
      <div className="mx-auto max-w-[1600px]">
        <div className="grid gap-16 md:grid-cols-[1.2fr_2fr]">
          <div>
            <p className="label-xs tracking-[0.28em]">Atelier Onze</p>
            <p className="mt-6 max-w-sm text-sm text-muted-foreground">
              Perfumaria de nicho produzida em pequenos lotes. Uma carta por estação, nada além
              disso.
            </p>

            <form
              className="mt-10 max-w-sm"
              onSubmit={(e) => {
                e.preventDefault();
                (e.currentTarget as HTMLFormElement).reset();
              }}
            >
              <label htmlFor="newsletter" className="eyebrow">
                Newsletter
              </label>
              <div className="mt-4 flex items-center gap-4 border-b border-foreground/25 pb-2">
                <input
                  id="newsletter"
                  type="email"
                  required
                  placeholder="seu e-mail"
                  className="w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
                />
                <button type="submit" className="label-xs link-underline shrink-0">
                  Assinar
                </button>
              </div>
            </form>
          </div>

          <div className="grid gap-10 sm:grid-cols-3">
            {columns.map((col) => (
              <div key={col.title}>
                <p className="eyebrow">{col.title}</p>
                <ul className="mt-5 space-y-3">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <Link
                        to={l.to}
                        className="link-underline text-sm text-muted-foreground transition-colors duration-500 hover:text-foreground"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 flex flex-col justify-between gap-3 border-t border-foreground/10 pt-8 text-xs text-muted-foreground sm:flex-row">
          <span>© {new Date().getFullYear()} Atelier Onze</span>
          <span>São Paulo · Grasse</span>
        </div>
      </div>
    </footer>
  );
}
