import React from 'react'
import { AiFillTikTok } from "react-icons/ai";
import { FaFacebookSquare, FaYoutube } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import instagram from "../../assets/instagram_logo.png";

const SocialMediaLinks = () => {
    return (
        <div>
            <div className="w-full lg:w-1/4 m-auto mt-12 max-w-screen-sm">
                {/* TikTok */}
                <div className="p-4 my-3 border-t border-gray-500 md:border md:rounded">
                    <div className="flex py-2">
                        <a href="https://www.tiktok.com/@iesmarketing.pk?_t=8oyUKEarCXC&_r=1" target='_blank' rel="noreferrer">
                            <AiFillTikTok className='h-10 w-10 mr-2 cursor-pointer hover:scale-105 duration-200' />
                        </a>
                        <div>
                            <p className="font-semibold text-gray-700 text-sm">IES Marketing</p>
                            <p className="font-semibold text-gray-600 text-xs">TikTok</p>
                        </div>
                    </div>
                    <p className="text-gray-700 py-3">
                        Get the latest real estate tips, property tours, and market updates from <span className='font-bold'>IES Marketing</span>. Don’t miss out—follow us today!
                    </p>
                    <a href='https://www.tiktok.com/@iesmarketing.pk?_t=8oyUKEarCXC&_r=1' target='_blank' rel="noreferrer" className="px-2 py-1 bg-white text-black hover:text-white border-black border-2 hover:bg-black duration-300 flex w-full items-center justify-center rounded">
                        Follow
                    </a>
                </div>

                {/* Facebook */}
                <div className="p-4 my-3 border-t border-gray-500 md:border md:rounded">
                    <div className="flex py-2">
                        <a href="https://www.facebook.com/share/JKwx1hN9wN9jYdxc/?mibextid=qi2Omg" target='_blank' rel="noreferrer">
                            <FaFacebookSquare className='h-10 w-10 text-blue-500 mr-2 cursor-pointer hover:scale-105 duration-200' />
                        </a>
                        <div>
                            <p className="font-semibold text-gray-700 text-sm">IES Marketing</p>
                            <p className="font-semibold text-gray-600 text-xs">Facebook</p>
                        </div>
                    </div>
                    <p className="text-gray-700 py-3">
                        Get the latest real estate tips, property tours, and market updates from <span className='font-bold'>IES Marketing</span>. Don’t miss out—follow us today!
                    </p>
                    <a href='https://www.facebook.com/share/JKwx1hN9wN9jYdxc/?mibextid=qi2Omg' target='_blank' rel="noreferrer" className="px-2 py-1 bg-white text-blue-500 hover:text-white border-blue-500 border-2 hover:bg-blue-500 duration-300 flex w-full items-center justify-center rounded">
                        Follow
                    </a>
                </div>

                {/* YouTube */}
                <div className="p-4 my-3 border-t border-gray-500 md:border md:rounded">
                    <div className="flex py-2">
                        <a href="https://www.youtube.com/@iesmarketing01?sub_confirmation=1" target='_blank' rel="noreferrer">
                            <FaYoutube className='h-10 w-10 text-red-500 mr-2 cursor-pointer hover:scale-105 duration-200' />
                        </a>
                        <div>
                            <p className="font-semibold text-gray-700 text-sm">IES Marketing</p>
                            <p className="font-semibold text-gray-600 text-xs">YouTube</p>
                        </div>
                    </div>
                    <p className="text-gray-700 py-3">
                        Get the latest real estate tips, property tours, and market updates from <span className='font-bold'>IES Marketing</span>. Don’t miss out—follow us today!
                    </p>
                    <a href='https://www.youtube.com/@iesmarketing01?sub_confirmation=1' target='_blank' rel="noreferrer" className="px-2 py-1 bg-white text-red-500 hover:text-white border-red-500 border-2 hover:bg-red-500 duration-300 flex w-full items-center justify-center rounded">
                        Subscribe
                    </a>
                </div>

                {/* Instagram */}
                <div className="p-4 my-3 border-t border-gray-500 md:border md:rounded">
                    <div className="flex py-2">
                        <a href="https://www.instagram.com/iesmarketing.pk?igsh=MTgyaXIwMHZhaXR1" target='_blank' rel="noreferrer">
                            <img src={instagram} alt="Instagram" className='h-10 w-10 mr-2 cursor-pointer hover:scale-105 duration-200' />
                        </a>
                        <div>
                            <p className="font-semibold text-gray-700 text-sm">IES Marketing</p>
                            <p className="font-semibold text-gray-600 text-xs">Instagram</p>
                        </div>
                    </div>
                    <p className="text-gray-700 py-3">
                        Get the latest real estate tips, property tours, and market updates from <span className='font-bold'>IES Marketing</span>. Don’t miss out—follow us today!
                    </p>
                    <a href='https://www.instagram.com/iesmarketing.pk?igsh=MTgyaXIwMHZhaXR1' target='_blank' rel="noreferrer" className="px-2 py-1 text-pink-500 border-2 border-transparent flex w-full items-center justify-center rounded transition duration-300 ease-in-out bg-white hover:bg-gradient-to-r hover:from-purple-500 hover:via-pink-500 hover:to-orange-500 hover:text-white" style={{
                        borderImage: 'linear-gradient(to right, #6a11cb, #ff5f6d, #fcb045) 1'
                    }}>
                        Follow
                    </a>
                </div>
            </div>
        </div>
    )
}

export default SocialMediaLinks
