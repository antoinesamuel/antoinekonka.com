import { CallToActionButton } from "../_Components/CallToActionButton";
import { FixedRotateText } from "../_Components/FixedRotateText";
export default function HomePage() {
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center bg-black relative">
      <FixedRotateText />
      {/* Contenu textuel central inspiré de ton design Figma */}
      <div className="h-full z-10 text-center pointer-events-none select-none flex flex-col items-center justify-center gap-4">
        <h1 className="text-white font-bold text-[8rem] md:text-[12rem] lg:text-[14rem] tracking-tight leading-none">
          Ciao, i{"'"}m
          <br />
          antoine
        </h1>
        <p className="text-white/80 font-medium text-lg md:text-xl mt-4 tracking-wide">
          A junior FullStack dev
        </p>
        <div className="w-full flex justify-center items-center md:hidden">
          <CallToActionButton />
        </div>
      </div>
    </div>
  );
}
