import Image from "next/image";
import Link from "next/link";
import NavCartBtn from "./NavCartBtn";

const Navbar = () => {
  return (
    <nav className="py-3 px-2 sm:px-4 shadow-md sticky top-0 z-10 bg-zinc-50">
      <div className="w-[90%] md:w-[80%] mx-auto flex justify-between items-center">
        <div className="flex justify-center items-center gap-2 sm:gap-6">
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
        <NavCartBtn />
      </div>
    </nav>
  );
};

export default Navbar;
