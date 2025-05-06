import React from "react";
import Link from "next/link";
const SideMenu = () => {
   
  return (
    <div className="flex flex-col space-y-2 h-fit rounded-br-md bg-white shadow-lg">
      <ul className="flex flex-col space-y-2 mb-20 p-2">
        <li>
          <strong className="block text-lg font-medium text-gray-600 ">
            Category
          </strong>

          <ul className="mt-2 space-y-1">
            <li>
              <Link
                href={"/products/All"}
                className="block rounded-lg  px-4 py-2 text-sm font-medium text-gray-700"
              >
                All meals
              </Link>
            </li>
            <li>
              <Link
                href={"/products/Breakfast"}
                className="block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700"
              >
                Breakfast
              </Link>
            </li>

            <li>
              <Link
                href={"/products/Drinks"}
                className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
              >
                Drinks
              </Link>
            </li>

            <li>
              <Link
                href={"/products/Desserts"}
                className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
              >
                Desserts
              </Link>
            </li>

            <li>
              <Link
              href={"/products/IcedCoffee"}
                className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
              >
                Iced Coffee
              </Link>
            </li>

            <li>
              <Link
              href={"/products/HotCoffee"}
                className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
              >
                Hot Coffee
              </Link>
            </li>
          </ul>
        </li>

        <li>
          <strong className="block text-lg font-medium text-gray-600 ">
            Raw materials
          </strong>

          <ul className="mt-2 space-y-1">
            <li>
              <Link
                href="#"
                className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
              >
                Update
              </Link>
            </li>

            <li>
              <Link
                href="#"
                className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
              >
                Help
              </Link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default SideMenu;
