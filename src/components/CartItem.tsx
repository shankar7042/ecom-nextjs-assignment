import Image from "next/image";

import { ProductWithQuantity } from "@/context/CartContext";
import CartActions from "./CartActions";

interface CartItemProps {
  product: ProductWithQuantity;
}

const CartItem: React.FC<CartItemProps> = ({ product }) => {
  return (
    <div className="flex items-center gap-4">
      <div className="border p-2 w-[200px] aspect-square">
        <Image
          src={product.thumbnail}
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
      <CartActions product={product} />
    </div>
  );
};

export default CartItem;
