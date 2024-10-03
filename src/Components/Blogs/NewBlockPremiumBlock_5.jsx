import React from 'react';
import { Link } from 'react-router-dom';
import { AiFillTikTok } from "react-icons/ai";
import { FaFacebookSquare, FaYoutube } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import instagram from "../../assets/instagram_logo.png";
import img from "../../assets/Blogs/Blog5.jpg"
import img1 from "../../assets/Blogs/Blog5_1.png"
import img2 from "../../assets/Blogs/Blog5_2.jpg"
import Blogs from '../Blogs';


const NewBlockPremiumBlock = () => {
    return (
        <div className='bg-white'>
            <div className="max-w-screen-lg mx-auto">
                <main>
                    <div className="mb-4 md:mb-0 w-full mx-auto relative">
                        <div className="px-4 py-2 sm:py-2 lg:px-0">

                            {/* Top Image */}
                            <img src={img} alt="" className='mx-auto' />
                            {/* Heading */}
                            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-800 leading-tight mt-8">New Block Launched by Smart Housing Multan: Premium Block</h2>
                        </div>
                    </div>

                    {/* Blog Content */}
                    <div className="flex flex-col lg:flex-row lg:space-x-12 text-justify">
                        <div className="px-4 lg:px-0 mt-12 text-gray-700 text-lg leading-relaxed w-full lg:w-3/4">
                            <p className="pb-6">
                                Pakistan's real estate sector continues to flourish, with Multan emerging as a hub for modern living and a luxurious or comfortable lifestyle. Smart Housing is among the most popular projects in Multan, and it stands out and is making waves in the City of Saints. Known for its innovative approach and integration of smart technology, Smart Housing Multan has launched its much-anticipated fifth block: Premium Block. In this blog, you will explore this newly launched premium block, its payment plan, features, location, and investment options.
                            </p>
                            <h3 className="text-xl sm:text-3xl font-semibold text-gray-800 leading-tight">
                                About Premium Block
                            </h3>
                            <picture>
                                The Premium Block is the newest addition to the Smart Housing Society, designed to provide residents comfort, convenience, and a luxurious lifestyle. Mr. Zafar & Company is developing this society and incorporating advanced technology or smart features into the 5th block of society. This block also features modern infrastructure like other blocks of this housing society. At the same time, state-of-the-art amenities, a serene environment, and its location make this block stand out among all other blocks. Moreover, Nishter Block is a part of the Premium Block, which is named after an iconic building of Nishter 2 Hospital, present on the opposite side of this block. It promises to offer the best modern living with easy access to nearby amenities and landmarks.
                            </picture>
                        <img src={img2} alt="Location of Smart Housing premium Block"   className="pb-6 mx-auto w-full sm:w-auto"/>
                            <h3 className="text-xl sm:text-3xl font-semibold text-gray-800 leading-tight">
                                Features of Premium Block
                            </h3>
                            <p className="pb-6">
                                The premium block is located in a prime location in Multan near Nag Shah Chowk, providing easy access to essential services like schools, commercial areas, and hospitals. Additionally, it features a commercial area, apartments, parks, an underground electricity system, eco-friendly infrastructure, green belts, wide carpeted roads, and many other distinguishing features.
                            </p>
                            <p className="pb-6">
                                Another best thing about this premium block is that you can get balloted plots. You will get a commercial or residential plot at a place that is known to you from the day first. Furthermore, Premium block has Smart-X, an iconic X-shaped structure that will be only build in this 5th block. Commercial property in this block also offers an amazing opportunity to investors interested in doing business or renting in future.
                            </p>

                            <h3 className="text-xl sm:text-3xl font-semibold text-gray-800 leading-tight">Location of Premium Block</h3>
                            <p className="pb-6">
                                Premium block is located 2 to 3 minutes from Nag Shah Chowk and 7 to 8 minutes from the M5 Motorway. You can also reach it from Multan International Airport by driving for almost 10 to 12 minutes. This block comes first when traveling toward the Smart Housing Society from Vehari Chowk. Popular landmarks near the premium block are MNS University of Agriculture, Multan University of Science and Technology, and Nishat Boys School. It is located exactly opposite to the Nishter 2 building.
                            </p>
                            <h3 className="text-xl sm:text-3xl font-semibold text-gray-800 leading-tight">Premium Block Developmental Status</h3>
                            <p className="pb-6">
                                The developers have promised to complete most of the premium block's development in a year. Its development has started and is going fast. The ground is being leveled, and you will see the carpeted roads and infrastructure development very soon.
                            </p>
                            <h3 className="text-xl sm:text-3xl font-semibold text-gray-800 leading-tight">Payment Plan of Premium Block</h3>
                            <p className="pb-6">
                                For the premium block, a payment plan for 18 months is designed by the Smart Housing Society, It offers an opportunity to own the possession of the plot in only 6 months. Its payment plan includes a down payment, confirmation amount, monthly installments, and half-year amount. However, monthly and half-yearly installments are more than other blocks due to its 1.5-year plan. You can get 3.5, 5, 7, and 10 Marla plots in this newly launched block of Smart Housing Multan. Furthermore, you can get a 15% discount on full cash payments.
                            </p>
                            <img src={img1} alt="" className="mx-auto pb-6" />



                            <h4 className="text-[18px] sm:text-2xl font-semibold text-gray-800 leading-tight">Conclusion</h4>
                            <p className="pb-6">
                                The Premium Block launched by Smart Housing Multan is an exciting development for home-owners and investors looking for an investment opportunity. With its luxurious amenities, prime location, and focus on sustainability, the Premium block is a perfect choice for those seeking a high-quality living experience. As Multan continues to expand and modernize, Smart Housing Multan and its premium block will undoubtedly remain a preferential residential or commercial destination for years to come.
                            </p>
                            <p className="pb-6">
                                You can become a part of this fast-growing community by securing your space. For any guidance or help, contact the IES Marketing team. We are available to help you make the best decision and secure the best place for your future house or business.
                            </p>
                            <p className="pb-3">
                                Visit our office in Model Town, Near Northern Bypass, or reach out our team at:
                            </p>
                            <p className='text-xl pb-3'> <span className='font-bold'>Email Address: </span>  <a href="mailto:iesmarketingpakistan@gmail.com" className='text-blue-500 hover:underline'>iesmarketingpakistan@gmail.com</a></p>
                            <p className='text-xl pb-3'> <span className='font-bold'>Phone: </span>  <a href="tel:923338400108" className='text-blue-500 hover:underline'>+92333-8400108 </a>, <a href="tel:92333-8400106" className='text-blue-500 hover:underline'>+92333-8400106</a></p>

                            <h4 className="text-[18px] mt-6 sm:text-2xl font-semibold text-gray-800 leading-tight">
                                Disclaimer
                            </h4>
                            <p className="pb-6">
                                We do not deal in any unapproved society of Multan. The information provided in this blog is collected from different online sources to provide details about real estate.
                            </p>



                            {/* Blog Content End */}
                        </div>

                        {/* Social Media Section */}
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
                </main >
            </div >
            <Blogs heading="Other Blogs" />
        </div >
    )
}

export default NewBlockPremiumBlock
