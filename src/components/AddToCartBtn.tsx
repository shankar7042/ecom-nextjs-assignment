"use client";

import { useCartContext } from "@/hooks/useCartContext";
import { IProduct } from "@/types/product";
import { toast } from "sonner";

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
    : cartProducts.find((c) => c.id === product.id)!.quantity;

  const handleClick = () => {
    addToCart(product.id);
    toast.success(`${product.title} added in the cart.`);
  };

  const handleIncrementQty = () => {
    incrementCartItem(product.id);
    toast.success(
      `You've changed '${product.title}' Qunatity to '${quantity + 1}'`
    );
  };

  const handleDecrementQty = () => {
    decrementCartItem(product.id);
    if (quantity - 1 > 0)
      toast.success(
        `You've changed '${product.title}' Qunatity to '${quantity - 1}'`
      );
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
