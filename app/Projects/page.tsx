import Link from "next/link";
import { ProjectCard } from "../_Components/ProjetCard";
import { WebProjects } from "@/data/data";
import Background from "../Pages/Background";
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
export default function Projects() {
  return (
    <div className="min-h-screen flex flex-col justify-center gap-5 items-center p-12 z-10 relative">
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
      {/* Bouton Retour */}
      <div className="animate-in mb-24">
        <Link
          href="/"
          className="inline-flex items-center gap-2 p-4 px-6 bg-black text-white transition-colors rounded-full text-[1rem] font-medium"
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
      <div className="w-full grid grid-cols-1 md:grid-cols-3 place-items-center gap-50 md:gap-30">
        {WebProjects.map((projet) => {
          return (
            <ProjectCard
              key={projet.id}
              logosrc={projet.logosrc}
              name={projet.name}
              description={projet.description}
              GithubLink={projet.GithubLink}
              RealLink={projet.RealLink}
              FigmaTemplateLink={projet.FigmaTemplateLink}
            />
          );
        })}
      </div>
    </div>
  );
}
