export default function () {
  return (
    <div className="min-w-[280px] h-[400px] bg-eggplant flex justify-around items-center">
      <div className="w-[3px] h-full bg-white" />
      <div className="flex flex-col space-y-[36px] text-center">
        <p className="font-bold text-[40px] antialiased">WearIt</p>
        <button className="font-medium text-[12px] antialiased">
          Start Shopping
        </button>
      </div>
      <div className="w-[3px] h-full bg-white" />
    </div>
  );
}
