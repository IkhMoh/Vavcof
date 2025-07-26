"use client";
import React, { useEffect, useState } from "react";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";
import ShopCarts from "./ShopCarts";

const NavBar = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [shopOpen, setShopOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setShow(false);
      } else {
        setShow(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <header
      className={`fixed top-0 left-0 w-full bg-[var(--Light)] text-[var(--Dark)] dark:bg-[var(--Dark)] dark:text-[var(--Light)] transition-all duration-300     z-50 ${
        show ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container mx-auto w-full">
        <div className="flex h-16 items-center justify-between px-4 md:px-16">
          {/* Logo */}
          <Link href={"/"}>
            <div className="flex">
              {/* الأيقونة الرمزية */}
              <div className="w-11 h-11 text-[var(--pAccent)] ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 64 64"
                  fill="currentColor"
                >
                  <path d="M12 32h40v8a16 16 0 0 1-40 0v-8zm2 8a14 14 0 0 0 28 0v-6H14v6z" />

                  <path d="M52 34a6 6 0 1 0 0-12h-2v12h2z" />

                  <path d="M18 8c2‑4 8‑4 8 0s‑4 12‑6 12‑4‑8‑2‑12z" />

                  <path d="M44 8l‑1 24h2l‑1‑24z" />
                </svg>
              </div>
              <div
                className="text-[var(--pAccent)] text-4xl font-bold mt-2"
                style={{ fontFamily: "var(--font-saira)" }}
              >
                VavCof
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav aria-label="Global" className="hidden md:block">
            <ul className="flex  gap-4 text-sm font-medium">
              <li>
                <Link
                  href={"/"}
                  className="cursor-pointer"
                  onClick={() => setMenuOpen(false)}
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  href={"/menu"}
                  className="cursor-pointer"
                  onClick={() => setMenuOpen(false)}
                >
                  Menu
                </Link>
              </li>
              <li>
                <Link
                  href={"/products/All"}
                  className="cursor-pointer"
                  onClick={() => setMenuOpen(false)}
                >
                  Shop
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="cursor-pointer"
                  onClick={() => setMenuOpen(false)}
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </nav>

          {/* Icons and Mobile Button */}
          <div className="flex items-center gap-2">
            <FaSearch className="w-5 h-5 cursor-pointer" />
            <button onClick={() => setShopOpen(true)} aria-label="Toggle Menu">
              <MdOutlineShoppingCart className="w-6 h-6 cursor-pointer" />
            </button>
            <ThemeToggle />
            {/* Mobile Menu Toggle */}
            <button
              className="block md:hidden"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle Menu"
            >
              {menuOpen ? (
                <HiX className="w-6 h-6" />
              ) : (
                <HiMenuAlt3 className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu Items */}
        {menuOpen && (
          <nav className="md:hidden px-4 pb-4">
            <ul className="flex  gap-4 text-sm font-medium">
              <li>
                <a
                  className="cursor-pointer"
                  onClick={() => setMenuOpen(false)}
                >
                  About Us
                </a>
              </li>

              <li>
                <Link
                  href={"/menu"}
                  className="cursor-pointer"
                  onClick={() => setMenuOpen(false)}
                >
                  Menu
                </Link>
              </li>
              <li>
                <Link
                  href={"/products/All"}
                  className="cursor-pointer"
                  onClick={() => setMenuOpen(false)}
                >
                  Shop
                </Link>
              </li>
              <li>
                <Link
                  href="contact"
                  className="cursor-pointer"
                  onClick={() => setMenuOpen(false)}
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </nav>
        )}
        {/* Mobile shop Items */}
        {shopOpen && <ShopCarts setShopOpen={setShopOpen} />}
      </div>
    </header>
  );
};

export default NavBar;
