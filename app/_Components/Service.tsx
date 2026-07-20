"use client";
// Option 1 : Définir une interface pour vos Props
interface ServiceProps {
  serviceName: string;
  serviceDescription: string;
}

export default function Service({
  serviceName,
  serviceDescription,
}: ServiceProps) {
  return (
    <div className="w-[350px] h-[280px] p-6 serviceItem bg-white flex flex-col justify-start items-end text-end gap-6 font-Delight-Thin">
      <h1 className="font-bold">{serviceName}</h1>
      <p className="text-center">{serviceDescription}</p>
    </div>
  );
}
