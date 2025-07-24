import React from "react";
import Card from "./Card";
async function Workspace({ category }: { category: string }) {
  await new Promise((res) => setTimeout(res, 500)); 

  // const res = await fetch("http://localhost:1337/api/products?populate=*", {
  //   cache: "no-cache",
  // });
  
    const res = await fetch("https://vavcof-server-db.onrender.com/api/products?populate=*", {
      next: {
        revalidate: 120000,
      },
      // cache: "no-cache",
      // https://vavcof-server-db.onrender.com/api/products
    });
    const data = await res.json();
   

  console.log(data);
  let finalData = [];



  if (category === "All") {
    finalData = data.data.filter((product: any) => {
      return product.category !== "Arabica" && product.category !== "Robusta";
    });
  } else {
    finalData = data.data.filter((product: any) => {
      return product.category === category;
    });
  }
  console.log(finalData);

  return (
    <>
      <h1 className="text-2xl font-bold pl-4  shadow-2xl rounded-xl">
        {category === "HotCoffee"
          ? "Hot Coffee "
          : category === "IcedCoffee"
          ? "Iced Coffee "
          : category}{" "}
        Menu
      </h1>
      <div className="flex flex-col items-center w-full h-screen dark:bg-[#222222] ">
        <ul className="grid gap-2 sm:grid-cols-2  lg:grid-cols-4  justify-center justify-items-center w-full py-4 overflow-y-auto">
          {finalData.map((product: any) => {
            const images = product.image;

            return (
              <Card
                key={product.id}
                image={images}
                price={product.price}
                title={product.title}
                rating={product.rating}
                params={{
                  category: product.category,
                  id: product.id,
                }}
              />
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default Workspace;
