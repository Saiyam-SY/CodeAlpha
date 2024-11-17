import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroBanner } from "@/components/home/HeroBanner";
import { ProductGrid } from "@/components/products/ProductGrid";
import { mockProducts } from "@/data/products";

function App() {
  return (
    <div className="flex min-h-screen flex-col mx-auto">
      <Header />
      <main className="flex-1">
        <HeroBanner />
        <section className="container mx-auto px-4 py-12">
          <h2 className="mb-8 text-3xl font-bold">Featured Products</h2>
          <ProductGrid products={mockProducts} />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
