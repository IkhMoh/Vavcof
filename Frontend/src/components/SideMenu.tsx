import React from "react";
import Link from "next/link";
type Props = {
  category: string;
};
 const  SideMenu = ({ category }: Props) => {
  return (
    <div className="flex flex-col space-y-2 h-fit rounded-br-md bg-white shadow-lg">
      <ul className="flex flex-col space-y-2 mb-20 p-0.5 lg:p-2">
        <li>
          <strong className="block text-lg font-medium text-gray-600 ">
            Category
          </strong>

          <ul className="mt-2 space-y-1">
            <li>
              <Link
                href={"/products/All"}
                className={
                  category === "All"
                    ? "block rounded-lg transition-all  bg-gray-200 px-4 py-2 text-sm font-medium text-gray-700"
                    : "block rounded-lg transition-all   px-4 py-2 text-sm font-medium text-gray-700"
                }
              >
                All meals
              </Link>
            </li>
            <li>
              <Link
                href={"/products/Breakfast"}
                className={
                  category === "Breakfast"
                    ? "block rounded-lg transition-all  bg-gray-200 px-4 py-2 text-sm font-medium text-gray-700"
                    : "block rounded-lg transition-all   px-4 py-2 text-sm font-medium text-gray-700"
                }
              >
                Breakfast
              </Link>
            </li>

            <li>
              <Link
                href={"/products/Drinks"}
                className={
                  category === "Drinks"
                    ? "block rounded-lg transition-all bg-gray-200 px-4 py-2 text-sm font-medium text-gray-700"
                    : "block rounded-lg transition-all  px-4 py-2 text-sm font-medium text-gray-700"
                }
              >
                Drinks
              </Link>
            </li>

            <li>
              <Link
                href={"/products/Desserts"}
                className={
                  category === "Desserts"
                    ? "block rounded-lg transition-all bg-gray-200 px-4 py-2 text-sm font-medium text-gray-700"
                    : "block rounded-lg transition-all  px-4 py-2 text-sm font-medium text-gray-700"
                }
              >
                Desserts
              </Link>
            </li>

            <li>
              <Link
                href={"/products/IcedCoffee"}
                className={
                  category === "IcedCoffee"
                    ? "block rounded-lg transition-all bg-gray-200 px-4 py-2 text-sm font-medium text-gray-700"
                    : "block rounded-lg transition-all  px-4 py-2 text-sm font-medium text-gray-700"
                }
              >
                Iced Coffee
              </Link>
            </li>

            <li>
              <Link
                href={"/products/HotCoffee"}
                className={
                  category === "HotCoffee"
                    ? "block rounded-lg  transition-all bg-gray-200 px-4 py-2 text-sm font-medium text-gray-700"
                    : "block rounded-lg transition-all  px-4 py-2 text-sm font-medium text-gray-700"
                }
              >
                Hot Coffee
              </Link>
            </li>
          </ul>
        </li>

        <li>
          <strong className="block text-lg font-medium text-gray-600 ">
            Materials
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
