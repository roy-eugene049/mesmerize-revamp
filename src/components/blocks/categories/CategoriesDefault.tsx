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
    image: "https://utfs.io/f/Pa5Wucpkzp6LozziQvxahqznNLJZ13d0lH8F6w95oyfbsVg2",
    link: "/categories/fresh-flowers",
    span: "col-span-1",
  },
  {
    id: "bouquets",
    name: "BOUQUETS",
    image: "https://utfs.io/f/Pa5Wucpkzp6LTwkdAbF0FEhGwqz1AesrdQNS4xlimTnPB3jb",
    link: "/categories/bouquets",
    span: "row-span-2",
  },
  {
    id: "shop-by-occasion",
    name: "SHOP BY OCCASION",
    image: "https://utfs.io/f/Pa5Wucpkzp6L1jcf9FX4BpGwcjTI3Z28DlrvW6QJOVnuoE9g",
    link: "/categories/occasions",
    span: "col-span-1",
  },
  {
    id: "flower-decor",
    name: "FLOWER DECOR",
    image: "https://utfs.io/f/Pa5Wucpkzp6LHX6l4HzSf4Q7DOR9YT8KWUCXE6wm0Hu2oZLa",
    link: "/categories/flower-decor",
    span: "col-span-1",
  },
  {
    id: "luxury-flowers",
    name: "GIFT PACKAGES",
    image: "https://utfs.io/f/Pa5Wucpkzp6L6Z8gSFAUgpSWDCaZYtbM1sHxvrBko3XL92d0",
    link: "/categories/luxury-flowers",
    span: "col-span-1",
  },
];

export default function CategoriesDefault({ block }: Props) {
  return (
    <section className="pt-3 sm:pt-4 md:pt-6 pb-8 sm:pb-12 md:pb-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header with title and discover more link */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6 sm:mb-8 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif tracking-[0.05em] text-foreground uppercase mb-4 md:mb-0">
            OUR CATEGORIES
          </h2>
          <a
            href="/categories"
            className="text-xs sm:text-sm md:text-base tracking-[0.15em] uppercase text-foreground/70 hover:text-foreground transition-colors relative group"
          >
            <span className="absolute -top-2 sm:-top-3 left-0 w-full h-[1px] bg-foreground/70"></span>
            DISCOVER MORE
          </a>
        </div>

        {/* Categories Grid - Responsive */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
          {categories.map((category, index) => {
            // Determine grid span and aspect ratio based on position
            let gridClasses = "col-span-1";
            let aspectClass = "aspect-[4/3]";
            
            if (index === 0) {
              // FRESH FLOWERS - horizontal rectangle on desktop
              gridClasses = "sm:col-span-1";
              aspectClass = "aspect-[4/3] md:aspect-[16/10]";
            } else if (index === 1) {
              // BOUQUETS - vertical/taller on desktop (spans 2 rows)
              gridClasses = "sm:col-span-1 lg:row-span-2";
              aspectClass = "aspect-[4/3] lg:aspect-auto lg:h-full";
            } else if (index === 2) {
              // SHOP BY OCCASION - horizontal rectangle on desktop
              gridClasses = "sm:col-span-1";
              aspectClass = "aspect-[4/3] md:aspect-[16/10]";
            } else {
              // FLOWER DECOR and LUXURY FLOWERS - square on desktop
              gridClasses = "sm:col-span-1";
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
                    src={category.image || "/placeholder.svg"}
                    alt={category.name}
                    className="w-full h-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Dark overlay - fades on hover */}
                  <div className="absolute inset-0 bg-black/60 transition-opacity duration-500 group-hover:bg-black/20 z-10"></div>
                  
                  {/* Centered category name - fades out on hover */}
                  <div className="absolute inset-0 flex items-center justify-center z-20 transition-opacity duration-500 opacity-100 group-hover:opacity-0">
                    <div className="bg-white border border-black px-3 py-2 sm:px-4 sm:py-2.5 md:px-6 md:py-3 transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg">
                      <span className="text-[10px] sm:text-xs md:text-sm tracking-[0.1em] font-medium text-black uppercase whitespace-nowrap">
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