## Objetivo

E-commerce de perfumes de nicho, front-end completo, estética "quiet luxury" (Le Labo / Byredo / Aesop), sem backend — dados de produtos em arquivo local.

## Fundação visual

- `src/styles.css`: tokens em oklch equivalentes à paleta (#F7F3EE fundo, #EDE6DB areia, #D9CCB8 bege amadeirado, #B79C7F argila, #1C1A17 texto, #6E655A texto secundário, branco pontual). Raio quase reto, sombras suaves.
- Tipografia: Inter (300/400/500) carregada via `<link>` no `__root.tsx`; títulos em clamp(2.5rem, 6vw, 5.5rem), uppercase com tracking 0.02–0.05em; corpo com line-height 1.7.
- Easings customizados como tokens (`cubic-bezier(0.16,1,0.3,1)`), durações 400–1000ms.
- Utilitários: `glass` (blur 16px + 12% de opacidade + borda branca 10%), `link-underline` (grow esquerda→direita).

## Componentes

`Header` (transparente → glass ao rolar, menu Coleção/Sobre/Jornal/Contato, busca e sacola em line icons, overlay fullscreen no mobile), `Hero` (full-viewport, fade + scale-down na entrada, CTA outline fino), `Philosophy` (duas colunas editoriais com scroll reveal em stagger), `ProductCard` / `ProductGrid` (3/2/1 colunas, zoom 1.03 no hover, cascata ao entrar), `NotesSection` (Topo/Coração/Fundo numerados com linha conectora e parallax de fundo 0.35x), `EditorialSection` + `EditorialCard`, `Footer` (bege escuro, newsletter com input underline), `CartDrawer` (drawer lateral com glass, estado em contexto React + localStorage), `Reveal` (wrapper Framer Motion reutilizável), cursor customizado discreto em desktop (desativado em touch e com `prefers-reduced-motion`).

## Rotas

- `/` — home: Hero, Filosofia, Coleção, Notas olfativas, Editorial, Footer (substitui o placeholder atual).
- `/colecao` — grid completo.
- `/produto/$slug` — split screen: galeria sticky à esquerda, painel à direita com nome, preço, seletor de tamanho (card glass, botões outline), descrição, notas, CTA "Adicionar à sacola" com preenchimento gradual no hover.
- `/sobre`, `/jornal`, `/contato` — páginas editoriais enxutas.
- Cada rota com `head()` próprio (title, description, og/twitter). Transições de página em fade.

## Imagens

Gerar 8–10 still lifes de frascos em fundo neutro via IA (hero, produtos, filosofia, notas, editorial), salvos em `src/assets/` e importados como ES6.

## Detalhes técnicos

- Instalar `framer-motion` (`motion/react`) para reveal, parallax e page transitions; Intersection Observer via `whileInView` com `viewport={{ once: true }}`.
- Catálogo em `src/data/products.ts` (slug, nome, notas, tamanhos, preços, imagem) — sem Lovable Cloud nesta etapa.
- Carrinho apenas client-side; checkout fora de escopo.
