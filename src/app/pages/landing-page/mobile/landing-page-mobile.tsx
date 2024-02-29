import PartFour from "./partFour/partFour";
import PartOne from "./partOne/partOne";
import PartThree from "./partThree/partThree";
import PartTwo from "./partTwo/partTwo";

export default function () {
  return (
    <div className="min-w-[280px] flex flex-col">
      <PartOne />
      <PartTwo />
      <PartThree />
      <PartFour />
    </div>
  );
}
