import ItemContainer from "./itemContainer";

const Cart = ({ items }: { items: any }) => {
  return (
    <div className="flex flex-col bg-[#EEEEEE] px-[200px] py-[40px] text-black items-center space-y-[40px]">
      <p className="uppercase text-[60px] font-bold text-center antialiased">
        my cart
      </p>
      {/* intro and items */}
      {items.length ? (
        <div className="w-full flex justify-between">
          {/* items */}
          <div className="flex flex-col space-y-[24px] w-3/6">
            {items.map((item: any) => {
              return <ItemContainer key={item.id} item={item} />;
            })}
          </div>
          {/* introdiv */}
          <div className="flex flex-col items-center max-w-[350px] pl-[40px] w-full space-y-[32px]">
            <div className="border-b border-black py-[28px] text-center w-full">
              <p className=" uppercase text-[18px] font-bold antialiased">
                total
              </p>
            </div>
            <div className="flex justify-between w-full">
              <p className="capitalize text-[16px] font-bold antialiased">
                sub-total
              </p>
              <p className="text-[16px] font-medium antialiased">00.00 $</p>
            </div>
            <div className="w-full flex flex-col space-y-[32px]">
              <p className="font-bold antialiased text-[16px] ">Delivery</p>
              <select
                name="delivery"
                id="delivery"
                className="text-[14px] font-medium antialiased py-[16px] bg-inherit border-b border-black outline-none"
              >
                <option value="standard delivery">
                  Standard Delivery (20.00 $)
                </option>
                <option value="fast delivery">Fast Delivery (40.00 $)</option>
              </select>
            </div>
            <button className="uppercase text-[12px] text-white bg-[#018849] w-[150px] h-[40px] text-center font-bold antialiased">
              checkout
            </button>
          </div>
        </div>
      ) : (
        <div className="text-[30px] font-medium antialiased py-[100px]">
          Your bag is empty
        </div>
      )}
    </div>
  );
}

export default Cart;