import ImageContainer from "./imageContainer";
import ProductDetails from "./productDetails";
import QuantityAndSize from "./quantityAndSize";

export default function ({ item }: { item: any }) {
  const { title, price } = item;

  return (
    <div className="flex flex-col bg-white text-black items-center space-y-[24px] min-w-[280px]">
      <ImageContainer item={item} />
      <div className="flex flex-col space-y-[36px] px-[20px] items-center">
        {/* Title and Price */}
        <div className="flex flex-col space-y-[16px] text-center">
          <p className="antialiased font-medium text-[24px] text-greypayne ">
            {title}
          </p>
          <p className="antialiased font-medium text-[14px] text-black">
            {price}
          </p>
        </div>
        {/* Quantity and Size */}
        <QuantityAndSize />
        {/* button */}
        <button className="text-white bg-[#018849] font-bold text-[12px] uppercase text-center px-[20px] py-[12px]">
          add to bag
        </button>
        {/* details  */}
        <ProductDetails item={item} />
      </div>
    </div>
  );
}
