import { createFileRoute } from '@tanstack/react-router'
import SingleProductPage from "@/components/pages/SingleProductPage";
import Footer from "@/components/blocks/footer/Footer";
import type { Product } from "@/types/storefront";

export const Route = createFileRoute('/products_/$slug')({
  component: ProductDetailPage,
})

// Product data mapping - in a real app, this would come from an API
const productData: Record<string, Omit<Product, 'id' | 'slug'>> = {
  "velvet-crimson": {
    title: "Velvet Crimson",
    featured_img: "https://images.unsplash.com/photo-1527061011665-3652c757a4d4?auto=format&fit=crop&q=80&w=800&h=1000",
    excerpt: "A luxurious deep red floral arrangement featuring premium roses in rich velvet tones, perfect for expressing passion and elegance.",
    price: 18000,
    compare_at_price: 22000,
    currency: { code: "KES", symbol: "KSh" },
    available: 5,
    on_hand: 5,
  },
  "premium-rose-bouquet": {
    title: "Premium Rose Bouquet",
    featured_img: "https://images.unsplash.com/photo-1562690868-60bbe7293e94?auto=format&fit=crop&q=80&w=800&h=1000",
    excerpt: "An exquisite arrangement of premium roses, carefully selected and arranged to create a stunning visual display.",
    price: 12500,
    compare_at_price: 15000,
    currency: { code: "KES", symbol: "KSh" },
    available: 8,
    on_hand: 8,
  },
  "eternal-rose-box": {
    title: "Eternal Rose Box",
    featured_img: "https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?auto=format&fit=crop&q=80&w=800&h=1000",
    excerpt: "Preserved roses in an elegant box, designed to last for years as a timeless symbol of love and appreciation.",
    price: 15000,
    compare_at_price: 18000,
    currency: { code: "KES", symbol: "KSh" },
    available: 6,
    on_hand: 6,
  },
  "classic-red-roses": {
    title: "Classic Red Roses",
    featured_img: "https://images.unsplash.com/photo-1596438459194-f9686001d413?auto=format&fit=crop&q=80&w=800&h=1000",
    excerpt: "Timeless classic red roses arranged beautifully, perfect for any romantic occasion.",
    price: 8900,
    compare_at_price: 11000,
    currency: { code: "KES", symbol: "KSh" },
    available: 10,
    on_hand: 10,
  },
  "luxury-mixed-bouquet": {
    title: "Luxury Mixed Bouquet",
    featured_img: "https://images.unsplash.com/photo-1591123120675-6f7f1aae0e5b?auto=format&fit=crop&q=80&w=800&h=1000",
    excerpt: "A sophisticated mix of premium flowers creating a stunning and elegant arrangement.",
    price: 12000,
    compare_at_price: 14500,
    currency: { code: "KES", symbol: "KSh" },
    available: 7,
    on_hand: 7,
  },
  "sunkissed-bouquet": {
    title: "Sunkissed Bouquet",
    featured_img: "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&q=80&w=800&h=1000",
    excerpt: "Bright and cheerful flowers that capture the warmth and beauty of a sunny day.",
    price: 9500,
    compare_at_price: 11500,
    currency: { code: "KES", symbol: "KSh" },
    available: 9,
    on_hand: 9,
  },
  "white-elegance": {
    title: "White Elegance",
    featured_img: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&q=80&w=800&h=1000",
    excerpt: "Pure white flowers arranged with elegance and sophistication, perfect for formal occasions.",
    price: 11000,
    compare_at_price: 13500,
    currency: { code: "KES", symbol: "KSh" },
    available: 6,
    on_hand: 6,
  },
  "garden-delight": {
    title: "Garden Delight",
    featured_img: "https://images.unsplash.com/photo-1507290439931-a861b5a38200?auto=format&fit=crop&q=80&w=800&h=1000",
    excerpt: "A delightful mix of garden flowers bringing the beauty of nature into your space.",
    price: 8500,
    compare_at_price: 10500,
    currency: { code: "KES", symbol: "KSh" },
    available: 8,
    on_hand: 8,
  },
};

// Default product for unknown slugs
const defaultProduct: Omit<Product, 'id' | 'slug'> = {
  title: "Delivered by Hand",
  featured_img: "https://images.unsplash.com/photo-1562690868-60bbe7293e94?auto=format&fit=crop&q=80&w=800&h=1000",
  excerpt: "A stunning red floral arrangement in a decorative red basket, perfect for special occasions.",
  price: 19800,
  compare_at_price: 24000,
  currency: { code: "KES", symbol: "KSh" },
  available: 5,
  on_hand: 5,
};

function ProductDetailPage() {
  const { slug } = Route.useParams();

  // Get product data by slug, or use default
  const productDataForSlug = productData[slug] || defaultProduct;
  
  // Convert slug to title if not found (fallback)
  const productTitle = productDataForSlug.title || slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  const product: Product = {
    id: slug,
    title: productTitle,
    slug: slug,
    ...productDataForSlug,
  };

  return (
    <div className="min-h-screen bg-background">
      <main>
        <SingleProductPage product={product} />
      </main>
      <Footer />
    </div>
  );
}
