"use client";

import { useCartContext } from "@/hooks/useCartContext";
import { IProduct } from "@/types/product";

interface AddToCartBtnProps {
  product: IProduct;
}

const AddToCartBtn: React.FC<AddToCartBtnProps> = ({ product }) => {
  const { addToCart } = useCartContext();

  const handleClick = () => {
    addToCart(product.id);
  };

  return (
    <button
      onClick={handleClick}
      className="w-full py-2 bg-yellow-400 font-semibold mt-3 rounded-md transition duration-300 hover:bg-yellow-300"
    >
      Add to Cart
    </button>
  );
};

export default AddToCartBtn;
