import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "eliazar-portfolio-two.vercel.app",
        port: "",
        pathname: "/**", // Autorise tous les chemins d'images sur ce domaine
      },
    ],
  },
  /* config options here */
};

export default nextConfig;
