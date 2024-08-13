import { IProduct } from "@/types/product";
import Image from "next/image";
import AddToCartBtn from "./AddToCartBtn";
import { formatCurrency } from "@/utils/helpers";

interface SingleProductProps {
  product: IProduct;
}

const SingleProduct: React.FC<SingleProductProps> = ({ product }) => {
  return (
    <li className="border rounded-md p-4">
      <div className="flex flex-col justify-between">
        <div>
          <Image
            src={product.thumbnail}
            alt={product.title}
            width={200}
            height={200}
            className="hover:scale-105 transition duration-300"
          />
          <h4 className="line-clamp-1 font-semibold">{product.title}</h4>
          <p className="line-clamp-2 text-sm text-gray-400">
            {product.description}
          </p>
          <p>
            Price:{" "}
            <span className="font-semibold">
              {formatCurrency(product.price)}
            </span>
          </p>
        </div>
        <AddToCartBtn product={product} />
      </div>
    </li>
  );
};

export default SingleProduct;
