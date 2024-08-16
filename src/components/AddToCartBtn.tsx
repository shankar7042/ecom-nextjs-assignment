"use client";

import { useCartContext } from "@/hooks/useCartContext";
import { IProduct } from "@/types/product";

interface AddToCartBtnProps {
  product: IProduct;
}

const AddToCartBtn: React.FC<AddToCartBtnProps> = ({ product }) => {
  const {
    incrementCartItem,
    decrementCartItem,
    addToCart,
    setOfCartIds,
    cartProducts,
  } = useCartContext();
  const productInCart = setOfCartIds.has(product.id);
  const quantity = !productInCart
    ? 0
    : cartProducts.find((c) => c.id === product.id)?.quantity;

  const handleClick = () => {
    addToCart(product.id);
  };

  const handleIncrementQty = () => {
    incrementCartItem(product.id);
  };

  const handleDecrementQty = () => {
    decrementCartItem(product.id);
  };

  return !productInCart ? (
    <button
      onClick={handleClick}
      className="w-full py-2 bg-yellow-400 font-semibold mt-3 rounded-md transition duration-300 hover:bg-yellow-300 relative"
    >
      Add to Cart
    </button>
  ) : (
    <div className="flex items-center mx-auto mt-4">
      <button
        onClick={handleDecrementQty}
        className="border px-3 py-2 bg-red-400 rounded-s-md"
      >
        -
      </button>
      <p className="px-4 py-2 border-t border-b">{quantity}</p>
      <button
        onClick={handleIncrementQty}
        className="border px-3 py-2 bg-green-500 rounded-e-md"
      >
        +
      </button>
    </div>
  );
};

export default AddToCartBtn;
