"use client";
import Footer from "@/app/pages/footer";
import NavBarMobile from "@/app/pages/navBarMobile";
import NavBarDesktop from "./navBarDesktop";
import { useState } from "react";
import FooterDesktop from "./footerDesktop";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [showProfileBar, setShowProfileBar] = useState(false);

  return (
    <div className="flex h-screen flex-col">
      {/* <NavBarMobile /> */}
      <NavBarDesktop
        showProfileBar={showProfileBar}
        setShowProfileBar={setShowProfileBar}
      />
      <div className="flex-grow md:overflow-y-auto">
        {children}
        {/* <Footer /> */}
        <FooterDesktop />
      </div>
    </div>
  );
}
