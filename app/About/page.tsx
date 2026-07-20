import Image from "next/image";
import Esgis from "@/public/images/logo-esgis.webp";
import aboutImage from "@/public/images/aboutImage.jpg";
export default function About() {
  return (
    <div className="h-auto w-full bg-white flex flex-col justify-center gap-6 font-Delight-Thin p-12">
      <div className="h-screen flex justify-between items-center text-start gap-6">
        <div className="h-full md:w-1/2 flex flex-col justify-center items-start gap-6">
          <h1 className="font-bold">Hi i'm Antoine KONKA</h1>
          <p className="">
            I am a second-year student, majoring in Software Engineering at
            "l'Ecole Superieur de Gestion d'Informatique et des Sciences"
            <span className="">
              <Image src={Esgis} alt="ESGIS Logo" width={100} height={45} />
            </span>
          </p>
          <p className="text-lg">
            passionate about creating innovative software solutions i choose a
            career in FullStack developpement with Spring Boot and ReactJS, and
            I am eager to contribute my skills and knowledge to real-world
            projects.
          </p>
          <div className="">
            <div className="join">
              <div>
                <label className="input validator join-item">
                  <svg
                    className="h-[1em] opacity-50"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <g
                      strokeLinejoin="round"
                      strokeLinecap="round"
                      strokeWidth="2.5"
                      fill="none"
                      stroke="currentColor"
                    >
                      <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                    </g>
                  </svg>
                  <input type="email" placeholder="mail@site.com" required />
                </label>
                <div className="validator-hint hidden">
                  Enter valid email address
                </div>
              </div>
              <button className="btn btn-neutral join-item">Join</button>
            </div>
          </div>
        </div>
        <div className="w-1/2 h-full hidden md:block"></div>
      </div>
      <div className="">
        <Image src={aboutImage} alt="About Image" />
      </div>
    </div>
  );
}
