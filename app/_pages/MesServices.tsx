import EmptySmiley from "@/public/illustration/EmptySmiley.svg";
import CoveredArrow from "@/public/illustration/coveredArrow.svg";
import ContactItem from "../_Components/ContactItem";
import Image from "next/image";
import Service from "../_Components/Service";
export default function MesServices() {
  return (
    <div className="h-auto md:h-svh w-full p-5 bg-white font-Delight-Thin flex flex-col md:flex-row justify-center md:justify-center items-center gap-6 relative">
      <Service
        serviceName="Web Development"
        serviceDescription="I offer web development services using modern technologies such as React, Spring Boot. I can create responsive and user-friendly websites tailored to your needs."
      />
      <Service
        serviceName="UI/UX Design"
        serviceDescription="I provide UI/UX design services to create visually appealing and intuitive interfaces for your applications. I focus on user-centered design principles to enhance user experience."
      />
      <Service
        serviceName="Mobile App Development"
        serviceDescription="I develop mobile applications for Android platforms using Java and Kotlin. I can help you bring your app ideas to life with seamless functionality."
      />
      <div className="w-45 h-12 rounded-3xl border-[whitesmoke] bg-[#f5f5f5] absolute top-5 left-2 flex justify-center items-center font-DelightBold text-lg">
        Mes Services
      </div>
    </div>
  );
}
