"use client";

import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    if (typeof window !== "undefined") {
      const storedCart = localStorage.getItem("cart");
      return storedCart ? JSON.parse(storedCart) : [];
    }
    return [];
  });

  // ✅ Add to cart
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProductIndex = prevCart.findIndex(
        (item) => item.img === product.img
      );

      if (existingProductIndex !== -1) {
        return prevCart.map((item, index) => {
          if (index !== existingProductIndex) return item;
          const newQuantity = item.quantity + 1;
          return {
            ...item,
            quantity: newQuantity,
            total: newQuantity * item.mrp,
          };
        });
      } else {
        const newProduct = {
          ...product,
          quantity: 1,
          total: product.mrp,
        };
        return [...prevCart, newProduct];
      }
    });
  };

  // ✅ Remove from cart by index
  const removeFromCart = (index) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.filter((_, i) => i !== index);
      return updatedCart;
    });
  };

  // ✅ Update quantity by index (IMMUTABLE)
  const updateQuantity = (index, amount) => {
    setCart((prevCart) =>
      prevCart.map((item, i) => {
        if (i !== index) return item;
        const newQuantity = Math.max(1, item.quantity + amount);
        return {
          ...item,
          quantity: newQuantity,
          total: newQuantity * item.mrp,
        };
      })
    );
  };

  // ✅ Persist to localStorage
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, updateQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
