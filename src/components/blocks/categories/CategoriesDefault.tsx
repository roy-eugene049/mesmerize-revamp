import type { Block } from "@/types/storefront";

interface Props {
  block: Block;
}

interface Category {
  id: string;
  name: string;
  image: string;
  link: string;
  span?: "col-span-1" | "col-span-2" | "row-span-1" | "row-span-2";
}

const categories: Category[] = [
  {
    id: "fresh-flowers",
    name: "FRESH FLOWERS",
    image: "https://images.unsplash.com/photo-1562690868-60bbe7293e94?auto=format&fit=crop&q=80&w=800&h=600",
    link: "/categories/fresh-flowers",
    span: "col-span-1",
  },
  {
    id: "bouquets",
    name: "BOUQUETS",
    image: "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&q=80&w=600&h=800",
    link: "/categories/bouquets",
    span: "row-span-2",
  },
  {
    id: "shop-by-occasion",
    name: "SHOP BY OCCASION",
    image: "https://images.unsplash.com/photo-1597089548027-e40b852e505d?auto=format&fit=crop&q=80&w=800&h=600",
    link: "/categories/occasions",
    span: "col-span-1",
  },
  {
    id: "flower-decor",
    name: "FLOWER DECOR",
    image: "https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?auto=format&fit=crop&q=80&w=600&h=600",
    link: "/categories/flower-decor",
    span: "col-span-1",
  },
  {
    id: "luxury-flowers",
    name: "LUXURY FLOWERS",
    image: "https://images.unsplash.com/photo-1507290439931-a861b5a38200?auto=format&fit=crop&q=80&w=600&h=600",
    link: "/categories/luxury-flowers",
    span: "col-span-1",
  },
];

export default function CategoriesDefault({ block }: Props) {
  return (
    <section className="pt-4 md:pt-6 pb-12 md:pb-20 bg-background">
      <div className="container mx-auto px-6 md:px-12">
        {/* Header with title and discover more link */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif tracking-[0.05em] text-foreground uppercase mb-4 md:mb-0">
            OUR CATEGORIES
          </h2>
          <a
            href="/categories"
            className="text-sm md:text-base tracking-[0.15em] uppercase text-foreground/70 hover:text-foreground transition-colors relative group"
          >
            <span className="absolute -top-3 left-0 w-full h-[1px] bg-foreground/70"></span>
            DISCOVER MORE
          </a>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {categories.map((category, index) => {
            // Determine grid span and aspect ratio based on position
            let gridClasses = "col-span-1";
            let aspectClass = "aspect-[4/3]";
            
            if (index === 0) {
              // FRESH FLOWERS - horizontal rectangle on desktop
              gridClasses = "md:col-span-1";
              aspectClass = "aspect-[4/3] md:aspect-[16/10]";
            } else if (index === 1) {
              // BOUQUETS - vertical/taller on desktop (spans 2 rows)
              gridClasses = "md:col-span-1 md:row-span-2";
              aspectClass = "aspect-[4/3] md:aspect-auto md:h-full";
            } else if (index === 2) {
              // SHOP BY OCCASION - horizontal rectangle on desktop
              gridClasses = "md:col-span-1";
              aspectClass = "aspect-[4/3] md:aspect-[16/10]";
            } else {
              // FLOWER DECOR and LUXURY FLOWERS - square on desktop
              gridClasses = "md:col-span-1";
              aspectClass = "aspect-[4/3] md:aspect-square";
            }

            return (
              <a
                key={category.id}
                href={category.link}
                className={`relative group overflow-hidden ${gridClasses} ${aspectClass}`}
              >
                <div className="relative w-full h-full">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  
                  {/* White overlay with category name */}
                  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10">
                    <div className="bg-white border border-black px-4 py-2.5 md:px-6 md:py-3">
                      <span className="text-xs md:text-sm tracking-[0.1em] font-medium text-black uppercase whitespace-nowrap">
                        {category.name}
                      </span>
                    </div>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
