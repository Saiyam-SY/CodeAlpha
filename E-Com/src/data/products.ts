import { Product } from '../types';

// Helper function to generate a random price between min and max
const randomPrice = (min: number, max: number) => 
  Number((Math.random() * (max - min) + min).toFixed(2));

export const products: Product[] = [
  {
    id: '1',
    name: 'OnePlus 11R 5G',
    price: 44999,
    description: 'Flagship killer with Snapdragon 8+ Gen 1, 50MP camera, and 100W charging',
    image: 'https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?auto=format&fit=crop&q=80&w=800',
    category: 'Electronics'
  },
  {
    id: '2',
    name: 'boAt Rockerz 550 ANC',
    price: 3999,
    description: 'Premium wireless headphones with active noise cancellation and 20-hour battery life',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=800',
    category: 'Electronics'
  },
  {
    id: '3',
    name: 'Fabindia Silk Saree',
    price: 15999,
    description: 'Handwoven Banarasi silk saree with intricate zari work',
    image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&q=80&w=800',
    category: 'Fashion'
  },
  {
    id: '4',
    name: 'Titan Raga Moments',
    price: 12499,
    description: 'Elegant rose gold women\'s watch with mother of pearl dial',
    image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&q=80&w=800',
    category: 'Fashion'
  },
  {
    id: '5',
    name: 'Canon EOS R6 Mark II',
    price: 215999,
    description: 'Professional mirrorless camera with 24.2MP sensor and 4K video',
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=800',
    category: 'Electronics'
  },
  {
    id: '6',
    name: 'American Tourister Backpack',
    price: 2499,
    description: 'Durable 32L backpack with laptop compartment',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=800',
    category: 'Fashion'
  }
];

// Product types for different categories
const productTypes = {
  Electronics: [
    { name: 'Samsung Galaxy S23 Ultra', img: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&q=80&w=800', minPrice: 89999, maxPrice: 124999 },
    { name: 'MacBook Pro M2', img: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&q=80&w=800', minPrice: 149999, maxPrice: 249999 },
    { name: 'iPad Air', img: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&q=80&w=800', minPrice: 54999, maxPrice: 89999 }
  ],
  Fashion: [
    { name: 'Manyavar Sherwani', img: 'https://images.unsplash.com/photo-1579969406275-0b37fa82deca?auto=format&fit=crop&q=80&w=800', minPrice: 15999, maxPrice: 49999 },
    { name: 'Anita Dongre Lehenga', img: 'https://images.unsplash.com/photo-1585944285854-d06c019aaca3?auto=format&fit=crop&q=80&w=800', minPrice: 49999, maxPrice: 199999 }
  ],
  'Home & Living': [
    { name: 'Godrej Interio Sofa', img: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=800', minPrice: 39999, maxPrice: 89999 },
    { name: 'Urban Ladder Dining Set', img: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&q=80&w=800', minPrice: 45999, maxPrice: 129999 }
  ],
  Beauty: [
    { name: 'Forest Essentials Gift Set', img: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&q=80&w=800', minPrice: 2999, maxPrice: 7999 },
    { name: 'Kama Ayurveda Bundle', img: 'https://images.unsplash.com/photo-1612817288484-6f916006741a?auto=format&fit=crop&q=80&w=800', minPrice: 4999, maxPrice: 12999 }
  ]
};

const categories = Object.keys(productTypes);
const brands = {
  Electronics: ['Samsung', 'Apple', 'OnePlus', 'Xiaomi', 'Sony', 'LG', 'boAt', 'Noise'],
  Fashion: ['Manyavar', 'Anita Dongre', 'Fabindia', 'Ritu Kumar', 'Sabyasachi', 'Raymond'],
  'Home & Living': ['Godrej Interio', 'Urban Ladder', 'Pepperfry', 'HomeTown', 'IKEA'],
  Beauty: ['Forest Essentials', 'Kama Ayurveda', 'Biotique', 'Mamaearth', 'Khadi Natural']
};

// Generate additional products
for (let i = 7; i <= 20; i++) {
  const category = categories[Math.floor(Math.random() * categories.length)];
  const brand = brands[category][Math.floor(Math.random() * brands[category].length)];
  const productType = productTypes[category][Math.floor(Math.random() * productTypes[category].length)];

  products.push({
    id: i.toString(),
    name: `${brand} ${productType.name}`,
    price: randomPrice(productType.minPrice, productType.maxPrice),
    description: `Premium ${category.toLowerCase()} product from ${brand}`,
    image: productType.img,
    category
  });
}

export default products;