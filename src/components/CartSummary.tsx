import { DELIVERY_CHARGES, DISCOUNT_PERCENT, TAX_PERCENT } from "@/constants";
import { ProductWithQuantity } from "@/context/CartContext";
import { useCartContext } from "@/hooks/useCartContext";
import { formatCurrency } from "@/utils/helpers";

interface CartSummaryProps {
  cartProducts: ProductWithQuantity[];
}

const CartSummary: React.FC<CartSummaryProps> = ({ cartProducts }) => {
  const { totalQuantity } = useCartContext();
  const subTotal = cartProducts.reduce(
    (acc, curr) => acc + curr.price * curr.quantity,
    0
  );
  const taxAmt = subTotal * (TAX_PERCENT / 100);
  const deliveryCharges = totalQuantity === 0 ? 0 : DELIVERY_CHARGES;
  const discount = subTotal * (DISCOUNT_PERCENT / 100);
  const total = subTotal + taxAmt + deliveryCharges - discount;

  return (
    <div className="border p-4 flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <p className="font-bold">SubTotal: </p>
        <p className="font-semibold">{formatCurrency(subTotal)}</p>
      </div>
      <div className="flex justify-between items-center">
        <p className="font-bold">
          Tax:{" "}
          <span className="text-sm text-gray-400 ml-2">+{TAX_PERCENT}%</span>
        </p>
        <p className="font-semibold">{formatCurrency(taxAmt)}</p>
      </div>
      <div className="flex justify-between items-center">
        <p className="font-bold">Delivery Charges: </p>
        <p className="font-semibold">{formatCurrency(deliveryCharges)}</p>
      </div>
      <div className="flex justify-between items-center">
        <p className="font-bold">
          Discount:{" "}
          <span className="text-sm text-gray-400 ml-2">
            -{DISCOUNT_PERCENT}%
          </span>
        </p>
        <p className="font-semibold">{formatCurrency(discount)}</p>
      </div>
      <div className="flex justify-between items-center border-t border-black py-4">
        <p className="font-bold">Total: </p>
        <p className="font-semibold">{formatCurrency(total)}</p>
      </div>
    </div>
  );
};

export default CartSummary;
