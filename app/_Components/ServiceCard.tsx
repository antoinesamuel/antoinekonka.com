import { Dot } from "./Dots";

interface ServiceCardProps {
  title: string;
  description: string;
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
        <Dot />
        <Dot />
      </div>
      {/*Content Grid */}
      <div className="col-span-7 h-full w-full flex flex-col justify-center items-start overflow-hidden p-4 text-start">
        <h1 className="text-[3.80rem]">{title}</h1>
        <p className="text-[1.5rem]">{description}</p>
      </div>
      <div className="block p-6 absolute top-4 right-4 bg-amber-50 rounded-full">
        {id}
      </div>
    </div>
  );
}

export default ServiceCard;
