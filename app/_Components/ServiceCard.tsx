import { Dot } from "./Dots";
import React, { ReactNode } from "react";

interface ServiceCardProps {
  title: string;
  description: ReactNode;
  className?: string;
  id: number;
}

export function ServiceCard({
  title,
  description,
  className = "",
  id,
}: ServiceCardProps) {
  return (
    <div className={`serviceCard grid-cols-8 relative`}>
      {/*Dots Grid */}
      <div className="col-span-1 h-full w-full flex flex-col justify-around items-center border-r border-red-500">
        <Dot />
        <Dot />
        <Dot />
      </div>
      {/*Content Grid */}
      <div className="col-span-7 h-full w-full flex flex-col gap-4 justify-center items-start overflow-hidden p-4 text-start">
        <div className="w-full h-1/3 flex justify-center items-end text-blue-400">
          <h1 className="text-5xl ">{id}</h1>
        </div>
        <div className="w-full h-2/3 flex flex-col justify-start items-center text-center text-black">
          <h1 className="text-[3rem] md:text-[3.80rem] text-black">{title}</h1>
          <p className="text-[1.5rem] font-sans text-black">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default ServiceCard;
