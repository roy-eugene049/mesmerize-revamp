import { useState, useId, useMemo } from "react";
import { Link } from "@tanstack/react-router";
import { Heart, ChevronDown } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
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

interface FilterState {
  category: string | null;
  boxShape: string | null;
  colour: string | null;
  priceRange: string | null;
}

export default function ProductsFilterPage({ category = "Fresh Flowers", products = initialProducts }: Props) {
  const [sortBy, setSortBy] = useState("featured");
  const [filters, setFilters] = useState<FilterState>({
    category: null,
    boxShape: null,
    colour: null,
    priceRange: null,
  });
  const [itemsToShow, setItemsToShow] = useState(12);
  const sortSelectId = useId();

  // Filter and sort products
  const filteredAndSortedProducts = useMemo(() => {
    let filtered = [...products];

    // Apply filters (simplified - can be extended with actual product properties)
    if (filters.priceRange) {
      const [min, max] = filters.priceRange.split("-").map(Number);
      filtered = filtered.filter((p) => {
        if (max) {
          return p.price >= min && p.price <= max;
        }
        return p.price >= min;
      });
    }

    // Apply sorting
    const sorted = [...filtered].sort((a, b) => {
      switch (sortBy) {
        case "price-low":
          return a.price - b.price;
        case "price-high":
          return b.price - a.price;
        case "name-asc":
          return a.title.localeCompare(b.title);
        case "name-desc":
          return b.title.localeCompare(a.title);
        case "featured":
        default:
          return 0; // Keep original order
      }
    });

    return sorted;
  }, [products, filters, sortBy]);

  const displayedProducts = filteredAndSortedProducts.slice(0, itemsToShow);
  const showLoadMore = itemsToShow < filteredAndSortedProducts.length;

  const handleLoadMore = () => {
    setItemsToShow((prev) => prev + 12);
  };

  const handleFilterChange = (filterType: keyof FilterState, value: string | null) => {
    setFilters((prev) => ({
      ...prev,
      [filterType]: prev[filterType] === value ? null : value,
    }));
    setItemsToShow(12); // Reset to first page when filters change
  };

  const handleClearFilters = () => {
    setFilters({
      category: null,
      boxShape: null,
      colour: null,
      priceRange: null,
    });
    setSortBy("featured");
    setItemsToShow(12);
  };

  const hasActiveFilters = Object.values(filters).some((v) => v !== null) || sortBy !== "featured";

  return (
    <div className="min-h-screen bg-background pt-24 sm:pt-28 md:pt-32 lg:pt-40">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-6 sm:py-8 md:py-12">
        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumb" className="mb-4 sm:mb-6 md:mb-8 overflow-x-auto">
          <ol className="flex items-center space-x-1 sm:space-x-2 text-xs sm:text-sm text-foreground/60 whitespace-nowrap">
            <li>
              <Link to="/" className="hover:text-foreground transition-colors">
                Home
              </Link>
            </li>
            <li className="px-0.5 sm:px-1">/</li>
            <li>
              <Link to="/products" className="hover:text-foreground transition-colors">
                Product Category
              </Link>
            </li>
            <li className="px-0.5 sm:px-1">/</li>
            <li>
              <Link to="/products" className="hover:text-foreground transition-colors">
                Luxury Flowers
              </Link>
            </li>
            <li className="px-0.5 sm:px-1">/</li>
            <li className="text-foreground" aria-current="page">
              {category}
            </li>
          </ol>
        </nav>

        {/* Page Title - Removed as per design */}

        {/* Filter and Sort Bar - Responsive Layout */}
        <div className="relative w-full mb-6 sm:mb-8 md:mb-12 pb-4 border-b border-foreground/10">
          {/* Mobile: Stack filters vertically, Desktop: Horizontal */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-2">
            {/* Filters Row - Wraps on mobile */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 md:gap-6">
              {/* Category Filter */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() => {
                    // Simple toggle - can be extended with dropdown
                    handleFilterChange("category", filters.category === "Fresh Flowers" ? null : "Fresh Flowers");
                  }}
                  className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm md:text-base transition-all duration-300 border-0 outline-none focus:outline-none focus:ring-0 relative group bg-transparent whitespace-nowrap"
                >
                  <span className={`transition-all duration-300 ${
                    filters.category 
                      ? "text-foreground font-semibold" 
                      : "text-foreground/60 hover:text-foreground"
                  }`}>
                    Category
                  </span>
                  <ChevronDown className={`w-3 h-3 sm:w-4 sm:h-4 transition-all duration-300 ${
                    filters.category ? "text-foreground rotate-180" : "text-foreground/60"
                  }`} />
                </button>
              </div>
              
              {/* Box Shape Filter */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() => {
                    handleFilterChange("boxShape", filters.boxShape === "Luxury Box" ? null : "Luxury Box");
                  }}
                  className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm md:text-base transition-all duration-300 border-0 outline-none focus:outline-none focus:ring-0 relative group bg-transparent whitespace-nowrap"
                >
                  <span className={`transition-all duration-300 ${
                    filters.boxShape 
                      ? "text-foreground font-semibold" 
                      : "text-foreground/60 hover:text-foreground"
                  }`}>
                    Box Shape
                  </span>
                  <ChevronDown className={`w-3 h-3 sm:w-4 sm:h-4 transition-all duration-300 ${
                    filters.boxShape ? "text-foreground rotate-180" : "text-foreground/60"
                  }`} />
                </button>
              </div>
              
              {/* Colour Filter */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() => {
                    handleFilterChange("colour", filters.colour === "Red" ? null : "Red");
                  }}
                  className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm md:text-base transition-all duration-300 border-0 outline-none focus:outline-none focus:ring-0 relative group bg-transparent whitespace-nowrap"
                >
                  <span className={`transition-all duration-300 ${
                    filters.colour 
                      ? "text-foreground font-semibold" 
                      : "text-foreground/60 hover:text-foreground"
                  }`}>
                    Colour
                  </span>
                  <ChevronDown className={`w-3 h-3 sm:w-4 sm:h-4 transition-all duration-300 ${
                    filters.colour ? "text-foreground rotate-180" : "text-foreground/60"
                  }`} />
                </button>
              </div>
              
              {/* Price Filter */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() => {
                    const nextPriceRange = filters.priceRange === "0-10000" ? null : "0-10000";
                    handleFilterChange("priceRange", nextPriceRange);
                  }}
                  className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm md:text-base transition-all duration-300 border-0 outline-none focus:outline-none focus:ring-0 relative group bg-transparent whitespace-nowrap"
                >
                  <span className={`transition-all duration-300 ${
                    filters.priceRange 
                      ? "text-foreground font-semibold" 
                      : "text-foreground/60 hover:text-foreground"
                  }`}>
                    Price
                  </span>
                  <ChevronDown className={`w-3 h-3 sm:w-4 sm:h-4 transition-all duration-300 ${
                    filters.priceRange ? "text-foreground rotate-180" : "text-foreground/60"
                  }`} />
                </button>
              </div>
            </div>

            {/* Sort and Clear Row */}
            <div className="flex items-center justify-between sm:justify-end gap-3 sm:gap-4">
              {/* Sort By */}
              <div className="flex items-center gap-1.5 sm:gap-2">
                <span className="text-xs sm:text-sm md:text-base text-foreground/60 whitespace-nowrap">Sort by</span>
                <div className="relative flex items-center">
                  <select
                    id={sortSelectId}
                    value={sortBy}
                    onChange={(e) => {
                      setSortBy(e.target.value);
                      setItemsToShow(12); // Reset to first page when sorting changes
                    }}
                    className="bg-transparent border-0 pr-5 sm:pr-6 text-xs sm:text-sm md:text-base text-foreground/60 focus:outline-none focus:ring-0 cursor-pointer appearance-none min-w-[100px] sm:min-w-[140px] transition-colors duration-300"
                    aria-label="Sort products by"
                  >
                    <option value="featured">Default sorting</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="name-asc">Name: A to Z</option>
                    <option value="name-desc">Name: Z to A</option>
                  </select>
                  <ChevronDown className="w-3 h-3 sm:w-4 sm:h-4 text-foreground/60 pointer-events-none absolute right-0 transition-transform duration-300" />
                </div>
              </div>

              {/* Clear Filters Button */}
              <div className="min-w-[100px] sm:min-w-[140px] flex justify-end">
                <button
                  type="button"
                  onClick={handleClearFilters}
                  className={`bg-foreground text-background px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm md:text-base tracking-[0.1em] uppercase font-medium hover:bg-foreground/90 transition-all duration-300 focus:outline-none focus:ring-0 whitespace-nowrap ${
                    hasActiveFilters 
                      ? "opacity-100 translate-x-0 pointer-events-auto" 
                      : "opacity-0 translate-x-4 pointer-events-none"
                  }`}
                >
                  Clear Filters
                </button>
              </div>
            </div>
          </div>
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
        <section className="mb-12 sm:mb-16">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-foreground/70 text-center mb-6 sm:mb-8 md:mb-12">
            Customers Also Viewed
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-4 md:gap-6">
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
  const { addItem, getItemQuantity } = useCart();
  const quantityInCart = getItemQuantity(product.id);
  const isInCart = quantityInCart > 0;

  const handleAddToBasket = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, 1);
  };

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
          className="absolute top-3 right-3 z-10 bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-md text-foreground/60 hover:text-foreground hover:bg-white transition-all focus:outline-none focus:ring-2 focus:ring-foreground"
          aria-label={`Add ${product.title} to wishlist`}
        >
          <Heart className="w-5 h-5" strokeWidth={2} />
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
            onClick={handleAddToBasket}
            className={`w-full py-4 text-sm tracking-[0.2em] uppercase font-bold transition-colors focus:outline-none focus:ring-2 focus:ring-white ${
              isInCart
                ? "bg-foreground text-background hover:bg-foreground/90"
                : "bg-primary text-primary-foreground hover:bg-primary/90"
            }`}
            aria-label={`Add ${product.title} to basket`}
          >
            {isInCart ? `✓ IN BASKET (${quantityInCart})` : "+ ADD TO BASKET"}
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
