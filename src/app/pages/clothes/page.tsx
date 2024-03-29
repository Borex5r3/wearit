"use client";
import CategoriesDesktop from "@/app/components/categoriesDesktop";
import Categories from "../../components/categories";
import { clothesCategory } from "../data";
import { BreakpointContext } from "../../layout";
import { useContext } from "react";

const ClothesPage =  () => {
  const { isBreakpoint } = useContext(BreakpointContext);

  return (
    <>{isBreakpoint ? <Categories category={clothesCategory} /> : <CategoriesDesktop category={clothesCategory} />}</>
    // // <LandingPageMobile />
    // <LandingPageDesktop />
  );
}

export default ClothesPage;