import React from "react";
// import Card from "@/components/Card";
type Params = {
  category: string;
  details: string;
};
async function page({ params }: { params: Params }) {
  const { category, details } = params;
  const res = await fetch(`http://localhost:1337/api/products/:${details}`);
  
  const data = await res.json();
  console.log(data);
  return (
    <div className="bg-red-400 w-lvh h-lvh">
      {/* <Card image={data.data.Image} title={data.data.Title} price={data.data.Price} /> */}
      <div>
        <h1>Category: {category}</h1>
        <h2>Product ID: {details}</h2>
      </div>
    </div>
  );
}

export default page;
