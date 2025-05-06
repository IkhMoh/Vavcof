import React from "react";
import Card from "./Card";

async function Workspace() {
  const res = await fetch("http://localhost:1337/api/products?populate=*");
  const data = await res.json();
  console.log(data);

  return (
    <div className="flex flex-col items-center justify-center w-full h-screen">
      <h1 className="text-2xl font-bold ml-4">Breakfast Menu</h1>
      <ul className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4 px-6 items-center justify-items-center my-6 overflow-y-auto">
        {data.data.map((product: any) => {
          const images = product.image;

          return (
            <Card
              key={product.id}
              image={images}
              price={product.price}
              title={product.title}
              params={{
                category: product.category,
                id: product.id,
              }}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default Workspace;
