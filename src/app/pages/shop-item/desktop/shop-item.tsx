import ImageContainer from "./imageContainer";
import ProductDetails from "./productDetails";
import QuantityAndSize from "./quantityAndSize";

export default function ({ item }: { item: any }) {
  const { title, price } = item;

  return (
    <div className="flex bg-white text-black px-[200px] py-[140px] justify-center space-x-[100px]">
      <ImageContainer item={item} />
      <div className="flex flex-col space-y-[100px] pl-[40px] max-w-[1000px]">
        {/* Title and Price */}
        <div className="flex flex-col space-y-[20px]">
          <p className="antialiased font-medium text-[20px] text-greypayne capitalize">
            {title}
          </p>
          <p className="antialiased font-medium text-[18px] text-black">
            {price}
          </p>
        </div>
        {/* Quantity and Size */}
        <QuantityAndSize />
        {/* button */}
        <button className="text-white bg-[#018849] font-semibold text-[16px] uppercase text-center px-[20px] py-[12px] w-[238px] h-[60px]">
          add to bag
        </button>
        {/* details  */}
        <ProductDetails item={item} />
      </div>
    </div>
  );
}
