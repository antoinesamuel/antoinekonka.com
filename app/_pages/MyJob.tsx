import "@/app/globals.css";
import Image from "next/image";
import Question from "@/public/illustration/Questions.svg";
import BarreDeUn from "@/public/illustration/BarreDeUn.svg";
export function MyJob() {
  return (
    <div className="h-[80vh] md:h-[120vh] w-full bg-white">
      <div className="h-[45%] w-full p-6 rounded-t-full flex justify-center items-center bg-black">
        <Image
          src={Question}
          alt="barre horizontale"
          className=""
          width={55}
          height={55}
        />
      </div>
      <div className="bg-black h-[52%] w-full p-8">
        <h1 className="text-center text-3xl md:text-6xl font-Delight-Medium text-white">
          My Job <span className="text-yellow-400">?</span> <br />{" "}
          <span className="text-red-600">Understand</span>,{" "}
          <span className="text-green-600">Analyse</span> and design aesthetic,
          and acessibles solutions to my clients
        </h1>
      </div>
      <div className="h-[3%] w-full relative bottom-0">
        <Image
          src={BarreDeUn}
          alt="barre horizontale"
          className="absolute inset-0 object-cover h-full w-full"
        />
      </div>
    </div>
  );
}
