import Image from "next/image";

export default function ({ item }: { item: any }) {
  const { imageSource, imageWidthDesktop, imageHeightDesktop, reverseContent } = item;
  const styleReverseContent = reverseContent ? "flex-col-reverse pb-[80px]" : "flex-col pt-[80px]";
  return (
    <div
      className={` flex ${styleReverseContent} justify-between items-center  h-full`}
    >
      <button className="text-[15px] font-bold antialiased text-center w-[190px] h-[50px] bg-eggplant">
        SHOP NOW
      </button>
      <div
        className={`w-full flex justify-center`}
      >
        <Image
          src={imageSource}
          width={imageWidthDesktop}
          height={imageHeightDesktop}
          alt={imageSource}
        />
      </div>
    </div>
  );
}
