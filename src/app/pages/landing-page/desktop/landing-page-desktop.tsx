import Image from "next/image";
import PartFour from "./partFour/partFour";
import PartOne from "./partOne/partOne";
import PartThree from "./partThree/partThree";
import PartTwo from "./partTwo/partTwo";

const LandingPage = ()  =>{
  return (
    <div className="flex flex-col bg-eggplant">
      <PartOne />
      <PartTwo />
      <PartThree />
      <PartFour />
    </div>
  );
}

export default LandingPage;