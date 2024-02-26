import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

export default function ({
  showProfileBar,
  setShowProfileBar,
  mouseClickPosition,
}: {
  showProfileBar: boolean;
  setShowProfileBar: any;
  mouseClickPosition: any;
}) {
  const profileBarRef = useRef();
  const print = (e: any) => {
    console.log(e.clientX);
  };
  if (showProfileBar) {
    const divX = profileBarRef.current?.offsetLeft;
    const divY = profileBarRef.current?.offsetTop;
    const { x, y } = mouseClickPosition;
    if (!(divX >= x && divX + 280 < x && divY >= y && divY + 105 < y)) {
      setShowProfileBar(!showProfileBar);
    }
    console.log(divX, divY);
  }
  return (
    <div className="min-w-[280px] bg-eggplant">
      <div className="flex justify-between px-[200px] py-[16px] items-center h-full">
        <Link
          href={"/pages/landing-page"}
          className="text-[32px] font-bold antialiased"
        >
          WearIt
        </Link>
        <div className="flex space-x-[26px]">
          <Link
            href={"/pages/clothes"}
            className="text-[20px] font-light antialiased px-[72px]"
          >
            Clothes
          </Link>
          <Link
            href={"/pages/shoes"}
            className="text-[20px] font-light antialiased px-[72px]"
          >
            Shoes
          </Link>
        </div>
        <div className="relative flex space-x-[52px] h-full items-center">
          <button onClick={() => setShowProfileBar(!showProfileBar)}>
            <Image
              src="/profile.png"
              width={30}
              height={30}
              alt="profile"
            ></Image>
          </button>
          <Link href={"/pages/cart"}>
            <Image
              src="/shopping-cart.png"
              width={30}
              height={30}
              alt="shopping-cart"
            ></Image>
          </Link>
          {/* showSideBar */}
          <div
            onMouseDown={print}
            className={`absolute z-50 pl-[40px] py-[20px] flex flex-col w-[280px] h-[105px] justify-center items-center top-[64px] left-[-300px] bg-[white] duration-200 ${
              showProfileBar ? " scale-y-100" : "scale-y-0"
            } origin-top ease-in-out text-black space-y-[24px]`}
            ref={profileBarRef}
          >
            <Link
              href={"/pages/cart"}
              className="flex space-x-[28px] items-center w-full"
            >
              <Image
                src="/shopping-cart-bar.png"
                width={18}
                height={18}
                alt="shopping-cart"
              ></Image>
              <p className="text-[14px] font-medium antialiased">My Cart</p>
            </Link>
            <Link
              href={"/pages/sign-in"}
              className="flex space-x-[28px] items-center w-full"
            >
              <Image
                src="/sign-in.png"
                width={18}
                height={18}
                alt="sign-out"
              ></Image>
              <p className="text-[14px] font-medium antialiased">Sign In</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
