import ImageTrail from "../_components/ImageTrail";
import BugsBunny from "@/public/Icons/BuckBunny.svg";
import CoolBob from "@/public/Icons/CoolBob.svg";
import CoolGuy from "@/public/Icons/CoolGuy.svg";
import DuffyDuck from "@/public/Icons/DuffyDuck.svg";
import GangBob from "@/public/Icons/GangBob.svg";
import Philippos from "@/public/Icons/philipposBrother.svg";
import philipposBrother from "@/public/Icons/philipposBrother.svg";
import Stewie from "@/public/Icons/Stewie.svg";
import TortueGeniale from "@/public/Icons/TortueGeniale.svg";
import "../globals.css";

export default function HomePage() {
  return (
    <div className="h-screen w-full flex justify-center items-center portfolio-bg">
      <ImageTrail
        images={[
          BugsBunny,
          CoolBob,
          DuffyDuck,
          GangBob,
          Philippos,
          philipposBrother,
          Stewie,
          TortueGeniale,
          CoolGuy,
        ]}
        mainText="Ciao, i'm antoine"
        subText="Junior FullStack dev"
      />
    </div>
  );
}
