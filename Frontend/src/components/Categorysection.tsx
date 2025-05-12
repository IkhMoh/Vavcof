import React from "react";
import Categorycard from "./Categorycard";
function Categorysection() {
  return (
    <section className="bg-orange-200  my-20">
      <h1 className="text-4xl font-bold ml-2 my-2"> Food Categories </h1>
      <div className="px-4 py-2 mx-6">
        <div className="grid gap-2 sm:grid-cols-1 lg:grid-cols-4 ">
          <Categorycard />
          <Categorycard />
          <Categorycard />
          <Categorycard />
        </div>
      </div>
    </section>
  );
}

export default Categorysection;
