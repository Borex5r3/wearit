'use client';
import Categories from "../categories";

export default function () {
  const items = [
    {
      imageSource: "/air-force.png",
      imageWidth: 250,
      imageHeight: 250,
      title: "Nike Air Force 1 '07 trainers in triple white",
      price: "109.95 $",
    },
    {
      imageSource: "/air-force.png",
      imageWidth: 250,
      imageHeight: 250,
      title: "Nike Air Force 1 '07 trainers in triple white",
      price: "109.95 $",
    },
    {
      imageSource: "/air-force.png",
      imageWidth: 250,
      imageHeight: 250,
      title: "Nike Air Force 1 '07 trainers in triple white",
      price: "109.95 $",
    },
    {
      imageSource: "/air-force.png",
      imageWidth: 250,
      imageHeight: 250,
      title: "Nike Air Force 1 '07 trainers in triple white",
      price: "109.95 $",
    },
    {
      imageSource: "/air-force.png",
      imageWidth: 250,
      imageHeight: 250,
      title: "Nike Air Force 1 '07 trainers in triple white",
      price: "109.95 $",
    },
  ];
  const category = {
    title: "All Clothes",
    category1: "T-Shirts",
    category2: "Hoodies",
    category3: "Jeans",
    category4: "Jackets",
    items: items,
  };
  return <Categories category={category}/>;
}
