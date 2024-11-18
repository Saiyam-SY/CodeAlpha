import React from 'react';
import { useWishlist } from '../context/WishlistContext';
import { useCart } from '../context/CartContext';
import { Heart, ShoppingCart, X } from 'lucide-react';
import toast from 'react-hot-toast';

interface WishlistModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const WishlistModal: React.FC<WishlistModalProps> = ({ isOpen, onClose }) => {
  const { state: wishlistState, dispatch: wishlistDispatch } = useWishlist();
  const { dispatch: cartDispatch } = useCart();

  if (!isOpen) return null;

  const handleAddToCart = (item: typeof wishlistState.items[0]) => {
    cartDispatch({ type: 'ADD_TO_CART', payload: item.product });
    toast.success('Added to cart!');
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-lg">
        <div className="p-4 flex flex-col h-full">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <Heart className="text-red-500" />
              Your Wishlist
            </h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
              <X size={24} />
            </button>
          </div>

          {wishlistState.items.length === 0 ? (
            <div className="flex-1 flex items-center justify-center flex-col gap-4 text-gray-500">
              <Heart size={48} />
              <p>Your wishlist is empty</p>
            </div>
          ) : (
            <div className="flex-1 overflow-auto">
              {wishlistState.items.map((item) => (
                <div
                  key={item.product.id}
                  className="flex gap-4 border-b border-gray-200 py-4"
                >
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-24 h-24 object-cover rounded"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold">{item.product.name}</h3>
                    <p className="text-gray-600">
                      ${item.product.price.toFixed(2)}
                    </p>
                    <div className="flex gap-2 mt-2">
                      <button
                        onClick={() => handleAddToCart(item)}
                        className="flex items-center gap-1 text-sm text-indigo-600 hover:text-indigo-800"
                      >
                        <ShoppingCart size={16} />
                        Add to Cart
                      </button>
                      <button
                        onClick={() =>
                          wishlistDispatch({
                            type: 'REMOVE_FROM_WISHLIST',
                            payload: item.product.id,
                          })
                        }
                        className="flex items-center gap-1 text-sm text-red-500 hover:text-red-700"
                      >
                        <X size={16} />
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};