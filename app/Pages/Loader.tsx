"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

interface LoaderProps {
  onComplete?: () => void;
}

export default function Loader({ onComplete }: LoaderProps) {
  const loaderRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const counterObj = useRef({ value: 1 });

  const [formattedCount, setFormattedCount] = useState("01%");
  const [shouldRender, setShouldRender] = useState<boolean | null>(null);

  // 1. Vérification de la session (décalée hors du cycle synchrone)
  useEffect(() => {
    const hasLoaded = sessionStorage.getItem("hasLoaded");

    const timer = requestAnimationFrame(() => {
      setShouldRender(!hasLoaded);
    });

    return () => cancelAnimationFrame(timer);
  }, []);

  // 2. Animation GSAP
  useEffect(() => {
    if (!shouldRender) return;

    document.body.style.overflow = "hidden";

    const tl = gsap.timeline({
      onComplete: () => {
        document.body.style.overflow = "auto";
        sessionStorage.setItem("hasLoaded", "true");
        if (onComplete) onComplete();
      },
    });

    tl.to(counterObj.current, {
      value: 100,
      duration: 2.2,
      ease: "power2.inOut",
      onUpdate: () => {
        const val = Math.floor(counterObj.current.value);
        const formatted = val < 10 ? `0${val}%` : `${val}%`;
        setFormattedCount(formatted);
      },
    })
      .to(textRef.current, {
        opacity: 0,
        y: -20,
        duration: 0.3,
        ease: "power2.in",
      })
      .to(pathRef.current, {
        attr: { d: "M0 0 L100 0 L100 100 Q50 60 0 100 Z" },
        duration: 0.4,
        ease: "power2.in",
      })
      .to(
        loaderRef.current,
        {
          yPercent: -100,
          duration: 0.8,
          ease: "power4.inOut",
        },
        "-=0.2",
      );

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [shouldRender, onComplete]);

  if (shouldRender === null || shouldRender === false) {
    return null;
  }

  return (
    <div
      ref={loaderRef}
      className="fixed inset-0 z-[9999] w-full h-screen select-none pointer-events-none"
    >
      <svg
        className="absolute top-0 left-0 w-full h-[120vh] -z-10 fill-black"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <path ref={pathRef} d="M0 0 L100 0 L100 100 Q50 100 0 100 Z" />
      </svg>

      <div className="absolute bottom-12 right-12 p-6 text-white">
        <div
          ref={textRef}
          className="text-[5rem] tracking-tight font-nohemi-regular"
        >
          {formattedCount}
        </div>
      </div>
    </div>
  );
}
