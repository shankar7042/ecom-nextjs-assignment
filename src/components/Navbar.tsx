import Image from "next/image";
import Link from "next/link";
import NavCartBtn from "./NavCartBtn";

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
        <NavCartBtn />
      </div>
    </nav>
  );
};

export default Navbar;
