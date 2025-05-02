import SideMenu from "@/components/SideMenu";
import React from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col lg:flex-row lg:gap-3 w-full bg-red-600">
      <div className="flex flex-col w-1/6 space-y-2 h-screen bg-white  ">
        <SideMenu />
      </div>
      <div className="flex flex-col w-5/6 right-0 h-screen overflow-auto bg-white">
        {children}
      </div>
    </div>
  );
}
