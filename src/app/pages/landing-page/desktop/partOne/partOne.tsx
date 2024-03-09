"use client";
import Image from "next/image";

const PartOne = () => {
  return (
    <div className="flex w-full px-[200px] justify-between items-center h-full">
      <div className="flex flex-col space-y-[40px] max-w-[400px] text-white">
        <div className="space-y-[12px]">
          <p className="text-[40px] font-light antialiased">Shop Modern</p>
          <p className="text-[40px] font-bold antialiased">Fashion Trends!</p>
        </div>
        <p className="text-[16px] font-normal antialiased">
          Discover the latest in modern fashion. Explore curated collections of
          clothing and footwear from top brands, curated just for you.
        </p>
        <button className="px-[40px] py-[16px] bg-white text-black w-max antialiased font-medium">
          Explore Now
        </button>
      </div>
      <Image
      src="/white-t-shirt.png"
      width={500}
      height={500}
      alt="white t-shirt"
      ></Image>
    </div>
  );
};

// <div className="flex justify-between w-1/2 items-center">
//   <Image
//     src="/partOneImage1.png"
//     width={573}
//     height={734}
//     alt="image"
//     className=""
//   />
//   <div className="space-y-[72px] max-w-[300px]">
//     <p className="text-[20px] antialiased">
//       Explore endless style possibilities with our collection of trendy
//       t-shirts!
//     </p>
//     <button className="text-[16px] font-bold antialiased text-black bg-[#86BBBD] px-[62px] py-[16px]">
//       T-SHIRT
//     </button>
//   </div>
// </div>
// <div className="flex flex-col justify-between w-1/2 items-center">
//   <div className="flex items-center justify-between w-full">
//     <Image
//       src="/partOneImage2.png"
//       width={300}
//       height={300}
//       alt="image"
//       className=""
//     />
//     <div className="space-y-[52px] max-w-[300px]">
//       <button className="text-[16px] font-bold antialiased text-white bg-greypayne px-[62px] py-[16px] uppercase">
//         hoodies
//       </button>
//       <p className="text-[16px] antialiased">
//         Step into comfort and style with our exclusive collection of
//         Hoodies.
//       </p>
//     </div>
//   </div>
//   <div className="flex items-center justify-between w-full pb-[60px] ">
//     <div className="space-y-[52px] max-w-[300px]">
//       <p className="text-[16px] antialiased">
//         Step into style with our collection of Vans shoes.
//       </p>
//       <button className="text-[16px] font-bold antialiased text-white bg-greypayne px-[62px] py-[16px] uppercase">
//         vans
//       </button>
//     </div>
//     <Image
//       src="/partOneImage3.png"
//       width={500}
//       height={500}
//       alt="image"
//       className=""
//     />
//   </div>
// </div>
export default PartOne;
