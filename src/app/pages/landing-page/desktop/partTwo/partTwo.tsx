import { partTwoItems } from "../../../data";
import Item from "./item";

export default function () {
  return (
    <div className="bg-white flex px-[200px] justify-between w-full h-[850px]">
      {partTwoItems.map((item, index) => {
        return <Item item={item} key={index + 1} />;
      })}
    </div>
  );
}
