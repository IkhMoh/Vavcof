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
};

function Card({ image , price, title, params }: CardProps) {
  return (
    <div>
      <Link
        href={"/products/"+params.category + "/" + params.id}
        className="block rounded-sm shadow-xs shadow-indigo-100 bg-blue-200 w-fit transition-all "
      >
        <Image
          width={200}
          height={200}
          alt=""
          src={
            image
              ? image[0].url
              : "https://images.unsplash.com/photo-1613545325278-f24b0cae1224?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          }
          className="h-56 object-cover w-64"
        />

        <div className="mt-2 w-fit">
          <dl>
            <div>
              <dt className="sr-only">Price</dt>
              <dd className="text-sm text-gray-500">${price}</dd>
            </div>

            <div>
              <dt className="sr-only">Address</dt>
              <dd className="font-medium">{title}</dd>
            </div>
          </dl>
        </div>
      </Link>
    </div>
  );
}

export default Card;
