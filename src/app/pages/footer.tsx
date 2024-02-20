import Image from "next/image";
import { useState } from "react";

export default function () {
  const [emailInput, setEmailInput] = useState("");

  return (
    <div className="w-full h-[310px] pt-[40px] min-w-[280px] pb-[20px] px-[20px] space-y-[32px] flex flex-col items-center">
      <div className="flex flex-col space-y-[24px] text-center items-center w-full max-w-[300px]">
        <p className="font-bold text-[20px]">Sign up for our emails</p>
        <p className="font-light text-[10px]">
          We'll send you updates on our latest launches and more.
        </p>
        <form
          onSubmit={() => console.log(emailInput)}
          className="border border-white flex w-full items-center"
        >
          <input
            type="email"
            id="email"
            placeholder="Email"
            className="bg-inherit mx-[12px] text-[12px] w-full outline-none"
            onChange={(e) => setEmailInput(e.target.value)}
          />
          <button type="submit">
            <div className="bg-white flex p-[8px]">
              <Image
                src="/right-arrow.png"
                width={20}
                height={20}
                alt="right-arrow"
              />
            </div>
          </button>
        </form>
      </div>
      <div className="flex flex-col items-center space-y-[20px]">
        <p className="text-[10px]">FOLLOW US</p>
        <div className="flex space-x-[20px]">
          <Image src="/instagram.png" width={30} height={30} alt="instagram" />
          <Image src="/facebook.png" width={30} height={30} alt="facebook" />
          <Image src="/linkedin.png" width={30} height={30} alt="linkedin" />
        </div>
      </div>
    </div>
  );
}
