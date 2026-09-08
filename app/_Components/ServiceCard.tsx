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
    <div className={`h-lg serviceCard grid-cols-8 relative`}>
      {/*Dots Grid */}
      <div className="hidden col-span-1 h-full w-full md:flex flex-col justify-around items-center border-r border-red-500">
        <Dot />
        <Dot />
        <Dot />
      </div>
      {/*Content Grid */}
      <div className="col-span-9 md:col-span-7 h-full w-full flex flex-col gap-4 justify-center items-start overflow-hidden p-4 text-start">
        <div className="w-full h-1/3 flex justify-center items-end text-blue-400">
          <h1 className="text-[5rem] ">{id}.</h1>
        </div>
        <div className="w-full h-2/3 flex flex-col justify-start items-center text-center text-black">
          <h1 className="text-[2.75rem] md:text-[3.20rem] text-black font-Delight">
            {title}
          </h1>
          <p className="text-[1.5rem]  text-black">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default ServiceCard;
