import React from "react";
import MaterialsCard from "./MaterialsCard";

async function MaterialsSection() {
  const res = await fetch("http://localhost:1337/api/materials?populate=*", {
    cache: "force-cache",
  });
  const data = await res.json();
  return (
    <section className=" bg-[var(--Light)] text-[var(--Dark)] dark:bg-[var(--Dark)] dark:text-[var(--Light)] transition-all duration-300  my-20">
      <h1 className="text-4xl font-bold ml-2 my-2"> Materials Categories </h1>
      <div className="px-4 py-2">
        <div className="gap-2 md:flex  justify-between justify-items-center w-full py-4 overflow-y-auto">
          {data.data.map((data: any) => {
            const imageUrl = data.image.url;
            return (
              <MaterialsCard
                key={data.id}
                image={imageUrl}
                category={data.category}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default MaterialsSection;
