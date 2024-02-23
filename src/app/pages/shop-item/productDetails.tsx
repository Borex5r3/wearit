export default function ({ item }: { item: any }) {
  const { details } = item;
  return (
    <div className="flex flex-col text-center text-greypayne pb-[16px] space-y-[12px]">
      <p className="uppercase font-bold antialiased text-[12px]">
        product details
      </p>
      <p className="font-normal antialiased text-[13px]">{details}</p>
    </div>
  );
}
