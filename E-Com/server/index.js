import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { products } from '../src/data/products.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Get all products
app.get('/api/products', (req, res) => {
  const { category, search } = req.query;
  
  let filteredProducts = [...products];
  
  if (category) {
    filteredProducts = filteredProducts.filter(
      product => product.category.toLowerCase() === category.toLowerCase()
    );
  }
  
  if (search) {
    filteredProducts = filteredProducts.filter(
      product => product.name.toLowerCase().includes(search.toLowerCase()) ||
                 product.description.toLowerCase().includes(search.toLowerCase())
    );
  }
  
  res.json(filteredProducts);
});

// Get product by ID
app.get('/api/products/:id', (req, res) => {
  const product = products.find(p => p.id === req.params.id);
  
  if (!product) {
    return res.status(404).json({ message: 'Product not found' });
  }
  
  res.json(product);
});

// Get products by category
app.get('/api/categories/:category', (req, res) => {
  const categoryProducts = products.filter(
    product => product.category.toLowerCase() === req.params.category.toLowerCase()
  );
  
  res.json(categoryProducts);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});