import React from "react";
import Categorycard from "./Categorycard";
async function Categorysection() {
  const res = await fetch("http://localhost:1337/api/categories?populate=*",{
    cache: "force-cache",
  });
  const data = await res.json();
   return (
    <section className=" bg-[var(--Light)] text-[var(--Dark)] dark:bg-[var(--Dark)] dark:text-[var(--Light)] transition-all duration-300  my-20">
      <h1 className="text-4xl font-bold ml-2 my-2"> Food Categories </h1>
      <div className="px-4 py-2 mx-6">
        <ul className="grid gap-2 sm:grid-cols-2  lg:grid-cols-5  justify-center justify-items-center w-full py-4 overflow-y-auto">
          {data.data.map((data: any) => {
            const imageUrl = data.image.url;
            return (
              <Categorycard
                key={data.id}
                image={imageUrl}
                category={data.category}
              />
            );
          })}
           
        </ul>
      </div>
    </section>
  );
}

export default Categorysection;
