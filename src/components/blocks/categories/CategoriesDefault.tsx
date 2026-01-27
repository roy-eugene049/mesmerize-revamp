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

        {/* 3 on top (1/3 each), Flower Decor + Gift Packages below (1/2 each), same on mobile and desktop */}
        <div className="grid grid-cols-6 gap-2 sm:gap-4 md:gap-6">
          {categories.map((category, index) => {
            const isTopThree = index < 3;
            const colSpan = isTopThree ? "col-span-2" : "col-span-3";
            const aspectClass = isTopThree ? "aspect-[4/3] md:aspect-[5/4]" : "aspect-[4/3] md:aspect-[5/4]";

            return (
              <a
                key={category.id}
                href={category.link}
                className={`relative group overflow-hidden rounded-xl ${colSpan} ${aspectClass} transition-all duration-300 active:scale-[0.98] sm:active:scale-100`}
              >
                <div className="relative w-full h-full min-h-0">
                  <img
                    src={category.image || "/placeholder.svg"}
                    alt={category.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Bottom-left label: dark gradient + white uppercase, matching reference */}
                  <div
                    className="absolute inset-0 z-10 bg-gradient-to-t from-black/75 via-black/20 to-transparent pointer-events-none"
                    aria-hidden
                  />
                  <div className="absolute bottom-0 left-0 right-0 z-20 flex items-end justify-start p-3 sm:p-4 md:p-5">
                    <span className="text-white font-sans text-[11px] sm:text-sm md:text-base tracking-[0.15em] uppercase font-medium">
                      {category.name}
                    </span>
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