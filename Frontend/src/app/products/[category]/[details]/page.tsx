import React from "react";
import Carddetails from "@/components/Carddetails";

type Params = {
  details: string;
};
async function page({ params }: { params: Params }) {
  const { details } = params;
  const res = await fetch(
    `http://localhost:1337/api/products?filters[id][$eq]=${details}&populate=*`
  );

  const data = await res.json();
  console.log(data.data[0]);
  return (
    <div className="bg-red-400 h-3/4 ">
      <Carddetails details={data.data[0]} />
    </div>
  );
}

export default page;
