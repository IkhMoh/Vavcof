import React from "react";
import Image from "next/image";
import Link from "next/link";
async function Categorycard({
  image,
  category,
}: {
  image: string;
  category: string;
}) {
  console.log(image + " " + category);
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
      <div className="group relative block bg-black w-[250px] h-[374px] ">
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

          {/* <div className="mt-32 sm:mt-48 lg:mt-64">
            <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
              <p className="text-sm text-white">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis
                perferendis hic asperiores quibusdam quidem voluptates
                doloremque reiciendis nostrum harum. Repudiandae?
              </p>
            </div>
          </div> */}
        </div>
      </div>
    </Link>
  );
}

export default Categorycard;
