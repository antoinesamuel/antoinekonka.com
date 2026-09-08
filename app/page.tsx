"use client";
import Image from "next/image";
import { useState } from "react";
import Background from "./Pages/Background";
import Header from "./_Components/Header";
import Loader from "./Pages/Loader";
//Import de nos icons
import BugsBunny from "@/public/Icons/BuckBunny.svg";
import CoolBob from "@/public/Icons/CoolBob.svg";
import CoolGuy from "@/public/Icons/CoolGuy.svg";
import DuffyDuck from "@/public/Icons/DuffyDuck.svg";
import GangBob from "@/public/Icons/GangBob.svg";
import Philippos from "@/public/Icons/Philippos.svg";
import philipposBrother from "@/public/Icons/philipposBrother.svg";
import Stewie from "@/public/Icons/Stewie.svg";
import TortueGeniale from "@/public/Icons/TortueGeniale.svg";
import HomePage from "./Pages/HomePage";
import ContactSection from "./Pages/ContactSection";
import ServicesSection from "./Pages/ServicesSection";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <div className="z-10">
      {/* Affichage du loader */}
      {isLoading && <Loader onComplete={() => setIsLoading(false)} />}
      {/* Contenu de la page principale */}
      <div className="w-full flex flex-col items-center justify-center z-10 relative">
        {/* Header positionné en haut par-dessus la scène */}
        <div className="">
          <Header logoSrc={Philippos} />
          <HomePage />
          <ServicesSection />
          <ContactSection />
        </div>
        <Background
          images={[
            BugsBunny,
            CoolBob,
            DuffyDuck,
            GangBob,
            Philippos,
            philipposBrother,
            Stewie,
            TortueGeniale,
            CoolGuy,
          ]}
        />
      </div>
    </div>
  );
}
