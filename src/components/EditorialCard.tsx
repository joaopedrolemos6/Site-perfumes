import { Reveal } from "@/components/Reveal";

export type Editorial = {
  title: string;
  category: string;
  date: string;
  image: string;
  excerpt: string;
};

export function EditorialCard({ item, index = 0 }: { item: Editorial; index?: number }) {
  return (
    <Reveal as="article" delay={index * 0.1}>
      <a href="#" className="group block">
        <div className="overflow-hidden bg-[var(--sand)]">
          <img
            src={item.image}
            alt={item.title}
            width={1200}
            height={900}
            loading="lazy"
            className="aspect-[4/3] w-full object-cover transition-transform duration-[600ms] group-hover:scale-[1.03]"
            style={{ transitionTimingFunction: "cubic-bezier(0.16,1,0.3,1)" }}
          />
        </div>
        <div className="mt-6 flex items-center justify-between">
          <span className="eyebrow">{item.category}</span>
          <span className="text-xs text-muted-foreground">{item.date}</span>
        </div>
        <div className="mt-4 h-px w-full bg-foreground/15" />
        <h3 className="display-md link-underline mt-6 inline-block">{item.title}</h3>
        <p className="mt-4 text-sm leading-loose text-muted-foreground">{item.excerpt}</p>
      </a>
    </Reveal>
  );
}
