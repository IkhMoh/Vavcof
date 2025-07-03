"use client";
import Link from "next/link";
import React, { useContext } from "react";
import { PhotosContext } from "@/contexts/photos";
import Image from "next/image";
import { ImagesSlider } from "./images-slider";
function Allproducts() {
  const photos = useContext(PhotosContext);
  const image = photos[1].image[0].url;
  // const image = "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?q=80&w=2670&auto=format&fit=crop"
  console.log(image);
  return (
    <div className="my-20">
      <div className="">
        <section
          // className={`overflow-hidden h-96  bg-top bg-no-repeat rounded`}
          className="group relative block bg-black w-full h-[594px]"
        >
          <ImagesSlider
            images={photos[2].image.map((image: any) => image.url)}
            autoplay={true}
            direction="up"
            className="absolute inset-0  object-cover opacity-50 transition-opacity group-hover:opacity-50	"
          >
            <Image
              src={photos[2].image[0].url}
              alt={photos[2].place}
              width={1300}
              height={200}
              className="h-[474px] w-full"
            />
          </ImagesSlider>
          <div className="relative flex bg-black/500 p-8 md:p-12 lg:px-16 lg:py-24 z-50 justify-center items-center h-[594px]">
            <div className="text-center ltr:sm:text-left rtl:sm:text-right ">
              <div className="mt-4 sm:mt-8">
                <Link
                  href={"/products/All"}
                  className="inline-block rounded-full bg-[var(--pAccent)]/80 px-8 py-3 text-sm font-medium text-white transition hover:bg-[var(--pAccent)] focus:ring-3 focus:ring-[var(--pAccent)]/20 focus:outline-hidden"
                >
                 Order Now
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
