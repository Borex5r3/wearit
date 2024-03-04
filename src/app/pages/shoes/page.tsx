"use client";
import { useContext } from "react";
import Categories from "../../components/categories";
import { shoesCategory } from "../data";
import { BreakpointContext } from "../../layout";
import CategoriesDesktop from "@/app/components/categoriesDesktop";

const Shoes =  () =>{
  const { isBreakpoint } = useContext(BreakpointContext);

  return (
    <>
      {isBreakpoint ? (
        <Categories category={shoesCategory} />
      ) : (
        <CategoriesDesktop category={shoesCategory} />
      )}
    </>
  );
}

export default Shoes;