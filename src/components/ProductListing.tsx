import { IProduct } from "@/types/product";
import SingleProduct from "./SingleProduct";

interface ProductListingProps {
  products: IProduct[];
}

const ProductListing: React.FC<ProductListingProps> = ({ products }) => {
  return (
    <ul className="grid grid-cols-4 gap-2">
      {products.map((product) => (
        <SingleProduct product={product} key={product.id} />
      ))}
    </ul>
  );
};

export default ProductListing;
