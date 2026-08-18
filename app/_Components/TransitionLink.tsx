"use client";

import Link, { LinkProps } from "next/link";
import { useRouter } from "next/navigation";
import gsap from "gsap";

interface TransitionLinkProps extends LinkProps {
  children: React.ReactNode;
  className?: string;
}

export default function TransitionLink({
  children,
  href,
  className,
  ...props
}: TransitionLinkProps) {
  const router = useRouter();

  const handleTransition = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) => {
    e.preventDefault();
    const targetHref = e.currentTarget.href;

    // Animation de sortie : On fond la page actuelle vers 0
    gsap.to("#page-transition-container", {
      opacity: 0,
      duration: 0.6,
      ease: "power2.inOut",
      onComplete: () => {
        // Une fois l'animation terminée, on change de page
        router.push(targetHref);
      },
    });
  };

  return (
    <Link
      href={href}
      onClick={handleTransition}
      className={className}
      {...props}
    >
      {children}
    </Link>
  );
}
