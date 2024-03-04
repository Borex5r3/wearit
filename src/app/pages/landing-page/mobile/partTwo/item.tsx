import Image from "next/image";

const Item = ({ item }: { item: any }) => {
  const {
    imageSource,
    imageWidth,
    imageHeight,
    borderOverImage,
    borderOverImageDistance,
    borderUnderImage,
    borderUnderImageDistance,
  } = item;
  const styleBorderOver = borderOverImage
    ? `border-t-[2px] border-black ${borderOverImageDistance && "pt-[40px]"}`
    : "";
  const styleBorderUnder = borderUnderImage
    ? `border-b-[2px] border-black pb-[${borderUnderImageDistance}px]`
    : "";
  return (
    <div className="min-w-[280px] bg-white flex flex-col space-y-[20px] items-center">
      <div
        className={`w-full flex justify-center
        ${styleBorderOver}
        ${styleBorderUnder}
        `}
      >
        <Image
          src={imageSource}
          width={imageWidth}
          height={imageHeight}
          alt={imageSource}
        />
      </div>
      <button className="text-[12px] font-bold antialiased text-center w-[111px] h-[43px] bg-eggplant">
        SHOP NOW
      </button>
    </div>
  );
};

export default Item;
