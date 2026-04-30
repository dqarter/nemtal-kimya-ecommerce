/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useState, useContext } from 'react';
import toast from 'react-hot-toast';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const addToCart = (product) => {
    const cartItem = cart.find((item) => item.id === product.id);
    if (cartItem) {
      if (cartItem.amount >= 50) {
        toast.error("Maksimum stok limitine (50) ulaştınız.");
        return; 
      }
      const newCart = cart.map((item) => 
        item.id === product.id ? { ...item, amount: item.amount + 1 } : item
      );
      setCart(newCart);
    } else {
      setCart([...cart, { ...product, amount: 1 }]);
    }
    toast.success(`${product.title} eklendi.`);
  };

  // YAMA: Miktarı artır
  const increaseAmount = (id) => {
    const item = cart.find(i => i.id === id);
    if (item.amount >= 50) {
      toast.error("Stok sınırı!");
      return;
    }
    const newCart = cart.map(i => i.id === id ? { ...i, amount: i.amount + 1 } : i);
    setCart(newCart);
  };

  // YAMA: Miktarı azalt
  const decreaseAmount = (id) => {
    const item = cart.find(i => i.id === id);
    if (item.amount === 1) {
      removeFromCart(id);
    } else {
      const newCart = cart.map(i => i.id === id ? { ...i, amount: i.amount - 1 } : i);
      setCart(newCart);
    }
  };

  // YAMA: Ürünü tamamen sil
  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
    toast.error("Ürün çıkarıldı.");
  };

  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider value={{ 
      cart, isOpen, setIsOpen, addToCart, increaseAmount, decreaseAmount, removeFromCart, clearCart 
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);