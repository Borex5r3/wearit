"use client";
import { useContext } from "react";
import LandingPageDesktop from "./desktop/landing-page-desktop";
import LandingPageMobile from "./mobile/landing-page-mobile";
import { BreakpointContext } from "../layout";

export default function () {
  const { isBreakpoint } = useContext(BreakpointContext);

  return (
    <>{isBreakpoint ? <LandingPageMobile /> : <LandingPageDesktop />}</>
    // // <LandingPageMobile />
    // <LandingPageDesktop />
  );
}
