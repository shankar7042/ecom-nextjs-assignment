"use client";

const AddToCartBtn = () => {
  const handleClick = () => {
    console.log("Add to cart");
  };

  return (
    <button
      onClick={handleClick}
      className="w-full py-2 bg-yellow-400 font-semibold mt-3 rounded-md transition duration-300 hover:bg-yellow-300"
    >
      Add to Cart
    </button>
  );
};

export default AddToCartBtn;
