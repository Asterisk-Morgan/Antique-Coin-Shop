"use client";

import React, { createContext, useState, ReactNode } from 'react';
import type { CartItem, Coin } from '@/lib/types';
import { useToast } from "@/hooks/use-toast";

export interface CartContextType {
  cartItems: CartItem[];
  addToCart: (coin: Coin) => void;
  removeFromCart: (coinId: string) => void;
  updateQuantity: (coinId: string, quantity: number) => void;
  clearCart: () => void;
  cartCount: number;
  cartTotal: number;
}

export const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const { toast } = useToast();

  const addToCart = (coin: Coin) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.coin.id === coin.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.coin.id === coin.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevItems, { coin, quantity: 1 }];
    });
    toast({
      title: "Added to Cart",
      description: `${coin.name} has been added to your cart.`,
    });
  };

  const removeFromCart = (coinId: string) => {
    setCartItems(prevItems => prevItems.filter(item => item.coin.id !== coinId));
  };

  const updateQuantity = (coinId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(coinId);
    } else {
      setCartItems(prevItems =>
        prevItems.map(item =>
          item.coin.id === coinId ? { ...item, quantity } : item
        )
      );
    }
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const cartTotal = cartItems.reduce((acc, item) => acc + item.coin.price * item.quantity, 0);


  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateQuantity, clearCart, cartCount, cartTotal }}>
      {children}
    </CartContext.Provider>
  );
};
