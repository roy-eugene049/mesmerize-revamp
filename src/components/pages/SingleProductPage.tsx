import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ChevronLeft, ChevronRight, Heart, Minus, Plus, ShoppingBag, Facebook, Instagram, Mail, MessageCircle } from "lucide-react";
import type { Product } from "@/types/storefront";

interface Props {
  product: Product;
  relatedProducts?: Product[];
}

const mockProduct: Product = {
  id: "p1",
  title: "Delivered by Hand",
  slug: "delivered-by-hand",
  featured_img: "https://images.unsplash.com/photo-1562690868-60bbe7293e94?auto=format&fit=crop&q=80&w=800&h=1000",
  excerpt: "A stunning red floral arrangement in a decorative red basket, perfect for special occasions.",
  price: 19800,
  compare_at_price: 24000,
  currency: { code: "KES", symbol: "KSh" },
  available: 5,
  on_hand: 5,
};

const mockImages = [
  "https://images.unsplash.com/photo-1562690868-60bbe7293e94?auto=format&fit=crop&q=80&w=800&h=1000",
  "https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?auto=format&fit=crop&q=80&w=800&h=1000",
  "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&q=80&w=800&h=1000",
  "https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&q=80&w=800&h=1000",
];

const mockRelatedProducts: Product[] = [
  {
    id: "r1",
    title: "Our Majesty Irene Alisa",
    slug: "majesty-irene-alisa",
    featured_img: "https://images.unsplash.com/photo-1597089548027-e40b852e505d?auto=format&fit=crop&q=80&w=600&h=750",
    excerpt: "Elegant floral arrangement",
    price: 29500,
    compare_at_price: 35000,
    currency: { code: "KES", symbol: "KSh" },
    available: 3,
    on_hand: 3,
  },
  {
    id: "r2",
    title: "A Night in Paris",
    slug: "night-in-paris",
    featured_img: "https://images.unsplash.com/photo-1507290439931-a861b5a38200?auto=format&fit=crop&q=80&w=600&h=750",
    excerpt: "Romantic Parisian style",
    price: 38200,
    compare_at_price: 45000,
    currency: { code: "KES", symbol: "KSh" },
    available: 4,
    on_hand: 4,
  },
  {
    id: "r3",
    title: "Golden Glow",
    slug: "golden-glow",
    featured_img: "https://images.unsplash.com/photo-1527061011665-3652c757a4d4?auto=format&fit=crop&q=80&w=600&h=750",
    excerpt: "Warm golden tones",
    price: 27000,
    compare_at_price: 32000,
    currency: { code: "KES", symbol: "KSh" },
    available: 6,
    on_hand: 6,
  },
];

export default function SingleProductPage({ product = mockProduct, relatedProducts = mockRelatedProducts }: Props) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isDeliveryInfoOpen, setIsDeliveryInfoOpen] = useState(false);
  const [isDisclaimerOpen, setIsDisclaimerOpen] = useState(false);
  const [isOurFlowersOpen, setIsOurFlowersOpen] = useState(false);

  const images = [product.featured_img, ...mockImages.slice(1)];

  const handlePreviousImage = () => {
    setSelectedImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNextImage = () => {
    setSelectedImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handleQuantityChange = (delta: number) => {
    setQuantity((prev) => Math.max(1, Math.min(product.available, prev + delta)));
  };

  return (
    <div className="min-h-screen bg-background pt-32 md:pt-40">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-8 md:py-12">
        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center space-x-2 text-sm text-foreground/60">
            <li>
              <Link to="/" className="hover:text-foreground transition-colors">
                Home
              </Link>
            </li>
            <li>/</li>
            <li>
              <Link to="/products" className="hover:text-foreground transition-colors">
                Products
              </Link>
            </li>
            <li>/</li>
            <li className="text-foreground" aria-current="page">
              {product.title}
            </li>
          </ol>
        </nav>

        {/* Main Product Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 mb-16 lg:items-start">
          {/* Product Images - 50% width */}
          <div className="space-y-4 w-full">
            {/* Main Image */}
            <div className="relative aspect-[3/4] w-full bg-muted/30 overflow-hidden group">
              <img
                src={images[selectedImageIndex] || "https://images.unsplash.com/photo-1562690868-60bbe7293e94?auto=format&fit=crop&q=80&w=800&h=1000"}
                alt={product.title}
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "https://images.unsplash.com/photo-1562690868-60bbe7293e94?auto=format&fit=crop&q=80&w=800&h=1000";
                }}
              />
              
              {/* Navigation Arrows */}
              <button
                type="button"
                onClick={handlePreviousImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white/80 hover:bg-white rounded-full transition-colors focus:outline-none transition-opacity duration-300 focus:opacity-80"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-5 h-5 text-foreground" />
              </button>
              <button
                type="button"
                onClick={handleNextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/80 hover:bg-white rounded-full transition-colors focus:outline-none transition-opacity duration-300 focus:opacity-80"
                aria-label="Next image"
              >
                <ChevronRight className="w-5 h-5 text-foreground" />
              </button>

              {/* Zoom Icon (Top Right) */}
              <button
                type="button"
                className="absolute top-4 right-4 p-2 bg-white/80 hover:bg-white rounded-full transition-colors focus:outline-none transition-opacity duration-300 focus:opacity-80"
                aria-label="Zoom image"
              >
                <svg className="w-5 h-5 text-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                </svg>
              </button>
            </div>

            {/* Thumbnail Images */}
            <div className="grid grid-cols-3 gap-3 w-full">
              {images.slice(0, 3).map((img, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setSelectedImageIndex(index)}
                  className={`aspect-square bg-muted/30 overflow-hidden border-2 transition-all focus:outline-none transition-opacity duration-300 focus:opacity-80 ${
                    selectedImageIndex === index
                      ? "border-foreground"
                      : "border-transparent hover:border-foreground/30"
                  }`}
                  aria-label={`View image ${index + 1}`}
                >
                  <img
                    src={img || "https://images.unsplash.com/photo-1562690868-60bbe7293e94?auto=format&fit=crop&q=80&w=600&h=600"}
                    alt={`${product.title} view ${index + 1}`}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "https://images.unsplash.com/photo-1562690868-60bbe7293e94?auto=format&fit=crop&q=80&w=600&h=600";
                    }}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Details - 50% width, minimalist design */}
          <div className="space-y-6 w-full">
            {/* Product Title */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              {product.title}
            </h1>

            {/* Product Code and Tags */}
            <div className="space-y-1 text-sm text-foreground/60">
              <div>Product Code {product.id.toUpperCase()}</div>
              <div>Tags: Bouquet, Premium, Fresh Flowers</div>
            </div>

            {/* Product Description */}
            <div className="text-base md:text-lg text-foreground/80 leading-relaxed">
              <p>
                {product.excerpt || "There is undeniable beauty in the simplicity of this bouquet featuring premium flowers, where they take center stage showcasing their splendor."}
              </p>
            </div>

            {/* Price and Quantity Selector - Horizontal Layout */}
            <div className="flex items-center gap-6">
              <div className="text-2xl md:text-3xl font-bold text-foreground">
                {product.currency.symbol} {product.price.toLocaleString()}
              </div>
              <div className="grid grid-cols-3 items-center gap-4" style={{ width: '140px' }}>
                <button
                  type="button"
                  onClick={() => handleQuantityChange(-1)}
                  disabled={quantity <= 1}
                  className="w-10 h-10 rounded-full border border-foreground/20 bg-muted/30 hover:bg-muted transition-colors disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none transition-opacity duration-300 focus:opacity-80 flex items-center justify-center justify-self-start"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4 text-foreground/70" />
                </button>
                <div className="flex items-center justify-center">
                  <input
                    id="quantity"
                    type="number"
                    min="1"
                    max={product.available}
                    value={quantity}
                    onChange={(e) => {
                      const val = parseInt(e.target.value) || 1;
                      setQuantity(Math.max(1, Math.min(product.available, val)));
                    }}
                    className="w-full text-center border-0 bg-transparent text-base md:text-lg font-medium text-foreground focus:outline-none transition-opacity duration-300 focus:opacity-80"
                    aria-label="Product quantity"
                  />
                </div>
                <button
                  type="button"
                  onClick={() => handleQuantityChange(1)}
                  disabled={quantity >= product.available}
                  className="w-10 h-10 rounded-full border border-foreground/20 bg-muted/30 hover:bg-muted transition-colors disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none transition-opacity duration-300 focus:opacity-80 flex items-center justify-center justify-self-end"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4 text-foreground/70" />
                </button>
              </div>
            </div>

            {/* Add to Basket Button */}
            <button
              type="button"
              className="w-full bg-primary text-primary-foreground py-4 px-6 text-sm md:text-base tracking-[0.15em] uppercase font-bold hover:bg-primary/90 transition-colors focus:outline-none transition-opacity duration-300 focus:opacity-80 flex items-center justify-center gap-2"
            >
              <ShoppingBag className="w-5 h-5" />
              ADD TO BASKET
            </button>

            {/* Add to Wishlist Button */}
            <button
              type="button"
              className="w-full bg-white border border-foreground/20 text-foreground py-4 px-6 text-sm md:text-base tracking-[0.15em] uppercase font-bold hover:bg-muted/30 transition-colors focus:outline-none transition-opacity duration-300 focus:opacity-80 flex items-center justify-center gap-2"
            >
              <Heart className="w-5 h-5" />
              ADD TO WISHLIST
            </button>

            {/* Share with a Friend Section */}
            <div className="pt-4">
              <div className="text-xs tracking-[0.2em] uppercase text-foreground/60 mb-3">
                SHARE WITH A FRIEND
              </div>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:bg-primary/90 transition-colors focus:outline-none transition-opacity duration-300 focus:opacity-80"
                  aria-label="Share on Facebook"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:bg-primary/90 transition-colors focus:outline-none transition-opacity duration-300 focus:opacity-80"
                  aria-label="Share on Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:bg-primary/90 transition-colors focus:outline-none transition-opacity duration-300 focus:opacity-80"
                  aria-label="Share on WhatsApp"
                >
                  <MessageCircle className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:bg-primary/90 transition-colors focus:outline-none transition-opacity duration-300 focus:opacity-80"
                  aria-label="Share via Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Collapsible Info Sections */}
            <div className="pt-4 border-t border-foreground/10 space-y-0">
              {/* Flower Delivery Info */}
              <div className="border-b border-foreground/10">
                <button
                  type="button"
                  onClick={() => setIsDeliveryInfoOpen(!isDeliveryInfoOpen)}
                  className="w-full flex items-center justify-between py-3 text-left text-base md:text-lg font-medium text-foreground hover:text-foreground/70 transition-colors focus:outline-none transition-opacity duration-300 focus:opacity-80"
                  aria-expanded={isDeliveryInfoOpen}
                >
                  <span>Flower Delivery Info</span>
                  <span className="text-foreground/60 text-xl">{isDeliveryInfoOpen ? "−" : "+"}</span>
                </button>
                {isDeliveryInfoOpen && (
                  <div className="pb-4 text-sm md:text-base text-foreground/70 leading-relaxed">
                    <p>
                      Our flower delivery service is available throughout Kenya. When you order flowers online, we will ensure that you receive your flowers within the delivery time slot you've selected. Same-day delivery is available for orders placed before 2 PM. All arrangements are carefully packaged to ensure they arrive in perfect condition.
                    </p>
                  </div>
                )}
              </div>

              {/* Disclaimer */}
              <div className="border-b border-foreground/10">
                <button
                  type="button"
                  onClick={() => setIsDisclaimerOpen(!isDisclaimerOpen)}
                  className="w-full flex items-center justify-between py-3 text-left text-base md:text-lg font-medium text-foreground hover:text-foreground/70 transition-colors focus:outline-none transition-opacity duration-300 focus:opacity-80"
                  aria-expanded={isDisclaimerOpen}
                >
                  <span>Disclaimer</span>
                  <span className="text-foreground/60 text-xl">{isDisclaimerOpen ? "−" : "+"}</span>
                </button>
                {isDisclaimerOpen && (
                  <div className="pb-4 text-sm md:text-base text-foreground/70 leading-relaxed">
                    <p>
                      At Mesmerize, we strive to provide the highest quality flowers and gifts. While we make every effort to match the images shown, actual products may vary slightly due to seasonal availability and natural variations in flowers. All prices are subject to change without notice. We reserve the right to substitute flowers of equal or greater value if the exact flowers ordered are unavailable. For any concerns or questions, please contact our customer service team.
                    </p>
                  </div>
                )}
              </div>

              {/* Our Flowers */}
              <div>
                <button
                  type="button"
                  onClick={() => setIsOurFlowersOpen(!isOurFlowersOpen)}
                  className="w-full flex items-center justify-between py-3 text-left text-base md:text-lg font-medium text-foreground hover:text-foreground/70 transition-colors focus:outline-none transition-opacity duration-300 focus:opacity-80"
                  aria-expanded={isOurFlowersOpen}
                >
                  <span>Our Flowers</span>
                  <span className="text-foreground/60 text-xl">{isOurFlowersOpen ? "−" : "+"}</span>
                </button>
                {isOurFlowersOpen && (
                  <div className="pb-4 text-sm md:text-base text-foreground/70 leading-relaxed">
                    <p>
                      Mesmerize is Kenya's premier destination for exquisite flowers and thoughtful gifts. We source only the freshest, premium flowers from trusted local and international growers. Our expert florists handcraft each arrangement with meticulous attention to detail, ensuring every bouquet tells a story of elegance and care. Whether you're celebrating a special occasion, expressing love, or simply brightening someone's day, Mesmerize delivers beauty and quality that exceeds expectations.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Suggested for You Section */}
        <section className="mb-16" aria-labelledby="suggested-heading">
          <h2 id="suggested-heading" className="text-2xl md:text-3xl font-serif text-foreground/70 text-center mb-8 md:mb-12">
            Suggested for you
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {relatedProducts.map((relatedProduct) => (
              <Link
                key={relatedProduct.id}
                to="/products_/$slug"
                params={{ slug: relatedProduct.slug }}
                className="group focus:outline-none transition-opacity duration-300 focus:opacity-80"
              >
                <div className="aspect-square relative bg-muted/30 mb-4 overflow-hidden">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      // Add to wishlist
                    }}
                    className="absolute top-3 right-3 z-10 p-2 bg-white/80 hover:bg-white rounded-full transition-colors focus:outline-none transition-opacity duration-300 focus:opacity-80"
                    aria-label={`Add ${relatedProduct.title} to wishlist`}
                  >
                    <Heart className="w-4 h-4 text-foreground" />
                  </button>
                  <img
                    src={relatedProduct.featured_img || "https://images.unsplash.com/photo-1562690868-60bbe7293e94?auto=format&fit=crop&q=80&w=600&h=750"}
                    alt={relatedProduct.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "https://images.unsplash.com/photo-1562690868-60bbe7293e94?auto=format&fit=crop&q=80&w=600&h=750";
                    }}
                  />
                </div>
                <h3 className="text-base md:text-lg font-medium text-foreground mb-2 group-hover:text-foreground/70 transition-colors">
                  {relatedProduct.title}
                </h3>
                <p className="text-base md:text-lg font-bold text-foreground">
                  {relatedProduct.currency.symbol} {relatedProduct.price.toLocaleString()}
                </p>
              </Link>
            ))}
          </div>
        </section>

        {/* Other Categories Section */}
        <section className="mb-16" aria-labelledby="categories-heading">
          <h2 id="categories-heading" className="text-2xl md:text-3xl font-serif text-foreground/70 text-center mb-8 md:mb-12">
            Other Categories
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              { name: "Corriere", image: "https://images.unsplash.com/photo-1562690868-60bbe7293e94?auto=format&fit=crop&q=80&w=600&h=600" },
              { name: "Tree Flowers", image: "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&q=80&w=600&h=600" },
              { name: "Special Arrangements", image: "https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?auto=format&fit=crop&q=80&w=600&h=600" },
            ].map((category, index) => (
              <Link
                key={index}
                to="/products"
                className="group relative aspect-square bg-muted/30 overflow-hidden focus:outline-none transition-opacity duration-300 focus:opacity-80"
              >
                <img
                  src={category.image || "https://images.unsplash.com/photo-1562690868-60bbe7293e94?auto=format&fit=crop&q=80&w=600&h=600"}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https://images.unsplash.com/photo-1562690868-60bbe7293e94?auto=format&fit=crop&q=80&w=600&h=600";
                  }}
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                  <div className="text-center">
                    <h3 className="text-xl md:text-2xl font-serif text-white mb-3">{category.name}</h3>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                      }}
                      className="bg-white text-foreground px-6 py-2 text-sm tracking-[0.1em] uppercase font-medium hover:bg-white/90 transition-colors focus:outline-none transition-opacity duration-300 focus:opacity-80"
                    >
                      Discover
                    </button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Utility Bar */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 py-8 border-t border-b border-foreground/10">
          <div className="flex items-center gap-3">
            <svg className="w-6 h-6 text-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
            </svg>
            <span className="text-sm md:text-base text-foreground">Same Day Delivery</span>
          </div>
          <div className="flex items-center gap-3">
            <svg className="w-6 h-6 text-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <span className="text-sm md:text-base text-foreground">Premium Quality</span>
          </div>
        </div>
      </div>
    </div>
  );
}
