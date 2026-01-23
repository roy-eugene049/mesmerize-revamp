import { createFileRoute } from '@tanstack/react-router'
import HeroDefault from "@/components/blocks/hero/HeroDefault";
import ProductListDefault from "@/components/blocks/productlist/ProductListDefault";
import CategoriesDefault from "@/components/blocks/categories/CategoriesDefault";
import InstagramFeedDefault from "@/components/blocks/instagram/InstagramFeedDefault";
import Footer from "@/components/blocks/footer/Footer";
import { type Block, type Shop, type Product, BlockTarget, BlockType } from "@/types/storefront";

export const Route = createFileRoute('/')({ component: StorefrontPage })

const mockShop: Shop = {
  id: "shop_1",
  name: "Mesmerize",
  slug: "mesmerize",
  short_name: "Mesmerize",
  logo: null,
  favicon: null,
  phone: "+254 700 000 000",
  slogan: "Captivating your senses",
  theme: "default",
};

const mockBlocks: Block[] = [
  {
    id: "block_1",
    shop_id: "shop_1",
    name: "hero-default",
    title: "Mesmerize Floral",
    type: BlockType.STRING,
    target: BlockTarget.HERO,
    position: 1,
    required_fields: [],
    data: [
      {
        name: "slide_one_title",
        type: BlockType.STRING,
        value: "Crafting Moments with Premium Flowers & Thoughtful Gifts",
      },
      {
        name: "slide_one_subtitle",
        type: BlockType.STRING,
        value: "Luxury Floral Arrangements",
      },
    ],
  },
  {
    id: "block_2",
    shop_id: "shop_1",
    name: "productlist-default",
    title: "Most Popular Products",
    type: BlockType.STRING,
    target: BlockTarget.PRODUCTLIST,
    position: 2,
    required_fields: [],
    data: [],
  },
];

const mockProducts: Product[] = [
  {
    id: "p1",
    title: "Eternal Rose Box",
    slug: "eternal-rose",
    featured_img: "https://images.unsplash.com/photo-1562690868-60bbe7293e94?auto=format&fit=crop&q=80&w=600&h=750",
    excerpt: "Preserved roses that last for years.",
    price: 12500,
    compare_at_price: 15000,
    currency: { code: "KES", symbol: "KSh" },
    available: 10,
    on_hand: 10,
  },
  {
    id: "p2",
    title: "Midnight Orchid",
    slug: "midnight-orchid",
    featured_img: "https://images.unsplash.com/photo-1597089548027-e40b852e505d?auto=format&fit=crop&q=80&w=600&h=750",
    excerpt: "Rare deep purple orchids.",
    price: 8900,
    compare_at_price: 8900,
    currency: { code: "KES", symbol: "KSh" },
    available: 5,
    on_hand: 5,
  },
  {
    id: "p3",
    title: "Sunkissed Bouquet",
    slug: "sunkissed-bouquet",
    featured_img: "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&q=80&w=600&h=750",
    excerpt: "Bright sunflowers and yellow lilies.",
    price: 4500,
    compare_at_price: 5500,
    currency: { code: "KES", symbol: "KSh" },
    available: 20,
    on_hand: 20,
  },
  {
    id: "p4",
    title: "Velvet Crimson",
    slug: "velvet-crimson",
    featured_img: "https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?auto=format&fit=crop&q=80&w=600&h=750",
    excerpt: "Deep red peonies in a velvet box.",
    price: 18000,
    compare_at_price: 22000,
    currency: { code: "KES", symbol: "KSh" },
    available: 3,
    on_hand: 3,
  },
];

function StorefrontPage() {
  return (
    <div className="min-h-screen bg-background text-brand-green">
      
      <main>
        {mockBlocks.map((block) => {
          if (block.target === BlockTarget.HERO && block.name === "hero-default") {
            return (
              <HeroDefault
                key={block.id}
                shop={mockShop}
                block={block}
              />
            );
          }
          if (block.target === BlockTarget.PRODUCTLIST && block.name === "productlist-default") {
            return (
              <ProductListDefault
                key={block.id}
                block={block}
                products={mockProducts}
              />
            );
          }
          return null;
        })}

        {/* Categories Section */}
        <CategoriesDefault
          block={{
            id: "block_categories",
            shop_id: "shop_1",
            name: "categories-default",
            title: "Our Categories",
            type: BlockType.STRING,
            target: BlockTarget.CONTENT,
            position: 3,
            required_fields: [],
            data: [],
          }}
        />

        {/* Instagram Feed Section */}
        <InstagramFeedDefault
          block={{
            id: "block_instagram",
            shop_id: "shop_1",
            name: "instagram-feed-default",
            title: "As Seen On Instagram",
            type: BlockType.STRING,
            target: BlockTarget.CONTENT,
            position: 4,
            required_fields: [],
            data: [],
          }}
        />
      </main>

      <Footer />
    </div>
  );
}
