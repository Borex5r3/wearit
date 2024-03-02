export default function () {
  const quantityOptions = ["1", "2", "3", "4", "5"];
  const sizeOptions = ["Select Size", "XS", "S", "M", "L", "XL", "2XL"];

  return (
    <div className="flex flex-col space-y-[24px]">
      <div className="flex flex-col space-y-[15px]">
        <p className=" antialiased font-normal text-[17px] text-greypayne">
          Quantity :
        </p>
        <select
          name="quantity"
          id="quantity"
          className="border-b border-black w-[300px] py-[12px] text-[16px] font-light antialiased outline-none"
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
      <div className="flex flex-col space-y-[15px]">
        <p className=" antialiased font-normal text-[17px] text-greypayne">
          Size :
        </p>
        <select
          name="size"
          id="size"
          className="border-b border-black w-[300px] py-[12px] text-[16px] font-light antialiased outline-none"
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
    </div>
  );
}
