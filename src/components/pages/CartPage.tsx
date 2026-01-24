import { Link } from "@tanstack/react-router";
import { X, Minus, Plus, ShoppingBag } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import type { Product } from "@/types/storefront";

// Mock related products - exactly 4 items
const relatedProducts: Product[] = [
  {
    id: "r1",
    title: "Coral Charm",
    slug: "coral-charm",
    featured_img: "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?auto=format&fit=crop&q=80&w=400&h=500",
    excerpt: "Beautiful coral arrangement",
    price: 8500,
    compare_at_price: 10000,
    currency: { code: "KES", symbol: "KSh" },
    available: 5,
    on_hand: 5,
  },
  {
    id: "r2",
    title: "Longer Than Lilies",
    slug: "longer-than-lilies",
    featured_img: "https://images.unsplash.com/photo-1597089548027-e40b852e505d?auto=format&fit=crop&q=80&w=400&h=500",
    excerpt: "Elegant lily arrangement",
    price: 9200,
    compare_at_price: 11000,
    currency: { code: "KES", symbol: "KSh" },
    available: 8,
    on_hand: 8,
  },
  {
    id: "r3",
    title: "Sunflowers",
    slug: "sunflowers",
    featured_img: "https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?auto=format&fit=crop&q=80&w=400&h=500",
    excerpt: "Bright sunflower bouquet",
    price: 7800,
    compare_at_price: 9500,
    currency: { code: "KES", symbol: "KSh" },
    available: 12,
    on_hand: 12,
  },
  {
    id: "r4",
    title: "Garden Delight",
    slug: "garden-delight",
    featured_img: "https://images.unsplash.com/photo-1507290439931-a861b5a38200?auto=format&fit=crop&q=80&w=400&h=500",
    excerpt: "Fresh garden flowers",
    price: 8200,
    compare_at_price: 10000,
    currency: { code: "KES", symbol: "KSh" },
    available: 15,
    on_hand: 15,
  },
];

// Mock recommended products - exactly 4 items
const recommendedProducts: Product[] = [
  {
    id: "rec1",
    title: "Vanilla Elegance",
    slug: "vanilla-elegance",
    featured_img: "https://images.unsplash.com/photo-1507290439931-a861b5a38200?auto=format&fit=crop&q=80&w=400&h=400",
    excerpt: "White roses arrangement",
    price: 11000,
    compare_at_price: 13000,
    currency: { code: "KES", symbol: "KSh" },
    available: 6,
    on_hand: 6,
  },
  {
    id: "rec2",
    title: "A Sweet Surprise",
    slug: "sweet-surprise",
    featured_img: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&q=80&w=400&h=400",
    excerpt: "Mixed flower surprise",
    price: 9800,
    compare_at_price: 12000,
    currency: { code: "KES", symbol: "KSh" },
    available: 10,
    on_hand: 10,
  },
  {
    id: "rec3",
    title: "Rustic Elegance",
    slug: "rustic-elegance",
    featured_img: "https://images.unsplash.com/photo-1550983092-249511f07a51?auto=format&fit=crop&q=80&w=400&h=400",
    excerpt: "Rustic floral arrangement",
    price: 10500,
    compare_at_price: 12500,
    currency: { code: "KES", symbol: "KSh" },
    available: 7,
    on_hand: 7,
  },
  {
    id: "rec4",
    title: "Purple Majesty",
    slug: "purple-majesty",
    featured_img: "https://images.unsplash.com/photo-1599148482840-d54ca35abc39?auto=format&fit=crop&q=80&w=400&h=400",
    excerpt: "Royal purple arrangement",
    price: 11200,
    compare_at_price: 13500,
    currency: { code: "KES", symbol: "KSh" },
    available: 6,
    on_hand: 6,
  },
];

export default function CartPage() {
  const { items: cartItems, updateQuantity, removeItem, getSubtotal } = useCart();

  const handleQuantityChange = (productId: string, delta: number) => {
    const item = cartItems.find(item => item.product.id === productId);
    if (item) {
      updateQuantity(productId, item.quantity + delta);
    }
  };

  const subtotal = getSubtotal();
  const shipping = 0; // Free shipping
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen bg-background pt-24 sm:pt-28 md:pt-32 lg:pt-40 pb-12 sm:pb-16 md:pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        {/* Page Title */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif text-foreground uppercase tracking-wide mb-2">
            Shopping Cart
          </h1>
          <p className="text-sm sm:text-base text-foreground/60">
            {cartItems.length} {cartItems.length === 1 ? 'item' : 'items'} in your cart
          </p>
        </div>

        {cartItems.length === 0 ? (
          /* Empty Cart State */
          <div className="text-center py-16 sm:py-20 md:py-24">
            <ShoppingBag className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-6 text-accent" />
            <h2 className="text-2xl sm:text-3xl font-serif text-foreground mb-4">Your cart is empty</h2>
            <p className="text-foreground/60 mb-8">Discover our beautiful collection of flowers and gifts</p>
            <Link to="/products">
              <button type="button" className="bg-foreground text-primary-foreground px-8 sm:px-12 py-3 sm:py-4 text-sm sm:text-base uppercase tracking-wider font-medium hover:bg-foreground/90 transition-colors">
                Continue Shopping
              </button>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
            {/* Cart Items Section */}
            <div className="lg:col-span-2 space-y-6">
              {/* Table Header - Hidden on mobile */}
              <div className="hidden md:grid grid-cols-12 gap-4 pb-4 border-b border-border text-xs uppercase tracking-wider text-foreground/60 font-medium">
                <div className="col-span-6">Product</div>
                <div className="col-span-2 text-center">Price</div>
                <div className="col-span-2 text-center">Quantity</div>
                <div className="col-span-2 text-right">Total</div>
              </div>

              {/* Cart Items */}
              {cartItems.map((item) => (
                <div key={item.product.id} className="bg-card p-4 sm:p-6 shadow-md relative">
                  {/* Remove Button */}
                  <button
                    type="button"
                    onClick={() => removeItem(item.product.id)}
                    className="absolute top-3 right-3 sm:top-4 sm:right-4 p-1.5 sm:p-2 hover:bg-muted rounded-full transition-colors"
                    aria-label="Remove item"
                  >
                    <X className="w-4 h-4 sm:w-5 sm:h-5 text-foreground/60" />
                  </button>

                  <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-4 items-center">
                    {/* Product Info */}
                    <div className="md:col-span-6 flex gap-4">
                      <Link to="/products/$slug" params={{ slug: item.product.slug }} className="flex-shrink-0">
                        <img
                          src={item.product.featured_img || ""}
                          alt={item.product.title}
                          className="w-20 h-20 sm:w-24 sm:h-24 object-cover"
                        />
                      </Link>
                      <div className="flex-1 pr-8 md:pr-0">
                        <Link to="/products/$slug" params={{ slug: item.product.slug }}>
                          <h3 className="text-base sm:text-lg font-medium text-foreground hover:text-accent transition-colors mb-1">
                            {item.product.title}
                          </h3>
                        </Link>
                        <p className="text-xs sm:text-sm text-foreground/60">{item.product.excerpt}</p>
                      </div>
                    </div>

                    {/* Price */}
                    <div className="md:col-span-2 md:text-center">
                      <span className="md:hidden text-xs uppercase tracking-wider text-foreground/60 mr-2">Price:</span>
                      <span className="text-sm sm:text-base font-medium text-foreground">
                        {item.product.currency.symbol} {item.product.price.toLocaleString()}
                      </span>
                    </div>

                    {/* Quantity */}
                    <div className="md:col-span-2 flex items-center md:justify-center gap-3">
                      <span className="md:hidden text-xs uppercase tracking-wider text-foreground/60">Quantity:</span>
                      <div className="flex items-center border border-border">
                        <button
                          type="button"
                          onClick={() => handleQuantityChange(item.product.id, -1)}
                          disabled={item.quantity <= 1}
                          className="p-2 hover:bg-muted disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3 sm:w-4 sm:h-4" />
                        </button>
                        <span className="px-4 py-2 text-sm sm:text-base font-medium min-w-[3rem] text-center">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() => handleQuantityChange(item.product.id, 1)}
                          disabled={item.quantity >= item.product.available}
                          className="p-2 hover:bg-muted disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3 sm:w-4 sm:h-4" />
                        </button>
                      </div>
                    </div>

                    {/* Total */}
                    <div className="md:col-span-2 md:text-right">
                      <span className="md:hidden text-xs uppercase tracking-wider text-foreground/60 mr-2">Total:</span>
                      <span className="text-base sm:text-lg font-semibold text-foreground">
                        {item.product.currency.symbol} {(item.product.price * item.quantity).toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>
              ))}

              {/* Continue Shopping Link */}
              <div className="pt-4">
                <Link to="/products" className="inline-flex items-center text-sm sm:text-base text-accent hover:text-accent/80 transition-colors">
                  ← Continue Shopping
                </Link>
              </div>
            </div>

            {/* Order Summary Section */}
            <div className="lg:col-span-1">
              <div className="bg-card p-6 sm:p-8 shadow-md sticky top-32">
                <h2 className="text-xl sm:text-2xl font-serif text-foreground uppercase tracking-wide mb-6 pb-4 border-b border-border">
                  Order Summary
                </h2>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between text-sm sm:text-base">
                    <span className="text-foreground/60">Subtotal</span>
                    <span className="font-medium text-foreground">
                      {cartItems[0]?.product.currency.symbol} {subtotal.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm sm:text-base">
                    <span className="text-foreground/60">Shipping</span>
                    <span className="font-medium text-accent">Free</span>
                  </div>
                </div>

                <div className="pt-4 mb-6 border-t border-border">
                  <div className="flex justify-between items-baseline">
                    <span className="text-base sm:text-lg font-medium text-foreground">Total</span>
                    <span className="text-2xl sm:text-3xl font-serif text-foreground">
                      {cartItems[0]?.product.currency.symbol} {total.toLocaleString()}
                    </span>
                  </div>
                </div>

                {/* Checkout Buttons */}
                <div className="space-y-3">
                  <button type="button" className="w-full bg-foreground text-primary-foreground py-3 sm:py-4 text-sm sm:text-base uppercase tracking-wider font-medium hover:bg-foreground/90 transition-colors">
                    Proceed to Checkout
                  </button>
                  <button type="button" className="w-full bg-foreground text-primary-foreground py-3 sm:py-4 text-sm sm:text-base uppercase tracking-wider font-medium hover:bg-foreground/90 transition-colors">
                    Secure Payment Now
                  </button>
                </div>

                {/* Accepted Payment Methods */}
                <div className="mt-6 pt-6 border-t border-border">
                  <p className="text-xs uppercase tracking-wider text-foreground/60 mb-3">We Accept</p>
                  <div className="flex items-center gap-3">
                    <div className="px-3 py-1.5 bg-muted border border-border text-xs font-bold text-foreground">
                      PAYSTACK
                    </div>
                    <div className="px-3 py-1.5 bg-muted border border-border text-xs font-bold text-foreground">
                      M-PESA
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Separator */}
        {cartItems.length > 0 && (
          <div className="mt-16 sm:mt-20 md:mt-24 flex items-center justify-center">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
            <div className="px-6 flex items-center gap-2">
              <div className="w-1 h-1 rounded-full bg-foreground/30"></div>
              <div className="w-2 h-2 rounded-full bg-foreground/20"></div>
              <div className="w-1 h-1 rounded-full bg-foreground/30"></div>
            </div>
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
          </div>
        )}

        {/* Other Customers Also Liked */}
        {cartItems.length > 0 && (
          <section className="mt-16 sm:mt-20 md:mt-24">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-foreground text-center uppercase tracking-wide mb-8 sm:mb-12">
              Other Customers Also Liked
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              {relatedProducts.map((product) => (
                <Link
                  key={product.id}
                  to="/products/$slug"
                  params={{ slug: product.slug }}
                  className="group"
                >
                  <div className="aspect-[3/4] bg-card mb-3 sm:mb-4 overflow-hidden">
                    <img
                      src={product.featured_img || ""}
                      alt={product.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="text-sm sm:text-base font-medium text-foreground mb-1 sm:mb-2 group-hover:text-accent transition-colors">
                    {product.title}
                  </h3>
                  <p className="text-sm sm:text-base font-medium text-foreground">
                    {product.currency.symbol} {product.price.toLocaleString()}
                  </p>
                  <button type="button" className="mt-2 sm:mt-3 w-full bg-foreground text-primary-foreground py-2 sm:py-2.5 text-xs sm:text-sm uppercase tracking-wider font-medium hover:bg-foreground/90 transition-colors">
                    Add to Cart
                  </button>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Separator */}
        <div className="mt-16 sm:mt-20 md:mt-24 flex items-center justify-center">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
          <div className="px-6 flex items-center gap-2">
            <div className="w-1 h-1 rounded-full bg-foreground/30"></div>
            <div className="w-2 h-2 rounded-full bg-foreground/20"></div>
            <div className="w-1 h-1 rounded-full bg-foreground/30"></div>
          </div>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
        </div>

        {/* Recently Viewed */}
        <section className="mt-16 sm:mt-20 md:mt-24">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-foreground text-center uppercase tracking-wide mb-8 sm:mb-12">
            Recently Viewed
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {recommendedProducts.slice(0, 3).map((product) => (
              <Link
                key={product.id}
                to="/products/$slug"
                params={{ slug: product.slug }}
                className="group bg-card p-4 sm:p-6 shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="aspect-square bg-muted mb-4 overflow-hidden">
                  <img
                    src={product.featured_img || ""}
                    alt={product.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-base sm:text-lg font-medium text-foreground mb-2 group-hover:text-accent transition-colors">
                  {product.title}
                </h3>
                <p className="text-base sm:text-lg font-semibold text-foreground mb-4">
                  {product.currency.symbol} {product.price.toLocaleString()}
                </p>
                <button type="button" className="w-full bg-foreground text-primary-foreground py-2.5 sm:py-3 text-xs sm:text-sm uppercase tracking-wider font-medium hover:bg-foreground/90 transition-colors">
                  Add to Basket
                </button>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
