import Image from "next/image";

const Item = ({
  item,
}: {
  item: {
    textContent: string;
    buttonContent: string;
    imageSource: string;
    imageWidth: number;
    imageHeight: number;
    reverseButtonAndText: boolean;
    focusedButton: boolean;
  };
}) => {
  const {
    textContent,
    buttonContent,
    imageSource,
    imageWidth,
    imageHeight,
    reverseButtonAndText,
    focusedButton,
  } = item;
  return (
    <div className="min-w-[280px] bg-eggplant flex flex-col space-y-[20px] items-center px-[20px]">
      <div
        className={`flex ${
          reverseButtonAndText ? "flex-col-reverse space-y-reverse" : "flex-col"
        } space-y-[24px] items-center`}
      >
        <p className="text-[12px] text-center antialiased">{textContent}</p>
        <button
          className={`w-[140px] h-[40px] text-black font-bold antialiased ${
            focusedButton ? "bg-tiffany_blue" : "bg-greypayne"
          }`}
        >
          {buttonContent}
        </button>
      </div>
      <Image
        src={imageSource}
        width={imageWidth}
        height={imageHeight}
        alt={imageSource}
      />
    </div>
  );
};

export default Item;
