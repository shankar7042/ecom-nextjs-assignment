import CartProducts from "@/components/CartProducts";
import CartSummary from "@/components/CartSummary";

export default function Cart() {
  return (
    <div className="grid grid-cols-[3fr_1fr] w-[80%] mx-auto my-10 gap-4">
      <CartProducts />
      <CartSummary />
    </div>
  );
}
