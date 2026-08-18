"use client";

import { useEffect } from "react";
import gsap from "gsap";

export default function Template({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Animation d'entrée : On passe de transparent (0) à visible (1)
    gsap.fromTo(
      "#page-transition-container",
      { opacity: 0 },
      { opacity: 1, duration: 0.6, ease: "power2.inOut" },
    );
  }, []);

  return (
    // L'ID est important pour cibler le conteneur avec GSAP
    <div id="page-transition-container" className="opacity-0">
      {children}
    </div>
  );
}
