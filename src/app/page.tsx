import ProductListing from "@/components/ProductListing";
import { fetchProducts } from "@/utils/productUtils";

export default async function Home() {
  const products = await fetchProducts();

  return (
    <main className="w-[90%] md:w-[80%] mx-auto py-6">
      <ProductListing products={products} />
    </main>
  );
}
