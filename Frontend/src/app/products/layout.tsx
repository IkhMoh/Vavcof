import SideMenu from "@/components/SideMenu";
import React from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex  lg:flex-row lg:gap-3 w-full  bg-orange-200">
      <div className="flex flex-col w-1/6 space-y-2   ">
        <SideMenu />
      </div>
      <div className="flex w-5/6 ">{children}</div>
    </div>
  );
}
