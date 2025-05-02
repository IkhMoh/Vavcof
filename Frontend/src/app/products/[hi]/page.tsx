import Workspace from "@/components/Workspace";
import React from "react";

function page() {
  return (
    <div className="lg:grid lg:grid-cols-4  lg:gap-3 w-full bg-orange-200">
      <div className="lg:col-span-12 mt-2 w-full">
        <Workspace />
      </div>
    </div>
  );
}

export default page;
