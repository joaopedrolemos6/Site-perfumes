import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Reveal } from "@/components/Reveal";

const title = "Contato — Atelier Onze";
const description =
  "Fale com o ateliê sobre pedidos, amostras, envio e trocas. Resposta em até dois dias úteis.";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: Contato,
});

function Contato() {
  const [sent, setSent] = useState(false);

  return (
    <section className="px-6 pb-32 pt-40 md:px-12 md:pb-48 md:pt-56">
      <div className="mx-auto grid max-w-[1600px] gap-16 md:grid-cols-2 md:gap-24">
        <div className="max-w-md">
          <Reveal>
            <p className="eyebrow">Contato</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="display-lg mt-6">Escreva ao ateliê</h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-8 text-sm leading-loose text-muted-foreground">
              Respondemos em até dois dias úteis. Para amostras de 2 ml, indique as composições
              desejadas.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="mt-12 space-y-2 text-sm text-muted-foreground">
              <p>ateliê@atelieronze.com</p>
              <p>Rua Aspicuelta, 11 — São Paulo</p>
              <p>Terça a sábado, 11h — 19h</p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <form
            className="max-w-md space-y-10"
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
          >
            {[
              { id: "nome", label: "Nome", type: "text" },
              { id: "email", label: "E-mail", type: "email" },
            ].map((f) => (
              <div key={f.id}>
                <label htmlFor={f.id} className="eyebrow">
                  {f.label}
                </label>
                <input
                  id={f.id}
                  type={f.type}
                  required
                  className="mt-3 w-full border-b border-foreground/25 bg-transparent pb-2 text-sm outline-none transition-colors duration-500 focus:border-foreground"
                />
              </div>
            ))}
            <div>
              <label htmlFor="mensagem" className="eyebrow">
                Mensagem
              </label>
              <textarea
                id="mensagem"
                rows={4}
                required
                className="mt-3 w-full resize-none border-b border-foreground/25 bg-transparent pb-2 text-sm outline-none transition-colors duration-500 focus:border-foreground"
              />
            </div>
            <button type="submit" className="btn-quiet w-full">
              <span>{sent ? "Mensagem enviada" : "Enviar"}</span>
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
