import Workspace from "@/components/Workspace";
import React from "react";
type Params = {
  category: string;
};
function page({ params }: { params: Params }) {
  const { category } = params;
  console.log(category)
  return (
    <div className="lg:grid lg:grid-cols-4  lg:gap-3 w-full bg-orange-200 min-h-9/12 overflow-y-auto">
      <div className="lg:col-span-12 mt-2 ">
        <Workspace category={category} />
      </div>
    </div>
  );
}

export default page;
