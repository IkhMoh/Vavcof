"use client";
import React, { useEffect, useState } from "react";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import Image from "next/image";
import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";

const NavBar = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

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
      className={`fixed top-0 left-0 w-full bg-[var(--Light)] text-[var(--Dark)] dark:bg-[var(--Dark)] dark:text-[var(--Light)] transition-all duration-300   shadow  z-50 ${
        show ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container mx-auto w-full">
        <div className="flex h-16 items-center justify-between px-4 md:px-16">
          {/* Logo */}
          <div className="flex items-center gap-4">
            <Link className="p-0 m-0 overflow-hidden" href={"/"}>
              <Image
                src="/logo.png"
                alt="Logo"
                width={100}
                height={100}
                className="h-16 w-auto"
                priority
              />
            </Link>
          </div>

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
                  href={"/"}
                  className="cursor-pointer"
                  onClick={() => setMenuOpen(false)}
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </nav>

          {/* Icons and Mobile Button */}
          <div className="flex items-center gap-4">
            <FaSearch className="w-5 h-5 cursor-pointer" />
            <MdOutlineShoppingCart className="w-6 h-6 cursor-pointer" />
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
                <a
                  className="cursor-pointer"
                  onClick={() => setMenuOpen(false)}
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default NavBar;
