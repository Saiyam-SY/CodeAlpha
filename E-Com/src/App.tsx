import React, { useState } from 'react';
import { CartProvider } from './context/CartContext';
import { WishlistProvider } from './context/WishlistContext';
import { ProductCard } from './components/ProductCard';
import { Cart } from './components/Cart';
import { Navbar } from './components/Navbar';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { AuthModal } from './components/AuthModal';
import { WishlistModal } from './components/WishlistModal';
import { products } from './data/products';
import { Toaster } from 'react-hot-toast';

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);

  return (
    <CartProvider>
      <WishlistProvider>
        <div className="min-h-screen bg-gray-50 flex flex-col">
          <Navbar
            onCartClick={() => setIsCartOpen(true)}
            onAuthClick={() => setIsAuthOpen(true)}
            onWishlistClick={() => setIsWishlistOpen(true)}
          />
          <Header />

          <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </main>

          <Footer />

          <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
          <AuthModal isOpen={isAuthOpen} onClose={() => setIsAuthOpen(false)} />
          <WishlistModal isOpen={isWishlistOpen} onClose={() => setIsWishlistOpen(false)} />
          <Toaster />
        </div>
      </WishlistProvider>
    </CartProvider>
  );
}

export default App;