import Image from "next/image";

const ItemContainer = ({ item }: { item: any }) => {
  const { title, price, imageSource, imageWidth, imageHeight, size, quantity } =
    item;
  return (
    <div className="relative flex items-center justify-between px-[60px] pb-[32px] pt-[48px] bg-white min-h-[500px]">
      <button className="absolute top-0 left-0 w-full flex justify-end pr-[16px] pt-[16px]">
        <Image src="/close.png" width={20} height={20} alt="close icon" />
      </button>
      <div className="w-1/2 h-full">
        <Image
          src={imageSource}
          width={imageWidth}
          height={imageHeight}
          alt={imageSource}
        />
      </div>
      <div className="w-1/2 h-full flex flex-col justify-between pb-[40px]">
        {/* title and price */}
        <div className="flex flex-col space-y-[44px]">
          <p className="font-bold antialiased text-[32px]">{price}</p>
          <p className="font-medium antialiased text-[24px] text-greypayne">
            {title}
          </p>
        </div>
        {/* size and quantity */}
        <div className="flex flex-col space-y-[44px]">
          <p className="text-[24px] font-medium antialiased text-greypayne">
            Size : <span className="text-black">{size}</span>
          </p>
          <p className="text-[24px] font-medium antialiased text-greypayne">
            Quantity : <span className="text-black">{quantity}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default ItemContainer;