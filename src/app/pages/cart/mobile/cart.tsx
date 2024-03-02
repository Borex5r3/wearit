import ItemContainer from "./itemContainer";

export default function ({ items }: { items: any }) {
  return (
    <div className="flex flex-col bg-[#EEEEEE] px-[20px] py-[40px] text-black items-center space-y-[20px]">
      <p className=" uppercase text-[40px] font-bold text-center antialiased">
        my cart
      </p>
      {/* intro and items */}
      {
        items.length ? 
      <div className="w-full flex flex-col items-center space-y-[20px]">
        {/* introdiv */}
        <div className="flex flex-col items-center max-w-[308px] w-full space-y-[32px]">
          <div className="border-b border-black py-[28px] text-center w-full">
            <p className=" uppercase text-[20px] font-bold antialiased">
              total
            </p>
          </div>
          <div className="flex justify-between w-full">
            <p className="capitalize text-[13px] font-bold antialiased">
              sub-total
            </p>
            <p className="text-[13px] font-medium antialiased">00.00 $</p>
          </div>
          <div className="w-full flex flex-col space-y-[20px]">
            <p className="font-bold antialiased text-[13px] ">Delivery</p>
            <select
              name="delivery"
              id="delivery"
              className="text-[11px] font-medium antialiased py-[16px] bg-inherit border-b border-black outline-none"
            >
              <option value="standard delivery">
                Standard Delivery (20.00 $)
              </option>
              <option value="fast delivery">Fast Delivery (40.00 $)</option>
            </select>
          </div>
          <button className=" uppercase text-white bg-[#018849] px-[40px] py-[12px] font-bold antialiased">
            checkout
          </button>
        </div>
        {/* items */}
        <div className="flex flex-col space-y-[24px]">
          {items.map((item: any) => {
            return <ItemContainer key={item.id} item={item} />;
          })}
        </div>
      </div> : <div className="text-[30px] font-medium antialiased py-[60px]">Your bag is empty</div>
      }
    </div>
  );
}
