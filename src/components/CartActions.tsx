import { ProductWithQuantity } from "@/context/CartContext";
import { useCartContext } from "@/hooks/useCartContext";
import { formatCurrency } from "@/utils/helpers";

interface CartActionsProps {
  product: ProductWithQuantity;
}

const CartActions: React.FC<CartActionsProps> = ({ product }) => {
  const { incrementCartItem, decrementCartItem, deleteFromCart } =
    useCartContext();

  const totalPrice = product.quantity * product.price;

  const handleIncrementQty = () => {
    incrementCartItem(product.id);
  };

  const handleDecrementQty = () => {
    decrementCartItem(product.id);
  };

  const handleDelete = () => {
    deleteFromCart(product.id);
  };

  return (
    <>
      <div className="flex items-center">
        <button
          onClick={handleDecrementQty}
          className="border px-3 py-2 bg-red-400 rounded-s-md"
        >
          -
        </button>
        <p className="px-4 py-2 border-t border-b">{product.quantity}</p>
        <button
          onClick={handleIncrementQty}
          className="border px-3 py-2 bg-green-500 rounded-e-md"
        >
          +
        </button>
      </div>
      <div>
        <p className="font-semibold">{formatCurrency(totalPrice)}</p>
      </div>
      <div>
        <button
          onClick={handleDelete}
          className="bg-red-600 px-4 py-2 rounded-md text-white text-sm"
        >
          Delete
        </button>
      </div>
    </>
  );
};

export default CartActions;
