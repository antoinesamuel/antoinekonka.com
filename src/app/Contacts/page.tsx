"use client";
import Image from "next/image";
import { Mail, ArrowUp } from "lucide-react";

interface ContactSectionProps {
  avatarSrc?: string | { src: string };
}

export default function ContactSection({ avatarSrc }: ContactSectionProps) {
  const resolvedAvatarSrc =
    typeof avatarSrc === "string" ? avatarSrc : avatarSrc?.src;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section
      id="contacts"
      className="w-full min-h-screen bg-black text-white py-24 px-6 md:px-16 flex flex-col justify-between relative overflow-hidden"
    >
      {/* Top Row: Avatar, Bouton Scroll-Top, Réseaux Sociaux */}
      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row justify-between items-center gap-6 mb-16">
        {/* Avatar en haut à gauche */}
        <div className="w-14 h-14 rounded-full overflow-hidden border border-white/20 shadow-lg bg-white/5 backdrop-blur-md">
          {resolvedAvatarSrc ? (
            <Image
              src={resolvedAvatarSrc}
              alt="Avatar"
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-white/10" />
          )}
        </div>

        {/* Actions : Bouton de remontée + Réseaux sociaux */}
        <div className="flex items-center gap-4">
          {/* Bouton pour remonter en haut */}
          <button
            onClick={scrollToTop}
            className="w-12 h-12 rounded-full border border-white/20 bg-white/5 backdrop-blur-md flex items-center justify-center hover:bg-white/10 transition-all text-white shadow-lg active:scale-95"
            aria-label="Retour en haut"
          >
            <ArrowUp size={20} />
          </button>

          {/* Pillule des réseaux sociaux (Gmail, LinkedIn, GitHub) */}
          <div className="flex items-center gap-3 px-6 py-3 rounded-full border border-white/15 bg-white/5 backdrop-blur-xl shadow-2xl">
            <a
              href="mailto:contact@antoinekonka.com"
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors text-white"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors text-white"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors text-white"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* Bannière / Carte de localisation style Figma */}
      <div className="max-w-7xl mx-auto w-full my-auto rounded-3xl overflow-hidden border border-white/15 relative h-72 md:h-96 shadow-2xl bg-neutral-900 flex items-center justify-center">
        {/* Tu peux remplacer cette div par un composant carte ou iframe si besoin */}
        <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px]" />
        <div className="text-center px-4 z-10">
          <p className="text-white/60 text-sm uppercase tracking-widest mb-2 font-medium">
            Localisation
          </p>
          <h3 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
            Lomé, Togo
          </h3>
        </div>
      </div>

      {/* Grande Typographie en bas de page */}
      <div className="max-w-7xl mx-auto w-full pt-16 text-center">
        <h2 className="text-4xl sm:text-6xl md:text-8xl font-black tracking-tight text-white/90 uppercase">
          antoine Samuel <span className="text-white/40 font-normal">©</span>
        </h2>
      </div>
    </section>
  );
}
