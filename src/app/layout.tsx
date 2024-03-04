"use client";
import Footer from "@/app/pages/footer";
import NavBarMobile from "@/app/pages/navBarMobile";
import NavBarDesktop from "./pages/navBarDesktop";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import FooterDesktop from "./pages/footerDesktop";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const useMediaQuery = (width: any) => {
  const [targetReached, setTargetReached] = useState(false);

  const updateTarget = useCallback((e: any) => {
    if (e.matches) {
      setTargetReached(true);
    } else {
      setTargetReached(false);
    }
  }, []);

  useEffect(() => {
    const media = window.matchMedia(`(max-width: ${width}px)`);
    media.addListener(updateTarget);

    // Check on mount (callback is not called until a change occurs)
    if (media.matches) {
      setTargetReached(true);
    }

    return () => media.removeListener(updateTarget);
  }, []);

  return targetReached;
};
export const BreakpointContext = createContext({ isBreakpoint: false });

export default function Layout({ children }: { children: React.ReactNode }) {
  const [showProfileBar, setShowProfileBar] = useState(false);
  const isBreakpoint = useMediaQuery(1366);

  return (
    <html lang="en">
      <body className={inter.className}>
        <BreakpointContext.Provider value={{ isBreakpoint: isBreakpoint }}>
          <div className="flex h-screen flex-col text-white">
            {isBreakpoint ? (
              <NavBarMobile />
            ) : (
              <NavBarDesktop
                showProfileBar={showProfileBar}
                setShowProfileBar={setShowProfileBar}
              />
            )}
            <div className="flex-grow md:overflow-y-auto bg-black">
              {children}
              {isBreakpoint ? <Footer /> : <FooterDesktop />}
            </div>
          </div>
        </BreakpointContext.Provider>
      </body>
    </html>
  );
}
