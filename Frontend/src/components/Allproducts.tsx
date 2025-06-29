"use client";

import Link from "next/link";
import React, { useContext } from "react";
import { PhotosContext } from "@/contexts/photos";
import Image from "next/image";
function Allproducts() {
  const photos = useContext(PhotosContext);
  const image = photos[2].image[0].url;
  // const image = "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?q=80&w=2670&auto=format&fit=crop"
  console.log(image);
  return (
    <div className="my-20">
      <div className="">
        <section
        // className={`overflow-hidden bg-[url(${image})] h-96 bg-cover bg-top bg-no-repeat`}
        >
          <Image
            src={photos[2].image[0].url}
            alt={photos[2].place}
            width={1300}
            height={300}
            className="rounded"
          />
          <div className="bg-black/50 p-8 md:p-12 lg:px-16 lg:py-24">
            <div className="text-center ltr:sm:text-left rtl:sm:text-right">
              <h2 className="text-2xl font-bold text-white sm:text-3xl md:text-5xl">
                Latest Shirts
              </h2>

              <p className="hidden max-w-lg text-white/90 md:mt-6 md:block md:text-lg md:leading-relaxed">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Inventore officia corporis quasi doloribus iure architecto quae
                voluptatum beatae excepturi dolores.
              </p>

              <div className="mt-4 sm:mt-8">
                <Link
                  href={"/products/All"}
                  className="inline-block rounded-full bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:ring-3 focus:ring-yellow-400 focus:outline-hidden"
                >
                  Get Yours Today
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Allproducts;
