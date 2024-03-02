"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function ({ item }: { item: any }) {
  const { imageSource, imageWidth, imageHeight, imageIds } = item;
  const [idClicked, setIdClicked] = useState(0);

  return (
    <div className="flex flex-col space-y-[24px] mt-[40px] px-[20px]">
      <div className="relative flex scroll-smooth snap-x snap-mandatory rounded-sm overflow-x-auto aspect-video space-x-2">
        {imageIds.map((imageId: string, index: number) => {
          return (
            <Image
              key={index + 1}
              src={imageSource}
              alt={imageSource}
              width={imageWidth}
              height={imageHeight}
              id={imageId}
              className="grow shrink-0 basis-full snap-start object-cover"
            />
          );
        })}
      </div>
      <div className="flex justify-center space-x-5">
        {imageIds.map((imageId: string, index: number) => {
          return (
            <Link
              onClick={() => setIdClicked(index)}
              key={index + 1}
              href={"#" + imageId}
              className={`rounded-full w-2 h-2 bg-black hover:opacity-100 transition-opacity ease-linear duration-300 ${idClicked === index ? "opacity-100" : "opacity-35"}`}
            />
          );
        })}
      </div>
    </div>
  );
}
