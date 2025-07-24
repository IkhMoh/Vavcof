"use client";
import React, { useContext } from "react";
import Image from "next/image";
import { PhotosContext } from "@/contexts/photos";
const Footer = () => {
  const photos = useContext(PhotosContext);
  return (
    <footer className=" bg-[var(--Light)] text-[var(--Dark)] dark:bg-[var(--Dark)] dark:text-[var(--Light)] transition-all duration-300  lg:grid lg:grid-cols-5 ">
      <div className="relative block h-80 lg:col-span-2 lg:h-full">
        <Image
          src={photos[1].image[0].url}
          alt={photos[1].place}
          width={500}
          height={500}
          className="absolute inset-0 h-full w-full object-cover"
        />
        {/* <img
          src=" https://images.unsplash.com/photo-1642370324100-324b21fab3a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80 "
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        /> */}
      </div>

      <div className="px-4 py-16 sm:px-6 lg:col-span-3 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          <div>
            <p>
              <span className="text-xs tracking-wide   uppercase">
                {" "}
                Call us{" "}
              </span>

              <a
                href="#"
                className="block text-2xl font-medium   hover:opacity-75 sm:text-3xl"
              >
                0123456789
              </a>
            </p>

            <ul className="mt-8 space-y-1 text-sm  ">
              <li>Monday to Friday: 10am - 5pm</li>
              <li>Weekend: 10am - 3pm</li>
            </ul>

            <ul className="mt-8 flex gap-6">
              <li>
                <a
                  href="https://www.facebook.com/ikhlef.mohamed.823757/"
                  rel="noreferrer"
                  target="_blank"
                  className="  transition hover:opacity-75"
                >
                  <span className="sr-only">Facebook</span>

                  <svg
                    className="size-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </li>

              <li>
                <a
                  href="https://www.instagram.com/ikhlef_mohamed_lamin/"
                  rel="noreferrer"
                  target="_blank"
                  className="  transition hover:opacity-75"
                >
                  <span className="sr-only">Instagram</span>

                  <svg
                    className="size-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </li>

              <li>
                <a
                  href="https://github.com/IkhMoh"
                  rel="noreferrer"
                  target="_blank"
                  className="  transition hover:opacity-75"
                >
                  <span className="sr-only">GitHub</span>

                  <svg
                    className="size-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </li>

              <li>
                <a
                  href="https://www.linkedin.com/in/mohamed-ikhlef-a16675321/"
                  rel="noreferrer"
                  target="_blank"
                  className="transition hover:opacity-75"
                >
                  <span className="sr-only">LinkedIn</span>

                  <svg
                    className="size-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M19 0h-14C2.24 0 1 1.24 1 2.77v18.46C1 22.76 2.24 24 4 24h14c1.76 0 3-1.24 3-2.77V2.77C22 1.24 20.76 0 19 0zm-11 20H5V9h3v11zm-1.5-12.5c-.97 0-1.75-.79-1.75-1.75S5.53 4 6.5 4s1.75.79 1.75 1.75S7.47 7.5 6.5 7.5zM20 20h-3v-5.5c0-1.34-.03-3.06-1.87-3.06-1.87 0-2.16 1.46-2.16 2.96V20h-3V9h2.89v1.5h.04c.4-.76 1.37-1.56 2.82-1.56 3.01 0 3.57 1.98 3.57 4.56V20z" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <p className="font-semibold text-base text-gray-800">Services</p>

              <ul className="mt-4 space-y-3 text-sm text-gray-600">
                <li>
                  <a href="#" className="hover:opacity-75 transition">
                    1-on-1 Coaching
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:opacity-75 transition">
                    Company Audit
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:opacity-75 transition">
                    Accounts Review
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:opacity-75 transition">
                    HR Consulting
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:opacity-75 transition">
                    SEO Optimization
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="font-semibold text-base text-gray-800">Company</p>

              <ul className="mt-4 space-y-3 text-sm text-gray-600">
                <li>
                  <a href="#" className="hover:opacity-75 transition">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:opacity-75 transition">
                    Meet the Team
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:opacity-75 transition">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:opacity-75 transition">
                    Press
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-100 pt-12">
          <div className="sm:flex sm:items-center sm:justify-between">
            <ul className="flex flex-wrap gap-4 text-xs">
              <li>
                <a href="#" className="  transition hover:opacity-75">
                  {" "}
                  Terms & Conditions{" "}
                </a>
              </li>

              <li>
                <a href="#" className="  transition hover:opacity-75">
                  {" "}
                  Privacy Policy{" "}
                </a>
              </li>

              <li>
                <a href="#" className="  transition hover:opacity-75">
                  {" "}
                  Cookies{" "}
                </a>
              </li>
            </ul>

            <p className="mt-8 text-xs   sm:mt-0">
              &copy; 2022. Company Name. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
