"use client";
import Image from "next/image";
import { Mail, ArrowUp } from "lucide-react";
import Philippos from "@/public/Icons/Philippos.svg";
import Dock from "../_Components/Dock";

interface ContactSectionProps {
  avatarSrc?: string | { src: string };
}

export default function ContactSection({ avatarSrc }: ContactSectionProps) {
  const resolvedAvatarSrc =
    typeof avatarSrc === "string" ? avatarSrc : avatarSrc?.src;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const items = [
    {
      icon: <Mail size={18} />,
      label: "Mail",
      onClick: () => alert("Home!"),
    },
    {
      icon: (
        <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      ),
      label: "LinkedIn",
      onClick: () => alert("Archive!"),
    },
    {
      icon: (
        <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
        </svg>
      ),
      label: "Github",
      onClick: () => alert("Profile!"),
    },
  ];
  return (
    <section
      id="Contacts"
      className="w-full p-8 text-black bg-white py-24 px-6 md:px-16 flex flex-col justify-between relative overflow-hidden"
    >
      {/* Top Row: Avatar, Bouton Scroll-Top, Réseaux Sociaux */}
      <div className="w-full grid grid-cols-2 gap-6 place-items-center mb-16 relative z-20">
        {/* Avatar en haut à gauche */}
        <div className="w-full h-full flex justify-start">
          <div className="w-20 h-20 rounded-full overflow-hidden flex place-self-start">
            {Philippos ? (
              <Image
                src={Philippos}
                alt="Avatar"
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-white/10" />
            )}
          </div>
        </div>
        {/* Actions : Bouton de remontée + Réseaux sociaux */}

        {/* Pillule des réseaux sociaux (Gmail, LinkedIn, GitHub) */}
        <div className="w-full flex justify-end">
          <div className="grid grid-cols-3 gap-2 md:gap-3 px-6 py-3 rounded-full">
            <a
              href="mailto:contact@konkakokou@outlook.com"
              className="w-18 h-18 rounded-full flex items-center justify-center bg-[whitesmoke] transition-colors hover:cursor-pointer"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/konka-kokou-antoine-samuel/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-18 h-18 rounded-full flex items-center justify-center bg-[whitesmoke] transition-colors"
              aria-label="LinkedIn"
            >
              <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            <a
              href="https://github.com/antoinesamuel"
              target="_blank"
              rel="noopener noreferrer"
              className="w-18 h-18 rounded-full flex items-center justify-center bg-[whitesmoke] transition-colors"
              aria-label="GitHub"
            >
              <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      {/* Bannière / Carte de localisation */}
      <div className="w-full mx-auto my-auto rounded-3xl overflow-hidden relative h-120 flex items-center justify-center">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1983.154125807457!2d1.2046603065142332!3d6.223024453218158!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sfr!2stg!4v1786747031602!5m2!1sfr!2stg"
          allowFullScreen
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
          className="border-none h-full w-full"
        ></iframe>
      </div>

      {/* Grande Typographie en bas de page */}
      {/* Typographie Géante en bas */}
      <div className="animate-in w-full flex justify-center items-end px-6 pb-6 mt-20">
        <h1 className="text-[13vw] leading-[0.8] tracking-tighter text-black whitespace-nowrap">
          antoine Samuel <span className="text-[4vw] align-top">©</span>
        </h1>
      </div>
      {/* Bouton pour remonter en haut */}
      <button
        type="button"
        onClick={scrollToTop}
        className="w-12 h-12 rounded-full border border-black backdrop-blur-md flex items-center justify-center hover:bg-white/10 transition-all text-white active:scale-95 mx-auto z-100"
        aria-label="Retour en haut"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="#000000"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="rotate-90 h-10 w-10"
        >
          <path d="M19 12H5M12 19l-7-7 7-7" />
        </svg>
      </button>
    </section>
  );
}
