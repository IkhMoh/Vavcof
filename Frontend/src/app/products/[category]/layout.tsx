import SideMenu from "@/components/SideMenu";
import React from "react";

type Props = {
  children: React.ReactNode;
  params: {
    category: string;
  };
};

export default async function RootLayout({ children, params }: Props) {
  const { category } = await params;

  return (
    <div className="md:flex lg:flex-row lg:gap-3 w-full ">
      <div className=" md:w-1/6 space-y-2 ">
        <SideMenu category={category} />
      </div>
      <div className=" md:w-5/6 ">{children}</div>
    </div>
  );
}
