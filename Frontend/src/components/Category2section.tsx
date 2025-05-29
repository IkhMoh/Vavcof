import React from "react";
import Categorycard from "./Categorycard";
async function Categorysection() {
  const res = await fetch("http://localhost:1337/api/categories?populate=*");
  const data = await res.json();
  console.log(data);
  return (
    <section className=" bg-[var(--Light)] text-[var(--Dark)] dark:bg-[var(--Dark)] dark:text-[var(--Light)] transition-all duration-300  my-20">
      <h1 className="text-4xl font-bold ml-2 my-2"> Food Categories </h1>
      <div className="px-4 py-2 mx-6">
        <div className="grid gap-2 sm:grid-cols-1 lg:grid-cols-4 ">
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
          {/* <Categorycard /> */}
        </div>
      </div>
    </section>
  );
}

export default Categorysection;
