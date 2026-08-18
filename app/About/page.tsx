"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";

export default function AboutPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Petite animation d'entrée fluide pour la page
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
      className="min-h-screen bg-[#F5F5F5] text-black font-nohemi-regular relative flex flex-col justify-between overflow-hidden"
    >
      {/* Contenu principal */}
      <div className="px-6 md:px-12 pt-12">
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

        {/* Grille Texte & Image */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-center max-w-7xl mx-auto">
          {/* Colonne Texte */}
          <div className="animate-in flex flex-col justify-center max-w-md">
            <h2 className="text-[3rem] mb-6">Salut 👋</h2>
            <p className="text-[#666666] leading-relaxed text-[1.25rem]">
              Lorem ipsum dolor sit amet consectetur. Nunc et consectetur diam
              pulvinar {/* Le soulignement rouge ondulé pour esgis */}
              <span className="text-black underline decoration-red-500 decoration-wavy decoration-2 underline-offset-4">
                esgis
              </span>
              . At tincidunt nulla placerat felis a purus. Lobortis enim
              facilisis morbi et sagittis sed non turpis. Nec congue id turpis
              elementum arcu.
            </p>
          </div>

          {/* Colonne Image */}
          <div className="animate-in w-full flex justify-end">
            <div className="relative w-full max-w-[400px] aspect-square rounded-sm overflow-hidden bg-gray-200">
              {/* Remplace le src par le chemin de ta vraie image ou laisse le Patrick Star */}
              <Image
                src="/patrick-star.jpg"
                alt="Portrait"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 400px"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Typographie Géante en bas */}
      <div className="animate-in w-full flex justify-center items-end px-6 pb-6 mt-20">
        <h1 className="text-[13vw] leading-[0.8] tracking-tighter text-black whitespace-nowrap">
          antoine Samuel <span className="text-[4vw] align-top">©</span>
        </h1>
      </div>
    </main>
  );
}
