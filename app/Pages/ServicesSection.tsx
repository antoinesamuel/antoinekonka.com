"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import ServiceCard from "../_Components/ServiceCard";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, SplitText);
}

export function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const h2Ref = useRef<HTMLHeadingElement>(null);
  const h1Ref = useRef<HTMLHeadingElement>(null);

  const services = [
    {
      id: 1,
      title: "Web App",
      description:
        "Lorem ipsum dolor sit amet, consectetur. Tortor felis ipsum senectus etiam venenatis duis leo quam felis. Quisque ornare nunc duis volutpat. maecenas sollicitudin iaculis ut. Felis id fringilla ullamcorper interdum.",
    },
    {
      id: 2,
      title: "Graphic & UI/UX Design",
      description:
        "Lorem ipsum dolor sit amet, consectetur. Tortor felis ipsum senectus etiam venenatis duis leo quam felis. Quisque ornare nunc duis volutpat. maecenas sollicitudin iaculis ut. Felis id fringilla ullamcorper interdum.",
    },
    {
      id: 3,
      title: "Project Management",
      description:
        "Lorem ipsum dolor sit amet, consectetur. Tortor felis ipsum senectus etiam venenatis duis leo quam felis. Quisque ornare nunc duis volutpat. maecenas sollicitudin iaculis ut. Felis id fringilla ullamcorper interdum.",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Découpage du texte principal (H2)
      const splitH2 = new SplitText(h2Ref.current, { type: "words" });

      // 2. Animation du H2 liée au défilement (Effet Scrub)
      gsap.fromTo(
        splitH2.words,
        {
          opacity: 0.2, // État initial (Texte assombri)
          color: "#888888", // Gris foncé (optionnel, renforce l'effet)
        },
        {
          opacity: 1, // État final (Texte allumé)
          color: "#ffffff", // Devient totalement blanc
          stagger: 0.1, // Anime mot par mot
          scrollTrigger: {
            trigger: h2Ref.current,
            start: "top 80%", // Démarre quand le haut du H2 atteint 80% de l'écran
            end: "bottom 40%", // Fini quand le bas du H2 est à 40% de l'écran
            scrub: 0.5, // Le paramètre clé ! 0.5 ajoute une légère fluidité au lien avec le scroll
          },
        },
      );

      // 3. Animation indépendante pour le H1 et les Cartes (sans scrub)
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%", // Se déclenche un peu plus bas
          toggleActions: "play none none reverse",
        },
      });

      tl.from(h1Ref.current, {
        opacity: 0,
        x: -30,
        duration: 0.6,
        ease: "power2.out",
      }).from(
        ".gsap-service-card",
        {
          opacity: 0,
          y: 60,
          duration: 0.8,
          stagger: 0.15,
          ease: "back.out(1.2)",
        },
        "-=0.3",
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="p-24 md:p-12 min-h-screen w-full relative mx-auto bg-black font-nohemi-regular"
    >
      {/* Titre principal */}
      <h2
        ref={h2Ref}
        className="text-[4.5rem] tracking-tight max-w-4xl mb-16 leading-tight text-white"
      >
        My Job ? Understand, Analyse, design aesthetic, and acessibles solutions
        to my clients
      </h2>

      {/* Sous-titre */}
      <h1 ref={h1Ref} className="text-[2.5rem] uppercase text-white mb-8">
        Mes Services
      </h1>

      {/* Grille des 3 cartes */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((item) => {
          return (
            <div key={item.id} className="gsap-service-card">
              <ServiceCard
                id={item.id}
                title={item.title}
                description={item.description}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default ServicesSection;
