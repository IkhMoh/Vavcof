import Workspace from "@/components/Workspace";
import React, { Suspense } from "react";
import CardsLoading from "@/components/CardsLoading";
type Params = {
  category: string;
};
async function page({ params }: { params: Params }) {
  const { category } = await params;

  return (
    <div className="lg:grid lg:grid-cols-4  lg:gap-3 w-full bg-[var(--Light)] text-[var(--Dark)] dark:bg-[var(--Dark)] dark:text-[var(--Light)] transition-all duration-300  min-h-9/12 overflow-y-auto">
      <div className="lg:col-span-12 mt-2 ">
        <Suspense fallback={<CardsLoading/>}>
          <Workspace category={category} />
        </Suspense>
      </div>
    </div>
  );
}

export default page;
