"use client";
import Image from "next/image";
import Link from "next/link";
import StaggeredMenu from "./StaggeredMenu";
import TransitionLink from "./TransitionLink";

interface HeaderProps {
  logoSrc?: string | { src: string };
}

export default function Header({ logoSrc }: HeaderProps) {
  // Résolution sécurisée de la source de l'image du logo
  const resolvedLogoSrc = typeof logoSrc === "string" ? logoSrc : logoSrc?.src;

  // Éléments de navigation pour le Staggered Menu (Mobile/Tablette)
  const menuItems = [
    { label: "About", ariaLabel: "Aller à la section About", link: "/About" },
    {
      label: "Projets",
      ariaLabel: "Aller à la section Projets",
      link: "/Projects",
    },
    {
      label: "Contacts",
      ariaLabel: "Aller à la section Contacts",
      link: "#Contacts",
    },
  ];

  return (
    <>
      {/* ========================================== */}
      <header className="hidden md:flex fixed top-0 left-0 w-full z-100 justify-between items-center px-12 py-6 pointer-events-auto">
        {/* Avatar / Logo en haut à gauche avec effet Glass */}
        <div className="w-14 h-14 rounded-full overflow-hidden border border-white/20 shadow-lg bg-white/5 backdrop-blur-md">
          {resolvedLogoSrc ? (
            <Image
              src={resolvedLogoSrc}
              alt="Antoine Konka Logo"
              width={32}
              height={32}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-white/10" />
          )}
        </div>

        {/* Navigation Desktop en pilule avec effet Glass prononcé */}
        <nav className="flex items-center space-x-1 px-6 py-4 rounded-full border border-white/15 bg-white/5 backdrop-blur-xl shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]">
          <TransitionLink
            href="/About"
            className="px-5 py-2 text-white/80 hover:text-amber-50 transition-colors text-[1.75rem] font-medium rounded-full"
          >
            About
          </TransitionLink>
          <TransitionLink
            href="/Projects"
            className="px-5 py-2 text-white/80 hover:text-amber-50 transition-colors text-[1.75rem] font-medium rounded-full"
          >
            Projects
          </TransitionLink>
          <a
            href="#Contacts"
            className="px-5 py-2 text-white/80 hover:text-amber-50 transition-colors text-[1.75rem] font-medium rounded-full"
          >
            Contacts
          </a>
        </nav>
      </header>

      {/* ========================================== */}
      {/* 📱 VERSION MOBILE & TABLETTE (Staggered Menu) */}
      {/* ========================================== */}
      <div className="md:hidden">
        <StaggeredMenu
          position="right"
          colors={["#1e1e22", "#35353c", "#5227FF"]}
          items={menuItems}
          displayItemNumbering={true}
          logoUrl={resolvedLogoSrc}
          menuButtonColor="#fff"
          openMenuButtonColor="#fff"
          changeMenuColorOnOpen={true}
          isFixed={true}
        />
      </div>
    </>
  );
}
