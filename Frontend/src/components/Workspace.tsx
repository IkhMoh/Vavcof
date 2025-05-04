import React from "react";
import Card from "./Card";

function Workspace() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen">
      <h1 className="text-2xl font-bold ml-4 ">Breakfast Menu</h1>
      <ul className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4 px-6 items-center justify-items-center my-6 overflow-y-auto ">
        <Card />
        <Card />
        <Card />   
        <Card />
        <Card />   
        <Card />   
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </ul>
    </div>
  );
}

export default Workspace;
