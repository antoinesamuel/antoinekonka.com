export default function HomePage() {
  return (
    <div className="h-screen w-full flex justify-center items-center bg-black">
      {/* Contenu textuel central inspiré de ton design Figma */}
      <div className="absolute z-10 text-center pointer-events-none select-none flex flex-col items-center gap-4">
        <h1 className="text-white font-bold text-[8rem] md:text-[10rem] lg:text-[14rem] tracking-tight leading-none">
          Ciao, i{"'"}m
          <br />
          antoine
        </h1>
        <p className="text-white/80 font-medium text-lg md:text-xl mt-4 tracking-wide">
          A junior FullStack dev
        </p>
      </div>
    </div>
  );
}
