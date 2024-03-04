import Image from "next/image";
import { filters } from "../pages/data";
import { useState } from "react";

const Categories = ({ category }: { category: any }) => {
  const { title, category1, category2, category3, category4, items } = category;
  const [filterInput, setFilterInput] = useState("");
  const [itemsChunk, setItemsChunk] = useState(items.slice(0, 5));
  const handleFilterInput = (e: any) => {
    setFilterInput(e.target.value);
    console.log(filterInput);
  };
  const handleLoadMore = () => {
    const nextElementsSize = itemsChunk.length + 5;
    setItemsChunk(items.slice(0, nextElementsSize));
  };
  return (
    <div className="min-w-[280px] flex flex-col items-center space-y-[52px] bg-white text-black py-[40px] ">
      <p className="font-bold text-[36px] antialiased">{title}</p>
      <div className="flex flex-col font-bold text-[20px] antialiased text-center space-y-[12px] text-greypayne items-center">
        <button>{category1}</button>
        <button>{category2}</button>
        <button>{category3}</button>
        <button>{category4}</button>
        {/* add filter here */}
        <div className="flex space-x-[20px]">
          <select
            onChange={handleFilterInput}
            name="filters"
            id="filters"
            className="text-[10px] font-light outline-none antialiased border-b-[1px] border-greypayne py-[4px]"
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
      <div className="space-y-[40px] flex flex-col items-center">
        <div className="flex flex-col items-center space-y-[32px]">
          {itemsChunk.map((item: any) => {
            const { imageSource, imageWidth, imageHeight, title, price, id } =
              item;

            return (
              <div
                className="min-w-[280px] flex flex-col space-y-[20px] items-center px-[28px]"
                key={id}
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
        {itemsChunk.length !== items.length && (
          <button
            onClick={handleLoadMore}
            className="w-[118px] h-[42px] bg-greypayne text-[11px] font-bold antialiased text-center text-white"
          >
            LOAD MORE
          </button>
        )}
      </div>
    </div>
  );
};

export default Categories;
