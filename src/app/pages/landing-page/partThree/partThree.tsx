import Image from "next/image";

export default function () {
  return (
    <div
      className={`min-w-[280px] h-[700px] flex flex-col bg-[url('/nike-background.png')] bg-contain bg-center justify-center`}
    >
      <div className="flex flex-col space-y-[120px]">
        <div className="flex flex-col items-center text-center space-y-[28px] bg-black py-[40px] border-y-[2px] px-[20px]">
          <p className="text-[20px] font-bold antialiased">
            Welcome to the ultimate destination for Nike enthusiasts!
          </p>
          <p className="antialiased text-[12px]">
            Step into style and performance with our curated collection of Nike
            shoes.
          </p>
          <button className="w-[80px] h-[30px] font-bold text-[12px] antialiased text-black bg-white">
            NIKE
          </button>
        </div>
        <Image
          src="/air-force.png"
          width={500}
          height={500}
          alt="air-force"
          className="px-[20px]"
        />
      </div>
    </div>
  );
}
