import { partTwoItems } from "../../../data";
import Item from "./item";

const PartTwo = () =>  {
  return (
    <div className="bg-white flex px-[200px] justify-between w-full h-[850px]">
      {partTwoItems.map((item, index) => {
        return <Item item={item} key={index + 1} />;
      })}
    </div>
  );
}

export default PartTwo;