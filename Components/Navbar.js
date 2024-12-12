import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Image from "next/image";
import iesLogo from "../public/IES-balck-logo-.webp";
import { FaAngleDown } from "react-icons/fa6";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false); // Dropdown menu state
  const router = useRouter(); // Get the current route

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const closeAllMenus = () => {
    setDropdownOpen(false);
    setNavOpen(false);
  };

  return (
    <>
      {navOpen && (
        <div
          className="fixed inset-0 bg-black opacity-[0.5] z-10"
          onClick={toggleNav}
        ></div>
      )}
      <header className="navbar-header bg-white shadow-md w-full fixed z-[10000] top-0 left-0 ">
        <div className="mx-auto flex flex-n justify-between items-center flex-row relative z-20 p-4">
          <div className="flex items-center">
            <Image
              src={iesLogo}
              alt="IES Marketing Logo"
              title="IES Marketing Logo"
              className="w-24"
            />
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={toggleNav}
              className="text-2xl text-gray-700 focus:outline-none"
            >
              {navOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
            </button>
          </div>

          <nav className="hidden md:flex space-x-5 ml-auto text-gray-700 gap-2">
            <Link href="/" passHref>
              <span
                className={`text-gray-700 hover:text-black ${
                  router.pathname === "/" ? "font-bold" : ""
                }`}
              >
                Home
              </span>
            </Link>
            <Link href="/housing-societies-in-multan" passHref>
              <span
                className={`text-gray-700 hover:text-black ${
                  router.pathname === "/housing-societies-in-multan"
                    ? "font-bold"
                    : ""
                }`}
              >
                Our Projects
              </span>
            </Link>
            <Link href="/blogs" passHref>
              <span
                className={`text-gray-700 hover:text-black ${
                  router.pathname === "/blogs" ? "font-bold" : ""
                }`}
              >
                Blogs
              </span>
            </Link>
            <Link href="/gallery" passHref>
              <span
                className={`text-gray-700 hover:text-black ${
                  router.pathname === "/gallery" ? "font-bold" : ""
                }`}
              >
                Gallery
              </span>
            </Link>
            <Link href="/career" passHref>
              <span
                className={`text-gray-700 hover:text-black ${
                  router.pathname === "/career" ? "font-bold" : ""
                }`}
              >
                Career
              </span>
            </Link>
            <Link href="/about-us" passHref>
              <span
                className={`text-gray-700 hover:text-black ${
                  router.pathname === "/about-us" ? "font-bold" : ""
                }`}
              >
                About Us
              </span>
            </Link>
            {/* Plots Dropdown */}
            <div className="relative md:inline">
              <button
                onClick={toggleDropdown}
                className="flex items-center hover:text-black w-full"
              >
                Plots
                <span
                  className={`ms-2 transition-transform ${
                    dropdownOpen ? "rotate-180" : "rotate-0"
                  }`}
                >
                  <FaAngleDown />
                </span>
              </button>

              {/* Dropdown Menu for Large Screens */}
              {dropdownOpen && (
                <ul className="absolute left-0 top-full mt-2 bg-white shadow-lg rounded-md w-48 z-20 hidden md:block">
                  <li>
                    <Link
                      href="/plots-for-sale-in-smart-housing-multan"
                      className="block px-4 py-2 hover:bg-gray-100"
                      onClick={closeAllMenus}
                    >
                      Smart Housing Multan
                    </Link>
                  </li>
                </ul>
              )}
            </div>

            
          </nav>

          <div className="hidden md:flex ml-auto space-x-5">
            <a href="https://wa.link/js81dg" target="_main">
              <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-[#2f3130] group bg-gradient-to-br from-black to-black group-hover:from-black group-hover:to-black hover:text-white rounded-full">
                <span className="relative py-2.5 transition-all ease-in duration-75 text-white group-hover:bg-opacity-0 rounded-full px-6 w-32">
                  Contact Us
                </span>
              </button>
            </a>
          </div>
        </div>

        {navOpen && (
          <nav className="md:hidden bg-white shadow-lg absolute w-full z-20 top-full left-0">
            <div className="px-4 py-4 space-y-4">
              <Link href="/" passHref>
                <span
                  className={`block text-gray-700 hover:text-black mt-1 ${
                    router.pathname === "/" ? "font-bold" : ""
                  }`}
                  onClick={toggleNav}
                >
                  Home
                </span>
              </Link>
              <Link href="/housing-societies-in-multan" passHref>
                <span
                  className={`block text-gray-700 hover:text-black mt-1 ${
                    router.pathname === "/housing-societies-in-multan"
                      ? "font-bold"
                      : ""
                  }`}
                  onClick={toggleNav}
                >
                  Our Projects
                </span>
              </Link>
              <Link href="/blogs" passHref>
                <span
                  className={`block text-gray-700 hover:text-black mt-1 ${
                    router.pathname === "/blogs" ? "font-bold" : ""
                  }`}
                  onClick={toggleNav}
                >
                  Blogs
                </span>
              </Link>
              <Link href="/gallery" passHref>
                <span
                  className={`block text-gray-700 hover:text-black mt-1 ${
                    router.pathname === "/gallery" ? "font-bold" : ""
                  }`}
                  onClick={toggleNav}
                >
                  Gallery
                </span>
              </Link>
              <Link href="/career" passHref>
                <span
                  className={`block text-gray-700 hover:text-black mt-1 ${
                    router.pathname === "/career" ? "font-bold" : ""
                  }`}
                  onClick={toggleNav}
                >
                  Career
                </span>
              </Link>
              <Link href="/about-us" passHref>
                <span
                  className={`block text-gray-700 hover:text-black mt-1 ${
                    router.pathname === "/about-us" ? "font-bold" : ""
                  }`}
                  onClick={toggleNav}
                >
                  About Us
                </span>
              </Link>
            {/* Plots Dropdown */}
            <div className="relative md:inline">
              <button
                onClick={toggleDropdown}
                className="flex items-center hover:text-black w-full"
              >
                Plots
                <span
                  className={`ms-2 transition-transform ${
                    dropdownOpen ? "rotate-180" : "rotate-0"
                  }`}
                >
                  <FaAngleDown />
                </span>
              </button>

              {dropdownOpen && navOpen && (
                <ul className="block md:hidden w-full text-gray-700">
                  <li>
                    <Link
                      href="/plots-for-sale-in-smart-housing-multan"
                      className="block py-2 w-full border-t hover:bg-gray-100"
                      onClick={closeAllMenus}
                    >
                      Smart Housing Multan
                    </Link>
                  </li>
                </ul>
              )}
            </div>
              <a
                href="tel:03338400106"
                className="block bg-black-800 hover:text-white px-4 py-2 border-black border-2 rounded-full text-black text-center hover:bg-black transition duration-300"
                onClick={toggleNav}
              >
                Call Now
              </a>
              <a
                href="https://wa.link/js81dg"
                target="_main"
                className="block w-full bg-black-800 text-white px-4 py-2 border-black border-2 rounded-full text-center bg-black transition duration-300"
                onClick={toggleNav}
              >
                Contact Us
              </a>
            </div>
          </nav>
        )}
      </header>
    </>
  );
};

export default Navbar;







