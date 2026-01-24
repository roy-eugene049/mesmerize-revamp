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
    <section className="bg-background pt-24 sm:pt-28 md:pt-32 lg:pt-40 pb-6 sm:pb-8 md:pb-12 overflow-x-hidden overflow-y-visible flex flex-col items-center">
      <div className="container mx-auto px-4 sm:px-6 mb-6 sm:mb-8 text-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-serif text-foreground leading-tight max-w-4xl mx-auto mb-3 sm:mb-4">
          {title}
        </h1>
      </div>

      {/* Horizontal Scroll Gallery with Snap */}
      <div className="w-full relative no-scrollbar overflow-x-auto overflow-y-visible">
        <div className="flex space-x-4 sm:space-x-6 md:space-x-10 pb-8 sm:pb-12 md:pb-16 pl-4 pr-4 sm:pl-6 sm:pr-6 md:pl-20 md:pr-20 w-max mx-auto snap-x snap-mandatory">
          {images.map((src) => (
            <div 
              key={src} 
              className="w-[200px] sm:w-[240px] md:w-[320px] lg:w-[400px] aspect-[3/4] rounded-sm overflow-hidden shadow-2xl snap-center flex-shrink-0"
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

      <div className="mt-6 sm:mt-8 md:mt-10 flex justify-center px-4">
        <Button
          variant="default"
          className="bg-black text-white hover:bg-black/90 transition-all duration-500 rounded-none px-8 py-4 sm:px-12 sm:py-6 md:px-16 md:py-8 text-xs sm:text-sm tracking-[0.2em] uppercase font-bold w-full sm:w-auto max-w-sm"
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
