"use client";

import { IProduct } from "@/types/product";
import { fetchProductById } from "@/utils/productUtils";
import {
  createContext,
  PropsWithChildren,
  useCallback,
  useMemo,
  useState,
} from "react";

interface CartProduct {
  id: number;
  quantity: number;
}

export interface ProductWithQuantity extends IProduct {
  quantity: number;
}

interface ICartContext {
  cartProducts: CartProduct[];
  addToCart: (id: number) => void;
  totalQuantity: number;
  allCartItemProducts: () => Promise<ProductWithQuantity[]>;
}

export const CartContext = createContext<ICartContext>({
  cartProducts: [],
  addToCart: (id: number) => {},
  totalQuantity: 0,
  allCartItemProducts: async () => [],
});

export const CartContextProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const [cartProducts, setCartProducts] = useState<CartProduct[]>([]);

  const addToCart = (prodId: number) => {
    setCartProducts((prevProd) => {
      if (prevProd.findIndex((prod) => prod.id === prodId) === -1) {
        return [...prevProd, { id: prodId, quantity: 1 }];
      }
      return prevProd.map((prod) => {
        if (prod.id === prodId) {
          return { ...prod, quantity: prod.quantity + 1 };
        } else {
          return { ...prod };
        }
      });
    });
  };

  const allCartItemProducts = useCallback(async () => {
    const products = await Promise.all(
      cartProducts.map(async (prod) => {
        const product = await fetchProductById(prod.id);
        return {
          ...product,
          quantity: prod.quantity,
        };
      })
    );
    return products;
  }, [cartProducts]);

  const totalQuantity = useMemo(() => {
    return cartProducts.reduce((acc, curr) => acc + curr.quantity, 0);
  }, [cartProducts]);

  return (
    <CartContext.Provider
      value={{ cartProducts, addToCart, totalQuantity, allCartItemProducts }}
    >
      {children}
    </CartContext.Provider>
  );
};
