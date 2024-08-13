import { ProductWithQuantity } from "@/context/CartContext";
import { useMemo } from "react";

interface CartSummaryProps {
  cartProducts: ProductWithQuantity[];
}

const CartSummary: React.FC<CartSummaryProps> = ({ cartProducts }) => {
  const totalPrice = useMemo(() => {
    return cartProducts.reduce(
      (acc, curr) => acc + curr.price * curr.quantity,
      0
    );
  }, [cartProducts]);
  return (
    <div className="border p-4">
      <div className="flex justify-between items-center">
        <p className="font-bold">SubTotal: </p>
        <p className="font-semibold">${totalPrice.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default CartSummary;
