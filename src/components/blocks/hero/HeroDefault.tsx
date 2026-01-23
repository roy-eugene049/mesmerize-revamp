import { Button } from "@/components/ui/button";
import type { Block, Shop } from "@/types/storefront";

interface Props {
  shop: Shop;
  block: Block;
  editMode?: boolean;
}

export default function HeroDefault({
  shop,
  block,
}: Props) {
  if (!shop) return null;

  const images = [
    "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&q=80&w=600&h=800",
    "https://images.unsplash.com/photo-1562690868-60bbe7293e94?auto=format&fit=crop&q=80&w=600&h=800",
    "https://images.unsplash.com/photo-1596438459194-f9686001d413?auto=format&fit=crop&q=80&w=600&h=800",
    "https://images.unsplash.com/photo-1591123120675-6f7f1aae0e5b?auto=format&fit=crop&q=80&w=600&h=800",
    "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&q=80&w=600&h=800",
    "https://images.unsplash.com/photo-1527061011665-3652c757a4d4?auto=format&fit=crop&q=80&w=600&h=800",
    "https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&q=80&w=600&h=800",
    "https://images.unsplash.com/photo-1507290439931-a861b5a38200?auto=format&fit=crop&q=80&w=600&h=800",
    "https://images.unsplash.com/photo-1550983092-249511f07a51?auto=format&fit=crop&q=80&w=600&h=800",
    "https://images.unsplash.com/photo-1519378013398-fa3274be394b?auto=format&fit=crop&q=80&w=600&h=800",
    "https://images.unsplash.com/photo-1523694576729-dc99e9c0f9b6?auto=format&fit=crop&q=80&w=600&h=800",
    "https://images.unsplash.com/photo-1561047029-3000c68339ca?auto=format&fit=crop&q=80&w=600&h=800",
    "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&q=80&w=600&h=800",
    "https://images.unsplash.com/photo-1508784411316-02b8cd4d3a3a?auto=format&fit=crop&q=80&w=600&h=800",
    "https://images.unsplash.com/photo-1599148482840-d54ca35abc39?auto=format&fit=crop&q=80&w=600&h=800",
  ];

  const title = block.data?.find((d) => d.name === "slide_one_title")?.value ?? "Exquisite flowers and thoughtful gifts for every occasion";

  return (
    <section className="bg-background pt-32 md:pt-40 pb-8 md:pb-12 overflow-x-hidden overflow-y-visible flex flex-col items-center">
      <div className="container mx-auto px-6 mb-8 text-center">
        <h1 className="text-4xl md:text-6xl font-serif text-foreground leading-tight max-w-4xl mx-auto mb-4">
          {title}
        </h1>
      </div>

      <div className="w-full relative no-scrollbar overflow-x-auto overflow-y-visible">
        <div className="flex space-x-6 md:space-x-10 pb-12 md:pb-16 pl-6 pr-6 md:pl-20 md:pr-20 w-max mx-auto">
          {images.map((src) => (
            <div 
              key={src} 
              className="w-[280px] md:w-[400px] aspect-[3/4] rounded-sm overflow-hidden shadow-2xl"
            >
              <img
                src={src}
                alt="Floral arrangement"
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 md:mt-10 flex justify-center">
        <Button
          variant="default"
          className="bg-black text-white hover:bg-black/90 transition-all duration-500 rounded-none px-16 py-8 text-sm tracking-[0.2em] uppercase font-bold"
          asChild
        >
          <a href="/products">
            Shop Flowers & Gifts
          </a>
        </Button>
      </div>
    </section>
  );
}
