import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="py-3 px-4 shadow-md">
      <div className="w-[80%] mx-auto flex justify-between items-center">
        <div className="flex justify-center items-center gap-6">
          <Link href="/">
            <Image
              src={"/logo.png"}
              alt="logo"
              width={40}
              height={40}
              className="rounded-md"
            />
          </Link>
          <Link href="/" className="font-semibold text-xl text-purple-600">
            Home
          </Link>
        </div>
        <Link
          href="/cart"
          className="px-4 py-2 bg-yellow-400 text-white rounded-md hover:bg-yellow-300 transition duration-300"
        >
          Cart
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
