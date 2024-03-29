import Image from "next/image";

const Item = ({ item }: { item: any }) => {
  const { imageSource, imageWidthDesktop, imageHeightDesktop, reverseContent } =
    item;
  const styleReverseContent = reverseContent
    ? "flex-col-reverse pb-[80px]"
    : "flex-col pt-[80px]";
  return (
    <div
      className={` flex ${styleReverseContent} justify-between items-center  h-full`}
    >
      <button className="text-[13px] font-bold antialiased text-center w-[150px] h-[40px] bg-eggplant">
        SHOP NOW
      </button>
      <div className={`w-full flex justify-center`}>
        <Image
          src={imageSource}
          width={imageWidthDesktop}
          height={imageHeightDesktop}
          alt={imageSource}
        />
      </div>
    </div>
  );
};

export default Item;
