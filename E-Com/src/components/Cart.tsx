import React from 'react';
import { useCart } from '../context/CartContext';
import { Minus, Plus, ShoppingBag, Trash2 } from 'lucide-react';

export const Cart: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  const { state, dispatch } = useCart();

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(price);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-lg">
        <div className="p-4 flex flex-col h-full">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <ShoppingBag className="text-indigo-600" />
              Your Cart
            </h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>
          </div>

          {state.items.length === 0 ? (
            <div className="flex-1 flex items-center justify-center flex-col gap-4 text-gray-500">
              <ShoppingBag size={48} />
              <p>Your cart is empty</p>
            </div>
          ) : (
            <>
              <div className="flex-1 overflow-auto">
                {state.items.map((item) => (
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
                        {formatPrice(item.product.price)}
                      </p>
                      <div className="flex items-center gap-2 mt-2">
                        <button
                          onClick={() =>
                            dispatch({
                              type: 'UPDATE_QUANTITY',
                              payload: {
                                productId: item.product.id,
                                quantity: Math.max(0, item.quantity - 1),
                              },
                            })
                          }
                          className="p-1 rounded-md hover:bg-gray-100"
                        >
                          <Minus size={16} />
                        </button>
                        <span className="w-8 text-center">{item.quantity}</span>
                        <button
                          onClick={() =>
                            dispatch({
                              type: 'UPDATE_QUANTITY',
                              payload: {
                                productId: item.product.id,
                                quantity: item.quantity + 1,
                              },
                            })
                          }
                          className="p-1 rounded-md hover:bg-gray-100"
                        >
                          <Plus size={16} />
                        </button>
                        <button
                          onClick={() =>
                            dispatch({
                              type: 'REMOVE_FROM_CART',
                              payload: item.product.id,
                            })
                          }
                          className="ml-auto text-red-500 hover:text-red-700"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="border-t border-gray-200 pt-4 mt-4">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-lg font-semibold">Total:</span>
                  <span className="text-2xl font-bold">
                    {formatPrice(state.total)}
                  </span>
                </div>
                <button className="w-full bg-indigo-600 text-white py-3 rounded-md hover:bg-indigo-700 transition-colors">
                  Checkout
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};