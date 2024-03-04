import Link from "next/link";

const PartFour = () => {
  return (
    <div className="h-[700px] bg-eggplant flex flex-col justify-evenly">
      <div className="h-[3px] w-full bg-white" />
      <div className="flex flex-col space-y-[36px] text-center">
        <p className="font-bold text-[120px] antialiased">WearIt</p>
        <Link
          href={"/pages/shoes"}
          className="font-medium text-[20px] antialiased underline"
        >
          Start Shopping
        </Link>
      </div>
      <div className="h-[3px] w-full bg-white" />
    </div>
  );
};

export default PartFour;