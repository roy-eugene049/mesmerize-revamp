import { createFileRoute } from '@tanstack/react-router'
import ProductsFilterPage from "@/components/pages/ProductsFilterPage";
import Footer from "@/components/blocks/footer/Footer";

export const Route = createFileRoute('/products')({
  component: ProductsPage,
})

function ProductsPage() {
  return (
    <div className="min-h-screen bg-background">
      <main>
        <ProductsFilterPage category="Fresh Flowers" />
      </main>
      <Footer />
    </div>
  );
}
