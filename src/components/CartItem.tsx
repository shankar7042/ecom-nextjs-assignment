import Image from "next/image";

import { ProductWithQuantity } from "@/context/CartContext";
import CartActions from "./CartActions";

interface CartItemProps {
  product: ProductWithQuantity;
}

const CartItem: React.FC<CartItemProps> = ({ product }) => {
  return (
    <div className="grid grid-cols-[1fr_3fr_2fr_1fr_1fr] gap-2 items-center place-items-center">
      <div className="border p-2 aspect-square">
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
