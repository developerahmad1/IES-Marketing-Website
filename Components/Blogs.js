import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import Link from "next/link.js";
import Head from "next/head.js";
import Image from "next/image";
import img1 from "../public/Blogs/blog1card.webp";
import img2 from "../public/Blogs/2nd blog.jpg";
import blog3 from "../public/Blogs/3rd Blog.jpg";
import blog4 from "../public/Blogs/4th Blog.jpg";
import blog5 from "../public/Blogs/Blog5.jpg";
import blog6 from "../public/Blogs/Blog6.webp";
import blog7 from "../public/Blogs/Blog7_1.jpg";
import blog8 from "../public/Blogs/Blog8.jpg";
import blog9 from "../public/Blogs/Blog9.jpg";
import blog10 from "../public/Blogs/Blog10.jpg";
import blog11 from "../public/Blogs/Blog11.jpg";
import img12 from "../public/Blogs/Blog12.jpg";
import img13 from "../public/Blogs/Blog13.jpg";
import img14 from "../public/Blogs/Blog14.webp";
import img15 from "../public/Blogs/Blog15.webp";
import img16 from "../public/Blogs/Blog16_1.webp";
import img17 from "../public/Blogs/Blog17_1.jpg";

const Blogs = ({ heading, showHead = true }) => {
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

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
      {showHead && (
       <Head>
       <title>IES Marketing: Real Estate Insights & Opportunities in Multan</title>
       <meta name="description" content="Explore top real estate trends and investment options in Multan. Discover luxury living and expert guides with IES Marketing to make informed decisions." />
       <meta name="keywords" content="Real Estate Multan, Investment Opportunities in DHA Multan, Best Societies to Invest in Multan 2024, Luxury Living in Multan, DHA Multan Developments, Property Market Trends in Pakistan, Buying Property in Multan, Smart Housing Solutions in Multan, Emerging Real Estate Trends Pakistan 2024, Real Estate Investment Tips in Pakistan, Affordable Housing Multan, DHA Lahore and Multan Comparison" />
       <meta name="robots" content="index, follow" />
       <link rel="canonical" href="https://www.iesmkt.com/blogs/" />
       <meta property="og:title" content="IES Marketing: Your Guide to Real Estate Opportunities in Multan & Pakistan" />
       <meta property="og:description" content="Stay updated with the latest trends in real estate in Multan, Lahore, and Islamabad. Expert insights and investment tips from IES Marketing." />
       <meta property="og:url" content="https://www.iesmkt.com/blogs/" />
       {/* <meta property="og:image" content="/path/to/your/image.jpg" /> */}
       <meta name="twitter:card" content="summary_large_image" />
       <meta name="twitter:title" content="IES Marketing: Your Guide to Real Estate Opportunities in Multan & Pakistan" />
       <meta name="twitter:description" content="Explore real estate trends, investment opportunities, and luxury living options in Multan with IES Marketing." />
       {/* <meta name="twitter:image" content="/path/to/your/image.jpg" /> */}
       <link rel="icon" href="/favicon.ico" />
     </Head>
      )}
      <div>
        <section className="pb-24 pt-10 bg-white">
          <div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8">
            {showHead ? (
              <h1 className="font-manrope text-4xl font-bold text-gray-900 text-center mb-7">
                Latest blogs on real estate
              </h1>
            ) : (
              <h3 className="font-manrope text-4xl font-bold text-gray-900 text-center mb-7">
                {heading}
              </h3>
            )}

            <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-0">

              {/* 16 _ How to Pay DHA Multan Development Charges: A Step-by-Step Guide */}
              <Link
                href="/blog/how-to-pay-dha-development-charges/"
                onClick={scrollToTop}
                className="relative flex flex-col cursor-pointer border border-gray-300 rounded-2xl transition-all duration-[0.5s] hover:border-blue-800 hover:shadow-2xl text-gray-700 bg-white bg-clip-border"
              >
                <div className="overflow-hidden text-white shadow-lg bg-clip-border rounded-t-xl bg-blue-gray-500 shadow-blue-gray-500/40">
                  <Image
                    src={img17}
                    alt="DHA Multan Developemt Charges"
                    title="DHA Multan Developemt Charges"
                    className="w-full h-full rounded-t-2xl"
                  />
                </div>
                <div className="p-6">
                  <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                  How to Pay DHA Multan Development Charges: A Step-by-Step Guide
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


              {/* 16 _ De-Orion Mall Gulgasht Multan - Premium Destination for Apartment Living */}
              <Link
                href="/blog/de-orion-mall-apartments/"
                onClick={scrollToTop}
                className="relative flex flex-col cursor-pointer border border-gray-300 rounded-2xl transition-all duration-[0.5s] hover:border-blue-800 hover:shadow-2xl text-gray-700 bg-white bg-clip-border"
              >
                <div className="overflow-hidden text-white shadow-lg bg-clip-border rounded-t-xl bg-blue-gray-500 shadow-blue-gray-500/40">
                  <Image
                    src={img16}
                    alt="De-Orion Mall Gulgasht Multan - Premium Destination for Apartment Living"
                    title="De-Orion Mall Gulgasht Multan - Premium Destination for Apartment Living"
                    className="w-full h-full rounded-t-2xl"
                  />
                </div>
                <div className="p-6">
                  <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                  De-Orion Mall Gulgasht Multan - Premium Destination for Apartment Living
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

              {/* 15th De Orion Mall: Introducing a Perfect Hub for Business */}
              <Link
                href="/blog/de-orion-mall-multan"
                onClick={scrollToTop}
                className="relative flex flex-col cursor-pointer border border-gray-300 rounded-2xl transition-all duration-[0.5s] hover:border-blue-800 hover:shadow-2xl text-gray-700 bg-white bg-clip-border"
              >
                <div className="overflow-hidden text-white shadow-lg bg-clip-border rounded-t-xl bg-blue-gray-500 shadow-blue-gray-500/40">
                  <Image
                    src={img15}
                    alt="De Orion Multan Image"
                    title="De Orion Mall: Introducing a Perfect Hub for Business"
                    className="w-full h-full rounded-t-2xl"
                  />
                </div>
                <div className="p-6">
                  <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                    De Orion Mall: Introducing a Perfect Hub for Business
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

              {/* 14th Sector H of DHA Multan; A Way to Modern Living */}
              <Link
                href="/blog/miyawaki-botanical-forest-initiative-by-dha-multan"
                onClick={scrollToTop}
                className="relative flex flex-col cursor-pointer border border-gray-300 rounded-2xl transition-all duration-[0.5s] hover:border-blue-800 hover:shadow-2xl text-gray-700 bg-white bg-clip-border"
              >
                <div className="overflow-hidden text-white shadow-lg bg-clip-border rounded-t-xl bg-blue-gray-500 shadow-blue-gray-500/40">
                  <Image
                    src={img14}
                    alt="Miyawaki Botanical Forest Initiative by DHA Multan; Planting for Tomorrow"
                    title="Miyawaki Botanical Forest Initiative by DHA Multan; Planting for Tomorrow"
                    className="w-full h-full rounded-t-2xl"
                  />
                </div>
                <div className="p-6">
                  <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                    Miyawaki Botanical Forest Initiative by DHA Multan; Planting
                    for Tomorrow
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
              <Link
                href="/blog/sector-h-of-dha-multan"
                onClick={scrollToTop}
                className="relative flex flex-col cursor-pointer border border-gray-300 rounded-2xl transition-all duration-[0.5s] hover:border-blue-800 hover:shadow-2xl text-gray-700 bg-white bg-clip-border"
              >
                <div className="overflow-hidden text-white shadow-lg bg-clip-border rounded-t-xl bg-blue-gray-500 shadow-blue-gray-500/40">
                  <Image
                    src={img13}
                    alt="Sector H of DHA Multan; A Way to Modern Living"
                    title="Sector H of DHA Multan; A Way to Modern Living"
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
              <Link
                href="/blog/rumanza-golf-community"
                onClick={scrollToTop}
                className="relative flex flex-col cursor-pointer border border-gray-300 rounded-2xl transition-all duration-[0.5s] hover:border-blue-800 hover:shadow-2xl text-gray-700 bg-white bg-clip-border"
              >
                <div className="overflow-hidden text-white shadow-lg bg-clip-border rounded-t-xl bg-blue-gray-500 shadow-blue-gray-500/40">
                  <Image
                    src={img12}
                    alt="Rumanza Golf Community – Luxury Living in DHA Multan"
                    title="Rumanza Golf Community – Luxury Living in DHA Multan"
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
              <Link
                href="/blog/sector-m-of-dha-multan"
                onClick={scrollToTop}
                height={600}
                className="relative flex flex-col cursor-pointer border border-gray-300 rounded-2xl transition-all duration-[0.5s] hover:border-blue-800 hover:shadow-2xl text-gray-700 bg-white bg-clip-border"
              >
                <div className="overflow-hidden text-white shadow-lg bg-clip-border rounded-t-2xl bg-blue-gray-500 shadow-blue-gray-500/40">
                  <Image
                    src={blog11}
                    alt="Sector M of DHA Multan: A New Standard of Living"
                    title="Sector M of DHA Multan: A New Standard of Living"
                    // className="w-full rounded-t-2xl"
                    width={800}
                    height={600}
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
              <Link
                href="/blog/investment-opportunities-in-dha-multan"
                onClick={scrollToTop}
                className="relative flex flex-col cursor-pointer border border-gray-300 rounded-2xl transition-all duration-[0.5s] hover:border-blue-800 hover:shadow-2xl text-gray-700 bg-white bg-clip-border"
              >
                <div className="overflow-hidden text-white shadow-lg bg-clip-border rounded-t-2xl bg-blue-gray-500 shadow-blue-gray-500/40">
                  <Image
                    src={blog10}
                    alt="Investment Opportunities in DHA Multan"
                    title="Investment Opportunities in DHA Multan"
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
              <Link
                href="/blog/smart-property-card-by-smart-housing-multan"
                onClick={scrollToTop}
                className="relative flex flex-col cursor-pointer border border-gray-300 rounded-2xl transition-all duration-[0.5s] hover:border-blue-800 hover:shadow-2xl text-gray-700 bg-white bg-clip-border"
              >
                <div className="overflow-hidden text-white shadow-lg bg-clip-border rounded-t-2xl bg-blue-gray-500 shadow-blue-gray-500/40">
                  <Image
                    src={blog9}
                    alt="Smart Property Card: Revolutionizing Property Ownership in Pakistan"
                    title="Smart Property Card: Revolutionizing Property Ownership in Pakistan"
                    width={800}
                    height={600}
                    className="w-full rounded-t-2xl"
                  />
                </div>
                <div className="p-6">
                  <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                    Smart Property Card: Revolutionizing Property Ownership in
                    Pakistan
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
              <Link
                href="/blog/why-is-smart-housing-multan-a-smart-choice-for-investors"
                onClick={scrollToTop}
                className="relative flex flex-col cursor-pointer border border-gray-300 rounded-2xl transition-all duration-[0.5s] hover:border-blue-800 hover:shadow-2xl text-gray-700 bg-white bg-clip-border"
              >
                <div className="overflow-hidden text-white shadow-lg bg-clip-border rounded-t-2xl bg-blue-gray-500 shadow-blue-gray-500/40">
                  <Image
                    src={blog8}
                    alt="Why is Smart Housing Multan a Smart Choice for Investors"
                    title="Why is Smart Housing Multan a Smart Choice for Investors"
                    className="w-full rounded-t-2xl"
                    width={800}
                    height={600}
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
              <Link
                href="/blog/pros-and-cons-of-buying-a-property-in-south-punjab"
                onClick={scrollToTop}
                className="relative flex flex-col cursor-pointer border border-gray-300 rounded-2xl transition-all duration-[0.5s] hover:border-blue-800 hover:shadow-2xl text-gray-700 bg-white bg-clip-border"
              >
                <div className="overflow-hidden text-white shadow-lg bg-clip-border rounded-t-2xl bg-blue-gray-500 shadow-blue-gray-500/40">
                  <Image
                    src={blog7}
                    alt="Pors and Cons Of Buying a Property in South Punjab"
                    title="Pors and Cons Of Buying a Property in South Punjab"
                    width={800}
                    height={600}
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
              <Link
                href="/blog/a-comprehensive-guide-to-invest-in-real-estate"
                onClick={scrollToTop}
                className="relative flex flex-col cursor-pointer border border-gray-300 rounded-2xl transition-all duration-[0.5s] hover:border-blue-800 hover:shadow-2xl text-gray-700 bg-white bg-clip-border"
              >
                <div className="overflow-hidden text-white shadow-lg bg-clip-border rounded-t-2xl bg-blue-gray-500 shadow-blue-gray-500/40">
                  <Image
                    src={blog6}
                    alt="A Comprehensive Guide to Invest in Real Estate"
                    title="A Comprehensive Guide to Invest in Real Estate"
                    width={800}
                    height={600}
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
              <Link
                href="/blog/new-block-launched-by-smart-housing-multan-premium-block"
                onClick={scrollToTop}
                className="relative flex flex-col cursor-pointer border border-gray-300 rounded-2xl transition-all duration-[0.5s] hover:border-blue-800 hover:shadow-2xl text-gray-700 bg-white bg-clip-border"
              >
                <div className="overflow-hidden text-white shadow-lg bg-clip-border rounded-t-2xl bg-blue-gray-500 shadow-blue-gray-500/40">
                  <Image
                    src={blog5}
                    alt="New Block Launched by Smart Housing Multan: Premium Block"
                    title="New Block Launched by Smart Housing Multan: Premium Block"
                    width={800}
                    height={600}
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
              <Link
                href="/blog/top-11-societies-in-multan-to-invest-in-2024"
                onClick={scrollToTop}
                className="relative flex flex-col cursor-pointer border border-gray-300 rounded-2xl transition-all duration-[0.5s] hover:border-blue-800 hover:shadow-2xl text-gray-700 bg-white bg-clip-border"
              >
                <div className="overflow-hidden text-white shadow-lg bg-clip-border rounded-t-2xl bg-blue-gray-500 shadow-blue-gray-500/40">
                  <Image
                    src={blog4}
                    alt="Top 11 Societies in Multan to Invest in 2024"
                    title="Top 11 Societies in Multan to Invest in 2024"
                    width={800}
                    height={600}
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
              <Link
                href="/blog/best-time-to-invest-in-pakistan-real-estate"
                onClick={scrollToTop}
                className="relative flex flex-col cursor-pointer border border-gray-300 rounded-2xl transition-all duration-[0.5s] hover:border-blue-800 hover:shadow-2xl text-gray-700 bg-white bg-clip-border"
              >
                <div className="overflow-hidden text-white shadow-lg bg-clip-border rounded-t-2xl bg-blue-gray-500 shadow-blue-gray-500/40">
                  <Image
                    src={blog3}
                    alt="Best Time to Invest in Pakistan Real Estate"
                    title="Best Time to Invest in Pakistan Real Estate"
                    width={800}
                    height={600}
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
              <Link
                href="/blog/emerging-trends-in-pakistans-real-estate"
                onClick={scrollToTop}
                className="relative flex flex-col cursor-pointer border border-gray-300 rounded-2xl transition-all duration-[0.5s] hover:border-blue-800 hover:shadow-2xl text-gray-700 bg-white bg-clip-border"
              >
                <div className="overflow-hidden text-white shadow-lg bg-clip-border rounded-t-2xl bg-blue-gray-500 shadow-blue-gray-500/40">
                  <Image
                    src={img2}
                    alt="Emerging Trends in Pakistan's Real Estate - 2024"
                    title="Emerging Trends in Pakistan's Real Estate - 2024"
                    width={800}
                    height={600}
                    className="w-full h-full rounded-t-2xl"
                  />
                </div>
                <div className="p-6">
                  <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                    Emerging Trends in Pakistan&apos;s Real Estate - 2024
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
              <Link
                href="/blog/real-estate-opportunities"
                onClick={scrollToTop}
                className="relative flex flex-col cursor-pointer border border-gray-300 rounded-2xl transition-all duration-[0.5s] hover:border-blue-800 hover:shadow-2xl text-gray-700 bg-white bg-clip-border"
              >
                <div className="overflow-hidden text-white shadow-lg bg-clip-border rounded-t-xl bg-blue-gray-500 shadow-blue-gray-500/40">
                  <Image
                    src={img1}
                    alt="Real Estate in Pakistan: Opportunities & Challenges"
                    title="Real Estate in Pakistan: Opportunities & Challenges"
                    width={800}
                    height={600}
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
          </div>
        </section>
      </div>
    </>
  );
};

export default Blogs;
