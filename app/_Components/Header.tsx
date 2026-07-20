import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/illustration/logo.svg";
export function Header() {
  return (
    <div className="top-4 p-4 rounded-full bg-[#292626] text-white font-Delight fixed md:place-self-end place-self-center m-4">
      <div className="relative flex justify-end items-center gap-4">
        <Link
          href="/"
          className="hover:text-green-500 text-2xl text-white absolute top-0 left-0 flex justify-center items-center gap-1 hidden"
        >
          <span className="">
            <Image src={Logo} alt="Logo" width={248} height={65} />
          </span>s
          <span className="text-red-600">.</span>
        </Link>
        <nav className="w-full grid grid-cols-3 gap-2 justify-center items-center">
          <Link href="/About" className="hover:text-green-500">
            About
          </Link>
          <Link href="/projects" className="hover:text-green-500">
            Projects
          </Link>
          <Link href="#contact" className="hover:text-green-500">
            Contacts
          </Link>
        </nav>
      </div>
    </div>
  );
}
