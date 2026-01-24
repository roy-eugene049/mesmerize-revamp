import { Button } from "@/components/ui/button";
import type { Block, Shop } from "@/types/storefront";

interface Props {
  shop: Shop;
  block: Block;
  editMode?: boolean;
}

interface CarouselImage {
  imageUrl: string;
  instagramUrl?: string;
  isVideo?: boolean; // Declare isVideo property
}

// Image URLs for carousel
const carouselImages: CarouselImage[] = [
  {
    imageUrl: "https://utfs.io/f/Pa5Wucpkzp6LTwkdAbF0FEhGwqz1AesrdQNS4xlimTnPB3jb",
  },
  {
    imageUrl: "https://utfs.io/f/Pa5Wucpkzp6Lf17hjSaHQ21jiDb4Nzqow9ufdnZeBSgc7yvV",
  },
  {
    imageUrl: "https://utfs.io/f/Pa5Wucpkzp6LozziQvxahqznNLJZ13d0lH8F6w95oyfbsVg2",
  },
  {
    imageUrl: "https://utfs.io/f/Pa5Wucpkzp6L1jcf9FX4BpGwcjTI3Z28DlrvW6QJOVnuoE9g",
  },
  {
    imageUrl: "https://utfs.io/f/Pa5Wucpkzp6LHX6l4HzSf4Q7DOR9YT8KWUCXE6wm0Hu2oZLa",
  },
  {
    imageUrl: "https://utfs.io/f/Pa5Wucpkzp6L6Z8gSFAUgpSWDCaZYtbM1sHxvrBko3XL92d0",
  },
  {
    imageUrl: "https://utfs.io/f/Pa5Wucpkzp6LCrlIZOLuXmLH5gpYqGDCrJox73RFn6BUVb0k",
  },
  {
    imageUrl: "https://utfs.io/f/Pa5Wucpkzp6LMo3G0LQD8kvdgsxBZTLrwVjoEhtCpzNqJ94l",
  },
];

export default function HeroDefault({
  shop: _shop,
  block,
}: Props) {
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
          {carouselImages.map((item, index) => (
            <div
              key={item.imageUrl}
              className="w-[200px] sm:w-[240px] md:w-[320px] lg:w-[400px] aspect-[3/4] rounded-sm overflow-hidden shadow-2xl snap-center flex-shrink-0 group"
            >
              <img
                src={item.imageUrl || "/placeholder.svg"}
                alt={`Mesmerize product ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
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
