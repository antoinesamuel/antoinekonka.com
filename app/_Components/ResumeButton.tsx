import React from "react";
import Image from "next/image";
import Magnet from "./Magnet"; // Assure-toi que le chemin d'import correspond à ton projet
import ResumeLogo from "@/public/Icons/MyResumeLink.svg";

export default function ResumeButton() {
  // Remplace ce lien par ton lien de partage public Google Drive
  const googleDriveUrl =
    "https://drive.google.com/file/d/TON_ID_GOOGLE_DRIVE/view?usp=sharing";

  return (
    <Magnet padding={40} magnetStrength={3}>
      {/* Le conteneur "group" permet à la bulle de réagir au survol du bouton */}
      <div className="relative inline-block group">
        {/* CHAT BUBBLE (Affiche "Hello World" au hover) */}
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 ease-out pointer-events-none whitespace-nowrap z-20">
          <div className="bg-black text-white text-[1rem] py-2 px-3 rounded-2xl shadow-xl relative flex items-center justify-center">
            Check My Resume
            {/* Petite flèche (triangle) en bas de la bulle */}
            <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-black" />
          </div>
        </div>

        {/* LIEN EN FORME DE BOUTON */}
        <div className="flex justify-center items-center h-16 w-16">
          <a
            href="https://drive.google.com/file/d/1-VVGP-x8hacfTY6RRuBwQLQ1O9PuY9i9/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={ResumeLogo}
              alt="KONKA Kokou Antoine Samuel"
              className="inline-block w-full h-full"
            />
          </a>
        </div>
      </div>
    </Magnet>
  );
}
