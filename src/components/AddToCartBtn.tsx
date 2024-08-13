"use client";

import { useCartContext } from "@/hooks/useCartContext";
import { IProduct } from "@/types/product";
import { useState } from "react";

interface AddToCartBtnProps {
  product: IProduct;
}

const AddToCartBtn: React.FC<AddToCartBtnProps> = ({ product }) => {
  const { addToCart } = useCartContext();
  const [show, setShow] = useState(false);

  const handleClick = () => {
    addToCart(product.id);
    setShow(true);
    setTimeout(() => {
      setShow(false);
    }, 700);
  };

  return (
    <button
      onClick={handleClick}
      className="w-full py-2 bg-yellow-400 font-semibold mt-3 rounded-md transition duration-300 hover:bg-yellow-300 relative"
    >
      Add to Cart{" "}
      <span
        className={`ml-4 absolute text-green-600
        ${show ? "opacity-1" : "opacity-0"}
        ${show ? "-translate-y-full" : "translate-y-full"}
        transition-all
        duration-700
        `}
      >
        +1
      </span>
    </button>
  );
};

export default AddToCartBtn;
