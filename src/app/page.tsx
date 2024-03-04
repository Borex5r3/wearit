"use client";
import { useContext } from "react";
import LandingPageDesktop from "./pages/landing-page/desktop/landing-page-desktop";
import LandingPageMobile from "./pages/landing-page/mobile/landing-page-mobile";
import { BreakpointContext } from "./layout";

const Home =  () => {
  const { isBreakpoint } = useContext(BreakpointContext);

  return isBreakpoint ? <LandingPageMobile /> : <LandingPageDesktop />;
}

export default Home;