import Image from "next/image";

const PartThree = () => {
  return (
    <div
      className={`min-w-[280px] h-[700px] flex flex-col bg-[url('/nike-background.png')] bg-contain bg-center justify-center`}
    >
      <div className="flex justify-around items-center px-[200px] h-full">
        <Image
          src="/air-force.png"
          width={700}
          height={700}
          alt="air-force"
          className="px-[20px]"
        />
        <div className="flex flex-col justify-center space-y-[52px] bg-black border-x-[2px] px-[80px] h-full w-[520px]">
          <p className="text-[30px] font-bold antialiased">
            Welcome to the ultimate destination for Nike enthusiasts!
          </p>
          <p className="antialiased text-[16px]">
            Step into style and performance with our curated collection of Nike
            shoes.
          </p>
          <button className="w-[190px] h-[50px] font-bold text-[20px] antialiased text-black bg-white">
            NIKE
          </button>
        </div>
      </div>
    </div>
  );
}

export default PartThree;