import React from "react";
import Link from "next/link";
type Props = {
  category: string;
};
const SideMenu = ({ category }: Props) => {
  return (
    <section>
      {/* mobil */}
      <div className="relative md:hidden ">
        <details className="[&_summary::-webkit-details-marker]:hidden">
          <summary className="flex cursor-pointer w-full bg-white items-center justify-center gap-2 border-b  border-gray-400 pb-1 text-gray-900 transition hover:border-gray-600">
            <span className="text-sm font-medium  py-1 px-2"> Category </span>
            <span className="transition group-open:-rotate-180">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </span>
          </summary>

          <div className="z-50 mt-2 ltr:start-0 w-1/2">
            <div className="flex flex-col space-y-2 h-fit rounded-br-md bg-white shadow-lg">
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
            </div>
          </div>
        </details>
      </div>

      {/*pc */}
      <div className="hidden md:block">
        <div className="flex flex-col space-y-2 h-fit rounded-br-md bg-white shadow-lg">
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
        </div>
      </div>
    </section>
  );
};

export default SideMenu;
