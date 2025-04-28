import React from "react";
import Categorycard from "./Categorycard";
function Categorysection() {
  return (
    <section className="bg-orange-200  my-20">
      <div className=" px-4 py-2 mx-6">
        <h1 className="text-4xl font-bold  my-2"> Food Categories  </h1>
        <div className="flex space-x-3">
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
