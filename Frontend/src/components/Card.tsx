import React from "react";
import Image from "next/image";

type CardProps = {
  image: { url: string }[];
  price: number;
  title: string;
};

function Card({ image, price, title }: CardProps) {
  return (
    <div>
      <a
        href="#"
        className="block rounded-sm shadow-xs shadow-indigo-100 bg-blue-200 w-fit"
      >
        <Image
          width={200}
          height={200}
          alt=""
          src={image  ? image[0].url : "https://images.unsplash.com/photo-1613545325278-f24b0cae1224?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"}
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

          <div className="mt-6 flex items-center gap-8 text-xs">
            <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
              <svg
                className="size-4 text-indigo-700"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
                />
              </svg>

              <div className="mt-1.5 sm:mt-0">
                <p className="text-gray-500">Parking</p>
                <p className="font-medium">2 spaces</p>
              </div>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}

export default Card;
