import Workspace from "@/components/Workspace";
import React from "react";

function page() {
  return (
    <div className="lg:grid lg:grid-cols-4  lg:gap-3 w-full bg-orange-200 min-h-9/12 overflow-y-auto">
      <div className="lg:col-span-12 mt-2 ">
        <Workspace />
      </div>
    </div>
  );
}

export default page;
