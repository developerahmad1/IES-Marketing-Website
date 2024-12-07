import React, { useEffect } from "react";
import Link from "next/link";
import smartHousingImg from "../public/SmartHousing.webp";
import royalSwissImg from "../public/royalswiss1.webp";
import adamsHousingImg from "../public/AdamsHousing1.jpg";
import cityHousingImg from "../public/City Housing 1.jpg";
import DHAMultanImg from "../public/DHA 1.webp";
import royalorchardImg from "../public/royal orchad 1.jpg";
import wapdaTown from "../public/wapdaTownImg.jpg";
import modeltown from "../public/Model-town.webp";
import deOrionMall from "../public/De Orion Mall.webp";
import Head from "next/head";
import Image from "next/image";
import ModelTownMultan from "@/pages/model-town-multan";
import deGreenHomes from "../public/De_Green_Homes_1.jpg";
import buchExecutiveVillas from "../public/Buch Villas_1 .webp";
import lahoreSmartCity from "../public/lahore-smart-city.webp";
import capitalSmartCity from "../public/capita-smart-city.webp";
import parkViewCity from "../public/park view city.webp";

const OurProjects = ({ showHead = true, heading }) => {
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <div>
      {showHead && (
        <Head>
          {/* Primary SEO Tags */}
          <title>Best Housing Societies in Multan | IES Marketing</title>

          {/* Meta Description */}
          <meta
            name="description"
            content="Discover the best housing societies in Multan with IES Marketing. Explore top communities like DHA, Royal Orchard, and more with insights on amenities, investment potential, and lifestyle."
          />

          {/* Meta Keywords */}
          <meta
            name="keywords"
            content="housing societies in multan, best housing societies in multan, societies in multan, real estate in multan"
          />

          {/* Canonical Link */}
          <link
            rel="canonical"
            href="https://www.iesmkt.com/housing-societies-in-multan/"
          />

          {/* Open Graph Meta Tags */}
          <meta
            property="og:title"
            content="Best Housing Societies in Multan | IES Marketing"
          />
          <meta
            property="og:description"
            content="Discover top housing societies in Multan like DHA and Royal Orchard with IES Marketing. Learn about lifestyle, amenities, and investment opportunities."
          />
          <meta
            property="og:image"
            content="https://www.iesmkt.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Froyal%20orchad%201.ec795224.jpg&w=3840&q=75"
          />
          <meta
            property="og:url"
            content="https://www.iesmkt.com/housing-societies-in-multan/"
          />
          <meta property="og:type" content="website" />

          {/* Twitter Meta Tags */}
          <meta
            name="twitter:title"
            content="Best Housing Societies in Multan | IES Marketing"
          />
          <meta
            name="twitter:description"
            content="Find the best housing societies in Multan, including DHA, Royal Orchard, and more. IES Marketing provides expert insights on these communities and investment potential."
          />
          <meta
            name="twitter:image"
            content="https://www.iesmkt.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Froyal%20orchad%201.ec795224.jpg&w=3840&q=75"
          />
          <meta name="twitter:card" content="summary_large_image" />
        </Head>
      )}

      <div className="bg-white py-6">
        {showHead ? (
          <h1 className="text-3xl md:text-4xl font-bold text-center md:py-6 py-3">
            Best Housing Societies in Multan
          </h1>
        ) : (
          <h3 className="text-3xl font-bold text-center py-6">{heading}</h3>
        )}
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-3">
          {/* DHA Multan */}
          <Link
            href="/dha-multan"
            onClick={scrollToTop}
            className="relative flex flex-col cursor-pointer border border-gray-300 rounded-2xl transition-all duration-[0.5s] hover:border-gray-900 hover:shadow-2xl text-gray-700 bg-white bg-clip-border"
          >
            <div className="relative overflow-hidden text-white shadow-lg bg-clip-border rounded-t-xl bg-blue-gray-500 shadow-blue-gray-500/40">
              <Image
                src={DHAMultanImg}
                alt="DHA Multan - IES Marketing"
                title="DHA Multan"
                className="w-full"
              />
            </div>
            <div className="p-6">
              <h2 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                DHA Multan
              </h2>
              <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                Defense Housing Authority (DHA) is a prestigious residential
                community featuring well-planned residential plots and
                commercial areas equipped with modern infrastructure and provide
                a secure living environment. DHA Multan stands as a symbol of
                contemporary living for providing high standards of living to
                residents.
              </p>
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
          {/* Royal orchard*/}
          <Link
            href="/royal-orchard-multan"
            onClick={scrollToTop}
            className="relative flex flex-col cursor-pointer border border-gray-300 rounded-2xl transition-all duration-[0.5s] hover:border-gray-900 hover:shadow-2xl text-gray-700 bg-white bg-clip-border"
          >
            <div className="relative overflow-hidden text-white shadow-lg bg-clip-border rounded-t-xl bg-blue-gray-500 shadow-blue-gray-500/40">
              <Image
                src={royalorchardImg}
                alt="Royal Orchad Multan"
                title="Royal Orchad Mulatn"
                className="w-full"
              />
            </div>
            <div className="p-6">
              <h2 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                Royal Orchard Multan
              </h2>
              <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                Royal Orchard Multan provides a luxurious and comfortable
                lifestyle in the fast-growing city of South Punjab. It offers
                residential and commercial plots with modern infrastructure,
                including underground electricity, wide roads, and a sewerage
                system, and follows international community standards.
              </p>
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
          {/* city Housing */}
          <Link
            href="/citi-housing-multan"
            onClick={scrollToTop}
            className="relative flex flex-col cursor-pointer border border-gray-300 rounded-2xl transition-all duration-[0.5s] hover:border-gray-900 hover:shadow-2xl text-gray-700 bg-white bg-clip-border"
          >
            <div className="relative overflow-hidden text-white shadow-lg bg-clip-border rounded-t-xl bg-blue-gray-500 shadow-blue-gray-500/40">
              <Image
                src={cityHousingImg}
                alt="CITI Housing Multan"
                title="CITI Housing Multan"
                className="w-full"
              />
            </div>
            <div className="p-6">
              <h2 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                CITI Housing Multan
              </h2>
              <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                Citi Housing Multan is an exclusive housing project in the City
                of Saints, aimed to bring modern living standards. It offers
                residential plots, commercial areas, and recreational facilities
                to residents and investors. This gated community features 120 to
                180-foot main-boulevard. It provides world-class amenities and
                ultra-luxurious lifestyles.
              </p>
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
          {/* Adams housing */}
          <Link
            href="/adams-housing"
            onClick={scrollToTop}
            className="relative flex flex-col cursor-pointer border border-gray-300 rounded-2xl transition-all duration-[0.5s] hover:border-gray-900 hover:shadow-2xl text-gray-700 bg-white bg-clip-border"
          >
            <div className="relative overflow-hidden text-white shadow-lg bg-clip-border rounded-t-xl bg-blue-gray-500 shadow-blue-gray-500/40">
              <Image
                src={adamsHousingImg}
                alt="Adans Hosuing Multan"
                title="Adans Hosuing Multan"
                className="w-full"
              />
            </div>
            <div className="p-6">
              <h2 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                Adams Housing Multan
              </h2>
              <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                Adams Housing Multan stands as a beacon of modern living that
                offers contemporary amenities and high-quality infrastructure,
                providing residents with convenient access to the city&apos;s
                landmarks. Adams Housing prioritizes sustainability and ensures
                ample green space for recreation.{" "}
              </p>
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
          {/* Smart Housing card*/}
          <Link
            href="/smart-housing"
            onClick={scrollToTop}
            className="relative flex flex-col cursor-pointer border border-gray-300 rounded-2xl transition-all duration-[0.5s] hover:border-gray-900 hover:shadow-2xl text-gray-700 bg-white bg-clip-border"
          >
            <div className="relative overflow-hidden text-white shadow-lg bg-clip-border rounded-t-xl bg-blue-gray-500 shadow-blue-gray-500/40">
              <Image
                src={smartHousingImg}
                alt="Smart Housing Multan"
                title="Smart Housing Multan"
                className="w-full"
              />
            </div>
            <div className="p-6">
              <h2 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                Smart Housing Multan
              </h2>
              <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                Smart Housing Multan (SHM) is a modern housing society in the
                City of Saints with cutting-edge automation systems and modern
                infrastructure. The residents can enjoy exclusive perks, elite
                amenities, and upscale conveniences by choosing Smart Housing
                Society.
              </p>
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
          {/* Royal Swiss */}
          <Link
            href={`/royal-swiss`}
            onClick={scrollToTop}
            className="relative flex flex-col cursor-pointer border border-gray-300 rounded-2xl transition-all duration-[0.5s] hover:border-gray-900 hover:shadow-2xl text-gray-700 bg-white bg-clip-border"
          >
            <div className="relative overflow-hidden text-white shadow-lg bg-clip-border rounded-t-xl bg-blue-gray-500 shadow-blue-gray-500/40">
              <Image
                src={royalSwissImg}
                alt="Royal Swiss Multan"
                title="Royal Swiss Multan"
                className="w-full"
              />
            </div>
            <div className="p-6">
              <h2 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                Royal Swiss Multan
              </h2>
              <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                Royal Swiss Housing is the latest project in Multan aimed to
                revolutionize the standards of housing in the city. It is
                developing at a faster pace, and developmental standards are
                exemplary, featuring efficient drainage systems, wide roads, and
                reliable utility services
              </p>
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
          {/* Wapda Town Multan */}
          <Link
            href={`/wapda-town`}
            onClick={scrollToTop}
            className="relative flex flex-col cursor-pointer border border-gray-300 rounded-2xl transition-all duration-[0.5s] hover:border-gray-900 hover:shadow-2xl text-gray-700 bg-white bg-clip-border"
          >
            <div className="relative overflow-hidden text-white shadow-lg bg-clip-border rounded-t-xl bg-blue-gray-500 shadow-blue-gray-500/40">
              <Image
                src={wapdaTown}
                alt="Wapda Town Multan"
                title="Wapda Town Multan"
                className="w-full"
              />
            </div>
            <div className="p-6">
              <h2 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                Wapda Town Multan
              </h2>
              <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                Wapda Town Multan is a gated residential community developed to
                cater to the housing needs of employees of the Water and Power
                Development Authority
              </p>
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
          {/* Model Town */}
          <Link
            href={`/model-town-multan`}
            onClick={scrollToTop}
            className="relative flex flex-col cursor-pointer border border-gray-300 rounded-2xl transition-all duration-[0.5s] hover:border-gray-900 hover:shadow-2xl text-gray-700 bg-white bg-clip-border"
          >
            <div className="relative overflow-hidden text-white shadow-lg bg-clip-border rounded-t-xl bg-blue-gray-500 shadow-blue-gray-500/40">
              <Image
                src={modeltown}
                alt="Model Town Mulatn"
                title="Model Town Mulatn"
                className="w-full"
              />
            </div>
            <div className="p-6">
              <h2 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                Model Town Multan – An Ideal Family Heaven
              </h2>
              <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                Model Town Multan is a meticulously designed housing complex
                that seeks to provide the ideal living environment for families
                and people looking for high-quality accommodation at a
                reasonable price.
              </p>
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
          {/* De Green Homes */}
          <Link
            href={`/de-green-homes-multan`}
            onClick={scrollToTop}
            className="relative flex flex-col cursor-pointer border border-gray-300 rounded-2xl transition-all duration-[0.5s] hover:border-gray-900 hover:shadow-2xl text-gray-700 bg-white bg-clip-border"
          >
            <div className="relative overflow-hidden text-white shadow-lg bg-clip-border rounded-t-xl bg-blue-gray-500 shadow-blue-gray-500/40 h-[230px]">
              <Image
                src={deGreenHomes}
                alt="De Green Homes Multan"
                title="De Green Homes Multan"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="p-6">
              <h2 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                De&apos; Green Homes Multan – Where Green Living Meets Urban
                Convenience
              </h2>
              <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                De&apos; Green Homes, which blends eco-friendly living with
                contemporary conveniences, is one of the most promising
                residential developments. Both investors and homebuyers have
                expressed interest in this well-planned development because of
                its excellent location, first-rate amenities, and lush
                surroundings.
              </p>
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
          {/* De Orion */}
          <Link
            href={`/de-orion-mall-multan`}
            onClick={scrollToTop}
            className="relative flex flex-col cursor-pointer border border-gray-300 rounded-2xl transition-all duration-[0.5s] hover:border-gray-900 hover:shadow-2xl text-gray-700 bg-white bg-clip-border"
          >
            <div className="relative overflow-hidden text-white shadow-lg bg-clip-border rounded-t-xl bg-blue-gray-500 shadow-blue-gray-500/40 h-[230px]">
              <Image
                src={deOrionMall}
                alt="De Orion Mall Multan"
                title="De Orion Mall Multan"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="p-6">
              <h2 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                De-Orion Mall Gulgasht Multan
              </h2>
              <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                De Orion Mall Multan is a remarkable new development located in
                the vibrant center of Multan. Designed as a multi-purpose
                project, it offers a unique blend of luxurious residential
                apartments and modern retail spaces, creating a dynamic
                environment for residents and businesses alike.
              </p>
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
          {/* Buch Executive Villas - Pathway to Luxurious Living in Multan */}
          <Link
            href={`/buch-executive-villas-multan`}
            onClick={scrollToTop}
            className="relative flex flex-col cursor-pointer border border-gray-300 rounded-2xl transition-all duration-[0.5s] hover:border-gray-900 hover:shadow-2xl text-gray-700 bg-white bg-clip-border"
          >
            <div className="relative overflow-hidden text-white shadow-lg bg-clip-border rounded-t-xl bg-blue-gray-500 shadow-blue-gray-500/40">
              <Image
                src={buchExecutiveVillas}
                alt="Model Town Mulatn"
                title="Model Town Mulatn"
                className="w-full"
              />
            </div>
            <div className="p-6">
              <h2 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                Buch Executive Villas - Pathway to Luxurious Living in Multan
              </h2>
              <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                One of the most popular luxury residential complexes in Multan,
                Buch Executive Villas offers its residents an unmatched
                combination of convenience, luxury and comfort. Today, it
                comprises more than 1,000 homes and has become a vibrant
                neighborhood attracting those seeking an elegant lifestyle
                surrounded by modern amenities and green spaces.
              </p>
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

          {/* Lahore Smart City - A Revolutionary Housing Project */}
          <Link
            href={`/lahore-smart-city`}
            onClick={scrollToTop}
            className="relative flex flex-col cursor-pointer border border-gray-300 rounded-2xl transition-all duration-[0.5s] hover:border-gray-900 hover:shadow-2xl text-gray-700 bg-white bg-clip-border"
          >
            <div className="relative overflow-hidden text-white shadow-lg bg-clip-border rounded-t-xl bg-blue-gray-500 shadow-blue-gray-500/40">
              <Image
                src={lahoreSmartCity}
                alt="Lahore Smart City"
                title="Lahore Smart City"
                className="w-full"
              />
            </div>
            <div className="p-6">
              <h2 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                Lahore Smart City - A Revolutionary Housing Project
              </h2>
              <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                Lahore Smart City (LSC) is known for being a cutting-edge and
                environment-friendly residential project in Pakistan. This
                project is the country&apos;s second and is a significant
                occurrence in South Asia.
              </p>
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

          {/* Capital Smart City – A Gateway to Futuristic Living */}
          <Link
            href={`/capital-smart-city `}
            onClick={scrollToTop}
            className="relative flex flex-col cursor-pointer border border-gray-300 rounded-2xl transition-all duration-[0.5s] hover:border-gray-900 hover:shadow-2xl text-gray-700 bg-white bg-clip-border"
          >
            <div className="relative overflow-hidden text-white shadow-lg bg-clip-border rounded-t-xl bg-blue-gray-500 shadow-blue-gray-500/40">
              <Image
                src={capitalSmartCity}
                alt="Capital Smart City"
                title="Capital Smart City"
                className="w-full"
              />
            </div>
            <div className="p-6">
              <h2 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                Capital Smart City – A Gateway to Futuristic Living
              </h2>
              <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                Capital Smart City (CSC) has set a new benchmark for residential
                developments in Pakistan by providing modern infrastructure,
                including a painstakingly planned residential area that
                prioritizes sustainability, smart urban planning, and
                eco-friendliness.
              </p>
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

          {/* Park View City Islamabad – A Gateway to Luxurious Living */}
          <Link
            href={`/park-view-city-islamabad`}
            onClick={scrollToTop}
            className="relative flex flex-col cursor-pointer border border-gray-300 rounded-2xl transition-all duration-[0.5s] hover:border-gray-900 hover:shadow-2xl text-gray-700 bg-white bg-clip-border"
          >
            <div className="relative overflow-hidden text-white shadow-lg bg-clip-border rounded-t-xl bg-blue-gray-500 shadow-blue-gray-500/40">
              <Image
                src={parkViewCity}
                alt="Capital Smart City"
                title="Capital Smart City"
                className="w-full"
              />
            </div>
            <div className="p-6">
              <h2 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                Park View City Islamabad – A Gateway to Luxurious Living
              </h2>
              <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                Park View City Islamabad is considered to be one of the most
                desirable housing society in the capital, providing luxury,
                simplicity, and unparalleled combinations.
              </p>
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
    </div>
  );
};

export default OurProjects;
