import Link from "next/link";
import React from "react";

function Allproducts() {
  return (
    <div className="my-20">
      <div className="bg-orange-200">
        <section className="overflow-hidden bg-[url(https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?q=80&w=2670&auto=format&fit=crop)] bg-cover bg-top bg-no-repeat">
          <div className="bg-black/50 p-8 md:p-12 lg:px-16 lg:py-24 flex flex-col items-center justify-center text-center sm:flex-row sm:text-left">
            <div className="text-center ltr:sm:text-left rtl:sm:text-right">
              <div className="mt-4 sm:mt-8">
                <Link
                  href={"/products"}
                  className="inline-block rounded-full bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:ring-3 focus:ring-yellow-400 focus:outline-hidden"
                >
                  Get Yours Today
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Allproducts;
