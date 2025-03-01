import React, { useEffect } from "react";
import { useRef } from "react";
import { AiFillTikTok } from "react-icons/ai";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareWhatsapp } from "react-icons/fa6";
import sirAliImage from "../public/Sir-Ali.webp";
import sirTaiyyabImage from "../public/Sir-Taiyyab.webp";
import { FaPhoneSquare } from "react-icons/fa";
import developerAhmad from "../public/developer ahmad.jpg";
import shanzyMalik from "../public/Mam Shanzy.jpg";
import manFaceIcon from "../public/man face icon.png";
import girlFaceIcon from "../public/girl face icon.png";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import client1 from "../public/client1.webp";
import client2 from "../public/client2.webp";
import client3 from "../public/client3.webp";
import Head from "next/head";
import Image from "next/image";
import img1 from "../public/about us img.jpeg";
import sirAyyaz from "../public/sir ayyaz.webp";
import mamAbrish from "../public/mam abrish.webp";
import sardarHamzaDreshak from "../public/sir Ameer Hamza Dreshak.webp";

const Card = ({ percentage, title }) => {
  const numberRef = useRef();

  return (
    <div className="w-full max-lg:max-w-2xl mx-auto lg:mx-0 lg:w-1/3 bg-white p-6 shadow-md shadow-gray-100 border rounded-2xl transition-all duration-[0.5s] hover:border-blue-800 hover:shadow-2xl">
      <div className="flex gap-5">
        <div
          className="font-manrope text-2xl font-bold text-indigo-600"
          ref={numberRef}
        >
          {percentage}
        </div>
        <div className="flex-1">
          <h4 className="text-xl text-gray-900 font-semibold mb-2">{title}</h4>
        </div>
      </div>
    </div>
  );
};

const About = () => {
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  return (
    <>
      <style jsx>
        {`
          .swiper-wrapper {
            height: max-content !important;

            width: max-content;
          }

          .swiper-button-next,
          .swiper-button-prev {
            top: 25%;
            z-index: 1000;
          }

          .swiper-button-next {
            right: -0px !important;
          }

          .swiper-button-prev {
            left: 0px !important;
          }

          .swiper-button-prev:after,
          .swiper-rtl .swiper-button-next:after {
            content: "" !important;
          }

          .mySwiper {
            max-width: 320px !important;
            margin: 0 auto !important;
          }

          .swiper-button-next:after,
          .swiper-rtl .swiper-button-prev:after {
            content: "" !important;
          }

          .mySwiper
            .swiper-slide.swiper-slide-thumb-active
            > .swiper-slide\:w-16 {
            --tw-scale-x: 1;
            --tw-scale-y: 1;
            transform: translate(var(--tw-translate-x), var(--tw-translate-y))
              rotate(var(--tw-rotate)) skewX(var(--tw-skew-x))
              skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x))
              scaleY(var(--tw-scale-y));
          }

          .mySwiper
            .swiper-slide.swiper-slide-thumb-active
            > .swiper-slide\:border-indigo-600 {
            --tw-border-opacity: 1;
            border-color: rgb(79 70 229 / var(--tw-border-opacity));
          }

          .teamswiper .swiper-wrapper {
            height: max-content !important;
            padding-bottom: 64px !important;
          }

          .teamswiper .swiper-horizontal > .swiper-scrollbar,
          .teamswiper .swiper-scrollbar.swiper-scrollbar-horizontal {
            max-width: 140px !important;
            height: 3px !important;
            bottom: 25px !important;
            left: 50% !important;
            transform: translateX(-50%) !important;
          }

          .teamswiper .swiper-pagination-fraction {
            bottom: 0 !important;
            padding-top: 16px !important;
          }

          .teamswiper
            .swiper-slide.swiper-slide-active
            > .slide\:border-indigo-600 {
            --tw-border-opacity: 1;
            border-color: rgb(79 70 229 / var(--tw-border-opacity));
          }

          .teamswiper .swiper-pagination-total {
            color: rgb(156 163 175) !important;
          }

          .teamswiper .swiper-scrollbar-drag {
            background: rgb(79 70 229);
          }

          .teamswiper .swiper-pagination-fraction {
            bottom: 0 !important;
          }

          .teamswiper .swiper-button-prev:after,
          .teamswiper .swiper-rtl .swiper-button-next:after {
            content: "" !important;
          }

          .teamswiper .swiper-button-prev {
            top: 93% !important;
            left: 35% !important;
            z-index: 100 !important;
          }

          .teamswiper .swiper-button-next {
            top: 93% !important;
            right: 35% !important;
            z-index: 100 !important;
          }

          .teamswiper .swiper-button-next:after,
          .teamswiper .swiper-rtl .swiper-button-prev:after {
            content: "" !important;
          }

          .teamswiper .swiper-button-next svg,
          .teamswiper .swiper-button-prev svg {
            width: 24px !important;
            height: 24px !important;
          }
        `}
      </style>

      <Head>
        <title>About Us - IES Marketing</title>
        <meta
          name="description"
          content="IES Marketing is a real estate agency offering extraordinary services to elevate the business of real estate."
        />
        <link rel="canonical" href="https://www.iesmkt.com/about-us/" />
      </Head>

      <div>
        {/* IES */}
        <section className="py-14 lg:py-24 relative z-0 bg-gray-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative text-center">
            <h1 className="max-w-2xl mx-auto text-center font-manrope font-bold text-4xl text-gray-900 mb-5 md:text-5xl md:leading-normal">
              Buy Your Property with <br />
              <div className="text-animation-3 text-5xl md:text-7xl font-[600] text-black relative h-[80px] md:h-[90px]">IES Marketing</div>
            </h1>
            <p className="max-w-2xl text-justify mx-auto  text-base font-normal leading-7 text-gray-500 mb-9">
              {`IES Marketing is a real estate agency offering extraordinary
              services to elevate the business of real estate. After many years
              of experience in the real estate and marketing industries and 
              successful projects, we understand future opportunities and possible challenges of real estate marketing.`}
            </p>
            {/* icon here */}
          </div>
        </section>

        {/* About Us Section */}
        <section className="py-14 lg:py-24 relative bg-[#fff1e1]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative ">
            <div className="flex justify-start gap-x-12 flex-wrap">
              <div className="img-box md:max-w-[400px] w-full">
                <Image
                  src={sirAliImage}
                  alt="About Us tailwind page"
                  className="max-lg:mx-auto w-[400px] mx-auto"
                  title="Sir Ali Kirmani"
                />
                {/* icon here */}
              </div>
              <div className=" flex items-start">
                <div className="data w-full">
                  <h2 className="text-start font-manrope font-bold text-4xl lg:text-3xl text-black mb-3 max-lg:text-center relative mt-8 md:mt-0  animate2  ">
                    Syed Ali Akbar Kirmani{" "}
                    <span className="text-2xl mb-2">(CEO)</span>
                  </h2>
                  <p className="font-normal text-xl leading-8 text-gray-500 text-start max-w-2xl mx-auto">
                    Syed Ali Akbar Kirmani:{" "}
                  </p>
                  <p className="font-normal text-xl leading-8 text-gray-500  max-w-2xl mx-auto text-jus mt-2 text-justify">
                    As a CEO of IES Marketing, Ali Akber has been a prominent
                    figure in the real estate industry. His dedication to
                    innovation and client satisfaction sets a high standard in
                    the market. He is dedicated to providing exceptional
                    investment opportunities that open doors to a brighter
                    future.
                  </p>
                  <p className="font-normal text-xl leading-8 text-gray-500  max-w-2xl mx-auto text-jus mt-2 text-justify  ">
                    &quot;IES Marketing is a full-service real estate marketing
                    agency that helps clients in the real-estate industry
                    increases their brand awareness, generate leads, and close
                    more deals.&quot;
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
              <div className="lg:pr-24 flex items-start">
                <div className="data w-full">
                  <Image
                    src={sirTaiyyabImage}
                    alt="About Us tailwind page"
                    className="block lg:hidden mb-9 mx-auto mr-0 pr-0"
                    title="Chaudhary Tayyab Sultan"
                  />
                  {/* icon here */}
                  <h2 className="font-manrope font-bold text-4xl lg:text-4xl text-black mb-4 animate2">
                    Chaudhary Tayyab Sultan (MD)
                  </h2>
                  <p className="font-normal text-xl leading-8 text-gray-500 max-w-2xl mx-auto text-justify">
                    Chaudhary Tayyab Sultan
                  </p>
                  <p className="font-normal text-xl leading-8 text-gray-500 max-w-2xl mx-auto text-justify mt-1">
                    He is the esteemed Managing Director of IES Marketing, known
                    for his remarkable achievements driven by dedication and a
                    focused work ethic. With years of experience, he champions a
                    forward-thinking approach that emphasizes innovation and
                    growth. His strategic vision is instrumental in shaping a
                    brighter future for IES Marketing and its clients.
                  </p>
                  <p className="font-normal text-xl leading-8 text-gray-500 max-w-2xl mx-auto text-justify mt-3">
                    &quot;We have a devoted team determined to bring growth to
                    our community, serving to maintain existing business and
                    backing our clients in making their ideal choices for
                    life&quot;
                  </p>
                </div>
                {/* icon here */}
              </div>
              <div className="img-box">
                <Image
                  src={sirTaiyyabImage}
                  alt="About Us tailwind page"
                  className="hidden lg:block  w-[450px]"
                  title="Chaudhary Tayyab Sultan"
                />
                {/* icon here */}
              </div>
            </div>
          </div>
        </section>

        {/* About US  */}
        <section className="my-6 px-5 mb-12 sm:px-40 text-justify">
          <h2 className="text-3xl font-bold mt-10 mb-4">About Us</h2>
          <p className="text-[15px] sm:text-lg leading-relaxed">
            IES Marketing is a real estate agency offering extraordinary
            services to elevate the business of real estate. After many years of
            experience in the real estate and marketing industries and
            successful projects, we understand future opportunities and possible
            challenges of real estate marketing. We focus on a customized
            strategy for marketing that perfectly aligns with the client&apos;s
            business objectives. Our team of experts primarily focuses on
            delivering outstanding results, contributing to business growth and
            long-term success of projects. IES Marketing is one of the
            Pakistan&apos;s top real estate marketing company dealing in
            exclusive housing projects or societies. Also, we have achieved
            excellence in many well-known projects across Pakistan. We are
            highly dedicated to deliver innovative marketing solutions to create
            lasting value for our clients. Briefly, IES Marketing is elevating
            real estate industry to help potential buyers and sellers attain
            excellent results by making top-tier real estate choices.
          </p>
        </section>

        {/* Pakistan best Real State Company  */}
        <section className="my-6 mb-12 px-5 sm:px-40 text-justify">
          <h2 className="text-3xl font-bold mt-10 mb-4">Owners</h2>
          <p className="text-[15px] sm:text-lg leading-relaxed">
            Since 2015, the strategic insights and leadership of Syed Ali Akbar
            Kirmani, CEO of IES marketing, have been instrumental in
            establishing a trusted name in the real estate industry. Chaudhary
            Tayyab Sultan is a Managing Director of IES Marketing who ensures
            that IES Marketing consistently meets or exceeds client&apos;s
            expectations. Both CEO and Managing director have built IES
            Marketing from the ground up, driven by a shared vision of
            unparalleled services of real estate marketing. Under their
            supervision, IES Marketing continues to expand and set new standards
            of excellence.
          </p>
        </section>

        {/* Our Results Section */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-manrope text-4xl text-center text-gray-900 font-bold mb-14">
              Our Achievements
            </h2>
            <div className="flex flex-col gap-5 xl:gap-8 lg:flex-row lg:justify-between">
              <Card percentage="100%" title="Consumer Satisfaction" />
              <Card percentage="100%" title="Seamless transactions" />
              <Card percentage="100+" title="Properties" />
            </div>
            <div className="flex flex-col gap-5 xl:gap-8 lg:flex-row lg:justify-center mt-3">
              <Card percentage="100%" title="Deliverance" />
              <Card percentage="13+" title="Award winning" />
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="bg-gray-100">
          <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
              <div className="max-w-lg">
                <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                  Our Vision & Mission
                </h2>
                <p className="mt-4 text-gray-600 text-lg">
                  IES aims to become a leading real estate marketing agency by
                  providing marketing solutions that empower our clients to
                  reach their full potential. Our commitment to excellence and
                  client&apos;s satisfaction makes us the go-to place for people
                  looking for a reliable company to fulfill their real estate
                  marketing needs. Also, we make sure to foster positive
                  relationships and uphold higher standards of honesty with
                  clients. Moreover, IES Marketing stands out as Pakistan&apos;s
                  only real estate marketing company with a strong focus and
                  effort on women&apos;s empowerment.
                </p>
                <div className="mt-8">
                  <p
                    className="text-blue-500 cursor-pointer hover:text-blue-600 font-medium"
                    onClick={scrollToTop}
                  >
                    Learn more about us
                    <span className="ml-2">&#8594;</span>
                  </p>
                </div>
              </div>
              <div className="mt-12 md:mt-0">
                <Image
                  src={img1}
                  alt="About Us Image"
                  className="object-cover rounded-lg shadow-md"
                  title="IES Marketing About us"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Our Team Section */}
        <section className="bg-white">
          <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
            <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
              <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">
                Our Team
              </h2>
              <p className="font-light text-gray-500 lg:mb-16 sm:text-xl text-center">
                Our strength lies in the diversity of talents, united by a
                shared vision to exceed expectations. Every team member
                contributes to shaping the future of our company.
              </p>
            </div>
            <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
              {/* Ayyaz Mahmood */}
              <div className="items-center bg-gray-50 shadow sm:flex border border-gray-300 rounded-2xl transition-all duration-[0.5s] hover:border-blue-800 hover:shadow-2xl py-0">
                <a href="#" className="flex justify-center items-center">
                  <Image
                    className="max:h-[100px] w-[400px] sm:rounded-t-none rounded-t-[15px] my-0"
                    src={sirAyyaz}
                    alt="Ayyaz Mahmood"
                    title="Ayyaz Mahmood"
                  />
                </a>
                <div className="p-5">
                  <h3 className="text-xl font-bold tracking-tight text-gray-900">
                    <a href="#">Ayyaz Mahmood</a>
                  </h3>
                  <span className="text-gray-500">Relationship Manager</span>
                  <p className="mt-3 mb-4 font-light text-gray-500">
                    He is a trusted advisor to both clients and colleagues, and
                    his commitment to excellence and personalized service makes
                    him an invaluable asset to the IES Marketing team.
                  </p>
                  <ul className="flex space-x-4 sm:mt-0 justify-center items-center">
                    <li>
                      <a
                        href="https://wa.link/8hv359"
                        target="_main"
                        className="text-gray-500 hover:text-green-500 duration-[0.2s]"
                      >
                        <FaSquareWhatsapp className="w-8 h-8" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/in/ayyaz-mahmood-5168b6308?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                        target="_main"
                        className="text-gray-500 hover:text-blue-500 duration-[0.2s]"
                      >
                        <FaLinkedin className="w-8 h-8" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="mailto:ayyazmahmoods36@gmail.com"
                        target="_main"
                        className="text-gray-500 hover:text-blue-500 duration-[0.2s]"
                      >
                        <MdEmail className="w-8 h-8" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="tel:03338400106"
                        className="text-gray-500 hover:text-gray-900 duration-[0.2s]"
                      >
                        <FaPhoneSquare className="w-8 h-8" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Abrish Zahra */}
              <div className="items-center bg-gray-50 shadow sm:flex border border-gray-300 rounded-2xl transition-all duration-[0.5s] hover:border-blue-800 hover:shadow-2xl py-0">
                <div className="flex justify-center items-center">
                  <Image
                    className="max:h-[100px] w-[400px] sm:rounded-t-none rounded-t-[15px] my-0"
                    src={mamAbrish}
                    alt="Abrish Zahra"
                    title="Abrish Zahra - Business development manager at IES Marketing"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-bold tracking-tight text-gray-900">
                    <p>Abrish Zahra</p>
                  </h3>
                  <span className="text-gray-500">
                    Business Development Manager
                  </span>
                  <p className="mt-3 mb-4 font-light text-gray-500">
                    Multi-tasking skills and dedication of Abrish Zahra allowed
                    her to lead teams and become a successful manager at IES
                    Marketing
                  </p>
                  <ul className="flex space-x-4 sm:mt-0 justify-center items-center">
                    <li>
                      <a
                        href="https://wa.me/923338400116"
                        target="_main"
                        className="text-gray-500 hover:text-green-500 duration-[0.2s]"
                      >
                        <FaSquareWhatsapp className="w-8 h-8" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/in/abrish-zahra-4ab830325?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                        target="_main"
                        className="text-gray-500 hover:text-blue-500 duration-[0.2s]"
                      >
                        <FaLinkedin className="w-8 h-8" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="mailto:AbrishZahra.ies@gmail.com"
                        target="_main"
                        className="text-gray-500 hover:text-blue-500 duration-[0.2s]"
                      >
                        <MdEmail className="w-8 h-8" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="tel:03338400116"
                        className="text-gray-500 hover:text-gray-900 duration-[0.2s]"
                      >
                        <FaPhoneSquare className="w-8 h-8" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Shanzay Malik  gmail*/}
              {/* <div className="items-center bg-gray-50 shadow sm:flex border border-gray-300 rounded-2xl transition-all duration-[0.5s] hover:border-blue-800 hover:shadow-2xl py-0">
              <div className="flex justify-center items-center">
                <Image className="max:h-[100px] w-[400px] sm:rounded-t-none rounded-t-[15px] my-0" src={shanzyMalik} alt="Sofia Avatar" />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold tracking-tight text-gray-900">
                  <p>Shanzay Malik</p>
                </h3>
                <span className="text-gray-500">HR</span>
                <p className="mt-3 mb-4 font-light text-gray-500">
                  Continuous effort and dedication of Shanzay Malik, earned her this role in a short time period. She is focused on enhancing team capabilities and fostering a positive work environment.
                </p>
                <ul className="flex space-x-4 sm:mt-0 justify-center items-center">
                  <li>
                    <a href="https://wa.me/923338400109" target='_main' className="text-gray-500 hover:text-green-500 duration-[0.2s]">
                      <FaSquareWhatsapp className="w-8 h-8" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/shanzay-malik-018833325?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target='_main' className="text-gray-500 hover:text-blue-500 duration-[0.2s]">
                      <FaLinkedin className="w-8 h-8" />
                    </a>
                  </li>
                  <li>
                    <a href="mailto:AbrishZahra.ies@gmail.com" target='_main' className="text-gray-500 hover:text-blue-500 duration-[0.2s]">
                      <MdEmail className="w-8 h-8" />
                    </a>
                  </li>
                  <li>
                    <a href="tel:03338400109" className="text-gray-500 hover:text-gray-900 duration-[0.2s]">
                      <FaPhoneSquare className="w-8 h-8" />
                    </a>
                  </li>
                </ul>
              </div>
            </div> */}

              {/* Suman Khalid*/}
              {/* <div className="items-center bg-gray-50 shadow sm:flex border border-gray-300 rounded-2xl transition-all duration-[0.5s] hover:border-blue-800 hover:shadow-2xl py-0">
              <div className="flex justify-center items-center">
                <Image className="max:h-[100px] w-[400px] sm:rounded-t-none rounded-t-[15px] my-0" src={girlFaceIcon} alt="Sofia Avatar" />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold tracking-tight text-gray-900">
                  <p>Suman Khalid </p>
                </h3>
                <span className="text-gray-500">Sales Executive</span>
                <p className="mt-3 mb-4 font-light text-gray-500">
                  With innovative approach and passion for real estate, Suman Khalid brings commitment to excellence in every client interaction and embarked on her journey with IES Marketing.
                </p>
                <ul className="flex space-x-4 sm:mt-0 justify-center items-center">
                  <li>
                    <a href="https://wa.me/923338400114" target='_main' className="text-gray-500 hover:text-green-500 duration-[0.2s]">
                      <FaSquareWhatsapp className="w-8 h-8" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/suman-khalid-834b6624a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target='_main' className="text-gray-500 hover:text-blue-500 duration-[0.2s]">
                      <FaLinkedin className="w-8 h-8" />
                    </a>
                  </li>
                  <li>
                    <a href="mailto:Sumankhalid.ies@gmail.com" target='_main' className="text-gray-500 hover:text-blue-500 duration-[0.2s]">
                      <MdEmail className="w-8 h-8" />
                    </a>
                  </li>
                  <li>
                    <a href="tel:03338400114" className="text-gray-500 hover:text-gray-900 duration-[0.2s]">
                      <FaPhoneSquare className="w-8 h-8" />
                    </a>
                  </li>
                </ul>
              </div>
            </div> */}

              {/* Bukhtawar linked email*/}
              {/* <div className="items-center bg-gray-50 shadow sm:flex border border-gray-300 rounded-2xl transition-all duration-[0.5s] hover:border-blue-800 hover:shadow-2xl py-0">
              <div className="flex justify-center items-center">
                <Image className="max:h-[100px] w-[400px] sm:rounded-t-none rounded-t-[15px] my-0" src={girlFaceIcon} alt="Sofia Avatar" />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold tracking-tight text-gray-900">
                  <p>Bakhtawar Saeed </p>
                </h3>
                <span className="text-gray-500">Accounts Officer</span>
                <p className="mt-3 mb-4 font-light text-gray-500">
                  Bakhtawar Saeed ensures smooth management of financial operations. Her commitment to maintaining financial integrity and supporting the company’s growth reflects her vital role in the success of IES Marketing.
                </p>
                <ul className="flex space-x-4 sm:mt-0 justify-center items-center">
                  <li>
                    <a href="https://wa.me/923338400107" target='_main' className="text-gray-500 hover:text-green-500 duration-[0.2s]">
                      <FaSquareWhatsapp className="w-8 h-8" />
                    </a>
                  </li>

                  <li>
                    <a href="tel:923338400107" className="text-gray-500 hover:text-gray-900 duration-[0.2s]">
                      <FaPhoneSquare className="w-8 h-8" />
                    </a>
                  </li>
                </ul>
              </div>
            </div> */}

              {/* Manahil Jaweed linkedin*/}
              {/* <div className="items-center bg-gray-50 shadow sm:flex border border-gray-300 rounded-2xl transition-all duration-[0.5s] hover:border-blue-800 hover:shadow-2xl py-0">
              <div className="flex justify-center items-center">
                <Image className="max:h-[100px] w-[400px] sm:rounded-t-none rounded-t-[15px] my-0" src={girlFaceIcon} alt="Sofia Avatar" />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold tracking-tight text-gray-900">
                  <p>Manahil Javeed </p>
                </h3>
                <span className="text-gray-500">Traning Speciliest</span>
                <p className="mt-3 mb-4 font-light text-gray-500">
                  Manahil Javeed earned an esteemed position of Training Specialist to enhance the team’s professional development and training programs. Her passion to fulfill responsibility made her a valuable asset for the company.
                </p>
                <ul className="flex space-x-4 sm:mt-0 justify-center items-center">
                  <li>
                    <a href="https://wa.me/923338400112" target='_main' className="text-gray-500 hover:text-green-500 duration-[0.2s]">
                      <FaSquareWhatsapp className="w-8 h-8" />
                    </a>
                  </li>

                  <li>
                    <a href="mailto:Manhiljaveed.ies@gmail.com" target='_main' className="text-gray-500 hover:text-blue-500 duration-[0.2s]">
                      <MdEmail className="w-8 h-8" />
                    </a>
                  </li>
                  <li>
                    <a href="tel:03338400112" className="text-gray-500 hover:text-gray-900 duration-[0.2s]">
                      <FaPhoneSquare className="w-8 h-8" />
                    </a>
                  </li>
                </ul>
              </div>
            </div> */}

              {/* Sir saif linkedin gmail */}
              {/* <div className="items-center bg-gray-50 shadow sm:flex border border-gray-300 rounded-2xl transition-all duration-[0.5s] hover:border-blue-800 hover:shadow-2xl py-0">
              <div className="flex justify-center items-center">
                <Image className="max:h-[100px] w-[400px] sm:rounded-t-none rounded-t-[15px] my-0" src={manFaceIcon} alt="Sofia Avatar" />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold tracking-tight text-gray-900">
                  <p>Saif Ali </p>
                </h3>
                <span className="text-gray-500">Graphic Designer</span>
                <p className="mt-3 mb-4 font-light text-gray-500">
                  With a keen eye for aesthetics and creativity, Saif Ali brings visual concepts to life, ensuring that the company’s marketing materials and branding resonate with the target audience.
                </p>
                <ul className="flex space-x-4 sm:mt-0 justify-center items-center">
                  <li>
                    <a href="https://wa.me/923166700948" target='_main' className="text-gray-500 hover:text-green-500 duration-[0.2s]">
                      <FaSquareWhatsapp className="w-8 h-8" />
                    </a>
                  </li>
                  <li>
                    <a href="tel:03166700948" className="text-gray-500 hover:text-gray-900 duration-[0.2s]">
                      <FaPhoneSquare className="w-8 h-8" />
                    </a>
                  </li>
                </ul>
              </div>
            </div> */}

              {/* Developer Ahmad */}
              {/* <div className="items-center bg-gray-50 shadow sm:flex border border-gray-300 rounded-2xl transition-all duration-[0.5s] hover:border-blue-800 hover:shadow-2xl py-0">
              <div className="flex justify-center items-center">
                <Image className="max:h-[100px] w-[400px] sm:rounded-t-none rounded-t-[15px] my-0" src={developerAhmad} alt="Sofia Avatar" />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold tracking-tight text-gray-900">
                  <p>Developer Ahmad</p>
                </h3>
                <span className="text-gray-500">MERN Programmer</span>
                <p className="mt-3 mb-4 font-light text-gray-500">
                  Ahmad is a skilled Software and Web Developer, responsible for maintaining the company’s digital presence. He ensures that website and web applications are , responsive, and visually appealing.
                </p>
                <ul className="flex space-x-4 sm:mt-0 justify-center items-center">
                  <li>
                    <a href="https://wa.link/inqb63" target='_main' className="text-gray-500 hover:text-green-500 duration-[0.2s]">
                      <FaSquareWhatsapp className="w-8 h-8" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.facebook.com/devolperahmad?mibextid=ZbWKwL" target='_main' className="text-gray-500 hover:text-blue-500 duration-[0.2s]">
                      <FaFacebookSquare className="w-8 h-8" />
                    </a>
                  </li>
                  <li>
                    <a href="mailto:developerahmad3@gmail.com" target='_main' className="text-gray-500 hover:text-blue-500 duration-[0.2s]">
                      <MdEmail className="w-8 h-8" />
                    </a>
                  </li>
                  <li>
                    <a href="tel:03338400106" className="text-gray-500 hover:text-gray-900 duration-[0.2s]">
                      <FaPhoneSquare className="w-8 h-8" />
                    </a>
                  </li>
                </ul>
              </div>
            </div> */}

              {/* Anam */}
              {/* <div className="items-center bg-gray-50 shadow sm:flex border border-gray-300 rounded-2xl transition-all duration-[0.5s] hover:border-blue-800 hover:shadow-2xl py-0">
              <div className="flex justify-center items-center">
                <Image className="max:h-[100px] w-[400px] sm:rounded-t-none rounded-t-[15px] my-0" src={girlFaceIcon} alt="Sofia Avatar" />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold tracking-tight text-gray-900">
                  <p>Anum Javaid</p>
                </h3>
                <span className="text-gray-500">Content Writer</span>
                <p className="mt-3 mb-4 font-light text-gray-500">
                  With a passion for storytelling and a strategic approach to content creation, Anum Javaid crafts compelling narratives that capture the essence of the company’s message and resonate with its target audience.
                </p>
                <ul className="flex space-x-4 sm:mt-0 justify-center items-center">
                  <li>
                    <a href="https://wa.me/923166700948" target='_main' className="text-gray-500 hover:text-green-500 duration-[0.2s]">
                      <FaSquareWhatsapp className="w-8 h-8" />
                    </a>
                  </li>
                  <li>
                    <a href="tel:03166700948" className="text-gray-500 hover:text-gray-900 duration-[0.2s]">
                      <FaPhoneSquare className="w-8 h-8" />
                    </a>
                  </li>
                </ul>
              </div>
            </div> */}

              {/* Anam */}
              <div className="items-center bg-gray-50 shadow sm:flex border border-gray-300 rounded-2xl transition-all duration-[0.5s] hover:border-blue-800 hover:shadow-2xl py-0">
                <div className="flex justify-center items-center">
                  <Image
                    className="max:h-[100px] w-[400px] sm:rounded-t-none rounded-t-[15px] my-0"
                    src={sardarHamzaDreshak}
                    alt="Sardar Ameer Hamza Dreashaq"
                    title="Sardar Hamza Dreashaq"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-bold tracking-tight text-gray-900">
                    <p>Sardar Ameer Hamza Dreshak</p>
                  </h3>
                  <span className="text-gray-500">Legal Adviser</span>
                  <p className="mt-3 mb-4 font-light text-gray-500">
                    With a strong commitment to upholding legal integrity,
                    Sardar Hamza Dreashaq provides strategic advice on
                    contracts, property regulations, and corporate governance.
                    His guidance plays a pivotal role in navigating complex
                    legal matters, contributing to the company&apos;s success
                    and stability in the market.
                  </p>
                  <ul className="flex space-x-4 sm:mt-0 justify-center items-center"></ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Happy Users Feedback section */}
        <section
          id="testimonials"
          aria-label="What our customers are saying"
          className="bg-slate-50 py-20 sm:py-32"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl md:text-center">
              <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
                What do our clients Say?
              </h2>
            </div>
            <ul
              role="list"
              className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:mt-20 lg:max-w-none lg:grid-cols-3"
            >
              <li>
                <ul role="list" className="flex flex-col gap-y-6 sm:gap-y-8">
                  <li>
                    <figure className="relative bg-white p-6 shadow-xl shadow-slate-900/10 border rounded-2xl transition-all duration-[0.5s] hover:border-blue-800 hover:shadow-2xl">
                      <svg
                        aria-hidden="true"
                        width="105"
                        height="78"
                        className="absolute left-6 top-6 fill-slate-100"
                      >
                        <path d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z"></path>
                      </svg>
                      <blockquote className="relative">
                        <p className="text-lg tracking-tight text-slate-900">
                          I had taken consultation from IES Marketing team
                          regarding purchase of property in Multan. Thanks to
                          their team for complete guidance and making the
                          process simpler for me. Highly recommended!
                        </p>
                      </blockquote>
                      <figcaption className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                        <div>
                          <div className="font-display text-base text-slate-900">
                            Haider
                          </div>
                        </div>
                        <div className="overflow-hidden rounded-full bg-slate-50">
                          <Image
                            alt="Haider"
                            className="h-14 w-14 object-cover"
                            src={client1}
                            title="Haider IES Marketing Client"
                          />
                        </div>
                      </figcaption>
                    </figure>
                  </li>
                </ul>
              </li>
              <li>
                <ul role="list" className="flex flex-col gap-y-6 sm:gap-y-8">
                  <li>
                    <figure className="relative bg-white p-6 shadow-xl shadow-slate-900/10 border rounded-2xl transition-all duration-[0.5s] hover:border-blue-800 hover:shadow-2xl">
                      <svg
                        aria-hidden="true"
                        width="105"
                        height="78"
                        className="absolute left-6 top-6 fill-slate-100"
                      >
                        <path d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z"></path>
                      </svg>
                      <blockquote className="relative">
                        <p className="text-lg tracking-tight text-slate-900">
                          I needed a 5-Marla plot at a prime location of Multan
                          and consulted IES team for finding the best society.
                          The sales person guided me well and helped me to find
                          and get the plot. IES is the Best.
                        </p>
                      </blockquote>
                      <figcaption className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                        <div>
                          <div className="font-display text-base text-slate-900">
                            Muzammal
                          </div>
                        </div>
                        <div className="overflow-hidden rounded-full bg-slate-50">
                          <Image
                            alt="Muzammal"
                            className="h-14 w-14 object-cover"
                            src={client2}
                            title="Muzammal IES Marketing Client"
                          />
                        </div>
                      </figcaption>
                    </figure>
                  </li>
                </ul>
              </li>
              <li>
                <ul role="list" className="flex flex-col gap-y-6 sm:gap-y-8">
                  <li>
                    <figure className="relative bg-white p-6 shadow-xl shadow-slate-900/10 border rounded-2xl transition-all duration-[0.5s] hover:border-blue-800 hover:shadow-2xl">
                      <svg
                        aria-hidden="true"
                        width="105"
                        height="78"
                        className="absolute left-6 top-6 fill-slate-100"
                      >
                        <path d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z"></path>
                      </svg>
                      <blockquote className="relative">
                        <p className="text-lg tracking-tight text-slate-900">
                          IES is a trustworthy name in the real estate market.
                          Their team is so polite and professional and guided me
                          well through the entire procedure from choosing an
                          ideal plot to getting the file.
                        </p>
                      </blockquote>
                      <figcaption className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                        <div>
                          <div className="font-display text-base text-slate-900">
                            Ali Shan
                          </div>
                        </div>
                        <div className="overflow-hidden rounded-full bg-slate-50">
                          <Image
                            alt="Ali Shan"
                            className="h-14 w-14 object-cover"
                            src={client3}
                            title="Ali Shan Client of IES Marketing"
                          />
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
    </>
  );
};

export default About;
