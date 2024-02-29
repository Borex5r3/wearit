import Link from "next/link";

export default function () {
  return (
    <div className="min-w-[280px] h-[400px] bg-eggplant flex justify-around items-center">
      <div className="w-[3px] h-full bg-white" />
      <div className="flex flex-col space-y-[36px] text-center">
        <p className="font-bold text-[40px] antialiased">WearIt</p>
        <Link
        href={"/pages/shoes"}
         className="font-medium text-[12px] antialiased underline">
          Start Shopping
        </Link>
      </div>
      <div className="w-[3px] h-full bg-white" />
    </div>
  );
}
