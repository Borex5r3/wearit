export default function ({ item }: { item: any }) {
  const { details } = item;
  return (
    <div className="flex flex-col text-greypayne pb-[16px] space-y-[20px]">
      <p className="uppercase font-bold antialiased text-[18px]">
        product details
      </p>
      <p className="font-normal antialiased text-[17px]">{details}</p>
    </div>
  );
}
