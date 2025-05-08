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
      <Link
        href={"/products/" + params.category + "/" + params.id}
        className="block p-1.5 rounded-sm shadow-xs shadow-indigo-100 bg-blue-200 w-fit transition-all "
      >
        <div className="relative w-[240px] h-[270px] rounded-xl overflow-hidden">
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

        <div className="mt-1 w-full min-h-28 ">
          <dl>
            <div>
              <dt className="sr-only">Address</dt>
              <dd className="font-medium">{title}</dd>
            </div>
            <div className="flex items-end justify-between mt-2 ">
              <div>
                <div className="flex gap-2 items-center">
                  <h1 className="text-md font-bold">Rating:</h1>
                  <h1 className="text-lg font-bold">{rating}⭐</h1>
                </div>
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
                  className="group relative inline-block overflow-hidden border border-orange-400 px-4 py-1 rounded-4xl focus:ring-3 focus:outline-hidden"
                  href="#"
                >
                  <span className="absolute inset-y-0 left-0 w-[0px] bg-orange-400 transition-all group-hover:w-full"></span>

                  <span className="relative text-sm font-bold  text-orange-400 transition-colors group-hover:text-white">
                    Add Item
                  </span>
                </a>
              </div>
            </div>
          </dl>
        </div>
      </Link>
    </div>
  );
}

export default Card;
