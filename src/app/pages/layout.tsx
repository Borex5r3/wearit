"use client";
import NavBar from "@/app/pages/navBar";
import Footer from "@/app/pages/footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col">
      <NavBar />
      <div className="w-full flex-none md:w-64"></div>
      <div className="flex-grow md:overflow-y-auto">{children}</div>
      <Footer />
    </div>
  );
}
