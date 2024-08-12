import ProductListing from "@/components/ProductListing";
import { IProduct } from "@/types/product";

const LIMIT_PRODUCTS = 15;
const PRODUCT_URL = `https://dummyjson.com/products?limit=${LIMIT_PRODUCTS}`;

export default async function Home() {
  const res = await fetch(PRODUCT_URL);
  const data = await res.json();

  return (
    <main className="w-[80%] mx-auto py-6">
      <ProductListing products={data.products} />
    </main>
  );
}
