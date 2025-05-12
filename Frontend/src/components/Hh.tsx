import React from "react";
import Link from "next/link";
const Hh = () => {
  const category = "All"; // This should be replaced with the actual category from props or state
  return (
    <div>
      <section>
        <div className="md:relative">
          <details className="md:group md:[&_summary::-webkit-details-marker]:hidden">
            <summary className="flex cursor-pointer  items-center gap-2 border-b border-gray-400 pb-1 text-gray-900 transition hover:border-gray-600">
              <div className="block md:hidden">
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
              </div>
            </summary>

            <div className="md:z-50 md:group-open:absolute md:group-open:top-auto md:group-open:mt-2 ltr:group-open:start-0">
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
            </div>
          </details>
        </div>
      </section>
    </div>
  );
};

export default Hh;
