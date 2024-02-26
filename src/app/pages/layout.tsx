"use client";
import Footer from "@/app/pages/footer";
import NavBarMobile from "@/app/pages/navBarMobile";
import NavBarDesktop from "./navBarDesktop";
import { useState } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [mouseClickPosition, setMouseClickPosition] = useState({ x: 0, y: 0 });
  const [showProfileBar, setShowProfileBar] = useState(false);

  const handleMouseClick = (e: any) => {
    if (showProfileBar) {
      const obj = {
        x: e.clientX,
        y: e.clientY,
      };
      setMouseClickPosition(obj);
    }
  };
  return (
    <div onClick={handleMouseClick} className="flex h-screen flex-col">
      {/* <NavBarMobile /> */}
      <NavBarDesktop
        showProfileBar={showProfileBar}
        setShowProfileBar={setShowProfileBar}
        mouseClickPosition={mouseClickPosition}
      />
      <div className="flex-grow md:overflow-y-auto">
        {children}
        <Footer />
      </div>
    </div>
  );
}
