import Image from "next/image";

const ItemContainer =  ({ item }: { item: any }) => {
  const { title, price, imageSource, imageWidth, imageHeight, size, quantity } =
    item;
  return (
    <div className="relative flex flex-col items-center space-y-[44px] px-[20px] pb-[32px] pt-[8px] bg-white text-center">
      <button className="absolute top-0 left-0 w-full flex justify-end pr-[16px] pt-[16px]">
        <Image src="/close.png" width={15} height={15} alt="close icon" />
      </button>
      <Image
        src={imageSource}
        width={imageWidth}
        height={imageHeight}
        alt={imageSource}
      />
      <div className="space-y-[32px]">
        {/* title and price */}
        <div className="flex flex-col space-y-[24px]">
          <p className="font-bold antialiased text-[15px]">{price}</p>
          <p className="font-medium antialiased text-[14px] text-greypayne">
            {title}
          </p>
        </div>
        {/* size and quantity */}
        <div className="flex flex-col space-y-[24px]">
          <p className="text-[14px] font-medium antialiased text-greypayne">
            Size : <span className="text-black">{size}</span>
          </p>
          <p className="text-[14px] font-medium antialiased text-greypayne">
            Quantity : <span className="text-black">{quantity}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default ItemContainer;