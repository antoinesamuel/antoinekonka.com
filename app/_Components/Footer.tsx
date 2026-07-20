import Image from "next/image";
import TraitAfricain from "@/public/illustration/TraitAfricain.svg";
export function Footer() {
  return (
    <div className="overflow-hidden h-[35vh] w-screen flex flex-col justify-center items-center px-4 bg-black font-DelightBold relative">
      <div className="p-4 absolute top-0 left-0 w-full flex justify-center items-center z-10">
        <Image
          src={TraitAfricain}
          alt="Trait Africain"
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <p className="text-center">
          &copy; {new Date().getFullYear()} Your Company Name. All rights
          reserved.
        </p>
      </div>
    </div>
  );
}
