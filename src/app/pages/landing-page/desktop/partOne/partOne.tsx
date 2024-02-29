"use client";
import Image from "next/image";

export default function () {
  return (
    <div className="flex w-full px-[200px]">
      <div className="flex justify-between w-1/2 items-center">
        <Image
          src="/partOneImage1.png"
          width={573}
          height={734}
          alt="image"
          className=""
        />
        <div className="space-y-[72px] max-w-[300px]">
          <p className="text-[20px] antialiased">
            Explore endless style possibilities with our collection of trendy
            t-shirts!
          </p>
          <button className="text-[16px] font-bold antialiased text-black bg-[#86BBBD] px-[62px] py-[16px]">
            T-SHIRT
          </button>
        </div>
      </div>
      <div className="flex flex-col justify-between w-1/2 items-center">
        <div className="flex items-center justify-between w-full">
          <Image
            src="/partOneImage2.png"
            width={370}
            height={370}
            alt="image"
            className=""
          />
          <div className="space-y-[52px] max-w-[300px]">
            <button className="text-[16px] font-bold antialiased text-white bg-greypayne px-[62px] py-[16px] uppercase">
              hoodies
            </button>
            <p className="text-[16px] antialiased">
              Step into comfort and style with our exclusive collection of
              Hoodies.
            </p>
          </div>
        </div>
        <div className="flex items-center justify-between w-full pb-[60px] ">
          <div className="space-y-[52px] max-w-[300px]">
            <p className="text-[16px] antialiased">
              Step into style with our collection of Vans shoes.
            </p>
            <button className="text-[16px] font-bold antialiased text-white bg-greypayne px-[62px] py-[16px] uppercase">
              vans
            </button>
          </div>
          <Image
            src="/partOneImage3.png"
            width={700}
            height={700}
            alt="image"
            className=""
          />
        </div>
      </div>
    </div>
  );
}
