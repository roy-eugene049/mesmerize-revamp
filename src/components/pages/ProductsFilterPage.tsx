import { useState, useId } from "react";
import { Link } from "@tanstack/react-router";
import { Heart, ChevronDown } from "lucide-react";
import type { Product } from "@/types/storefront";

interface Props {
  category?: string;
  products: Product[];
}

const initialProducts: Product[] = [
  {
    id: "p1",
    title: "Amelia Bouquet",
    slug: "amelia-bouquet",
    featured_img: "https://images.unsplash.com/photo-1562690868-60bbe7293e94?auto=format&fit=crop&q=80&w=600&h=750",
    excerpt: "Elegant mixed flower arrangement",
    price: 7500,
    compare_at_price: 9000,
    currency: { code: "KES", symbol: "KSh" },
    available: 10,
    on_hand: 10,
  },
  {
    id: "p2",
    title: "Crimson Love",
    slug: "crimson-love",
    featured_img: "https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?auto=format&fit=crop&q=80&w=600&h=750",
    excerpt: "Deep red roses in a luxury box",
    price: 12000,
    compare_at_price: 15000,
    currency: { code: "KES", symbol: "KSh" },
    available: 5,
    on_hand: 5,
  },
  {
    id: "p3",
    title: "White Elegance",
    slug: "white-elegance",
    featured_img: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&q=80&w=600&h=750",
    excerpt: "Pure white roses arrangement",
    price: 9500,
    compare_at_price: 11000,
    currency: { code: "KES", symbol: "KSh" },
    available: 8,
    on_hand: 8,
  },
  {
    id: "p4",
    title: "Spring Delight",
    slug: "spring-delight",
    featured_img: "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&q=80&w=600&h=750",
    excerpt: "Colorful spring flower mix",
    price: 6500,
    compare_at_price: 8000,
    currency: { code: "KES", symbol: "KSh" },
    available: 15,
    on_hand: 15,
  },
  {
    id: "p5",
    title: "Luxury Orchids",
    slug: "luxury-orchids",
    featured_img: "https://images.unsplash.com/photo-1597089548027-e40b852e505d?auto=format&fit=crop&q=80&w=600&h=750",
    excerpt: "Premium orchid arrangement",
    price: 15000,
    compare_at_price: 18000,
    currency: { code: "KES", symbol: "KSh" },
    available: 3,
    on_hand: 3,
  },
  {
    id: "p6",
    title: "Garden Fresh",
    slug: "garden-fresh",
    featured_img: "https://images.unsplash.com/photo-1507290439931-a861b5a38200?auto=format&fit=crop&q=80&w=600&h=750",
    excerpt: "Fresh garden flowers",
    price: 5500,
    compare_at_price: 7000,
    currency: { code: "KES", symbol: "KSh" },
    available: 20,
    on_hand: 20,
  },
  {
    id: "p7",
    title: "Velvet Dreams",
    slug: "velvet-dreams",
    featured_img: "https://images.unsplash.com/photo-1527061011665-3652c757a4d4?auto=format&fit=crop&q=80&w=600&h=750",
    excerpt: "Luxury velvet box arrangement",
    price: 18000,
    compare_at_price: 22000,
    currency: { code: "KES", symbol: "KSh" },
    available: 2,
    on_hand: 2,
  },
  {
    id: "p8",
    title: "Sunset Bouquet",
    slug: "sunset-bouquet",
    featured_img: "https://images.unsplash.com/photo-1550983092-249511f07a51?auto=format&fit=crop&q=80&w=600&h=750",
    excerpt: "Warm sunset colored flowers",
    price: 8500,
    compare_at_price: 10000,
    currency: { code: "KES", symbol: "KSh" },
    available: 12,
    on_hand: 12,
  },
  {
    id: "p9",
    title: "Classic Red",
    slug: "classic-red",
    featured_img: "https://images.unsplash.com/photo-1596438459194-f9686001d413?auto=format&fit=crop&q=80&w=600&h=750",
    excerpt: "Classic red roses",
    price: 7000,
    compare_at_price: 8500,
    currency: { code: "KES", symbol: "KSh" },
    available: 18,
    on_hand: 18,
  },
  {
    id: "p10",
    title: "Purple Majesty",
    slug: "purple-majesty",
    featured_img: "https://images.unsplash.com/photo-1599148482840-d54ca35abc39?auto=format&fit=crop&q=80&w=600&h=750",
    excerpt: "Royal purple flower arrangement",
    price: 11000,
    compare_at_price: 13000,
    currency: { code: "KES", symbol: "KSh" },
    available: 6,
    on_hand: 6,
  },
  {
    id: "p11",
    title: "Tropical Paradise",
    slug: "tropical-paradise",
    featured_img: "https://images.unsplash.com/photo-1519378013398-fa3274be394b?auto=format&fit=crop&q=80&w=600&h=750",
    excerpt: "Exotic tropical flowers",
    price: 13500,
    compare_at_price: 16000,
    currency: { code: "KES", symbol: "KSh" },
    available: 4,
    on_hand: 4,
  },
  {
    id: "p12",
    title: "Cherry Blossom",
    slug: "cherry-blossom",
    featured_img: "https://images.unsplash.com/photo-1523694576729-dc99e9c0f9b6?auto=format&fit=crop&q=80&w=600&h=750",
    excerpt: "Delicate cherry blossom arrangement",
    price: 9000,
    compare_at_price: 11000,
    currency: { code: "KES", symbol: "KSh" },
    available: 9,
    on_hand: 9,
  },
];

export default function ProductsFilterPage({ category = "Fresh Flowers", products = initialProducts }: Props) {
  const [displayedProducts, setDisplayedProducts] = useState<Product[]>(products.slice(0, 12));
  const [showLoadMore, setShowLoadMore] = useState(products.length > 12);
  const [sortBy, setSortBy] = useState("featured");
  const sortSelectId = useId();

  const handleLoadMore = () => {
    const currentCount = displayedProducts.length;
    const nextBatch = products.slice(currentCount, currentCount + 12);
    if (nextBatch.length > 0) {
      setDisplayedProducts([...displayedProducts, ...nextBatch]);
      if (currentCount + nextBatch.length >= products.length) {
        setShowLoadMore(false);
      }
    }
  };

  return (
    <div className="min-h-screen bg-background pt-32 md:pt-40">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-8 md:py-12">
        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumb" className="mb-6 md:mb-8">
          <ol className="flex items-center space-x-2 text-sm text-foreground/60">
            <li>
              <Link to="/" className="hover:text-foreground transition-colors">
                Home
              </Link>
            </li>
            <li>/</li>
            <li>
              <Link to="/products" className="hover:text-foreground transition-colors">
                Product Category
              </Link>
            </li>
            <li>/</li>
            <li>
              <Link to="/products" className="hover:text-foreground transition-colors">
                Luxury Flowers
              </Link>
            </li>
            <li>/</li>
            <li className="text-foreground" aria-current="page">
              {category}
            </li>
          </ol>
        </nav>

        {/* Page Title - Removed as per design */}

        {/* Filter and Sort Bar - Full Width, Evenly Distributed */}
        <div className="flex items-center justify-between w-full mb-8 md:mb-12 pb-4 border-b border-foreground/10">
          {/* Category Filter */}
          <button
            type="button"
            className="flex items-center gap-2 text-sm md:text-base text-foreground/60 hover:text-foreground transition-colors border-b border-foreground/20 pb-1 focus:outline-none focus:ring-2 focus:ring-foreground"
          >
            <span>Category</span>
            <ChevronDown className="w-4 h-4 text-foreground/60" />
          </button>
          
          {/* Box Shape Filter */}
          <button
            type="button"
            className="flex items-center gap-2 text-sm md:text-base text-foreground/60 hover:text-foreground transition-colors border-b border-foreground/20 pb-1 focus:outline-none focus:ring-2 focus:ring-foreground"
          >
            <span>Box Shape</span>
            <ChevronDown className="w-4 h-4 text-foreground/60" />
          </button>
          
          {/* Colour Filter */}
          <button
            type="button"
            className="flex items-center gap-2 text-sm md:text-base text-foreground/60 hover:text-foreground transition-colors border-b border-foreground/20 pb-1 focus:outline-none focus:ring-2 focus:ring-foreground"
          >
            <span>Colour</span>
            <ChevronDown className="w-4 h-4 text-foreground/60" />
          </button>
          
          {/* Price Filter */}
          <button
            type="button"
            className="flex items-center gap-2 text-sm md:text-base text-foreground/60 hover:text-foreground transition-colors border-b border-foreground/20 pb-1 focus:outline-none focus:ring-2 focus:ring-foreground"
          >
            <span>Price</span>
            <ChevronDown className="w-4 h-4 text-foreground/60" />
          </button>

          {/* Sort By - with visible selected value */}
          <div className="flex items-center gap-2">
            <span className="text-sm md:text-base text-foreground/60">Sort by</span>
            <div className="relative flex items-center border-b border-foreground/20 pb-1">
              <select
                id={sortSelectId}
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-transparent border-0 pr-6 text-sm md:text-base text-foreground/60 focus:outline-none focus:ring-2 focus:ring-foreground cursor-pointer appearance-none min-w-[140px]"
                aria-label="Sort products by"
              >
                <option value="featured">Default sorting</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="name-asc">Name: A to Z</option>
                <option value="name-desc">Name: Z to A</option>
              </select>
              <ChevronDown className="w-4 h-4 text-foreground/60 pointer-events-none absolute right-0" />
            </div>
          </div>

          {/* Clear Filters Button */}
          <button
            type="button"
            className="bg-foreground text-background px-4 py-2 text-sm md:text-base tracking-[0.1em] uppercase font-medium hover:bg-foreground/90 transition-colors focus:outline-none focus:ring-2 focus:ring-foreground focus:ring-offset-2"
          >
            Clear Filters
          </button>
        </div>


        {/* Products Grid - 4 columns on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12">
          {displayedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Load More Button */}
        {showLoadMore && (
          <div className="flex justify-center mb-16">
            <button
              type="button"
              onClick={handleLoadMore}
              className="bg-accent text-accent-foreground px-8 md:px-12 py-3 md:py-4 text-sm md:text-base tracking-[0.1em] uppercase font-medium hover:bg-accent/90 transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
              aria-label="Load more products"
            >
              View More Products
            </button>
          </div>
        )}

        {/* Customers Also Viewed Section */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-serif text-foreground/70 text-center mb-8 md:mb-12">
            Customers Also Viewed
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 md:gap-6">
            {products.slice(0, 5).map((product) => (
              <Link
                key={product.id}
                to="/products/$slug"
                params={{ slug: product.slug }}
                className="group focus:outline-none transition-opacity duration-300 focus:opacity-80"
              >
                <div className="aspect-square relative bg-muted/30 mb-3 overflow-hidden">
                  <img
                    src={product.featured_img || "https://images.unsplash.com/photo-1562690868-60bbe7293e94?auto=format&fit=crop&q=80&w=600&h=750"}
                    alt={product.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "https://images.unsplash.com/photo-1562690868-60bbe7293e94?auto=format&fit=crop&q=80&w=600&h=750";
                    }}
                  />
                </div>
                <h3 className="text-sm font-medium text-foreground mb-1 group-hover:text-foreground/70 transition-colors">
                  {product.title}
                </h3>
                <p className="text-sm font-bold text-foreground">
                  {product.currency.symbol} {product.price.toLocaleString()}
                </p>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      to="/products/$slug"
      params={{ slug: product.slug }}
      className="group bg-white flex flex-col shadow-sm focus:outline-none transition-opacity duration-300 focus:opacity-80"
      aria-label={`View ${product.title} - ${product.currency.symbol} ${product.price.toLocaleString()}`}
    >
      {/* Product Image - Light gray background only for image area */}
      <div className="aspect-square relative bg-muted/30 overflow-hidden">
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            // Add to wishlist functionality
          }}
          className="absolute top-3 right-3 z-10 text-foreground/40 hover:text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-foreground"
          aria-label={`Add ${product.title} to wishlist`}
        >
          <Heart className="w-5 h-5" strokeWidth={1.5} />
        </button>
        <img
          src={product.featured_img || "https://images.unsplash.com/photo-1562690868-60bbe7293e94?auto=format&fit=crop&q=80&w=600&h=750"}
          alt={product.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = "https://images.unsplash.com/photo-1562690868-60bbe7293e94?auto=format&fit=crop&q=80&w=600&h=750";
          }}
        />
        
        {/* Add to Basket Button - Appears on hover */}
        <div className="absolute inset-x-0 bottom-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
          <button 
            type="button" 
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              // Add to basket functionality
            }}
            className="w-full bg-primary text-primary-foreground py-4 text-sm tracking-[0.2em] uppercase font-bold hover:bg-primary/90 transition-colors focus:outline-none focus:ring-2 focus:ring-white"
            aria-label={`Add ${product.title} to basket`}
          >
            + ADD TO BASKET
          </button>
        </div>
      </div>

      {/* Product Info - White background, left-aligned */}
      <div className="p-4 flex flex-col">
        <h3 className="text-sm md:text-base font-medium text-foreground mb-1 text-left group-hover:text-foreground/70 transition-colors">
          {product.title}
        </h3>
        <p className="text-base md:text-lg font-bold text-foreground text-left">
          {product.currency.symbol} {product.price.toLocaleString()}
        </p>
      </div>
    </Link>
  );
}
