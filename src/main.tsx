import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { CartProvider } from '@/context/CartContext';
import { Toaster } from '@/components/ui/toaster';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CartProvider>
      <App />
      <Toaster />
    </CartProvider>
  </StrictMode>
);