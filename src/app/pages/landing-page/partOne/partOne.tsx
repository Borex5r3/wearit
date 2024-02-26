"use client";
import Item from "./item";
import { partOneItems } from "../../data";

export default function () {
  return (
    <div className="min-w-[280px] h-[1800px] bg-eggplant flex flex-col space-y-[32px] pt-[52px] pb-[20px]">
      {partOneItems.map((item, index) => {
        return <Item item={item} key={index + 1} />;
      })}
    </div>
  );
}
