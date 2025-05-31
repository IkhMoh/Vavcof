import React from "react";
import Image from "next/image";
import Link from "next/link";
async function Category2card({
  image,
  category,
}: {
  image?: string;
  category?: string;
}) {
  if (!image || !category) {
    return null; // Return null if image or category is not provided
  }

  return (
    <Link href={"/products/" + category}>
      <div className="group relative block bg-black">
        <Image
          width={250}
          height={250}
          alt="category image"
          src={image}
          className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
        />

        <div className="relative p-4 sm:p-6 lg:p-8">
          <p className="text-sm font-medium tracking-widest "></p>

          <p className="text-xl font-bold sm:text-2xl text-[var(--pAccent)] ">
            {category}
          </p>

          <div className="mt-32 sm:mt-48 lg:mt-64">
            <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
              <p className="text-sm text-white">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis
                perferendis hic asperiores quibusdam quidem voluptates
                doloremque reiciendis nostrum harum. Repudiandae?
              </p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Category2card;
