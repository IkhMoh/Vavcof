import React from "react";
import Carddetails from "@/components/Carddetails";

type Params = {
  details: string;
};
async function page({ params }: { params: Params }) {
  const { details } = params;
  // await new Promise((res) => setTimeout(res, 1000));

  const res = await fetch(
    `http://localhost:1337/api/products?filters[id][$eq]=${details}&populate=*`,
    {
      next: {
        revalidate: 120000,
      },
    }
  );

  const data = await res.json();
  return (
    <div className="bg-white h-fit mt-4 rounded-md">
      <Carddetails details={data.data[0]} />
    </div>
  );
}

export default page;
