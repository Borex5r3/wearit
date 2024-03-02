export default function ({ item }: { item: any }) {
  const { details } = item;
  return (
    <div className="flex flex-col text-center text-greypayne pb-[24px] space-y-[20px]">
      <p className="uppercase font-bold antialiased text-[16px]">
        product details
      </p>
      <p className="font-normal antialiased text-[20px]">{details}</p>
    </div>
  );
}
