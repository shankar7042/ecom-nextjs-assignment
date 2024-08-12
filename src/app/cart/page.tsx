"use client";

import { ProductWithQuantity } from "@/context/CartContext";
import { useCartContext } from "@/hooks/useCartContext";
import { useEffect, useState } from "react";

export default function Cart() {
  const { allCartItemProducts } = useCartContext();
  const [cartProducts, setCartProducts] = useState<ProductWithQuantity[]>([]);

  useEffect(() => {
    allCartItemProducts().then((products) => {
      setCartProducts(products);
    });
  }, [allCartItemProducts]);

  return (
    <div>
      {cartProducts.map((prod) => (
        <div key={prod.id}>
          <ul>
            <li>{prod.title}</li>
            <li>{prod.price}</li>
            <li>{prod.quantity}</li>
          </ul>
        </div>
      ))}
    </div>
  );
}
