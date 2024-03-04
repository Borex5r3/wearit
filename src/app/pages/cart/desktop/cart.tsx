import ItemContainer from "./itemContainer";

const Cart = ({ items }: { items: any }) => {
  return (
    <div className="flex flex-col bg-[#EEEEEE] px-[200px] py-[140px] text-black items-center space-y-[100px]">
      <p className="uppercase text-[80px] font-bold text-center antialiased">
        my cart
      </p>
      {/* intro and items */}
      {items.length ? (
        <div className="w-full flex justify-between">
          {/* items */}
          <div className="flex flex-col space-y-[24px] w-3/5">
            {items.map((item: any) => {
              return <ItemContainer key={item.id} item={item} />;
            })}
          </div>
          {/* introdiv */}
          <div className="flex flex-col items-center max-w-[400px] pl-[40px] w-full space-y-[52px]">
            <div className="border-b border-black py-[28px] text-center w-full">
              <p className=" uppercase text-[32px] font-bold antialiased">
                total
              </p>
            </div>
            <div className="flex justify-between w-full">
              <p className="capitalize text-[20px] font-bold antialiased">
                sub-total
              </p>
              <p className="text-[20px] font-medium antialiased">00.00 $</p>
            </div>
            <div className="w-full flex flex-col space-y-[32px]">
              <p className="font-bold antialiased text-[20px] ">Delivery</p>
              <select
                name="delivery"
                id="delivery"
                className="text-[15px] font-medium antialiased py-[16px] bg-inherit border-b border-black outline-none"
              >
                <option value="standard delivery">
                  Standard Delivery (20.00 $)
                </option>
                <option value="fast delivery">Fast Delivery (40.00 $)</option>
              </select>
            </div>
            <button className="uppercase text-[16px] text-white bg-[#018849] w-[238px] h-[61px] text-center font-bold antialiased">
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