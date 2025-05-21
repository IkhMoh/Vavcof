import Link from "next/link";
import React from "react";
import { IoArrowBackOutline } from "react-icons/io5";

const page = async () => {
  const res = await fetch("http://localhost:1337/api/products?populate=*");
  const data = await res.json();
  const Desserts = data.data.filter((product: any) => {
    return product.category === "Desserts";
  });
  const HotCoffee = data.data.filter((product: any) => {
    return product.category === "HotCoffee";
  });
  const IcedCoffee = data.data.filter((product: any) => {
    return product.category === "IcedCoffee";
  });
  const Drinks = data.data.filter((product: any) => {
    return product.category === "Drinks";
  });
  const Breakfast = data.data.filter((product: any) => {
    return product.category === "Breakfast";
  });

  return ( 
    <div className="w-full h-fit">
      <div className="pl-2 md:pl-12 pt-1 md:pt-4">
        <Link href="/">
        <div className="h-fit w-fit p-3 rounded-full bg-gray-300 ">
          <IoArrowBackOutline className="h-7 w-7" />
        </div>
        </Link>
      </div>

      <div className="flex items-center justify-center w-full">
        <h1 className="text-3xl md:text-4xl">Menu Page</h1>{" "}
      </div>
      <div className="flex min-h-screen md:mx-7">
        {/*  */}
        <div className="m-1 md:m-6 w-full space-y-4">
          <div>
            <h1 className="text-2xl md:text-4xl">Drinks</h1>
            <div className="space-y-2.5 mt-6 mb-4">
              {Drinks.map((product: any) => {
                return (
                  <div
                    key={product.id}
                    className="flex justify-between px-0.5 md:px-2 bg-stone-200 rounded-md "
                 >
                    <p className="text-md md:text-2xl">{product.title}</p>
                    <p className="text-md md:text-2xl">{product.price}$</p>
                  </div>
                );
              })}
            </div>
          </div>
          <div>
            <h1 className="text-2xl md:text-4xl">Iced Coffee</h1>
            <div className="space-y-2.5 mt-6 mb-4">
              {IcedCoffee.map((product: any) => {
                return (
                  <div
                    key={product.id}
                    className="flex justify-between px-0.5 md:px-2 bg-stone-200 rounded-md "
                 >
                    <p className="text-md md:text-2xl">{product.title}</p>
                    <p className="text-md md:text-2xl">{product.price}$</p>
                  </div>
                );
              })}
            </div>
          </div>
          <div>
            <h1 className="text-2xl md:text-4xl">Hot Coffee</h1>
            <div className="space-y-2.5 mt-6 mb-4">
              {HotCoffee.map((product: any) => {
                return (
                  <div
                    key={product.id}
                    className="flex justify-between px-0.5 md:px-2 bg-stone-200 rounded-md "
                 >
                    <p className="text-md md:text-2xl">{product.title}</p>
                    <p className="text-md md:text-2xl">{product.price}$</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        {/* the line */}
        <div className=" w-fit my-6">
          <hr className="w-px h-full bg-black border-0" />
        </div>
        {/*  */}
        <div className="m-1 md:m-6 w-full space-y-4">
          <div>
            <h1 className="text-2xl md:text-4xl">Breakfast</h1>
            <div className="space-y-2.5 mt-6 mb-4">
              {Breakfast.map((product: any) => {
                return (
                  <div
                    key={product.id}
                    className="flex justify-between px-0.5 md:px-2 bg-stone-200 rounded-md "
                 >
                    <p className="text-md md:text-2xl">{product.title}</p>
                    <p className="text-md md:text-2xl">{product.price}$</p>
                  </div>
                );
              })}
            </div>
          </div>
          <div>
            <h1 className="text-2xl md:text-4xl">Desserts</h1>
            <div className="space-y-2.5 mt-6 mb-4">
              {Desserts.map((product: any) => {
                return (
                  <div
                    key={product.id}
                    className="flex justify-between px-0.5 md:px-2 bg-stone-200 rounded-md "
                 >
                    <p className="text-md md:text-2xl">{product.title}</p>
                    <p className="text-md md:text-2xl">{product.price}$</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
