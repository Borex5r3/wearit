import Image from "next/image";

export default function ({ item }: { item: any }) {
  const { title, price, imageSource, imageWidth, imageHeight } = item;
  const quantityOptions = ["1", "2", "3", "4", "5"];
  const sizeOptions = ["Select Size", "XS", "S", "M", "L", "XL", "2XL"];
  return (
    <div className="flex flex-col bg-white text-black items-center">
      <Image
        src={imageSource}
        alt={imageSource}
        width={imageWidth}
        height={imageHeight}
      />
      <p></p>
      <div className="flex flex-col space-y-[16px] text-center">
        <p className="antialiased font-medium text-[24px] text-greypayne">
          {title}
        </p>
        <p className="antialiased font-medium text-[14px] text-black">
          {price}
        </p>
      </div>
      <div className="flex flex-col space-y-[16px] text-center">
        <p className=" antialiased font-normal text-[12px] text-greypayne">
          Quantity
        </p>
        <select
          name="quantity"
          id="quantity"
          className="border-b border-black w-[100px] py-[12px] text-[10px] font-light antialiased outline-none"
        >
          {quantityOptions.map((option, index) => {
            return (
              <option value={option} key={index + 1}>
                {option}
              </option>
            );
          })}
        </select>
      </div>
      <div className="flex flex-col space-y-[16px] text-center">
        <p className=" antialiased font-normal text-[12px] text-greypayne">
          Size
        </p>
        <select
          name="quantity"
          id="quantity"
          className="border-b border-black w-[100px] py-[12px] text-[10px] font-light antialiased outline-none"
        >
          {sizeOptions.map((option, index) => {
            return (
              <option value={option} key={index + 1}>
                {option}
              </option>
            );
          })}
        </select>
      </div>
      <button className="text-white bg-[#018849] font-bold text-[12px] uppercase text-center px-[20px] py-[12px]">
        add to bag
      </button>
      <div className="flex flex-col text-center px-[32px] text-greypayne pb-[16px]">
        <p className="uppercase font-bold antialiased text-[12px]">product details</p>
        <p className="font-normal antialiased text-[13px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          aperiam eius obcaecati. Accusamus laudantium voluptates quos eaque
          nihil facere ratione magnam quidem quam! Aliquid facilis provident ut,
          incidunt libero doloremque magnam doloribus neque maxime iure, velit
          repudiandae atque reiciendis ex, autem temporibus odio et recusandae
          saepe reprehenderit quia labore corporis sint! Eos dignissimos porro
          ad ipsam eius, temporibus id sit officia animi dolor esse error qui
          repellat, excepturi nisi aliquid asperiores quasi debitis, consequatur
          dolorem provident. Praesentium architecto nulla inventore ea tempore
          nihil, iusto libero eos similique illo ipsum explicabo magnam at esse.
          Aut tempore ut officia illo, asperiores odio!
        </p>
      </div>
    </div>
  );
}
