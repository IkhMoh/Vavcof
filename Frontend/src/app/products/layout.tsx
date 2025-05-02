import SideMenu from "@/components/SideMenu";
import React from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex  lg:flex-row lg:gap-3 w-full ">
      <div className="flex flex-col w-1/6 space-y-2 h-screen  ">
        <SideMenu />
      </div>
      <div className="flex flex-col w-5/6 right-0 h-screen overflow-auto ">
        {children}
      </div>
    </div>
  );
}
