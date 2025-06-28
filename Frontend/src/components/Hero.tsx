"use client";
import React, { useContext } from "react";
import Image from "next/image";
import { PhotosContext } from "@/contexts/photos";

function Hero() {
  const photos = useContext(PhotosContext);
  return (
    <section className="bg-[var(--Light)] text-[var(--Dark)] dark:bg-[var(--Dark)] dark:text-[var(--Light)] transition-all duration-300  ">
       <div className="max-w-lg md:max-w-none ml-4 flex justify-center mt-4">
        <h2 className="text-2xl font-semibold sm:text-3xl">
          Discover the True Taste of Coffee at VavCof
        </h2>
      </div>
       <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8 ">
        <div className="md:flex md:justify-between ">
          <div className="md:col-span-3">
            {/* <img
              src="https://images.unsplash.com/photo-1731690415686-e68f78e2b5bd?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="rounded "
              alt=""
            /> */}
            <Image
              src={photos[0].image[0].url}
              alt={photos[0].place}
              width={1300}
              height={1300}
              className="rounded "
            />
          </div>
          <div className=" md:col-span-2 flex flex-col justify-center space-y-4">
            <div className="max-w-lg md:max-w-none ml-4">
              {/* <h2 className="text-2xl font-semibold sm:text-3xl">
                Discover the True Taste of Coffee at VavCof
              </h2> */}

              <p className="mt-4 ">
                Welcome to VavCof – Where your coffee story begins! Enjoy the
                finest coffee and drinks in a cozy atmosphere with exceptional
                service that makes every visit unforgettable.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
