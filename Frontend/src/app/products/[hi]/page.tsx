import Workspace from "@/components/Workspace";
import React from "react";

function page() {
  return (
    <div className="">
      <div className="lg:grid lg:grid-cols-4  lg:gap-3  bg-amber-100 w-full">
        <div className="lg:col-span-12 mt-2 w-full">
          <Workspace />
        </div>
      </div>
    </div>
  );
}

export default page;
