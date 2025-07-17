// "use client";

import Link from "next/link";
import React from "react";
import { CldImage } from "next-cloudinary";
import Image from "next/image";
const ShopCarts = ({ setShopOpen }: any) => {
  return (
    <div
      className="z-50 w-screen max-w-sm border border-gray-600 fixed bg-gray-100 px-4 py-8 sm:px-6 lg:px-8 right-0 dark:bg-[#222222] dark:text-white"
      aria-modal="true"
      role="dialog"
    >
      <button className="absolute end-4 top-4 text-gray-600 dark:text-white transition hover:scale-110">
        <span className="sr-only">Close cart</span>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-5"
          onClick={() => setShopOpen(false)}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>

      <div className="mt-4 space-y-6">
        <ul className="space-y-2 ">
          <li className="flex items-center gap-4">
            <Image
              src="/products/3.jpg"
              width="180"
              height="180"
              alt=""
              // sizes="100vw"
              className="size-16 rounded-sm object-cover"
            />
            <div>
              <h3 className="text-sm ">Basic Tee 6-Pack</h3>

              <dl className="mt-0.5 space-y-px text-[10px] ">
                <div>
                  <dt className="inline">Qty:</dt>
                  <dd className="inline">4</dd>
                </div>

                
              </dl>
            </div>
          </li>
          <li className="flex items-center gap-4">
            <Image
              src="/products/4.jpg"
              width="180"
              height="180"
              alt=""
              // sizes="100vw"
              className="size-16 rounded-sm object-cover"
            />
            <div>
              <h3 className="text-sm ">Basic Tee 6-Pack</h3>

              <dl className="mt-0.5 space-y-px text-[10px] ">
                <div>
                  <dt className="inline">Qty:</dt>
                  <dd className="inline">1</dd>
                </div>

              </dl>
            </div>
          </li>
          <li className="flex items-center gap-4">
            <Image
              src="/products/1.jpg"
              width="180"
              height="180"
              alt=""
              // sizes="100vw"
              className="size-16 rounded-sm object-cover"
            />
            <div>
              <h3 className="text-sm ">Basic Tee 6-Pack</h3>

              <dl className="mt-0.5 space-y-px text-[10px] ">
                <div>
                  <dt className="inline">Qty:</dt>
                  <dd className="inline">1</dd>
                </div>

                
              </dl>
            </div>
          </li>
          <li className="flex items-center gap-4">
            <Image
              src="/products/2.webp"
              width="180"
              height="180"
              alt=""
              // sizes="100vw"
              className="size-16 rounded-sm object-cover"
            />
            <div>
              <h3 className="text-sm ">Basic Tee 6-Pack</h3>

              <dl className="mt-0.5 space-y-px text-[10px] ">
                <div>
                  <dt className="inline">Qty:</dt>
                  <dd className="inline">2</dd>
                </div>

               
              </dl>
            </div>
          </li>
        </ul>

        <div className="space-y-4 text-center">
          <Link
            href={"cart"}
            onClick={() => setShopOpen(false)}
            className="block rounded-sm border border-gray-600 px-5 py-3 text-sm text-gray-600 dark:text-white transition hover:ring-1 hover:ring-gray-400"
          >
            View List
          </Link>

          <Link
            href={"https://buy.stripe.com/test_28E28tgnabzHdnWb6Xes001"}
            className="block rounded-sm bg-gray-700 px-5 py-3 text-sm text-gray-100 transition hover:bg-gray-600"
          >
            Checkout
          </Link>

          <Link
            href={"/products/All"}
            onClick={() => setShopOpen(false)}
            className="inline-block text-sm text-gray-500 dark:text-white underline underline-offset-4 transition hover:text-gray-600"
          >
            Continue shopping
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ShopCarts;
