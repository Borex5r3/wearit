import { partTwoItems } from "../../data";
import Item from "./item";

export default function () {
  return (
    <div className="min-w-[280px] h-[1500px] bg-white flex flex-col space-y-[32px] pt-[100px]">
      {partTwoItems.map((item, index) => {
        return <Item item={item} key={index + 1} />;
      })}
    </div>
  );
}
