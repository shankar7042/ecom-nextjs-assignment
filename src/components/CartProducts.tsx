"use client";

import { useEffect, useState } from "react";

import { ProductWithQuantity } from "@/context/CartContext";
import { useCartContext } from "@/hooks/useCartContext";
import CartItem from "./CartItem";

const CartProducts = () => {
  const { allCartItemProducts, totalQuantity } = useCartContext();
  const [cartProducts, setCartProducts] = useState<ProductWithQuantity[]>([]);

  useEffect(() => {
    allCartItemProducts().then((products) => {
      setCartProducts(products);
    });
  }, [allCartItemProducts]);

  return totalQuantity === 0 ? (
    <div className="text-center font-semibold text-xl my-4">Cart is empty</div>
  ) : (
    <div className="border px-4 py-4 rounded-md flex flex-col gap-6">
      {cartProducts.map((product) => (
        <CartItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export default CartProducts;
