"use client";

import { useCartContext } from "@/hooks/useCartContext";
import { ProductWithQuantity } from "@/context/CartContext";

import CartItem from "./CartItem";

interface CartProductsProps {
  cartProducts: ProductWithQuantity[];
}

const CartProducts: React.FC<CartProductsProps> = ({ cartProducts }) => {
  const { totalQuantity } = useCartContext();

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
