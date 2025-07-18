import Link from "next/link";
import React from "react";

const Contact = () => {
  return (
    <div>
      <section
        id="contact"
        className=" bg-[var(--Light)] text-[var(--Dark)] dark:bg-[var(--Dark)] dark:text-[var(--Light)] transition-all duration-300 "
      >
        <div className="p-8 md:p-12 lg:px-16 lg:py-24">
          <div className="mx-auto max-w-lg text-center">
            <h2 className="text-2xl font-bold  md:text-3xl">
              Got a project or an idea? Let&apos;s talk!
            </h2>

            <p className="hidden   sm:mt-4 sm:block">
              We&apos;re always happy to connect. Reach out via Gmail and let&apos;s
              start building something great together.
            </p>
          </div>

          <div className="mx-auto mt-8 max-w-xl">
            <form action="#" className="sm:flex sm:gap-4">
              <div className="sm:flex-1">
                <label htmlFor="email" className="sr-only">
                  Email
                </label>

                <input
                  type="email"
                  placeholder="Email address"
                  className="w-full rounded-md border-gray-200 p-3   shadow-xs transition focus:border-white focus:ring-3 focus:ring-[var(--pAccent)] focus:outline-hidden"
                />
              </div>

              <Link
                href="mailto:ikhmoh01@gmail.com"
                className="group mt-4 text-white flex w-full items-center justify-center gap-2 rounded-md bg-[var(--pAccent)] px-5 py-3  transition focus:ring-3 focus:ring-[var(--pAccent)] focus:outline-hidden sm:mt-0 sm:w-auto"
              >
                <span className="text-sm font-medium"> Contact Us</span>

                <svg
                  className="size-5 shadow-sm rtl:rotate-180"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
