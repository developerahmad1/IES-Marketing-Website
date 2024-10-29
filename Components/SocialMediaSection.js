// components/SocialMediaSection.js

import React from "react";
import { AiFillTikTok } from "react-icons/ai";
import { FaFacebookSquare, FaYoutube } from "react-icons/fa";
import Image from "next/image";
import instagram from "../public/instagram_logo.png";

const SocialMediaSection = () => {
  return (
    <section className="w-full lg:w-1/4 m-auto mt-12 max-w-screen-sm">
      {/* Tiktok */}
      <div className="p-4 my-3 border-t border-1 border-gray-500 md:border md:rounded">
        <div className="flex py-2">
          <a
            href="https://www.tiktok.com/@iesmarketing.pk?_t=8oyUKEarCXC&_r=1"
            target="main"
          >
            <AiFillTikTok className="h-10 w-10 mr-2 object-cover cursor-pointer hover:scale-[1.05] duration-200" />
          </a>
          <div>
            <p className="font-semibold text-gray-700 text-sm">IES Marketing</p>
            <p className="font-semibold text-gray-600 text-xs">Tiktok</p>
          </div>
        </div>
        <p className="text-gray-700 py-3">
          Get the latest real estate tips, property tours, and market updates from{" "}
          <span className="font-bold">IES Marketing </span>.
          Don&apos;t miss out—follow us today!
        </p>
        <a
          href="https://www.tiktok.com/@iesmarketing.pk?_t=8oyUKEarCXC&_r=1"
          target="main"
          className="px-2 py-1 bg-white text-black hover:text-white border-black border-2 hover:bg-black duration-300 flex w-full items-center justify-center rounded"
        >
          Follow
          <i className="bx bx-user-plus ml-2"></i>
        </a>
      </div>

      {/* Facebook */}
      <div className="p-4 my-3 border-t border-1 border-gray-500 md:border md:rounded">
        <div className="flex py-2">
          <a
            href="https://www.facebook.com/share/JKwx1hN9wN9jYdxc/?mibextid=qi2Omg"
            target="main"
          >
            <FaFacebookSquare className="h-10 w-10 text-blue-500 mr-2 object-cover cursor-pointer  hover:scale-[1.05] duration-200" />
          </a>
          <div>
            <p className="font-semibold text-gray-700 text-sm">IES Marketing</p>
            <p className="font-semibold text-gray-600 text-xs">Facebook</p>
          </div>
        </div>
        <p className="text-gray-700 py-3">
          Get the latest real estate tips, property tours, and market updates from{" "}
          <span className="font-bold">IES Marketing </span>.
          Don&apos;t miss out—follow us today!
        </p>
        <a
          href="https://www.facebook.com/share/JKwx1hN9wN9jYdxc/?mibextid=qi2Omg"
          target="main"
          className="px-2 py-1 bg-white text-blue-500 hover:text-white border-blue-500 border-2 hover:bg-blue-500 duration-300 flex w-full items-center justify-center rounded"
        >
          Follow
          <i className="bx bx-user-plus ml-2"></i>
        </a>
      </div>

      {/* Youtube */}
      <div className="p-4 my-3 border-t border-1 border-gray-500 md:border md:rounded">
        <div className="flex py-2">
          <a
            href="https://www.youtube.com/@iesmarketing01?sub_confirmation=1"
            target="main"
          >
            <FaYoutube className="h-10 w-10 mr-2 text-red-500 object-cover cursor-pointer  hover:scale-[1.05] duration-200" />
          </a>
          <div>
            <p className="font-semibold text-gray-700 text-sm">IES Marketing</p>
            <p className="font-semibold text-gray-600 text-xs">YouTube</p>
          </div>
        </div>
        <p className="text-gray-700 py-3">
          Get the latest real estate tips, property tours, and market updates from{" "}
          <span className="font-bold">IES Marketing </span>.
          Don&apos;t miss out—subscribe today!
        </p>
        <a
          href="https://www.youtube.com/@iesmarketing01?sub_confirmation=1"
          target="main"
          className="px-2 py-1 bg-white text-red-500 hover:text-white border-red-500 border-2 hover:bg-red-500 duration-300 flex w-full items-center justify-center rounded"
        >
          Subscribe
          <i className="bx bx-user-plus ml-2"></i>
        </a>
      </div>

      {/* Instagram */}
      <div className="p-4 my-3 border-t border-1 border-gray-500 md:border md:rounded">
        <div className="flex py-2">
          <a
            href="https://www.instagram.com/iesmarketing.pk?igsh=MTgyaXIwMHZhaXR1"
            target="main"
          >
            <Image
              src={instagram}
              className="h-10 w-10 mr-2 object-cover cursor-pointer hover:scale-[1.05] duration-200"
              alt="Instagram Logo"
            />
          </a>
          <div>
            <p className="font-semibold text-gray-700 text-sm">IES Marketing</p>
            <p className="font-semibold text-gray-600 text-xs">Instagram</p>
          </div>
        </div>
        <p className="text-gray-700 py-3">
          Get the latest real estate tips, property tours, and market updates from{" "}
          <span className="font-bold">IES Marketing </span>.
          Don&apos;t miss out—follow us today!
        </p>
        <a
          href="https://www.instagram.com/iesmarketing.pk?igsh=MTgyaXIwMHZhaXR1"
          target="main"
          className="px-2 py-1 text-pink-500 border-2 border-transparent flex w-full items-center justify-center rounded transition duration-300 ease-in-out bg-white hover:bg-gradient-to-r hover:from-purple-500 hover:via-pink-500 hover:to-orange-500 hover:text-white"
          style={{
            borderImage: "linear-gradient(to right, #6a11cb, #ff5f6d, #fcb045) 1",
          }}
        >
          Follow
          <i className="bx bx-user-plus ml-2"></i>
        </a>
      </div>
    </section>
  );
};

export default SocialMediaSection;
