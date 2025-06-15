import React from "react";
import Image from "next/image";
import Link from "next/link";
type CardProps = {
  image: { url: string }[];
  price: number;
  title: string;
  params: {
    category: string;
    id: number;
  };
  rating: number;
};

function Card({ image, price, title, rating, params }: CardProps) {
  const priceStr = price.toString();
  const firstDigit = priceStr[0];
  const rest = priceStr.slice(1);
  return (
    <div>
      <div className="block  rounded-md shadow-xs bg-[var(--Light)] text-[var(--Dark)] dark:bg-[var(--Dark)] dark:text-[var(--Light)] transition-all duration-300  w-fit  ">
        <Link href={"/products/" + params.category + "/" + params.id}>
          <div className="relative w-[265px] h-[290px]  overflow-hidden">
            {" "}
            <Image
              alt=""
              src={
                image
                  ? image[0].url
                  : "https://images.unsplash.com/photo-1613545325278-f24b0cae1224?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              }
              fill
              className="object-cover"
            />
          </div>
          <div className="mt-1 w-full p-0.5 lg:p-1 ">
            <div>
              <dt className="sr-only">Address</dt>
              <dd className="font-medium">{title}</dd>
            </div>

            <div className="flex gap-2 items-center mt-2">
              <h1 className="text-md font-bold">Rating:</h1>
              <h1 className="text-lg font-bold">{rating}⭐</h1>
            </div>
          </div>
        </Link>
        <div className="mt-1 w-full p-0.5 lg:p-2 ">
          <div className="flex items-end justify-between mt-2  ">
            <div>
              <div>
                <dt className="sr-only">Price</dt>
                <dd className="text-md ">
                  $<span className="text-3xl ">{firstDigit}</span>
                  {rest}
                </dd>
              </div>
            </div>
            <div className=" flex items-center justify-center ">
              <a
                className="group relative inline-block overflow-hidden   bg-[#A67853] text-[var(--Light)]  px-3 py-0.5 rounded-sm focus:ring-3 focus:outline-hidden"
                href="#"
              >
                <span className="absolute inset-y-0 left-0 w-[0px] bg-[var(--pAccent)] transition-all group-hover:w-full"></span>

                <span className="relative text-sm font-medium  transition-colors text-white dark:text-[var(--Dark)]">
                  Add Item
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
