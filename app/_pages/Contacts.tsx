import Image from "next/image";
import Link from "next/link";
import "../globals.css";
import EmptySmiley from "@/public/illustration/EmptySmiley.svg";
import CoveredArrow from "@/public/illustration/coveredArrow.svg";
import ContactItem from "../_Components/ContactItem";

export default function Contacts() { 
  return (
    <div className="h-auto w-full p-5 bg-white flex flex-col justify-center items-center gap-6 font-Delight-Thin" id="contact">
      <div className="p-4 w-full text-center md:text-start">
        <h1 className="text-4xl">Contact Me</h1>
      </div>
      {/*Mail*/}
      <Link
        href=""
        className="flex w-full h-auto hover:cursor-pointer hover:bg-[whitesmoke] peer"
      >
        <div className="flex justify-between items-center w-full p-4">
          <div className="flex justify-center items-center gap-3">
            <span className="">
              <Image
                src={EmptySmiley}
                alt="black and white Empty smiley"
                height={35}
                width={35}
              />
            </span>
            <h1 className="">Send Me a Mail</h1>
          </div>
          <div className="flex justify-center items-center">
            <Image
              src={CoveredArrow}
              alt="black and white Empty smiley"
              height={35}
              width={35}
              className="peer-hover:hidden"
            />
          </div>
        </div>
      </Link>
      {/*Whatsapp*/}
      <Link
        href=""
        className="flex w-full h-auto hover:cursor-pointer hover:bg-[whitesmoke] peer"
      >
        <div className="flex justify-between items-center w-full p-4">
          <div className="flex justify-center items-center gap-3">
            <span className="">
              <Image
                src={EmptySmiley}
                alt="black and white Empty smiley"
                height={35}
                width={35}
              />
            </span>
            <h1 className="">Whatsapp</h1>
          </div>
          <div className="flex justify-center items-center">
            <Image
              src={CoveredArrow}
              alt="black and white Empty smiley"
              height={35}
              width={35}
              className="peer-hover:hidden"
            />
          </div>
        </div>
      </Link>
      {/*Linkedin*/}
      <Link
        href=""
        className="flex w-full h-auto hover:cursor-pointer hover:bg-[whitesmoke] peer"
      >
        <div className="flex justify-between items-center w-full p-4">
          <div className="flex justify-center items-center gap-3">
            <span className="">
              <Image
                src={EmptySmiley}
                alt="black and white Empty smiley"
                height={35}
                width={35}
              />
            </span>
            <h1 className="">Linkedin</h1>
          </div>
          <div className="flex justify-center items-center">
            <Image
              src={CoveredArrow}
              alt="black and white Empty smiley"
              height={35}
              width={35}
              className="peer-hover:hidden"
            />
          </div>
        </div>
      </Link>
      {/*Youtube*/}
      <Link
        href=""
        className="flex w-full h-auto hover:cursor-pointer hover:bg-[whitesmoke] peer"
      >
        <div className="flex justify-between items-center w-full p-4 text-center">
          <div className="flex justify-center items-center gap-3">
            <span className="">
              <Image
                src={EmptySmiley}
                alt="black and white Empty smiley"
                height={35}
                width={35}
              />
            </span>
            <h1 className="">Youtube</h1>
          </div>
          <div className="flex justify-center items-center">
            <Image
              src={CoveredArrow}
              alt="black and white Empty smiley"
              height={35}
              width={35}
              className="peer-hover:hidden"
            />
          </div>
        </div>
      </Link>
    </div>
  );
}
