"use client";
import Image from "next/image";
import { useState } from "react";
import Loader from "./_pages/Loader";
import HomePage from "./_pages/HomePage";
import Header from "./_components/Header";
import Philippos from "@/public/Icons/Philippos.svg";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <>
      <main className="relative min-h-screen">
        {/* Affichage du loader */}
        {isLoading && <Loader onComplete={() => setIsLoading(false)} />}
        {/* Contenu de la page principale */}
        <div className="w-full flex flex-col items-center justify-center relative z-10 back">
          {/* Header positionné en haut par-dessus la scène */}
          <Header logoSrc={Philippos} />
          <HomePage />
        </div>
      </main>
    </>
  );
}
