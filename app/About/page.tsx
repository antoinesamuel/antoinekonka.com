"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import EsgisLogo from "@/public/Icons/logo-red.png";
import image from "@/public/image.jpeg";
import Background from "../Pages/Background";
import Magnet from "../_Components/Magnet";
import ResumeButton from "../_Components/ResumeButton";
//
//Import de nos icons
import BugsBunny from "@/public/Icons/BuckBunny.svg";
import CoolBob from "@/public/Icons/CoolBob.svg";
import CoolGuy from "@/public/Icons/CoolGuy.svg";
import DuffyDuck from "@/public/Icons/DuffyDuck.svg";
import GangBob from "@/public/Icons/GangBob.svg";
import Philippos from "@/public/Icons/philipposBrother.svg";
import philipposBrother from "@/public/Icons/philipposBrother.svg";
import Stewie from "@/public/Icons/Stewie.svg";
import TortueGeniale from "@/public/Icons/TortueGeniale.svg";

export default function AboutPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animation d'entrée fluide pour la page
    const ctx = gsap.context(() => {
      gsap.from(".animate-in", {
        y: 40,
        opacity: 0,
        duration: 1.2,
        stagger: 0.15,
        ease: "power4.out",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <main
      ref={containerRef}
      // Remplacement de overflow-hidden par overflow-x-hidden pour permettre le scroll sticky
      className="min-h-screen text-black font-nohemi-regular z-10 relative flex flex-col justify-between overflow-x-hidden"
    >
      {/** 
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
      */}
      {/* Contenu principal */}
      <div className="px-6 md:px-12 pt-12">
        <div className="w-full flex justify-between items-center">
          {/* Bouton Retour */}
          <div className="animate-in mb-12 md:mb-24">
            <Link
              href="/"
              className="inline-flex items-center gap-2 p-4 px-6 bg-black text-white hover:bg-gray-800 transition-colors rounded-full text-[1rem] font-medium"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
              Return
            </Link>
          </div>
          <ResumeButton />
        </div>
        {/* Grille Texte & Image */}
        <div className="grid grid-cols-1 gap-12 lg:gap-24 items-start w-full mx-auto relative">
          {/* COLONNE TEXTE : Formations & Education */}
          {/* order-2 sur mobile (en bas), md:order-1 sur PC (à gauche) */}
          <div className="animate-in space-y-16 md:space-y-20 w-full">
            {/* Section Formations */}
            <div className="w-full flex flex-col">
              <h3 className="text-[3rem] font-black mb-6 md:mb-8 border-b-2 border-black pb-4 tracking-tight">
                Formations
              </h3>
              <div className="flex flex-col md:flex-row gap-2 md:gap-16 pt-4 mb-5">
                <div className="md:w-1/3 shrink-0">
                  <span className="text-[1.4rem] md:text-[1.8rem] font-extrabold block">
                    2024 à Aujourd&apos;hui
                  </span>
                </div>
                {/**ESGIS */}
                <div className="md:w-2/3 space-y-3">
                  <h4 className="text-[1.4rem] md:text-[1.8rem] font-bold">
                    Licence Professionnelle en Génie Logiciel
                  </h4>
                  <p className=" text-[1.2rem] md:text-[1.5rem] leading-relaxed text-black">
                    en cours à l&apos;
                    <span className="inline-block">
                      <a
                        href="https://www.esgis.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Image
                          src={EsgisLogo}
                          alt="Logo de l'ESGIS"
                          width={60}
                          height={35}
                          className="inline-block w-auto h-auto"
                        />
                      </a>
                    </span>
                    . Étude approfondie de l&apos;architecture logicielle, de la
                    sécurité informatique, de la modélisation de données
                    complexes et du développement back-end avec Java (Spring
                    Boot) et Python (Django).
                  </p>
                </div>
              </div>
              {/**Joe Kakone */}
              <div className="flex flex-col md:flex-row gap-2 md:gap-16 pt-4 mb-5">
                <div className="md:w-1/3 shrink-0">
                  <span className="text-[1.4rem] md:text-[1.8rem] font-extrabold block">
                    AOUT 2024 à Aujourd&apos;hui
                  </span>
                </div>
                <div className="">
                  <h4 className="text-[1.4rem] md:text-[1.8rem] font-bold">
                    Bootcamp en Analyse de donnée chez{" "}
                    <span className="inline-block">
                      <a
                        href="https://josephkonkathedataguy.com/#training"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-red-500"
                      >
                        @joeKakone
                      </a>
                    </span>
                  </h4>
                  <p className=" text-[1.2rem] md:text-[1.5rem] leading-relaxed text-black">
                    {""} Collection et transformation de données en insights
                    pour la prise de decisions stratégiques
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Section Education */}
          <div className="w-full">
            <h3 className="text-[3rem] font-black mb-6 md:mb-8 border-b-2 border-black pb-4 tracking-tight">
              Éducation
            </h3>
            <div className="flex flex-col md:flex-row gap-2 md:gap-16 pt-4">
              <div className="md:w-1/3 shrink-0">
                <span className="text-[1.4rem] md:text-[1.8rem] font-extrabold block">
                  2021
                </span>
              </div>
              <div className="md:w-2/3 space-y-3">
                <h4 className="text-[1.4rem] md:text-[1.8rem] font-bold">
                  BAC 2 Série D au LY-AGO (Lycée Agoè-Nyivé)
                </h4>
              </div>
            </div>
          </div>
        </div>

        {/* COLONNE IMAGE */}
        {/* order-1 sur mobile (en haut), md:order-2 sur PC (à droite) */}
        {/* md:sticky md:top-32 permet à l'image de suivre le scroll sur PC. h-max est requis pour le sticky dans une grille */}
        <div className="animate-in w-full hidden h-full flex justify-center md:justify-end md:sticky md:top-32 self-start order-1 md:order-2">
          <div className="relative w-full aspect-square rounded-sm overflow-hidden bg-gray-200">
            <Image
              src={image}
              alt="Portrait d'antoine KONKA"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 400px"
            />
          </div>
        </div>
      </div>

      {/* Typographie Géante en bas */}
      <div className="animate-in w-full flex justify-center items-end px-4 md:px-6 pb-6 mt-16 md:mt-20">
        <h1 className="text-[13vw] leading-[0.8] tracking-tighter text-black whitespace-nowrap">
          antoine Samuel{" "}
          <span className="text-[5vw] md:text-[4vw] align-top">©</span>
        </h1>
      </div>
    </main>
  );
}
