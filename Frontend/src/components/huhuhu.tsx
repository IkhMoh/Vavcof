import React from "react";
import { MdOutlineShoppingCart } from "react-icons/md";
import Image from "next/image";
const NavBar = () => {
  return (
    <>
      {/* the firs bart */}
      <div className="flex justify-between items-center gap-4 md:gap-0 h-full bg-red-700">
        {/* Image */}
        <div className="flex-1 md:flex md:items-center md:gap-12">
          <a className="p-0 m-0 overflow-hidden" href="#">
            <Image
              src="/logo.png"
              alt="Logo"
              width={150}
              height={100}
              className="h-16 p-0 m-0 overflow-hidden"
            />
          </a>
        </div>
        {/* Image================ */}
        {/* Link */}
        <div className="md:flex md:items-center md:gap-12">
          <nav aria-label="Global" className="hidden md:block">
            <ul className="flex items-center gap-6 text-sm front-bold c">
              <li>
                <a className="text-gray-500 transition hover:text-gray-500/75 cursor-pointer">
                  About Us
                </a>
              </li>

              <li>
                <a className="text-gray-500 transition hover:text-gray-500/75 cursor-pointer">
                  Menu
                </a>
              </li>

              <li>
                <a className="text-gray-500 transition hover:text-gray-500/75 cursor-pointer">
                  Shop
                </a>
              </li>

              <li>
                <a className="text-gray-500 transition hover:text-gray-500/75 cursor-pointer">
                  Contact Us
                </a>
              </li>
            </ul>
          </nav>
        </div>
        {/* Link=========== */}
      </div>
      {/* the firs bart========== */}
      {/* the second bart */}
      <div className=" flex justify-between md:items-center md:gap-4 h-full bg-amber-500">
        {/* search bart */}

        <div className="flex items-center justify-center  p-4">
          <div className="flex w-80 ">
            <input
              type="text"
              value="hi"
              placeholder="🔍 Search..."
              className="w-64 px-2 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-100 focus:w-96 transition-all"
            />
          </div>
        </div>
        {/* search bart========= */}
        {/* icon bart */}

        <div className="flex items-center gap-4">
          <div className="sm:flex sm:gap-4">
            <MdOutlineShoppingCart className="cursor-pointer" />

            <div className="hidden sm:flex">{/* imgae profile */}</div>
          </div>
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
      {/* the second bart========== */}
    </>
  );
};

export default NavBar;
