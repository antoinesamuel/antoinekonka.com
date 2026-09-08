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
  const [isVideoActive, setIsVideoActive] = useState(true);
  function handleVideoEnd() {
    setIsVideoActive(false);
    let SkipButton = document.getElementById("hero-login-btn");
    let HeroVideoContainer = document.getElementById("hero-video-container");
    let MainContent = document.getElementById("main-content");
    HeroVideoContainer?.classList.add("hidden");
    MainContent?.classList.remove("hidden");
    MainContent?.classList.add("flex");
  }
  return (
    <div className="z-10">
      {/* Affichage du loader */}
      {isLoading && <Loader onComplete={() => setIsLoading(false)} />}
      {/* Contenu de la page principale */}
      <div className="">
        <div
          className="w-screen h-screen absolute top-0 left-0 z-1 p-4"
          id="hero-video-container"
        >
          <video
            src="VideoDePresentation.mp4"
            className="h-full w-full inset-0 object-cover rounded-4xl"
            autoPlay
            muted
            loop
            controls
          ></video>
          <button
            className="bg-red-500 text-white rounded-full p-4 cursor-pointer absolute top-8 right-8 sm:top-12 sm:right-12"
            id="hero-login-btn"
            onClick={handleVideoEnd}
          >
            <span>Skip the Video</span>
          </button>
        </div>
        <div
          className="hidden w-full flex-col items-center justify-center z-10 relative"
          id="main-content"
        >
          <div className="">
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
      </div>
    </div>
  );
}
