"use client";
import ShopItem from "./mobile/shop-item";
import ShopItemDesktop from "./desktop/shop-item";
import { useContext } from "react";
import { BreakpointContext } from "../../layout";

const ShopItemPage = () => {
  const { isBreakpoint } = useContext(BreakpointContext);
  const item = {
    title: "adidas Football Tiro 24 t-shirt in navy",
    price: "28.49 $",
    imageSource: "/air-force.png",
    imageWidth: 350,
    imageWidthDesktop: 1000,
    imageHeight: 350,
    imageHeightDesktop: 1000,
    imageIds: [
      "image1",
      "image2",
      "image3",
      "image4",
      "image5",
      "image6",
      "image7",
    ],
    details:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam laboriosam aliquam, in vitae atque ullam itaque dolorum nisi recusandae qui quasi. Accusamus temporibus recusandae illo, quod perspiciatis eum corrupti nam eaque nobis eligendi illum tempore ducimus ut perferendis? Eius iste eveniet magnam dolore provident aliquam dolor dolores ex deserunt? Error, iste iure aspernatur repellat sapiente rerum nulla? Qui sunt neque eaque ex sapiente sint incidunt perspiciatis accusamus quibusdam exercitationem perferendis consequuntur odit voluptate numquam, dicta culpa laborum sit quas corporis sequi? Ad aut quis delectus, officia aspernatur a architecto quaerat fugit totam soluta. Perspiciatis unde corporis iure, adipisci eius consectetur.",
  };

  return isBreakpoint ? (
    <ShopItem item={item} />
  ) : (
    <ShopItemDesktop item={item} />
  );
  // return <ShopItem item={item} />;
};

export default ShopItemPage;
