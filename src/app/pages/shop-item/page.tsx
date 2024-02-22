import Image from "next/image";
import ShopItem from "./shop-item";

export default function () {
    const item = {
        title: 'adidas Football Tiro 24 t-shirt in navy',
        price: '28.49 $',
        imageSource: '/air-force.png',
        imageWidth: 200,
        imageHeight: 200,
    }
    return (<ShopItem item={item} />);

}
