"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

function Categorycard({
  image,
  category,
}: {
  image: string;
  category: string;
}) {
  if (!image || !category) {
    return null;
  }
  if (category === "Hot Coffee") {
    category = "HotCoffee";
  } else if (category === "Iced Coffee") {
    category = "IcedCoffee";
  }
  return (
    <Link href={"/products/" + category} className="">
      <motion.div
        className="group relative block bg-black w-[250px] h-[374px] "
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 2.2 }}
      >
        {" "}
        <Image
          width={250}
          height={250}
          alt="category image"
          src={image}
          className="absolute inset-0  object-cover opacity-75 transition-opacity group-hover:opacity-50"
        />
        <div className="relative p-3 sm:p-4 lg:p-6">
          <p className="text-sm font-medium tracking-widest "></p>

          <p className="text-xl font-bold sm:text-2xl text-[var(--Light)] ">
            {category === "HotCoffee"
              ? "Hot Coffee"
              : category === "IcedCoffee"
              ? "Iced Coffee"
              : category}
          </p>
        </div>
      </motion.div>
    </Link>
  );
}

export default Categorycard;
