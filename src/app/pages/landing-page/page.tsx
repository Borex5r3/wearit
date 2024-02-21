"use client";
import Item from "./item";
import Test from "./test";
import { items } from "./data";

export default function () {

  return (
    <div className="min-w-[280px] h-[1700px] bg-eggplant flex flex-col space-y-[32px] pt-[52px]">
      {items.map((item, index) => {
        const {
          textContent,
          buttonContent,
          imageSource,
          imageWidth,
          imageHeight,
          reverseButtonAndText,
          focusedButton,
        } = item;
        console.log(item);
        return <Item item={item} />;
      })}
    </div>
  );
}
