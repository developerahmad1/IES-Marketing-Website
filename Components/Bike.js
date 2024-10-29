import React, { useState } from "react";
import Image from "next/image";
import bikeImg from "../public/Get Winning Electric bike_11zon.webp";
import { MdOutlineCancel } from "react-icons/md";

const Bike = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
  };

  
  return (
    isVisible && (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 animate-fade-zoom">
        <div className="relative">
          <MdOutlineCancel
            className="absolute top-[5px] right-[5px] text-white text-4xl cursor-pointer hover:text-red-500"
            onClick={handleClose}
          />
          <Image
            src={bikeImg}
            alt="Get a chance to win an electric bike"
            width={900}
            height={600} 
            title="Get a chance to win an electric bike"
            className="rounded-lg shadow-2xl"
          />
        </div>
      </div>
    )
  );
};

export default Bike;
