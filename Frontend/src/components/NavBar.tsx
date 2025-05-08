import React from "react";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaSearch } from "react-icons/fa";

import Image from "next/image";
import Link from "next/link";
const NavBar = () => {
  return (
    <header className="bg-orange-100  ">
      <div className="container mx-auto">
        <div className="flex  h-16 items-center justify-between px-4 md:px-16 ">
          <div className="flex   justify-around   items-center gap-4 md:gap-0 h-full  ">
            {/* Image */}
            <div className="flex md:flex md:items-center md:gap-12">
              <Link className="p-0 m-0 overflow-hidden" href={"/"}>
                <Image
                  src="/logo.png"
                  alt="Logo"
                  width={100}
                  height={100}
                  className="h-16 w-auto p-0 m-0 overflow-hidden"
                  priority
                />
              </Link>
            </div>
            {/* Image================ */}
          </div>

          <div className="md:flex md:items-center md:gap-12">
            <nav aria-label="Global" className="hidden md:block">
              <ul
                className="flex items-center gap-6 text-sm font-medium
"
              >
                <li>
                  <a className="  transition   cursor-pointer">About Us</a>
                </li>

                <li>
                  <a className=" transition cursor-pointer">Menu</a>
                </li>

                <li>
                  <a className=" transition cursor-pointer">Shop</a>
                </li>

                <li>
                  <a className=" transition cursor-pointer">Contact Us</a>
                </li>
              </ul>
            </nav>
          </div>

          <div className=" flex  justify-around md:items-center md:gap-4 h-full  ">
            {/* icon bart */}

            <div className="flex items-center gap-4 ">
              <FaSearch className="cursor-pointer w-5 h-5" />
              <MdOutlineShoppingCart className="cursor-pointer w-6 h-6" />


              {/* for the md size */}
              {/* <div className="block md:hidden">
                           <button className="rounded-sm bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                             <svg
                               xmlns="http://www.w3.org/2000/svg"
                               className="size-5"
                               fill="none"
                               viewBox="0 0 24 24"
                               stroke="currentColor"
                               strokeWidth="2"
                             >
                               <path
                                 strokeLinecap="round"
                                 strokeLinejoin="round"
                                 d="M4 6h16M4 12h16M4 18h16"
                               />
                             </svg>
                           </button>
                         </div> */}
            </div>
            {/* icon bart========== */}
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
