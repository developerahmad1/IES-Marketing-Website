import React from "react";
import iesWhiteLogo from "../public/IES-white-logo.webp";
import { FaFacebook, FaYoutube } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { FaTiktok } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <div>
      <footer className="px-4 bg-black text-[#f8f2e6] relative mt-[100px]">
      <div className="waves">
        <div className="wave" id="wave1"></div>
        <div className="wave" id="wave2"></div>
        <div className="wave" id="wave3"></div>
        <div className="wave" id="wave4"></div>
      </div>
        <div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
          <div className="lg:w-1/3">
            <a
              href="#"
              className="flex justify-center space-x-3 lg:justify-start hover:text-[#fa8b17]"
            >
              <div className="flex items-center justify-center w-[150px] h-[150px] rounded-full">
                <Image
                  src={iesWhiteLogo}
                  alt="IES Marketing Logo"
                  title="IES Marketing png Logo"
                  className="w-[150px]"
                />
              </div>
              {/* <span className="self-center text-2xl font-semibold">IES Marketing</span> */}
            </a>
          </div>
          <div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4">
            <div className="space-y-3">
              <Link
                href="/"
                className="tracking-wide uppercase hover:text-[#fa8b17]"
              >
                IES Marketing
              </Link>
              <ul className="space-y-1">
                <li>
                  <Link href="/" className="hover:text-[#fa8b17]">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about-us" className="hover:text-[#fa8b17]">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/blogs" className="hover:text-[#fa8b17]">
                    Blogs
                  </Link>
                </li>
                <li>
                  <Link href="/gallery" className="hover:text-[#fa8b17]">
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link href="/career" className="hover:text-[#fa8b17]">
                    Career
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <p className="tracking-wide uppercase ">Our Projects</p>
              <ul className="space-y-1">
                <li>
                  <Link href="/smart-housing" className="hover:text-[#fa8b17]">
                    Smart Housing
                  </Link>
                </li>
                <li>
                  <Link href="/royal-swiss" className="hover:text-[#fa8b17]">
                    Royal Swiss
                  </Link>
                </li>
                <li>
                  <Link href="/adams-housing" className="hover:text-[#fa8b17]">
                    Adams Housing
                  </Link>
                </li>
                <li>
                  <Link
                    href="/citi-housing-multan"
                    className="hover:text-[#fa8b17]"
                  >
                    CITI Housing
                  </Link>
                </li>
                <li>
                  <Link href="/dha-multan" className="hover:text-[#fa8b17]">
                    DHA Multan
                  </Link>
                </li>
                <li>
                  <Link
                    href="/royal-orchard-multan"
                    className="hover:text-[#fa8b17]"
                  >
                    Royal Orchard
                  </Link>
                </li>
              </ul>
            </div>

            {/* Social media links */}
            <div className="space-y-3">
              <p className="uppercase">Social media</p>
              <div className="flex justify-start space-x-3">
                <a
                  href="https://www.facebook.com/IESmarketingPakistan?mibextid=ZbWKwL"
                  target="_main"
                  title="Facebook"
                  className="flex items-center p-1"
                >
                  <FaFacebook className="w-[35px] h-[35px] hover:text-[#fa8b17]" />
                </a>
                <a
                  href="https://www.instagram.com/iesmarketing.pk?igsh=MTgyaXIwMHZhaXR1"
                  target="_main"
                  title="Instagram"
                  className="flex items-center p-1"
                >
                  <GrInstagram className="w-[30px] h-[30px] hover:text-[#fa8b17]" />
                </a>
                <a
                  href="https://www.youtube.com/@iesmarketing01"
                  target="_main"
                  title="YouTube"
                  className="flex items-center p-1"
                >
                  <FaYoutube className="w-[35px] h-[35px] hover:text-[#fa8b17]" />
                </a>
                <a
                  href="https://www.tiktok.com/@iesmarketing.pk?_t=8orLu0je4vP&_r=1"
                  target="_main"
                  title="YouTube"
                  className="flex items-center p-1"
                >
                  <FaTiktok className="w-[35px] h-[35px] hover:text-[#fa8b17]" />
                </a>
                <a
                  href="https://www.tiktok.com/@iesmarketing.pk?_t=8orLu0je4vP&_r=1"
                  target="_main"
                  title="YouTube"
                  className="flex items-center p-1"
                >
                  <FaLinkedinIn className="w-[35px] h-[35px] hover:text-[#fa8b17]" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="py-6 text-sm text-center ">
          <span className="text-[#ff8e2b]"> IES Marketing </span> is the best
          real estate company.
        </div>
      </footer>
    </div>
  );
};

export default Footer;
