import React from 'react';
import iesWhiteLogo from '../assets/IES white logo.png';
import { FaFacebook, FaYoutube } from 'react-icons/fa';
import { GrInstagram } from 'react-icons/gr';
import { FaTiktok } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className="px-4 divide-y dark:bg-gray-100 dark:text-gray-800 bg-black text-[#f8f2e6]">
        <div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
          <div className="lg:w-1/3">
            <a href="#" className="flex justify-center space-x-3 lg:justify-start hover:text-[#fa8b17]">
              <div className="flex items-center justify-center w-[150px] h-[150px] rounded-full dark:bg-violet-600">
                <img src={iesWhiteLogo} alt="IES Marketing" className="w-[150px]" />
              </div>
              {/* <span className="self-center text-2xl font-semibold">IES Marketing</span> */}
            </a>
          </div>
          <div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4">
            <div className="space-y-3">
              <h3 className="tracking-wide uppercase dark:text-gray-900 hover:text-[#fa8b17]">Product</h3>
              <ul className="space-y-1">
                <li><a href="#" className='hover:text-[#fa8b17]'>Features</a></li>
                <li><a href="#" className='hover:text-[#fa8b17]'>Integrations</a></li>
                <li><a href="#" className='hover:text-[#fa8b17]'>Pricing</a></li>
                <li><a href="#" className='hover:text-[#fa8b17]'>FAQ</a></li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="tracking-wide uppercase dark:text-gray-900">Company</h3>
              <ul className="space-y-1">
                <li><a href="#" className='hover:text-[#fa8b17]'>Privacy</a></li>
                <li><a href="#" className='hover:text-[#fa8b17]'>Terms of Service</a></li>
              </ul>
            </div>

            {/* Social media links */}
            <div className="space-y-3">
              <h3 className="uppercase dark:text-gray-900">Social media</h3>
              <div className="flex justify-start space-x-3">
                <a href="https://www.facebook.com/IESmarketingPakistan?mibextid=ZbWKwL" target='_main' title="Facebook" className="flex items-center p-1">
                  <FaFacebook className="w-[30px] h-[30px] hover:text-[#fa8b17]" />
                </a>
                <a href="https://www.instagram.com/iesmarketing.pk?igsh=MTgyaXIwMHZhaXR1" target='_main' title="Instagram" className="flex items-center p-1">
                  <GrInstagram className="w-[30px] h-[30px] hover:text-[#fa8b17]" />
                </a>
                <a href="https://www.youtube.com/@iesmarketing01y" target='_main' title="YouTube" className="flex items-center p-1">
                  <FaYoutube className="w-[35px] h-[35px] hover:text-[#fa8b17]" />
                </a>
                <a href="https://www.tiktok.com/@iesmarketing.pk?_t=8orLu0je4vP&_r=1" target='_main' title="YouTube" className="flex items-center p-1">
                  <FaTiktok className="w-[35px] h-[35px] hover:text-[#fa8b17]" />
                </a>
                <a href="https://www.tiktok.com/@iesmarketing.pk?_t=8orLu0je4vP&_r=1" target='_main' title="YouTube" className="flex items-center p-1">
                  <FaLinkedinIn className="w-[35px] h-[35px] hover:text-[#fa8b17]" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="py-6 text-sm text-center dark:text-gray-600">
          © 1968 Company Co. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Footer;
