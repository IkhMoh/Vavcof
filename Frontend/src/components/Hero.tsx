"use client";
import React, { useContext } from "react";
import Image from "next/image";
import { PhotosContext } from "@/contexts/photos";
import { FlipWords } from "./flip-words";
import { motion } from "framer-motion";
import { ImagesSlider } from "./images-slider";
function Hero() {
  const photos = useContext(PhotosContext);
  return (
    <section className="bg-[var(--Light)]  text-[var(--Dark)] dark:bg-[var(--Dark)] dark:text-[var(--Light)] transition-all duration-300  ">
      <div className="mx-auto w-full  px-4 py-8 sm:px-6 lg:px-8 ">
        <div className="md:flex md:justify-between">
          <motion.div
            className="md:col-span-3 h-full w-full "
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1 }}
          >
            {/* <Image
              src={photos[0].image[0].url}
              alt={photos[0].place}
              width={1300}
              height={1300}
              className="rounded"
            /> */}
            <ImagesSlider
              images={photos[1].image.map((image: any) => image.url)}
              autoplay={true}
              direction="up"
              className="rounded-lg"
            >
              <Image
                src={photos[1].image[0].url}
                alt={photos[1].place}
                width={1300}
                height={1300}
                className=""
              />
            </ImagesSlider>
          </motion.div>
          <div className=" md:col-span-2 flex  flex-col justify-center space-y-4 max-w-[300px] md:max-w-full">
            <div className="max-w-lg md:max-w-none ml-4 ">
              <motion.h2
                className="text-2xl font-semibold sm:text-3xl"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5 }}
              >
                Discover the True Taste of{" "}
                <span>
                  <FlipWords
                    words={["Drinks", "coffee", "Breakfast"]}
                    className="text-[var(--pAccent)] text-2xl  md:text-5xl font-bold 
                   "
                  />
                </span>
                at VavCof
              </motion.h2>

              <motion.p
                className="mt-4 text-xl "
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 2 }}
              >
                Welcome to VavCof – Where your coffee story begins! Enjoy the
                finest coffee and drinks in a cozy atmosphere with exceptional
                service that makes every visit unforgettable.
              </motion.p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
