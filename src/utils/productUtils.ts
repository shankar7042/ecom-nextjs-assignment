import { PRODUCT_URL } from "@/constants";
import { IProduct } from "@/types/product";

export async function fetchProducts(): Promise<IProduct[]> {
  const res = await fetch(PRODUCT_URL);
  const data = await res.json();
  return data.products;
}

export async function fetchProductById(id: number): Promise<IProduct> {
  const res = await fetch(`https://dummyjson.com/products/${id}`);
  const product = await res.json();
  return product;
}
