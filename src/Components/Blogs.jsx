import React, { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { useAppContext } from '../Context/AppContext.jsx';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import img1 from "../assets/Blogs/blog1card.jpg"
import img2 from "../assets/Blogs/2nd blog.jpg"
import blog3 from "../assets/Blogs/3rd Blog.jpg"
import blog4 from "../assets/Blogs/4th Blog.jpg"
import blog5 from "../assets/Blogs/Blog5.jpg"
import blog6 from "../assets/Blogs/Blog6.jpg"
import blog7 from "../assets/Blogs/Blog7_1.jpg"
import blog8 from "../assets/Blogs/Blog8.jpg"
import blog9 from "../assets/Blogs/Blog9.jpg"
import blog10 from "../assets/Blogs/Blog10.jpg"
import blog11 from "../assets/Blogs/Blog11.jpg"
import img12 from "../assets/Blogs/Blog12.jpg"
import img13 from "../assets/Blogs/Blog13.jpg"
import img14 from "../assets/Blogs/Blog14.jpg"


const Blogs = ({ heading, showHelmet = true }) => {
  const { blogsData } = useAppContext();
  const [visibleCards, setVisibleCards] = useState(6);
  const blogContainerRef = useRef(null);

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
  const handleViewMore = () => {
    setVisibleCards((prev) => prev + 3);
  };

  // useEffect(() => {
  //   // Select only newly added cards
  //   const newCards = Array.from(blogContainerRef.current.children).slice(visibleCards - 3);

  //   if (newCards.length > 0) {
  //     gsap.fromTo(
  //       newCards,
  //       { opacity: 0, y: 20 }, // Adjust starting position
  //       {
  //         opacity: 1,
  //         y: 0,
  //         duration: 0.3, // Faster animation
  //         stagger: 0.1, // Reduced stagger
  //       }
  //     );
  //   }
  // }, [visibleCards]);



  return (
    <>
      {showHelmet && (
        <Helmet>
          <title>Blogs - IES Marketing</title>
          <meta name="description" content="Blogs – IES Marketing" />
        </Helmet>
      )}
      <div>
        <section className="pb-24 pt-10 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-manrope text-4xl font-bold text-gray-900 text-center mb-5">{heading}</h2>

            <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-5">

              {/* 14th Sector H of DHA Multan; A Way to Modern Living */}
              <Link to="/blog/miyawaki-botanical-forest-initiative-by-dha-multan" onClick={scrollToTop}
                className="relative flex flex-col cursor-pointer border border-gray-300 rounded-2xl transition-all duration-[0.5s] hover:border-blue-800 hover:shadow-2xl text-gray-700 bg-white bg-clip-border"
              >
                <div className="overflow-hidden text-white shadow-lg bg-clip-border rounded-t-xl bg-blue-gray-500 shadow-blue-gray-500/40">
                  <img
                    src={img14}
                    alt="card-image"
                    className="w-full h-full rounded-t-2xl"
                  />
                </div>
                <div className="p-6">
                  <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                    Miyawaki Botanical Forest Initiative by DHA Multan; Planting for Tomorrow
                  </h5>
                  {/* <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                </p> */}
                </div>
                <div className="p-6 pt-0">
                  <button
                    className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                    type="button"
                  >
                    View More
                  </button>
                </div>
              </Link>

              {/* 13th Sector H of DHA Multan; A Way to Modern Living */}
              <Link to="/blog/sector-h-of-dha-multan" onClick={scrollToTop}
                className="relative flex flex-col cursor-pointer border border-gray-300 rounded-2xl transition-all duration-[0.5s] hover:border-blue-800 hover:shadow-2xl text-gray-700 bg-white bg-clip-border"
              >
                <div className="overflow-hidden text-white shadow-lg bg-clip-border rounded-t-xl bg-blue-gray-500 shadow-blue-gray-500/40">
                  <img
                    src={img13}
                    alt="card-image"
                    className="w-full h-full rounded-t-2xl"
                  />
                </div>
                <div className="p-6">
                  <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                    Sector H of DHA Multan; A Way to Modern Living
                  </h5>
                  {/* <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                </p> */}
                </div>
                <div className="p-6 pt-0">
                  <button
                    className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                    type="button"
                  >
                    View More
                  </button>
                </div>
              </Link>

              {/* 12th Rumanza Golf Community – Luxury Living in DHA Multan */}
              <Link to="/blog/rumanza-golf-community" onClick={scrollToTop}
                className="relative flex flex-col cursor-pointer border border-gray-300 rounded-2xl transition-all duration-[0.5s] hover:border-blue-800 hover:shadow-2xl text-gray-700 bg-white bg-clip-border"
              >
                <div className="overflow-hidden text-white shadow-lg bg-clip-border rounded-t-xl bg-blue-gray-500 shadow-blue-gray-500/40">
                  <img
                    src={img12}
                    alt="card-image"
                    className="w-full h-full rounded-t-2xl"
                  />
                </div>
                <div className="p-6">
                  <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                    Rumanza Golf Community – Luxury Living in DHA Multan
                  </h5>
                  {/* <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                </p> */}
                </div>
                <div className="p-6 pt-0">
                  <button
                    className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                    type="button"
                  >
                    View More
                  </button>
                </div>
              </Link>

              {/* 11th Sector M of DHA Multan: A New Standard of Living */}
              <Link to="/blog/sector-m-of-dha-multan" onClick={scrollToTop}
                className="relative flex flex-col cursor-pointer border border-gray-300 rounded-2xl transition-all duration-[0.5s] hover:border-blue-800 hover:shadow-2xl text-gray-700 bg-white bg-clip-border"
              >
                <div className="overflow-hidden text-white shadow-lg bg-clip-border rounded-t-2xl bg-blue-gray-500 shadow-blue-gray-500/40">
                  <img
                    src={blog11}
                    alt="card-image"
                    className="w-full rounded-t-2xl"
                  />
                </div>
                <div className="p-6">
                  <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                    Sector M of DHA Multan: A New Standard of Living
                  </h5>
                </div>
                <div className="p-6 pt-0">
                  <button
                    className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                    type="button"
                  >
                    View More
                  </button>
                </div>
              </Link>


              {/* 10th Investment Opportunities in DHA Multan */}
              <Link to="/blog/investment-opportunities-in-dha-multan" onClick={scrollToTop}
                className="relative flex flex-col cursor-pointer border border-gray-300 rounded-2xl transition-all duration-[0.5s] hover:border-blue-800 hover:shadow-2xl text-gray-700 bg-white bg-clip-border"
              >
                <div className="overflow-hidden text-white shadow-lg bg-clip-border rounded-t-2xl bg-blue-gray-500 shadow-blue-gray-500/40">
                  <img
                    src={blog10}
                    alt="card-image"
                    className="w-full rounded-t-2xl"
                  />
                </div>
                <div className="p-6">
                  <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                    Investment Opportunities in DHA Multan
                  </h5>
                  {/* <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                </p> */}
                </div>
                <div className="p-6 pt-0">
                  <button
                    className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                    type="button"
                  >
                    View More
                  </button>
                </div>
              </Link>


              {/* 9th Smart Property Card: Revolutionizing Property Ownership in Pakistan */}
              <Link to="/blog/smart-property-card-revolutionizing-property-ownership-in-pakistan" onClick={scrollToTop}
                className="relative flex flex-col cursor-pointer border border-gray-300 rounded-2xl transition-all duration-[0.5s] hover:border-blue-800 hover:shadow-2xl text-gray-700 bg-white bg-clip-border"
              >
                <div className="overflow-hidden text-white shadow-lg bg-clip-border rounded-t-2xl bg-blue-gray-500 shadow-blue-gray-500/40">
                  <img
                    src={blog9}
                    alt="card-image"
                    className="w-full rounded-t-2xl"
                  />
                </div>
                <div className="p-6">
                  <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                    Smart Property Card: Revolutionizing Property Ownership in Pakistan
                  </h5>
                  {/* <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                </p> */}
                </div>
                <div className="p-6 pt-0">
                  <button
                    className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                    type="button"
                  >
                    View More
                  </button>
                </div>
              </Link>



              {/* 8th Pros and Cons of Buying a Property in South Punjab */}
              <Link to="/blog/why-is-smart-housing-multan-a-smart-choice-for-investors" onClick={scrollToTop}
                className="relative flex flex-col cursor-pointer border border-gray-300 rounded-2xl transition-all duration-[0.5s] hover:border-blue-800 hover:shadow-2xl text-gray-700 bg-white bg-clip-border"
              >
                <div className="overflow-hidden text-white shadow-lg bg-clip-border rounded-t-2xl bg-blue-gray-500 shadow-blue-gray-500/40">
                  <img
                    src={blog8}
                    alt="card-image"
                    className="w-full rounded-t-2xl"
                  />
                </div>
                <div className="p-6">
                  <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                    Why is Smart Housing Multan a Smart Choice for Investors
                  </h5>
                  {/* <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                </p> */}
                </div>
                <div className="p-6 pt-0">
                  <button
                    className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                    type="button"
                  >
                    View More
                  </button>
                </div>
              </Link>

              {/* 7th Pros and Cons of Buying a Property in South Punjab */}
              <Link to="/blog/Pros-and-Cons-of-Buying-a-Property-In-South-Punjab" onClick={scrollToTop}
                className="relative flex flex-col cursor-pointer border border-gray-300 rounded-2xl transition-all duration-[0.5s] hover:border-blue-800 hover:shadow-2xl text-gray-700 bg-white bg-clip-border"
              >
                <div className="overflow-hidden text-white shadow-lg bg-clip-border rounded-t-2xl bg-blue-gray-500 shadow-blue-gray-500/40">
                  <img
                    src={blog7}
                    alt="card-image"
                    className="w-full rounded-t-2xl"
                  />
                </div>
                <div className="p-6">
                  <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                    Pros and Cons of Buying a Property in South Punjab
                  </h5>
                  {/* <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                </p> */}
                </div>
                <div className="p-6 pt-0">
                  <button
                    className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                    type="button"
                  >
                    View More
                  </button>
                </div>
              </Link>

              {/* 6th A Comprehensive Guide to Invest in Real Estate */}
              <Link to="/blog/a-comprehensive-guide-to-invest-in-real-estate" onClick={scrollToTop}
                className="relative flex flex-col cursor-pointer border border-gray-300 rounded-2xl transition-all duration-[0.5s] hover:border-blue-800 hover:shadow-2xl text-gray-700 bg-white bg-clip-border"
              >
                <div className="overflow-hidden text-white shadow-lg bg-clip-border rounded-t-2xl bg-blue-gray-500 shadow-blue-gray-500/40">
                  <img
                    src={blog6}
                    alt="card-image"
                    className="w-full rounded-t-2xl"
                  />
                </div>
                <div className="p-6">
                  <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                    A Comprehensive Guide to Invest in Real Estate
                  </h5>
                  {/* <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                </p> */}
                </div>
                <div className="p-6 pt-0">
                  <button
                    className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                    type="button"
                  >
                    View More
                  </button>
                </div>
              </Link>

              {/* 5th New Block Launched by Smart Housing Multan: Premium Block */}
              <Link to="/blog/new-block-launched-by-smart-housing-multan-premium-block" onClick={scrollToTop}
                className="relative flex flex-col cursor-pointer border border-gray-300 rounded-2xl transition-all duration-[0.5s] hover:border-blue-800 hover:shadow-2xl text-gray-700 bg-white bg-clip-border"
              >
                <div className="overflow-hidden text-white shadow-lg bg-clip-border rounded-t-2xl bg-blue-gray-500 shadow-blue-gray-500/40">
                  <img
                    src={blog5}
                    alt="card-image"
                    className="w-full rounded-t-2xl"
                  />
                </div>
                <div className="p-6">
                  <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                    New Block Launched by Smart Housing Multan: Premium Block
                  </h5>
                  {/* <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                </p> */}
                </div>
                <div className="p-6 pt-0">
                  <button
                    className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                    type="button"
                  >
                    View More
                  </button>
                </div>
              </Link>

              {/* 4th blog Top 11 Societies in Multan to Invest in 2024 */}
              <Link to="/blog/top-11-societies-in-multan-to-invest-in-2024" onClick={scrollToTop}
                className="relative flex flex-col cursor-pointer border border-gray-300 rounded-2xl transition-all duration-[0.5s] hover:border-blue-800 hover:shadow-2xl text-gray-700 bg-white bg-clip-border"
              >
                <div className="overflow-hidden text-white shadow-lg bg-clip-border rounded-t-2xl bg-blue-gray-500 shadow-blue-gray-500/40">
                  <img
                    src={blog4}
                    alt="card-image"
                    className="w-full h-full rounded-t-2xl"
                  />
                </div>
                <div className="p-6">
                  <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                    Top 11 Societies in Multan to Invest in 2024
                  </h5>
                  {/* <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                </p> */}
                </div>
                <div className="p-6 pt-0">
                  <button
                    className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                    type="button"
                  >
                    View More
                  </button>
                </div>
              </Link>

              {/* 3rd blog Real Estate in Pakistan: Opportunities & Challenges */}
              <Link to="/blog/best-time-to-invest-in-pakistan-real-estate" onClick={scrollToTop}
                className="relative flex flex-col cursor-pointer border border-gray-300 rounded-2xl transition-all duration-[0.5s] hover:border-blue-800 hover:shadow-2xl text-gray-700 bg-white bg-clip-border"
              >
                <div className="overflow-hidden text-white shadow-lg bg-clip-border rounded-t-2xl bg-blue-gray-500 shadow-blue-gray-500/40">
                  <img
                    src={blog3}
                    alt="card-image"
                    className="w-full h-full rounded-t-2xl"
                  />
                </div>
                <div className="p-6">
                  <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                    Best Time to Invest in Pakistan Real Estate
                  </h5>
                  {/* <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                </p> */}
                </div>
                <div className="p-6 pt-0">
                  <button
                    className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                    type="button"
                  >
                    View More
                  </button>
                </div>
              </Link>

              {/* 2nd blog Real Estate in Pakistan: Opportunities & Challenges */}
              <Link to="/blog/emerging-trends-in-pakistans-real-estate-2" onClick={scrollToTop}
                className="relative flex flex-col cursor-pointer border border-gray-300 rounded-2xl transition-all duration-[0.5s] hover:border-blue-800 hover:shadow-2xl text-gray-700 bg-white bg-clip-border"
              >
                <div className="overflow-hidden text-white shadow-lg bg-clip-border rounded-t-2xl bg-blue-gray-500 shadow-blue-gray-500/40">
                  <img
                    src={img2}
                    alt="card-image"
                    className="w-full h-full rounded-t-2xl"
                  />
                </div>
                <div className="p-6">
                  <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                    Emerging Trends in Pakistan's Real Estate - 2024
                  </h5>
                  {/* <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                </p> */}
                </div>
                <div className="p-6 pt-0">
                  <button
                    className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                    type="button"
                  >
                    View More
                  </button>
                </div>
              </Link>

              {/* 1st blog Real Estate in Pakistan: Opportunities & Challenges */}
              <Link to="/blog/real-estate-opportunities-1" onClick={scrollToTop}
                className="relative flex flex-col cursor-pointer border border-gray-300 rounded-2xl transition-all duration-[0.5s] hover:border-blue-800 hover:shadow-2xl text-gray-700 bg-white bg-clip-border"
              >
                <div className="overflow-hidden text-white shadow-lg bg-clip-border rounded-t-xl bg-blue-gray-500 shadow-blue-gray-500/40">
                  <img
                    src={img1}
                    alt="card-image"
                    className="w-full h-full rounded-t-2xl"
                  />
                </div>
                <div className="p-6">
                  <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                    Real Estate in Pakistan: Opportunities & Challenges
                  </h5>
                  {/* <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                </p> */}
                </div>
                <div className="p-6 pt-0">
                  <button
                    className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                    type="button"
                  >
                    View More
                  </button>
                </div>
              </Link>

            </div>

            {visibleCards < blogsData.length && (
              <button
                onClick={handleViewMore}
                className="cursor-pointer rounded-full py-3.5 px-7 w-52 flex justify-center items-center text-gray-900 font-semibold mx-auto transition-all duration-[0.4s] hover:bg-gray-100 mt-8  hover:shadow-2xl border-black border-[1.3px]"
              >
                View More
              </button>
            )}
          </div>
        </section>
      </div>
    </>
  );
};

export default Blogs;
