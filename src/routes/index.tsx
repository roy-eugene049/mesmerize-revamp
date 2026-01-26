import { createFileRoute } from '@tanstack/react-router'
import HeroDefault from "@/components/blocks/hero/HeroDefault";
import ProductListDefault from "@/components/blocks/productlist/ProductListDefault";
import LovePickedForHer from "@/components/blocks/productslider/LovePickedForHer";
import FeaturedProductDefault from "@/components/blocks/featuredproduct/FeaturedProductDefault";
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

// Additional products for Love Picked For Her section
const lovePickedProducts: Product[] = [
  {
    id: "lp1",
    title: "Ted Baker Polly Eau de Toilette Gift Set - 50ml Perfume with 15ml Rollerball",
    slug: "ted-baker-polly",
    featured_img: "https://images.unsplash.com/photo-1595425970377-c970029bfaa6?auto=format&fit=crop&q=80&w=600&h=600",
    excerpt: "Luxury fragrance gift set",
    price: 6850,
    compare_at_price: 8500,
    currency: { code: "KES", symbol: "KSh" },
    available: 8,
    on_hand: 8,
  },
  {
    id: "lp2",
    title: "Anne Klein Diamond Accent Black & Gold Bracelet Watch",
    slug: "anne-klein-diamond",
    featured_img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=600&h=600",
    excerpt: "Elegant timepiece with diamond accents",
    price: 8950,
    compare_at_price: 11000,
    currency: { code: "KES", symbol: "KSh" },
    available: 6,
    on_hand: 6,
  },
  {
    id: "lp3",
    title: "Anne Klein Classic Gold Two-Tone Rectangular Bracelet Watch",
    slug: "anne-klein-classic",
    featured_img: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&q=80&w=600&h=600",
    excerpt: "Timeless two-tone design",
    price: 9200,
    compare_at_price: 11500,
    currency: { code: "KES", symbol: "KSh" },
    available: 4,
    on_hand: 4,
  },
  {
    id: "lp4",
    title: "Anne Klein Rose Gold Crystal Bracelet Watch with Navy Dial",
    slug: "anne-klein-rose-gold",
    featured_img: "https://images.unsplash.com/photo-1434056886845-dac89ffe9b56?auto=format&fit=crop&q=80&w=600&h=600",
    excerpt: "Rose gold elegance with crystal details",
    price: 9800,
    compare_at_price: 12000,
    currency: { code: "KES", symbol: "KSh" },
    available: 5,
    on_hand: 5,
  },
  {
    id: "lp5",
    title: "Bespoke London Woman Parfum Gift Set - Roma 50ml",
    slug: "bespoke-london-roma",
    featured_img: "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&q=80&w=600&h=600",
    excerpt: "Sophisticated Italian-inspired fragrance",
    price: 7500,
    compare_at_price: 9500,
    currency: { code: "KES", symbol: "KSh" },
    available: 7,
    on_hand: 7,
  },
  {
    id: "lp6",
    title: "Red Rose Bouquet",
    slug: "red-rose-bouquet",
    featured_img: "https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?auto=format&fit=crop&q=80&w=600&h=600",
    excerpt: "Classic romantic red roses",
    price: 6500,
    compare_at_price: 8000,
    currency: { code: "KES", symbol: "KSh" },
    available: 15,
    on_hand: 15,
  },
];

// Featured product for the featured section
const featuredProduct: Product = {
  id: "featured-1",
  title: "January Gift Of The Month",
  slug: "january-gift-of-the-month",
  featured_img: "https://images.unsplash.com/photo-1562690868-60bbe7293e94?auto=format&fit=crop&q=80&w=800&h=1000",
  excerpt: "Got a January baby to celebrate? Make their day as bright and refreshing as the new year! This exclusive hamper features a moist vanilla sponge with mint & pineapple whipped cream, paired with the Leilani bouquet, A stunning mix of blooms symbolizing growth and new beginnings. Finished with a bubbly card, it's the perfect way to show them just how special they are.",
  description: "Got a January baby to celebrate? Make their day as bright and refreshing as the new year! This exclusive hamper features a moist vanilla sponge with mint & pineapple whipped cream, paired with the Leilani bouquet, A stunning mix of blooms symbolizing growth and new beginnings. Finished with a bubbly card, it's the perfect way to show them just how special they are.",
  price: 7650,
  compare_at_price: 9500,
  currency: { code: "KES", symbol: "KSh" },
  available: 12,
  on_hand: 12,
};

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

        {/* Love Picked For Her Section */}
        <LovePickedForHer
          block={{
            id: "block_love_picked",
            shop_id: "shop_1",
            name: "love-picked-for-her",
            title: "Love Picked For Her",
            type: BlockType.STRING,
            target: BlockTarget.CONTENT,
            position: 2.5,
            required_fields: [],
            data: [],
          }}
          products={lovePickedProducts}
        />

        {/* Featured Product Section */}
        <FeaturedProductDefault
          block={{
            id: "block_featured_product",
            shop_id: "shop_1",
            name: "featured-product-default",
            title: "January Gift Of The Month",
            type: BlockType.STRING,
            target: BlockTarget.CONTENT,
            position: 2.7,
            required_fields: [],
            data: [],
          }}
          product={featuredProduct}
        />

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
