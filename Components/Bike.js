import React, { useState } from "react";
import Image from "next/image";
import bikeImg from "../public/Get Winning Electric bike_11zon.webp";
import postImg from "../public/royal swiss offer.jpg";
import { MdOutlineCancel } from "react-icons/md";

const Bike = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    isVisible && (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
        <div className="flex flex-col items-center justify-center space-y-4">
          {/* Post Image Section */}
          <div className="relative animate-slide-in-left">
            <MdOutlineCancel
              className="absolute top-[5px] right-[5px] text-white text-4xl cursor-pointer hover:text-red-500 duration-300"
              onClick={handleClose}
            />
            <Image
              src={postImg}
              alt="Royal Swiss Offer"
              width={900} // Adjust width as needed
              height={600} // Adjust height as needed
              title="Royal Swiss Offer"
              className="rounded-lg shadow-2xl"
            />
          </div>

          {/* Bike Image Section */}
          <div className="relative animate-slide-in-right">
            <MdOutlineCancel
              className="absolute top-[5px] right-[5px] text-white text-4xl cursor-pointer hover:text-red-500 duration-300"
              onClick={handleClose}
            />
            <Image
              src={bikeImg}
              alt="Get a chance to win an electric bike"
              width={900} // Adjust width as needed
              height={600} // Adjust height as needed
              title="Get a chance to win an electric bike"
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    )
  );
};

export default Bike;






// https://chatgpt.com/c/6720bcbb-1afc-8001-a829-5723c3ac3d62