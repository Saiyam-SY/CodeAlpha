import React from 'react';
import { Heart, Home, Search, ShoppingBag, User } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface NavbarProps {
  onCartClick: () => void;
  onAuthClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onCartClick, onAuthClick }) => {
  const { state } = useCart();
  const cartItemsCount = state.items.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-8">
            <h1 className="text-2xl font-bold text-indigo-600">ShopHub</h1>
            <div className="hidden md:flex items-center gap-6">
              <a href="#" className="flex items-center gap-2 text-gray-600 hover:text-indigo-600">
                <Home size={20} />
                <span>Home</span>
              </a>
              <a href="#" className="flex items-center gap-2 text-gray-600 hover:text-indigo-600">
                <Heart size={20} />
                <span>Wishlist</span>
              </a>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-4 flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-indigo-500"
              />
              <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={onAuthClick}
              className="flex items-center gap-2 text-gray-600 hover:text-indigo-600"
            >
              <User size={20} />
              <span className="hidden md:inline">Account</span>
            </button>
            <button
              onClick={onCartClick}
              className="flex items-center gap-2 text-gray-600 hover:text-indigo-600 relative"
            >
              <ShoppingBag size={20} />
              <span className="hidden md:inline">Cart</span>
              {cartItemsCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-indigo-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItemsCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};