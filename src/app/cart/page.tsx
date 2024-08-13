"use client";

import { useEffect, useState } from "react";

import CartProducts from "@/components/CartProducts";
import CartSummary from "@/components/CartSummary";
import { ProductWithQuantity } from "@/context/CartContext";
import { useCartContext } from "@/hooks/useCartContext";

export default function Cart() {
  const { allCartItemProducts, totalQuantity } = useCartContext();
  const [cartProducts, setCartProducts] = useState<ProductWithQuantity[]>([]);

  useEffect(() => {
    allCartItemProducts().then((products) => {
      setCartProducts(products);
    });
  }, [allCartItemProducts]);

  return (
    <div className="grid grid-cols-[3fr_1fr] w-[80%] mx-auto my-10 gap-4">
      <CartProducts cartProducts={cartProducts} />
      <CartSummary cartProducts={cartProducts} />
    </div>
  );
}
