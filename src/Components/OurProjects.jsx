import React from 'react';
import { Link } from 'react-router-dom';
import smartHousingImg from "../assets/SmartHousing.jpg";
import royalSwissImg from "../assets/royalswiss1.jpg";
import adamsHousingImg from "../assets/AdamsHousing1.jpg";

const OurProjects = () => {
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  return (
    <div className="bg-white py-6">
      <h1 className='text-4xl font-bold text-center py-3'>IES Marketing Projects</h1>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-5">

        {/* First Project */}
        <Link to="/project/smart-housing" onClick={scrollToTop}
          className="relative flex flex-col cursor-pointer border border-gray-300 rounded-2xl transition-all duration-[0.5s] hover:border-blue-800 hover:shadow-2xl text-gray-700 bg-white bg-clip-border"
        >
          <div className="relative h-56 overflow-hidden text-white shadow-lg bg-clip-border rounded-t-xl bg-blue-gray-500 shadow-blue-gray-500/40">
            <img
              src={smartHousingImg}
              alt="card-image"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="p-6">
            <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
              Smart Housing Multan
            </h5>
            <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
              Smart Housing Multan (SHM) is a modern housing society in the City of Saints with cutting-edge automation systems and modern infrastructure. The residents can enjoy exclusive perks, elite amenities, and upscale conveniences by choosing Smart Housing Society.
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
        <Link to={`/project/royal-swiss`} onClick={scrollToTop}
          className="relative flex flex-col cursor-pointer border border-gray-300 rounded-2xl transition-all duration-[0.5s] hover:border-blue-800 hover:shadow-2xl text-gray-700 bg-white bg-clip-border"
        >
          <div className="relative h-56 overflow-hidden text-white shadow-lg bg-clip-border rounded-t-xl bg-blue-gray-500 shadow-blue-gray-500/40">
            <img
              src={royalSwissImg}
              alt="card-image"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="p-6">
            <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
              Royal Swiss Multan
            </h5>
            <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
              Royal Swiss Housing is the latest project in Multan aimed to revolutionize the standards of housing in the city. It is developing at a faster pace, and developmental standards are exemplary, featuring efficient drainage systems, wide roads, and reliable utility services
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

        {/* Third Project */}
        <Link to="/project/adams-housing" onClick={scrollToTop}
          className="relative flex flex-col cursor-pointer border border-gray-300 rounded-2xl transition-all duration-[0.5s] hover:border-blue-800 hover:shadow-2xl text-gray-700 bg-white bg-clip-border"
        >
          <div className="relative h-56 overflow-hidden text-white shadow-lg bg-clip-border rounded-t-xl bg-blue-gray-500 shadow-blue-gray-500/40">
            <img
              src={adamsHousingImg}
              alt="card-image"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="p-6">
            <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
              Adams Housing Multan
            </h5>
            <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
              Adams Housing Multan stands as a beacon of modern living that offers contemporary amenities and high-quality infrastructure and provides residents with convenient access to the city's landmarks and commercial hubs. Adams Housing prioritizes sustainability, incorporating green building practices, and ensuring ample green space for recreation.            </p>
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
  );
};

export default OurProjects;
