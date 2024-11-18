import { Heart, ShoppingCart } from "lucide-react";
import React from "react";
import toast from "react-hot-toast";
import { useCart } from "../context/CartContext";
import { Product } from "../types";

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { dispatch } = useCart();

  const handleAddToCart = () => {
    dispatch({ type: "ADD_TO_CART", payload: product });
    toast.success(`${product.name} added to cart!`, {
      position: "bottom-right",
      style: {
        background: "#4F46E5",
        color: "#fff",
      },
    });
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow group p-1 ">
      <div className="relative aspect-square overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 rounded-lg"
        />
        <button className="absolute top-4 right-4 p-2 rounded-full bg-white/80 hover:bg-white text-gray-600 hover:text-red-500 transition-colors">
          <Heart size={20} />
        </button>
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-medium text-gray-900 line-clamp-1">
            {product.name}
          </h3>
          <span className="text-lg font-bold text-indigo-600">
            {formatPrice(product.price)}
          </span>
        </div>
        <p className="text-sm text-gray-600 mb-4 line-clamp-1">
          {product.description}
        </p>
        <button
          onClick={handleAddToCart}
          className="w-full flex items-center justify-center gap-2 bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors"
        >
          <ShoppingCart size={18} />
          Add to Cart
        </button>
      </div>
    </div>
  );
};
