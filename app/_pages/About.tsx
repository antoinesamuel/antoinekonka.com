import Image from "next/image";
import TraitAfricain from "@/public/illustration/TraitAfricain.svg";
import Antoine from "@/public/images/Antoine.svg";
import Flag from "@/public/illustration/flagTogo.svg";
export default function About() {
  return (
    <div className="overflow-hidden h-svh w-screen flex flex-col justify-center items-center px-4 bg-white font-DelightBold relative">
      <div className="p-4 absolute top-0 left-0 w-full flex justify-center items-center z-10">
        <Image
          src={TraitAfricain}
          alt="Trait Africain"
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
      </div>
      <div className="h-full w-full flex justify-center items-center text-center text-3xl md:text-5xl md:px-16 font-Delight-Thin">
        <h1 className="">
          <span>
            Hi i'm antoine Samuel a
            <span className="text-rotate">
              <span>
                <span className="bg-teal-400 text-teal-800 px-2 text-3xl  font-Delight-Thin">
                  {" "}
                  junior dev
                </span>
                <span className="bg-red-400 text-red-800 px-2 text-3xl  font-Delight-Thin">
                  {" "}
                  Designer
                </span>
              </span>
            </span>
          </span>
          <span>
            based in
            <span className="inline-block">
              <Image src={Flag} alt="" height={35} width={35} className="" />
            </span>
            <br />
            adipisicing elit. Possimus quaerat corrupti iste ducimus voluptatum,
            vitae praesentium ipsa necessitatibus nisi debitis, aliquam
            blanditiis? Inventore, asperiores ex. Quod expedita quo sint
            consectetur?
          </span>
        </h1>
      </div>
      <div className="h-screen w-screen flex-col justify-center items-center p-4 hidden">
        <div className="h-1/2 w-full flex justify-center items-center">
          <div className="hover-3d p-0 rounded-2xl">
            {/* content */}
            <figure className="max-w-80 rounded-3xl w-fit inset-0">
              <Image src={Antoine} alt="photo de KONKA Kokou Antoine Samuel" />
            </figure>
            {/* 8 empty divs needed for the 3D effect */}
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}
