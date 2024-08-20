import React from 'react';
import img1 from "../assets/img1 .png"
import img2 from "../assets/img2.jpg"
import img3 from "../assets/img3.jpg"
import img4 from "../assets/img4.jpg"
import img5 from "../assets/img5.jpg"
import img6 from "../assets/img6.png"
import { useAppContext } from '../Context/AppContext.jsx';

import "./CSS/Home.css"
import OurProjects from './OurProjects.jsx';
import Blogs from './Blogs.jsx';

const Home = () => {
  const { openChatBot } = useAppContext()
  return (
    <div className="bg-white min-h-screen flex flex-col md:px-8 py-8 space-y-16">
      {/* First Section: Manage your Property */}
      <div className="flex flex-col md:flex-row items-center md:justify-between px-4 md:px-8 py-8">
        {/* Left Content */}
        <div className="md:w-1/2">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Manage your <span className="text-orange-600">Property</span>
          </h1>
          <p className="text-gray-700 mt-4 md:mt-6 max-w-md">
            Melbourne Property Market Trends: In-Depth Analysis and Key Insights for Investors, Buyers, and Real Estate Professionals
          </p>

          {/* <form className='mt-6'> */}
          <div className="relative flex items-center mt-5">
            <input
              type="text"
              id="search"
              className="block w-full p-4 text-sm text-gray-900 border border-gray-300 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 rounded-[200px] pr-0"
              placeholder="Enter your message....."
              required
            />
            <button
              type="submit"
              className="text-white absolute right-4 top-1/2 transform -translate-y-1/2 bg-[#2f3130] hover:bg-[#000000] rounded-[100px] py-[9px] px-5 dark:focus:ring-blue-800"
              onClick={openChatBot}
            >
              Contact Us
            </button>
          </div>
          {/* </form> */}


          {/* <form>
            <label for="search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
            <div className="relative">
              <input type="text" id="search" className="block w-full p-4 text-sm text-gray-900 border border-gray-300  bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 rounded-[200px]" placeholder="Enter your message....." required />
              <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-[#2f3130] hover:bg-[000000] rounded-[100px] py-[5px] h-full px-4 dark:focus:ring-blue-800">Contact Us</button>
            </div>
          </form> */}

        </div>

        {/* Right Image Section */}
        <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
          <div className="relative">
            <img
              src={img1}
              alt="Main property"
              className="rounded-lg"
            />
            {/* <div className="absolute top-0 right-0 mt-6 mr-6">
              <img
                src="https://via.placeholder.com/150x100"
                alt="Small property 1"
                className="rounded-lg shadow-md mb-4"
              />
              <img
                src="https://via.placeholder.com/150x100"
                alt="Small property 2"
                className="rounded-lg shadow-md"
              />
            </div> */}
          </div>
        </div>
      </div>

      {/* Second Section: Positive Feedback */}
      <div className="flex flex-col md:flex-row items-center md:justify-between px-4 md:px-8 py-8">
        {/* Left Image Section */}
        <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
          <div className="relative grid grid-cols-2 gap-4">
            <img
              src={img6}
              alt="Main feedback image"
              className="rounded-lg  w-[450px] col-span-2"
            />
          </div>
        </div>

        {/* Right Content */}
        <div className="md:w-1/2 md:pl-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            Positive Feedback from Our <span className="text-orange-600">Valued Clients</span>
          </h2>
          <p className="text-gray-700 mt-4 line-through text-lg">$175</p>
          <p className="text-2xl text-orange-600 font-bold">$125</p>
          <p className="text-gray-700 mt-4 max-w-md text-justify">
            Success Stories
            <br />
            Josh's South Yarra unit bought for $799,000 in 2023, now valued at $1,150,000, highlights successful real estate investment.
          </p>
          <button className="mt-6 bg-orange-600 text-white rounded-full px-6 py-2 hover:bg-orange-700 transition">
            Purchase Plot
          </button>
        </div>
      </div>

      {/* Pakistan best Real State Company  */}
      <section className='my-6 mb-12 px-5 sm:px-40 text-justify'>
        <h2 className="text-3xl font-bold mt-10 mb-4">Pakistan’s Best Real Estate Company </h2>
        <p className="text-[15px] sm:text-lg leading-relaxed">
          IES Marketing is known to be one of the best and reliable real estate or marketing companies in Pakistan. Since 2015, IES Marketing provided extraordinary services to clients and met their unique needs. With years of experience in the real estate industry, IES Marketing has built a strong reputation for its deep understanding of the market dynamics in Pakistan. It is known for innovative marketing strategies and utilizing digital media platforms or social media to reach a broad audience. Embracing technology, IES utilizes advanced tools and software for property listing. Furthermore, their ability to adapt to market changes and leverage technology further solidifies their position as a leader in the industry
        </p>
      </section>



      {/* Third Section: Our Projects*/}
      <OurProjects />
      {/* Discover Pervfect Home  */}
      <div className='flex justify-center items-center flex-wrap px-4 md:px-8 py-8 w-full'>
        <div className='bg-[#fff1e1] w-full px-[30px] py-[20px] rounded-[20px] flex justify-center items-center gap-5 flex-wrap'>
          <div className='max-w-[500px]'>
            <h3 className='text-5xl text-black font-bold'>Disover Your Perfect Home Now!</h3>
            <p className='text-[15px] mt-3 text-justify'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
            <button className='block bg-[#fff1e1] mt-5 px-6 text-black border-2 border-black py-2 rounded-full text-center bg-black-800 hover:bg-black hover:text-white hover:bg-balck-900 transition duration-[0.5s]' onClick={openChatBot}> Contact Us</button>
          </div>
          <div>
            <img src={img2} className=' h-auto lg:h-[300px] rounded-[20px]' />
          </div>
        </div>
      </div>

      {/* User feed Back */}
      <div className='flex justify-center items-center flex-wrap gap-y-2 gap-x-[80px] p-5'>
        <div
          className="relative flex w-full max-w-[26rem] flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none">
          <div
            className="relative flex items-center gap-4 pt-0 pb-8 mx-0 mt-4 overflow-hidden text-gray-700 bg-transparent shadow-none rounded-xl bg-clip-border">
            <img
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80"
              alt="Tania Andrew"
              className="relative inline-block h-[58px] w-[58px] !rounded-full  object-cover object-center" />
            <div className="flex w-full flex-col gap-0.5">
              <div className="flex items-center justify-between">
                <h5
                  className="block font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                  Muhammad Waqas
                </h5>
                <div className="flex items-center gap-0 5">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                    className="w-5 h-5 text-yellow-700">
                    <path fill-rule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                      clip-rule="evenodd"></path>
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                    className="w-5 h-5 text-yellow-700">
                    <path fill-rule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                      clip-rule="evenodd"></path>
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                    className="w-5 h-5 text-yellow-700">
                    <path fill-rule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                      clip-rule="evenodd"></path>
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                    className="w-5 h-5 text-yellow-700">
                    <path fill-rule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                      clip-rule="evenodd"></path>
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                    className="w-5 h-5 text-yellow-700">
                    <path fill-rule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                      clip-rule="evenodd"></path>
                  </svg>
                </div>
              </div>
              <p className="block font-sans text-base antialiased font-light leading-relaxed text-blue-gray-900">
                Property Dealer
              </p>
            </div>
          </div>
          <div className="p-0 mb-6">
            <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
              I had taken consultation from IES Marketing team regarding purchase of property in Multan. Thanks to their team for complete guidance and making the process simpler for me. Highly recommended!
            </p>
          </div>
        </div>
        <div
          className="relative flex w-full max-w-[26rem] flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none">
          <div
            className="relative flex items-center gap-4 pt-0 pb-8 mx-0 mt-4 overflow-hidden text-gray-700 bg-transparent shadow-none rounded-xl bg-clip-border">
            <img
              src="https://t4.ftcdn.net/jpg/02/45/56/35/360_F_245563558_XH9Pe5LJI2kr7VQuzQKAjAbz9PAyejG1.jpg"
              alt="Tania Andrew"
              className="relative inline-block h-[58px] w-[58px] !rounded-full  object-cover object-center" />
            <div className="flex w-full flex-col gap-0.5">
              <div className="flex items-center justify-between">
                <h5
                  className="block font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                  Saeed
                </h5>
                <div className="flex items-center gap-0 5">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                    className="w-5 h-5 text-yellow-700">
                    <path fill-rule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                      clip-rule="evenodd"></path>
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                    className="w-5 h-5 text-yellow-700">
                    <path fill-rule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                      clip-rule="evenodd"></path>
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                    className="w-5 h-5 text-yellow-700">
                    <path fill-rule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                      clip-rule="evenodd"></path>
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                    className="w-5 h-5 text-yellow-700">
                    <path fill-rule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                      clip-rule="evenodd"></path>
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                    className="w-5 h-5 text-yellow-700">
                    <path fill-rule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                      clip-rule="evenodd"></path>
                  </svg>
                </div>
              </div>
              <p className="block font-sans text-base antialiased font-light leading-relaxed text-blue-gray-900">
                Bank Manager
              </p>
            </div>
          </div>
          <div className="p-0 mb-6">
            <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
              I needed a 5-Marla plot at a prime location of Multan and consulted IES team for finding the best society. The sales person guided me well and helped me to find and get the plot. I would happily recommend IES to others.            </p>
          </div>
        </div>
        <div
          className="relative flex w-full max-w-[26rem] flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none">
          <div
            className="relative flex items-center gap-4 pt-0 pb-8 mx-0 mt-4 overflow-hidden text-gray-700 bg-transparent shadow-none rounded-xl bg-clip-borde">
            <img
              src="https://t4.ftcdn.net/jpg/02/57/46/97/240_F_257469718_uNecDXyirPE8cbiDElfSjkSoyGJbBqav.jpg"
              alt="Tania Andrew"
              className="relative bg-gray-500 inline-block h-[58px] w-[58px] !rounded-full  object-cover object-center" />
            <div className="flex w-full flex-col gap-0.5">
              <div className="flex items-center justify-between">
                <h5
                  className="block font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                  Muhammad Talha
                </h5>
                <div className="flex items-center gap-0 5">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                    className="w-5 h-5 text-yellow-700">
                    <path fill-rule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                      clip-rule="evenodd"></path>
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                    className="w-5 h-5 text-yellow-700">
                    <path fill-rule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                      clip-rule="evenodd"></path>
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                    className="w-5 h-5 text-yellow-700">
                    <path fill-rule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                      clip-rule="evenodd"></path>
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                    className="w-5 h-5 text-yellow-700">
                    <path fill-rule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                      clip-rule="evenodd"></path>
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                    className="w-5 h-5 text-yellow-700">
                    <path fill-rule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                      clip-rule="evenodd"></path>
                  </svg>
                </div>
              </div>
              <p className="block font-sans text-base antialiased font-light leading-relaxed text-blue-gray-900">
                Businessman
              </p>
            </div>
          </div>
          <div className="p-0 mb-6">
            <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
              IES is a trustworthy name in the real estate market. Their team is so polite and professional and guided me well through the entire procedure from choosing an ideal plot to getting the file.
            </p>
          </div>
        </div>
      </div>

      <Blogs />
    </div>
  );
};

export default Home;
