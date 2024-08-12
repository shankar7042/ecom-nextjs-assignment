"use client";

import { useCartContext } from "@/hooks/useCartContext";
import Link from "next/link";

const NavCartBtn = () => {
  const { totalQuantity } = useCartContext();

  return (
    <Link
      href="/cart"
      className="px-4 py-2 bg-yellow-400 text-white rounded-md hover:bg-yellow-300 transition duration-300"
    >
      Cart{totalQuantity > 0 && <span>({totalQuantity})</span>}
    </Link>
  );
};

export default NavCartBtn;
