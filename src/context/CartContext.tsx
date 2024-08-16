"use client";

import {
  createContext,
  PropsWithChildren,
  useCallback,
  useMemo,
  useState,
} from "react";

import { IProduct } from "@/types/product";
import { fetchProductById } from "@/utils/productUtils";

interface CartProduct {
  id: number;
  quantity: number;
}

export interface ProductWithQuantity extends IProduct {
  quantity: number;
}

interface ICartContext {
  cartProducts: CartProduct[];
  setOfCartIds: Set<number>;
  addToCart: (id: number) => void;
  deleteFromCart: (id: number) => void;
  incrementCartItem: (id: number) => void;
  decrementCartItem: (id: number) => void;
  totalQuantity: number;
  allCartItemProducts: () => Promise<ProductWithQuantity[]>;
}

export const CartContext = createContext<ICartContext>({
  cartProducts: [],
  setOfCartIds: new Set(),
  addToCart: (id: number) => {},
  deleteFromCart: (id: number) => {},
  incrementCartItem: (id: number) => {},
  decrementCartItem: (id: number) => {},
  totalQuantity: 0,
  allCartItemProducts: async () => [],
});

export const CartContextProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const [cartProducts, setCartProducts] = useState<CartProduct[]>([]);
  const setOfCartIds = useMemo(() => {
    return new Set(cartProducts.map((c) => c.id));
  }, [cartProducts]);
  const addToCart = useCallback((prodId: number) => {
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
  }, []);

  const deleteFromCart = useCallback((id: number) => {
    setCartProducts((prevProducts) =>
      prevProducts.filter((prod) => prod.id !== id)
    );
  }, []);

  const incrementCartItem = useCallback((id: number) => {
    setCartProducts((prevProducts) =>
      prevProducts.map((prod) =>
        prod.id === id ? { ...prod, quantity: prod.quantity + 1 } : prod
      )
    );
  }, []);

  const decrementCartItem = useCallback(
    (id: number) => {
      const item = cartProducts.find((it) => it.id === id);
      if (item?.quantity === 1) {
        deleteFromCart(id);
      } else {
        setCartProducts((prevProducts) =>
          prevProducts.map((prod) =>
            prod.id === id ? { ...prod, quantity: prod.quantity - 1 } : prod
          )
        );
      }
    },
    [cartProducts, deleteFromCart]
  );

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
      value={{
        cartProducts,
        setOfCartIds,
        addToCart,
        totalQuantity,
        allCartItemProducts,
        deleteFromCart,
        incrementCartItem,
        decrementCartItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
