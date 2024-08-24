import React from 'react';
import "./CSS/AboutUs.css"
import { AiFillTikTok } from "react-icons/ai";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareWhatsapp } from "react-icons/fa6";
import sirAliImage from "../assets/Sir Ali.jpg"
import sirTaiyyabImage from "../assets/Sir Taiyyab.jpg"

const About = () => {
  function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
  return (
    <div>
      {/* IES */}
      <section className="py-14 lg:py-24 relative z-0 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative text-center">
          <h1 className="max-w-2xl mx-auto text-center font-manrope font-bold text-4xl text-gray-900 mb-5 md:text-5xl md:leading-normal">
            Buy You Property with <br /><span className="text-[#fa8b17]">IES Marketing</span>
          </h1>
          <p className="max-w-2xl text-justify mx-auto  text-base font-normal leading-7 text-gray-500 mb-9">
          IES Marketing is a real estate agency offering extraordinary services to elevate the business of real estate. After many years of experience in the real estate and marketing industries and successful projects, we understand future opportunities and possible challenges of real estate marketing.           </p>
          {/* icon here */}
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-14 lg:py-24 relative bg-[#fff1e1]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative ">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-9">
            <div className="img-box">
              <img src={sirAliImage} alt="About Us tailwind page" className="max-lg:mx-auto" />
              {/* icon here */}
            </div>
            <div className="lg:pl-[100px] flex items-center">
              <div className="data w-full">
                <h2 className="font-manrope font-bold text-4xl lg:text-3xl text-black mb-9 max-lg:text-center relative">
                  Syed Ali Akbar Kirmani <span className='text-2xl'>(CEO)</span>
                </h2>
                <p className="font-normal text-xl leading-8 text-gray-500 max-lg:text-center max-w-2xl mx-auto">
                  Syed Ali Akbar Kirmani:
                  <br />
                  “IES Marketing is a full-service real estate marketing agency that helps clients in the real-estate industry increases their brand awareness, generate leads, and close more deals.”
                </p>
              </div>
              {/* icon here */}
            </div>
          </div>
        </div>
      </section>

      {/* We are From */}
      <section className="py-14 lg:py-24 relative bg-[#fff1e1]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-9">
            <div className="lg:pr-24 flex items-center">
              <div className="data w-full">
                <img src={sirTaiyyabImage} alt="About Us tailwind page" className="block lg:hidden mb-9 mx-auto" />
                {/* icon here */}
                <h2 className="font-manrope font-bold text-4xl lg:text-4xl text-black mb-9 max-lg:text-center">
                Chaudhary Tayyab Sultan (MD)
                </h2>
                <p className="font-normal text-xl leading-8 text-gray-500 max-lg:text-center max-w-2xl mx-auto text-justify">
                  Chaudhary Tayyab Sultan 
                  <br />
                  “We have a devoted team determined to bring growth to our community, serving to maintain existing business and backing our clients in making their ideal choices for life
                </p>
              </div>
              {/* icon here */}
            </div>
            <div className="img-box">
              <img src={sirTaiyyabImage} alt="About Us tailwind page" className="hidden lg:block" />
              {/* icon here */}
            </div>
          </div>
        </div>
      </section>

      {/* About US  */}
      <section className='my-6 px-5 mb-12 sm:px-40 text-justify'>
        <h2 className="text-3xl font-bold mt-10 mb-4">About Us</h2>
        <p className="text-[15px] sm:text-lg leading-relaxed">IES Marketing is a real estate agency offering extraordinary services to elevate the business of real estate. After many years of experience in the real estate and marketing industries and successful projects, we understand future opportunities and possible challenges of real estate marketing. We focus on a customized strategy for marketing that perfectly aligns with the client's business objectives. Our team of experts primarily focuses on delivering outstanding results, contributing to business growth and long-term success of projects. IES Marketing is one of the Pakistan's top real estate marketing company dealing in exclusive housing projects or societies. Also, we have achieved excellence in many well-known projects across Pakistan. We are highly dedicated to deliver innovative marketing solutions to create lasting value for our clients. Briefly, IES Marketing is elevating real estate industry to help potential buyers and sellers attain excellent results by making top-tier real estate choices.</p>
      </section>

      {/* Pakistan best Real State Company  */}
      <section className='my-6 mb-12 px-5 sm:px-40 text-justify'>
        <h2 className="text-3xl font-bold mt-10 mb-4">Owners</h2>
        <p className="text-[15px] sm:text-lg leading-relaxed">
          Since 2015, the strategic insights and leadership of Syed Ali Akbar Kirmani, CEO of IES marketing, have been instrumental in establishing a trusted name in the real estate industry. Chaudhary Tayyab Sultan is a Managing Director of IES Marketing who ensures that IES Marketing consistently meets or exceeds client's expectations. Both CEO and Managing director have built IES Marketing from the ground up, driven by a shared vision of unparalleled services of real estate marketing. Under their supervision, IES Marketing continues to expand and set new standards of excellence.
        </p>
      </section>



      {/* Our Results Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-manrope text-4xl text-center text-gray-900 font-bold mb-14">
            Our results in numbers
          </h2>
          <div className="flex flex-col gap-5 xl:gap-8 lg:flex-row lg:justify-between">
            <div className="w-full max-lg:max-w-2xl mx-auto lg:mx-0 lg:w-1/3 bg-white p-6 shadow-md shadow-gray-100  border rounded-2xl transition-all duration-[0.5s] hover:border-blue-800 hover:shadow-2xl">
              <div className="flex gap-5">
                <div className="font-manrope text-2xl font-bold text-indigo-600">
                  240%
                </div>
                <div className="flex-1">
                  <h4 className="text-xl text-gray-900 font-semibold mb-2">Company growth</h4>
                  <p className="text-xs text-gray-500 leading-5">
                    Company's remarkable growth journey as we continually innovate and drive towards new heights of success.
                  </p>
                </div>
                {/* icon here */}
              </div>
            </div>
            <div className="w-full max-lg:max-w-2xl mx-auto lg:mx-0 lg:w-1/3 bg-white p-6 shadow-md shadow-gray-100  border rounded-2xl transition-all duration-[0.5s] hover:border-blue-800 hover:shadow-2xl">
              <div className="flex gap-5">
                <div className="font-manrope text-2xl font-bold text-indigo-600">
                  175+
                </div>
                <div className="flex-1">
                  <h4 className="text-xl text-gray-900 font-semibold mb-2">Company growth</h4>
                  <p className="text-xs text-gray-500 leading-5">
                    Our very talented team members are the powerhouse of pagedone and pillars of our success.
                  </p>
                </div>
                {/* icon here */}
              </div>
            </div>
            <div className="w-full max-lg:max-w-2xl mx-auto lg:mx-0 lg:w-1/3 bg-white p-6 shadow-md shadow-gray-100  border rounded-2xl transition-all duration-[0.5s] hover:border-blue-800 hover:shadow-2xl">
              <div className="flex gap-5">
                <div className="font-manrope text-2xl font-bold text-indigo-600">
                  625+
                </div>
                <div className="flex-1">
                  <h4 className="text-xl text-gray-900 font-semibold mb-2">Projects Completed</h4>
                  <p className="text-xs text-gray-500 leading-5">
                    We have accomplished more than 625 projects worldwide and we are still counting many more.
                  </p>
                </div>
                {/* icon here */}
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Our Story Section */}
      <section className="bg-gray-100">
        <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            <div className="max-w-lg">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Our Vision & Mission</h2>
              <p className="mt-4 text-gray-600 text-lg">IES aims to become a leading real estate marketing agency by providing marketing solutions that empower our clients to reach their full potential. Our commitment to excellence and client's satisfaction makes us the go-to place for people looking for a reliable company to fulfill their real estate marketing needs. Also, we make sure to foster positive relationships and uphold higher standards of honesty with clients. Moreover, IES Marketing stands out as Pakistan's only real estate marketing company with a strong focus and effort on women's empowerment.</p>
              <div className="mt-8">
                <a href="#" className="text-blue-500 hover:text-blue-600 font-medium" onClick={scrollToTop}>Learn more about us
                  <span className="ml-2">&#8594;</span></a>
              </div>
            </div>
            <div className="mt-12 md:mt-0">
              <img src="https://images.unsplash.com/photo-1531973576160-7125cd663d86" alt="About Us Image" className="object-cover rounded-lg shadow-md" />
            </div>
          </div>
        </div>
      </section>
      
      

      {/* Our Happy Users Feedback section */}
      <section id="testimonials" aria-label="What our customers are saying" class="bg-slate-50 py-20 sm:py-32">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div class="mx-auto max-w-2xl md:text-center">
            <h2 class="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">What Our Customers Are Saying</h2>
          </div>
          <ul role="list"
            class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:mt-20 lg:max-w-none lg:grid-cols-3">
            <li>
              <ul role="list" class="flex flex-col gap-y-6 sm:gap-y-8">
                <li>
                  <figure class="relative bg-white p-6 shadow-xl shadow-slate-900/10 border rounded-2xl transition-all duration-[0.5s] hover:border-blue-800 hover:shadow-2xl"><svg aria-hidden="true"
                    width="105" height="78" class="absolute left-6 top-6 fill-slate-100">
                    <path
                      d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z">
                    </path>
                  </svg>
                    <blockquote class="relative">
                      <p class="text-lg tracking-tight text-slate-900">I had taken consultation from IES Marketing team regarding purchase of property in Multan. Thanks to their team for complete guidance and making the process simpler for me. Highly recommended!</p>
                    </blockquote>
                    <figcaption class="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                      <div>
                        <div class="font-display text-base text-slate-900">Muhammad Waqas</div>
                      </div>
                      <div class="overflow-hidden rounded-full bg-slate-50">
                        <img alt="" class="h-14 w-14 object-cover" src="https://randomuser.me/api/portraits/men/15.jpg" />
                      </div>
                    </figcaption>
                  </figure>
                </li>
              </ul>
            </li>
            <li>
              <ul role="list" class="flex flex-col gap-y-6 sm:gap-y-8">
                <li>
                  <figure class="relative bg-white p-6 shadow-xl shadow-slate-900/10 border rounded-2xl transition-all duration-[0.5s] hover:border-blue-800 hover:shadow-2xl"><svg aria-hidden="true"
                    width="105" height="78" class="absolute left-6 top-6 fill-slate-100">
                    <path
                      d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z">
                    </path>
                  </svg>
                    <blockquote class="relative">
                      <p class="text-lg tracking-tight text-slate-900">I needed a 5-Marla plot at a prime location of Multan and consulted IES team for finding the best society. The sales person guided me well and helped me to find and get the plot. IES is the Best.</p>
                    </blockquote>
                    <figcaption class="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                      <div>
                        <div class="font-display text-base text-slate-900">Iqra</div>
                      </div>
                      <div class="overflow-hidden rounded-full bg-slate-50">
                        <img alt="" class="h-14 w-14 object-cover" src="https://randomuser.me/api/portraits/women/15.jpg" />
                      </div>
                    </figcaption>
                  </figure>
                </li>
              </ul>
            </li>
            <li>
              <ul role="list" class="flex flex-col gap-y-6 sm:gap-y-8">
                <li>
                  <figure class="relative bg-white p-6 shadow-xl shadow-slate-900/10 border rounded-2xl transition-all duration-[0.5s] hover:border-blue-800 hover:shadow-2xl"><svg aria-hidden="true"
                    width="105" height="78" class="absolute left-6 top-6 fill-slate-100">
                    <path
                      d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z">
                    </path>
                  </svg>
                    <blockquote class="relative">
                      <p class="text-lg tracking-tight text-slate-900">IES is a trustworthy name in the real estate market. Their team is so polite and professional and guided me well through the entire procedure from choosing an ideal plot to getting the file.</p>
                    </blockquote>
                    <figcaption class="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                      <div>
                        <div class="font-display text-base text-slate-900">Muhammad Talha</div>
                      </div>
                      <div class="overflow-hidden rounded-full bg-slate-50">
                        <img alt="" class="h-14 w-14 object-cover" src="https://randomuser.me/api/portraits/men/10.jpg" />
                      </div>
                    </figcaption>
                  </figure>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </section>

    </div>
  );
};

export default About;
