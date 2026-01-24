import { createFileRoute } from '@tanstack/react-router'
import CartPage from "@/components/pages/CartPage";
import Footer from "@/components/blocks/footer/Footer";

export const Route = createFileRoute('/cart')({
  component: Cart,
})

function Cart() {
  return (
    <div className="min-h-screen bg-background">
      <main>
        <CartPage />
      </main>
      <Footer />
    </div>
  );
}
