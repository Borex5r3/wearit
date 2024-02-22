import Image from "next/image";
import { filters } from "./data";
import { useState } from "react";

export default function ({ category }: { category: any }) {
  const { title, category1, category2, category3, category4, items } = category;
  const [filterInput, setFilterInput] = useState();
  const handleFilterInput = (e: any) => {
    setFilterInput(e.target.value);
    console.log(filterInput);
  };
  return (
    <div className="min-w-[280px] flex flex-col items-center space-y-[30px] bg-white text-black py-[40px] ">
      <p className="font-bold text-[24px] antialiased">{title}</p>
      <div className="font-bold text-[20px] antialiased text-center space-y-[12px] text-greypayne">
        <p>{category1}</p>
        <p>{category2}</p>
        <p>{category3}</p>
        <p>{category4}</p>
        {/* add filter here */}
        <div className="flex border-b-[1px] border-greypayne space-x-[20px]">
          <select
            onChange={handleFilterInput}
            name="filters"
            id="filters"
            className="text-[10px] font-light outline-none"
          >
            {filters.map((item, index) => {
              return (
                <option key={index + 1} value={item}>
                  {item}
                </option>
              );
            })}
          </select>
        </div>
      </div>
      {/* items */}
      <div className="space-y-[36px] flex flex-col items-center">
        <div className="flex flex-col items-center space-y-[28px]">
          {items.map((item: any, index: number) => {
            const { imageSource, imageWidth, imageHeight, title, price } = item;
            return (
              <div
                className="min-w-[280px] flex flex-col space-y-[20px] items-center px-[28px]"
                key={index + 1}
              >
                <Image
                  src={imageSource}
                  width={imageWidth}
                  height={imageHeight}
                  alt={imageSource}
                />
                <div className="flex flex-col space-y-[12px] text-center">
                  <p className="text-[14px] font-normal antialiased">{title}</p>
                  <p className="text-[15px] font-bold antialiased">{price}</p>
                </div>
              </div>
            );
          })}
        </div>
        {/* Load More */}
        <button className="w-[118px] h-[42px] bg-greypayne text-[15px] font-bold antialiased text-center text-white">
          LOAD MORE
        </button>
      </div>
    </div>
  );
}
