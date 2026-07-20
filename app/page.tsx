import "./globals.css";
import bgImage from "@/public/images/backgroundImage.svg";
import smiley from "@/public/illustration/smiley.svg";
import Profil from "@/public/illustration/Profil.svg";
import About from "./_pages/About";
import { MyJob } from "./_pages/MyJob";
import MesServices from "./_pages/MesServices";
import Contacts from "./_pages/Contacts";

export default function Home() {
  return (
    <div className="overflow-hidden h-auto w-screen flex flex-col justify-center items-center bg-black font-DelightBold">
      <div className="h-screen w-screen flex flex-col justify-center items-center p-4 heroSection">
        <div className="h-4/5 md:h-2/5 w-full"></div>
        <div className="h-1/5 md:h-3/5 w-full flex flex-col justify-center items-start md:justify-end gap-y-0 text-5xl md:text-9xl text-white">
          <h1 className=" text-yellow-500">Junior</h1>
          <h1 className="">Dev Based in</h1>
          <p className="text-sm">
            Lome,TOGO <span className="">🇹🇬</span>
          </p>
        </div>
      </div>
      <About />
      <MyJob />
      <MesServices />
      <Contacts />
    </div>
  );
}
