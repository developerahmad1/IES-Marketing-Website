import Link from "next/link";
import React from "react";
import { FaFacebook, FaYoutube } from 'react-icons/fa';
import { FaLinkedinIn } from "react-icons/fa";
import { GrInstagram } from 'react-icons/gr';
import { FaTiktok } from "react-icons/fa6";

const Footer2 = () => {
  return (
    <div className="bg-white mt-[100px]">
      <footer className="bg-black relative w-[100%] py-[20px] px-[50px] flex justify-center items-center flex-col">
        <div className="waves">
          <div className="wave" id="wave1"></div>
          <div className="wave" id="wave2"></div>
          <div className="wave" id="wave3"></div>
          <div className="wave" id="wave4"></div>
        </div>
        <ul className="social-icon flex space-x-4">
          <li className="social-icon__item">
            <a href="https://www.facebook.com/IESmarketingPakistan?mibextid=ZbWKwL" target='_main' className="text-[2.3rem] text-white mx-[10px] inline-block duration-[0.3s] hover:text-[#ff8e2b]" >
              <FaFacebook />
            </a>
          </li>
          <li className="social-icon__item">
            <a  href="https://www.tiktok.com/@iesmarketing.pk?_t=8orLu0je4vP&_r=1" target="_main" className="text-[2rem] text-white mx-[10px] inline-block duration-[0.3s] hover:text-[#ff8e2b]">
                <FaTiktok />
            </a>
          </li>
          <li className="social-icon__item">
            <a href="https://www.youtube.com/@iesmarketing01" target='_main'  className="text-[2rem] text-white mx-[10px] inline-block duration-[0.3s] hover:text-[#ff8e2b]" >
                <FaYoutube />
            </a>
          </li>
          <li className="social-icon__item">
            <a  href="https://www.instagram.com/iesmarketing.pk?igsh=MTgyaXIwMHZhaXR1" target='_main' className="text-[2rem] text-white mx-[10px] inline-block duration-[0.3s] hover:text-[#ff8e2b]">
                <GrInstagram />
            </a>
          </li>
        </ul>
        <ul className="menu flex space-x-4 relative justify-center items-start flex-wrap">
          <li className="list-none">
            <Link href="/" className="text-[1.2rem] text-white mx-[10px] inline-block duration-[0.3s] font-[300] hover:text-[#ff8e2b]">
              Home
            </Link>
          </li>
          <li className="menu__item">
            <Link href="/about-us/" className="text-[1.2rem] text-white mx-[10px] inline-block duration-[0.3s] font-[300] hover:text-[#ff8e2b]">
              About Us
            </Link>
          </li>
          <li className="menu__item">
            <Link href="/housing-societies-in-multan/" className="text-[1.2rem] text-white mx-[10px] inline-block duration-[0.3s] font-[300] hover:text-[#ff8e2b]">
              Our Projects
            </Link>
          </li>
        </ul>
        <p className="text-white mt-[15px] mb-[10px] text-[1rem] font-[300]">
          <span className="text-[#ff8e2b]">IES Marketing</span> is the best
          real estate company.
        </p>
      </footer>
    </div>
  );
};

export default Footer2;




















































// import Link from "next/link";
// import React from "react";
// import { FaFacebook, FaYoutube } from 'react-icons/fa';
// import { FaLinkedinIn } from "react-icons/fa";
// import { GrInstagram } from 'react-icons/gr';
// import { FaTiktok } from "react-icons/fa6";

// const Footer2 = () => {
//   return (
//     <div className="bg-white mt-[100px]">
//       <footer className="bg-black relative w-[100%] py-[20px] px-[50px] flex justify-center items-center flex-col">
//         <div className="waves">
//           <div className="wave" id="wave1"></div>
//           <div className="wave" id="wave2"></div>
//           <div className="wave" id="wave3"></div>
//           <div className="wave" id="wave4"></div>
//         </div>
//         <ul className="social-icon flex space-x-4">
//           <li className="social-icon__item">
//             <a className="text-[2rem] text-white mx-[10px] inline-block duration-[0.3s] hover:text-[#ff8e2b]" href="#">
//               <FaFacebook />
//             </a>
//           </li>
//           <li className="social-icon__item">
//             <a className="text-[2rem] text-white mx-[10px] inline-block duration-[0.3s] hover:text-[#ff8e2b]" href="#">
//                 <FaTiktok />
//             </a>
//           </li>
//           <li className="social-icon__item">
//             <a className="text-[2rem] text-white mx-[10px] inline-block duration-[0.3s] hover:text-[#ff8e2b]" href="#">
//                 <FaLinkedinIn />
//             </a>
//           </li>
//           <li className="social-icon__item">
//             <a className="text-[2rem] text-white mx-[10px] inline-block duration-[0.3s] hover:text-[#ff8e2b]" href="#">
//                 <GrInstagram />
//             </a>
//           </li>
//         </ul>
//         <ul className="menu flex space-x-4 relative justify-center items-start my-[10px] flex-wrap">
//           <li className="list-none">
//             <Link href="/" className="text-[1.2rem] text-white mx-[10px] inline-block duration-[0.3s] font-[300] hover:text-[#ff8e2b]">
//               Home
//             </Link>
//           </li>
//           <li className="menu__item">
//             <Link href="/about-us/" className="text-[1.2rem] text-white mx-[10px] inline-block duration-[0.3s] font-[300] hover:text-[#ff8e2b]">
//               About Us
//             </Link>
//           </li>
//           <li className="menu__item">
//             <Link href="/housing-societies-in-multan/" className="text-[1.2rem] text-white mx-[10px] inline-block duration-[0.3s] font-[300] hover:text-[#ff8e2b]">
//               Our Projects
//             </Link>
//           </li>
//         </ul>
//         <p className="text-white mt-[15px] mb-[10px] text-[1rem] font-[300]">
//           <span className="text-[#ff8e2b]">IES Marketing</span> is the best
//           real estate company.
//         </p>
//       </footer>
//     </div>
//   );
// };

// export default Footer2;
