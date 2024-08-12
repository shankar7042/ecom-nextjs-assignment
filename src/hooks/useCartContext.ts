import { CartContext } from "@/context/CartContext";
import { useContext } from "react";

export const useCartContext = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error(
      "Please wrap the component with CartContextProvider to use useCartContext"
    );
  }
  return context;
};
