import React from 'react';
import { ChevronDown, Search } from 'lucide-react';

export const Header: React.FC = () => {
  const categories = ['Electronics', 'Fashion', 'Home & Living', 'Sports', 'Books', 'Beauty'];

  return (
    <header className="bg-indigo-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col gap-6">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold">Welcome to ShopHub</h1>
            <div className="flex items-center gap-4">
              <div className="relative group">
                <button className="flex items-center gap-2 hover:text-indigo-200">
                  Categories
                  <ChevronDown size={16} />
                </button>
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg hidden group-hover:block">
                  <div className="py-1">
                    {categories.map((category) => (
                      <a
                        key={category}
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50"
                      >
                        {category}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};