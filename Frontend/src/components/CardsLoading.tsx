import React from "react";
import CardLoading from "./CardLoading";
const CardsLoading = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold pl-4  shadow-2xl rounded-xl">Menu</h1>
      <div className="flex flex-col items-center w-full h-screen dark:bg-[#222222] ">
        <ul className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4   w-full py-4 ">
            <CardLoading/>
            <CardLoading/>
            <CardLoading/>
            <CardLoading/>
            <CardLoading/>
            <CardLoading/>
            <CardLoading/>
            <CardLoading/>
            <CardLoading/>
            <CardLoading/>
        </ul>
      </div>
    </div>
  );
};

export default CardsLoading;
