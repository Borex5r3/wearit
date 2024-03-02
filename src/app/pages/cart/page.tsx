"use client";
import Cart from "./mobile/cart";
import CartDesktop from "./desktop/cart";
import { useContext } from "react";
import { BreakpointContext } from "../layout";

export default function () {
  const { isBreakpoint } = useContext(BreakpointContext);

  const items = [
    {
      title: "Calvin Klein hero logo comfort t-shirt in purple",
      price: "50.00 $",
      imageSource: "/partTwoImage1.png",
      imageWidth: 250,
      imageHeight: 250,
      size: "L",
      quantity: "1",
      id: 0,
    },
    {
      title: "Calvin Klein hero logo comfort t-shirt in purple",
      price: "50.00 $",
      imageSource: "/partTwoImage1.png",
      imageWidth: 250,
      imageHeight: 250,
      size: "L",
      quantity: "1",
      id: 1,
    },
    {
      title: "Calvin Klein hero logo comfort t-shirt in purple",
      price: "50.00 $",
      imageSource: "/partTwoImage1.png",
      imageWidth: 250,
      imageHeight: 250,
      size: "L",
      quantity: "1",
      id: 2,
    },
    {
      title: "Calvin Klein hero logo comfort t-shirt in purple",
      price: "50.00 $",
      imageSource: "/partTwoImage1.png",
      imageWidth: 250,
      imageHeight: 250,
      size: "L",
      quantity: "1",
      id: 3,
    },
  ];
  // const items : any = [];
  return (
    <>{isBreakpoint ? <Cart items={items} /> : <CartDesktop items={items} />}</>
  );
}
