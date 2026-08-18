import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import "lenis/dist/lenis.css";

// Charger les polices locales depuis public/Fonts
const nohemi = localFont({
  src: "../public/Fonts/Nohemi/NohemiMedium.ttf",
  variable: "--font-nohemi-medium",
});

const nohemiRegular = localFont({
  src: "../public/Fonts/Nohemi/NohemiRegular.ttf",
  variable: "--font-nohemi-regular",
  display: "swap",
});
const Delight = localFont({
  src: "../public/Fonts/Delight/Delight-Black.ttf",
  variable: "--font-Delight",
  display: "swap",
});
// --- CONFIGURATION SEO & MÉTADONNÉES ---
export const metadata: Metadata = {
  title: {
    default: "KONKA Kokou Antoine Samuel | Développeur Full-Stack Junior",
    template: "%s | KONKA Kokou Antoine Samuel Portfolio",
  },
  description:
    "Portfolio officiel de KONKA Kokou Antoine Samuel développeur Full-Stack spécialisé en React, Next.js, et Spring Boot, Business Analyst basé à lomé, Togo",
  keywords: [
    "web dev",
    "Front End",
    "Backend",
    "Spring Boot",
    "Développeur Full-Stack",
    "React",
    "Antoine Samuel",
    "KONKA",
    "KONKA Kokou ",
    "KONKA Kokou Antoine Samuel",
    "Next.js",
    "Spring Boot",
    "TypeScript",
    "Tailwind CSS",
    "Portfolio",
    "Génie Logiciel",
    "Lomé",
    "Togo",
  ],
  authors: [{ name: "KONKA Kokou Antoine Samuel" }],
  creator: "KONKA Kokou Antoine Samuel",
  publisher: "KONKA Kokou Antoine Samuel",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  // Optimisation pour les partages (Open Graph / Réseaux sociaux)
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://eliazar-portfolio-two.vercel.app/", // Remplace par ton URL finale une fois déployé
    title:
      "KONKA Kokou Antoine Samuel| Développeur Full-Stack Junior basé à lomé",
    description:
      "Découvrez mon portfolio, mes projets web et mon expertise technique en développement front-end, back-end, Design ,UI/UX design,en Gestion de projets puis en Business Analyse.",
    siteName: "KONKA Kokou Antoine Samuel",
    images: [
      {
        url: "https://eliazar-portfolio-two.vercel.app/Images/first.png", // Ajoute une image d'aperçu de 1200x630px dans ton dossier public
        width: 1920,
        height: 1080,
        alt: "KONKA Kokou Antoine Samuel - Développeur Full-Stack Portfolio",
      },
    ],
  },
  // Aperçu Twitter / X
  twitter: {
    card: "summary_large_image",
    title: "KONKA Kokou Antoine Samuel | Développeur Full-Stack Junior",
    description:
      "Découvrez mon portfolio et mes réalisations en développement web.",
    images: ["https://eliazar-portfolio-two.vercel.app/Images/first.png"],
  },
  icons: {
    icon: "./Philippos.jpg",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${nohemi.variable} ${nohemiRegular.variable} ${Delight.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
