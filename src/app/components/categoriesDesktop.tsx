import Image from "next/image";
import { filters } from "../pages/data";
import { useRef, useState } from "react";

export default function ({ category }: { category: any }) {
  const { title, category1, category2, category3, category4, items } = category;
  const [filterInput, setFilterInput] = useState("");
  const [itemsChunk, setItemsChunk] = useState(items.slice(0, 5));
  const handleFilterInput = (e: any) => {
    setFilterInput(e.target.value);
    console.log(filterInput);
  };
  const handleLoadMore = () => {
    const nextElementsSize = itemsChunk.length + 15;
    setItemsChunk(items.slice(0, nextElementsSize));
  };
  return (
    <div className="flex flex-col items-center space-y-[100px] bg-white text-black py-[140px] px-[200px]">
      <p className="font-bold text-[80px] antialiased">{title}</p>
      <div className="flex font-bold text-[27px] antialiased text-center text-greypayne items-center justify-between w-full">
        <button>{category1}</button>
        <button>{category2}</button>
        <button>{category3}</button>
        <button>{category4}</button>
        {/* add filter here */}
        <div className="flex">
          <select
            onChange={handleFilterInput}
            name="filters"
            id="filters"
            className="text-[13px] font-light outline-none antialiased border-b-[1px] border-greypayne py-[4px]"
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
      <div className="space-y-[80px] flex flex-col items-center w-full">
        <div className="grid grid-cols-5 gap-[108px] w-full mt-[40px]">
          {itemsChunk.map((item: any) => {
            const { imageSource, imageWidth, imageHeight, title, price, id } =
              item;

            return (
              <div
                className="flex flex-col space-y-[22px] items-center"
                key={id}
              >
                <Image
                  src={imageSource}
                  width={imageWidth}
                  height={imageHeight}
                  alt={imageSource}
                />
                <div className="flex flex-col space-y-[28px] text-center">
                  <p className="text-[20px] font-normal antialiased">{title}</p>
                  <p className="text-[22px] font-bold antialiased">{price}</p>
                </div>
              </div>
            );
          })}
        </div>
        {/* Load More */}
        {itemsChunk.length !== items.length && (
          <button
            onClick={handleLoadMore}
            className="w-[220px] h-[70px] bg-greypayne text-[15px] font-bold antialiased text-center text-white"
          >
            LOAD MORE
          </button>
        )}
      </div>
    </div>
  );
}
