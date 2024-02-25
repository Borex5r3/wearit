export default function ({ item }: { item: any }) {
  const { title, placeholder, type } = item;
  return (
    <div className="space-y-[12px] w-full">
      <p className="text-greypayne text-[13px] font-medium antialiased uppercase">
        {title}
      </p>
      <input
        placeholder={placeholder}
        type={type}
        className="text-white text-[13px] font-medium antialiased py-[24px] px-[12px] outline-none bg-greypayne w-full"
      />
    </div>
  );
}
