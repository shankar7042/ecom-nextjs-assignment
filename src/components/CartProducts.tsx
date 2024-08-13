"use client";

import { useEffect, useState } from "react";

import { useCartContext } from "@/hooks/useCartContext";
import { ProductWithQuantity } from "@/context/CartContext";
import Image from "next/image";

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
        <div key={product.id} className="flex items-center gap-4">
          <div className="border p-2 w-[200px] aspect-square">
            <Image
              src={product.images[0]}
              alt={product.title}
              width={100}
              height={100}
            />
          </div>
          <div className="flex flex-col gap-2">
            <p className="line-clamp-1 font-semibold">{product.title}</p>
            <p className="line-clamp-2 text-sm text-gray-400">
              {product.description}
            </p>
          </div>
          <div className="flex items-center">
            <button className="border px-3 py-2 bg-green-500 rounded-s-md">
              +
            </button>
            <p className="px-4 py-2 border-t border-b">{product.quantity}</p>
            <button className="border px-3 py-2 bg-red-400 rounded-e-md">
              -
            </button>
          </div>
          <div className="ml-10">
            <button className="bg-red-600 px-4 py-2 rounded-md text-white text-sm">
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartProducts;
