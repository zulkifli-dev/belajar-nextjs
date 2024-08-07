"use client";
import { ReactNode } from "react";
import Sidebar from "@/components/layout/sidebar";
import Topbar from "@/components/layout/topbar";
import Footer from "@/components/layout/footer";

function layout({ children }: { children: ReactNode }) {
  return (
    <div className="w-screen h-screen bg-slate-50 flex">
      <Sidebar />
      {/* main */}
      <div className="w-full flex flex-col">
        <Topbar />
        {/* content */}
        <main className="p-4 flex-1">{children}</main>
        <Footer />
      </div>
    </div>
  );
}

export default layout;
