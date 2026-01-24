import { useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { X } from "lucide-react";
import { useCart } from "@/contexts/CartContext";

interface CartDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CartDialog({ isOpen, onClose }: CartDialogProps) {
  const { items, removeItem, getSubtotal } = useCart();

  // Prevent body scroll when dialog is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Close on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  const subtotal = getSubtotal();

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <button
        type="button"
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100] animate-in fade-in duration-300 border-0 p-0 cursor-pointer"
        onClick={onClose}
        aria-label="Close cart"
      />

      {/* Dialog */}
      <div className="fixed top-0 right-0 bottom-0 w-full max-w-md bg-background shadow-xl z-[101] flex flex-col animate-in slide-in-from-right duration-300 overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <h2 className="text-xl font-serif text-foreground uppercase tracking-wide">
            Shopping Cart
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="p-2 border-2 border-dotted border-foreground/30 hover:border-foreground/50 rounded transition-colors"
            aria-label="Close cart"
          >
            <X className="w-5 h-5 text-foreground" />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-6">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <p className="text-foreground/60 mb-4">Your cart is empty</p>
              <Link
                to="/products"
                onClick={onClose}
                className="text-accent hover:text-accent/80 transition-colors"
              >
                Continue Shopping
              </Link>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <div key={item.product.id} className="flex gap-4 pb-4 border-b border-border last:border-0 relative">
                  {/* Product Image with Remove Button Overlapping */}
                  <div className="relative flex-shrink-0">
                    <button
                      type="button"
                      onClick={() => removeItem(item.product.id)}
                      className="absolute -left-2 -top-2 z-10 w-6 h-6 rounded-full bg-background border border-foreground/20 flex items-center justify-center hover:bg-muted transition-colors"
                      aria-label="Remove item"
                    >
                      <X className="w-3 h-3 text-foreground" />
                    </button>
                    <Link
                      to="/products/$slug"
                      params={{ slug: item.product.slug }}
                      onClick={onClose}
                    >
                      <img
                        src={item.product.featured_img || ""}
                        alt={item.product.title}
                        className="w-20 h-20 object-cover bg-muted"
                      />
                    </Link>
                  </div>

                  {/* Product Info */}
                  <div className="flex-1 min-w-0">
                    <Link
                      to="/products/$slug"
                      params={{ slug: item.product.slug }}
                      onClick={onClose}
                      className="block"
                    >
                      <h3 className="text-sm font-medium text-foreground mb-1 hover:text-accent transition-colors">
                        {item.product.title}
                      </h3>
                    </Link>
                    <div className="flex items-center gap-2 text-xs text-foreground/60">
                      <span>Qty: {item.quantity}</span>
                      <span className="text-sm font-medium text-foreground">
                        {item.product.currency.symbol} {(item.product.price * item.quantity).toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-border p-6 space-y-4">
            {/* Subtotal */}
            <div className="flex justify-between items-center">
              <span className="font-bold text-foreground">Subtotal:</span>
              <span className="text-lg font-semibold text-foreground">
                {items[0]?.product.currency.symbol || "KSh"} {subtotal.toLocaleString()}
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3">
              <Link
                to="/cart"
                onClick={onClose}
                className="flex-1 bg-foreground text-primary-foreground py-3 px-4 text-sm uppercase tracking-wider font-medium hover:bg-foreground/90 transition-colors text-center"
              >
                VIEW CART
              </Link>
              <button
                type="button"
                className="flex-1 bg-muted text-foreground py-3 px-4 text-sm uppercase tracking-wider font-medium hover:bg-muted/80 transition-colors"
              >
                CHECKOUT
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
