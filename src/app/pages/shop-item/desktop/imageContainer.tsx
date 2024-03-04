"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const ImageContainer = ({ item }: { item: any }) => {
  const { imageSource, imageWidthDesktop, imageHeightDesktop, imageIds } = item;
  const [targetImage, setTargetImage] = useState(imageSource);

  return (
    <div className="flex mt-[40px] pr-[100px] justify-between space-x-[80px]">
      <div className="flex flex-col space-y-[20px] max-w-[60px] min-w-[60px]">
        {imageIds.map((imageId: string, index: number) => {
          return (
            <button key={index + 1} onClick={() => setTargetImage(imageSource)}>
              <Image
                src={imageSource}
                alt={imageSource}
                width={250}
                height={250}
                id={imageId}
                className=""
              />
            </button>
          );
        })}
      </div>
      <div className="w-full flex justify-center items-start max-w-[600px]">
        <Image
          src={targetImage}
          alt={targetImage}
          width={imageWidthDesktop}
          height={imageHeightDesktop}
          className="min-w-[600px]"
        />
      </div>
    </div>
  );
};

export default ImageContainer;
