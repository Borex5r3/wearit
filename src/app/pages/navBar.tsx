import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function () {
  const [showSideBar, setShowSideBar] = useState(false);
  const print = () => {
    setShowSideBar(!showSideBar);
  };
  return (
    <div className="min-w-[280px] bg-eggplant">
      <div className="flex justify-between px-[20px] py-[12px]">
        <button onClick={print}>
          <Image
            src="/menu.png"
            width={25}
            height={25}
            alt="menu"
            className=""
          ></Image>
        </button>
        <Link href={"/pages/landing-page"} className="text-[20px] font-bold">
          WearIt
        </Link>
        <Link href={"/pages/cart"}>
          <Image
            src="/shopping-cart.png"
            width={30}
            height={30}
            alt="shopping-cart"
          ></Image>
        </Link>
      </div>
      {/* showSideBar */}
      <div
        className={`fixed z-50 min-w-[280px] flex justify-center items-center top-0 right-0 left-0 bottom-0 bg-[#533747] duration-200 ${
          showSideBar ? " scale-x-100" : "scale-x-0"
        } origin-left ease-in-out`}
      >
        <button>
          <Image
            src="/close.png"
            width={20}
            height={20}
            alt="close"
            onClick={print}
            className="absolute top-[20px] right-[20px] hover:rotate-45 duration-200"
          ></Image>
        </button>
        <div className="flex flex-col h-full justify-between py-[120px] text-center text-[24px] font-light antialiased">
          <div className="space-y-[80px] flex flex-col text-center text-[24px] font-light antialiased">
            <Link href="/pages/clothes" onClick={print}>
              <p className="">Clothes</p>
            </Link>
            <Link href="/pages/shoes" onClick={print}>
              <p className="">Shoes</p>
            </Link>
          </div>
          <Link href="/pages/sign-in" onClick={print}>
            <p className="">Sign In</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
