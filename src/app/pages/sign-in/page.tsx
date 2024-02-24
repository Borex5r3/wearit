import Image from "next/image";
import InputContainer from "./inputContainer";
import Link from "next/link";

export default function () {
  const inputs = [
    {
      title: "email address :",
      placeholder: "Email",
      type: "text",
      id: 0,
    },
    {
      title: "password :",
      placeholder: "Password",
      type: "password",
      id: 1,
    },
  ];
  return (
    <div className="bg-white text-greypayne flex flex-col items-center space-y-[32px] min-w-[280px] pb-[48px]">
      <div className="w-full flex flex-col">
        <button className="font-medium text-[15px] antialiased uppercase text-center border-b border-greypayne w-full py-[16px]">
          join us
        </button>
        <Link
          href={"/pages/sign-in"}
          className="font-bold text-[15px] antialiased uppercase text-center border-b-[4px] border-greypayne w-full py-[16px]"
        >
          sign in
        </Link>
      </div>
      {/* form */}
      <div className="w-full px-[20px] space-y-[20px]">
        {inputs.map((item) => {
          return <InputContainer key={item.id} item={item} />;
        })}
      </div>
      {/* button */}
      <div className="w-full px-[20px]">
        <button className=" uppercase text-[15px] font-bold antialiased bg-eggplant text-white py-[24px] w-full">
          sign in
        </button>
      </div>
      <p className="font-bold text-[14px] antialiased uppercase text-black">
        or sign in with...
      </p>
      {/* google and facebook */}
      <div className="space-y-[16px] flex flex-col w-full px-[20px]">
        <button className="px-[32px] py-[12px] border-[2px] border-greypayne flex justify-center">
          <div className="space-x-[12px] flex items-center">
            <Image src="/search.png" width={24} height={24} alt="google icon" />
            <p className="text-[13px] antialiased font-bold uppercase">
              google
            </p>
          </div>
        </button>
        <button className="px-[32px] py-[12px] border-[2px] border-greypayne flex justify-center">
          <div className="space-x-[12px] flex items-center">
            <Image
              src="/facebook.png"
              width={24}
              height={24}
              alt="facebook icon"
            />
            <p className="text-[13px] antialiased font-bold uppercase">
              facebook
            </p>
          </div>
        </button>
      </div>
    </div>
  );
}
