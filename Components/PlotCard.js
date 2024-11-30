import React from "react";
import { MdOutlineMailOutline } from "react-icons/md";
import { IoIosCall } from "react-icons/io";
import { FaArrowRightLong } from "react-icons/fa6";
import Link from "next/link";

const PlotCard = ({ plotData }) => {
  const {
    imageUrl,
    plotStatus,
    societyNameSlug,
    societyName,
    blockName,
    plotSize,
    paymentPlan,
    monthlyInstallments,
    perMarla,
    totalPrice,
    downPayment,
    confirmationAmount,
    halfYearly,
    ballotingAmount,
  } = plotData;

  return (
    <div className="max-w-md m-0 p-0 bg-white shadow-2xl rounded-2xl overflow-hidden transition-all transform hover:shadow-3xl duration-300 ease-in-out">
      {/* Image Section */}
      <div className="relative group">
        <img
          src={imageUrl || "https://via.placeholder.com/400"}
          alt="Plot"
          className="w-full h-56 object-cover rounded-t-2xl transition-all duration-300 group-hover:opacity-90"
        />
        <span
          className={`absolute top-3 right-3 px-4 py-1 text-sm font-bold rounded-full ${
            plotStatus === "Sold"
              ? "bg-red-600 text-white"
              : "bg-green-600 text-white"
          }`}
        >
          {plotStatus}
        </span>
        <div className="absolute inset-0 bg-black bg-opacity-25 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content Section */}
      <div className="p-6 space-y-2">
        {societyNameSlug ? (
          <Link
            href={societyNameSlug}
            className="text-2xl font-bold text-blue-500 hover:text-blue-700 transition-colors duration-100 cursor-pointer"
          >
            {societyName}
            {blockName && (
              <p className="text-lg text-green-600">({blockName})</p>
            )}
          </Link>
        ) : (
          <h2 className="text-2xl font-bold text-gray-800">
            {societyName}
            {blockName && (
              <p className="text-lg text-green-600">({blockName})</p>
            )}
          </h2>
        )}
        {plotSize && (
          <p className="text-gray-700">
            <span className="text-gray-900 font-bold text-[16px]">
              Plot size :
            </span>
            {plotSize}
          </p>
        )}
        {totalPrice && (
          <p className="text-gray-700">
            <span className="text-gray-900 font-bold text-[16px]">
              Total price:
            </span>{" "}
            {totalPrice}
          </p>
        )}
        {paymentPlan && (
          <p className="text-gray-700">
            <span className="text-gray-900 font-bold text-[16px]">
              Payment plan :
            </span>{" "}
            {paymentPlan}
          </p>
        )}
        {monthlyInstallments && (
          <p className="text-gray-700">
            <span className="text-gray-900 font-bold text-[16px]">
              Monthly Installments:
            </span>{" "}
            {monthlyInstallments}
          </p>
        )}
        {perMarla && (
          <p className="text-gray-700">
            <span className="text-gray-900 font-bold text-[16px]">
              Per Marla:
            </span>{" "}
            {perMarla}
          </p>
        )}
        {downPayment && (
          <p className="text-gray-700">
            <span className="text-gray-900 font-bold text-[16px]">
              Downpayment:
            </span>{" "}
            {downPayment}
          </p>
        )}
        {confirmationAmount && (
          <p className="text-gray-700">
            <span className="text-gray-900 font-bold text-[16px]">
              Confirmation amount:
            </span>{" "}
            {confirmationAmount}
          </p>
        )}
        {halfYearly && (
          <p className="text-gray-700">
            <span className="text-gray-900 font-bold text-[16px]">
              Half Year Installment:
            </span>{" "}
            {halfYearly}
          </p>
        )}
        {ballotingAmount && (
          <p className="text-gray-700">
            <span className="text-gray-900 font-bold text-[16px]">
              Balloting Amount:
            </span>{" "}
            {ballotingAmount}
          </p>
        )}

        {/* Buttons Section */}
        <div className="flex space-x-2">
          <button className="w-1/3 bg-gradient-to-r from-teal-500 to-green-500 text-white font-semibold py-2 rounded-lg shadow-lg transition-all duration-300 hover:shadow-2xl hover:bg-gradient-to-l hover:from-green-500 hover:to-teal-500">
            <span className="flex justify-center items-center gap-1 pr-3">
              <IoIosCall className="text-xl" /> Call
            </span>
          </button>

          {/* More Details Button */}
          <button className="w-1/3 bg-gradient-to-r from-blue-400 to-indigo-600 text-white font-semibold py-2 rounded-lg shadow-lg transition-all duration-300 hover:shadow-2xl hover:bg-gradient-to-l hover:from-indigo-500 hover:to-blue-500">
            <span className="flex justify-center items-center gap-1 pr-3">
              <MdOutlineMailOutline className="text-xl" /> Email
            </span>
          </button>

          <button className="w-1/3 bg-gradient-to-r  font-semibold py-2 rounded-lg shadow-lg transition-all border-2 border-gray-800 hover:bg-gray-800 hover:text-white duration-300">
            <span className="flex justify-center items-center gap-x-2 pr-3">
              More <FaArrowRightLong className="text-xl" />
            </span>
          </button>
          
        </div>
      </div>
    </div>
  );
};

export default PlotCard;

//    https://chatgpt.com/c/674957ae-805c-8001-874f-6479df3e0bb2

// import React from "react";
// import { MdOutlineMailOutline } from "react-icons/md";
// import { IoIosCall } from "react-icons/io";
// import { FaArrowRightLong } from "react-icons/fa6";

// const PlotCard = ({ plotStatus, imageUrl }) => {
//   return (
//     <div className="max-w-md m-0 p-0 bg-white shadow-2xl rounded-2xl overflow-hidden transition-all transform hover:shadow-3xl duration-300 ease-in-out">
//       {/* Image Section */}
//       <div className="relative group">
//         <img
//           src={imageUrl || "https://via.placeholder.com/400"}
//           alt="Plot"
//           className="w-full h-56 object-cover rounded-t-2xl transition-all duration-300 group-hover:opacity-90"
//         />
//         <span
//           className={`absolute top-3 right-3 px-4 py-1 text-sm font-bold rounded-full ${
//             plotStatus === "sold"
//               ? "bg-red-600 text-white"
//               : "bg-green-600 text-white"
//           }`}
//         >
//           {plotStatus === "sold" ? "SOLD" : "UNSOLD"}
//         </span>
//         <div className="absolute inset-0 bg-black bg-opacity-25 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//       </div>

//       {/* Content Section */}
//       <div className="p-6 space-y-2">
//         <h2 className="text-2xl font-bold text-gray-800 hover:text-purple-600 transition-colors duration-300">
//           Smart Housing Multan{" "}<br/>
//           <span className="text-sm text-green-600">(PREMIUM BLOCK)</span>
//         </h2>
//         <p className="text-gray-700">
//           <span className="text-gray-900 font-bold text-[16px]">Plot size:</span> 3.5
//           Marla
//         </p>
//         <p className="text-gray-700">
//           <span className="text-gray-900 font-bold text-[16px]">Payment plan:</span> 18
//           Months
//         </p>
//         <p className="text-gray-700">
//           <span className="text-gray-900 font-bold text-[16px]">Per Marla:</span> 700,000
//         </p>
//         <p className="text-gray-700">
//           <span className="text-gray-900 font-bold text-[16px]">Total price:</span>{" "}
//           24,50,000
//         </p>
//         <p className="text-gray-700">
//           <span className="text-gray-900 font-bold text-[16px]">Downpayment:</span>{" "}
//           6,12,500
//         </p>
//         <p className="text-gray-700">
//           <span className="text-gray-900 font-bold text-[16px]">
//             Confirmation amount:
//           </span>{" "}
//           350,000
//         </p>
//         <p className="text-gray-700">
//           <span className="text-gray-900 font-bold text-[16px]">Half-yearly:</span>{" "}
//           250,810
//         </p>

//         {/* Buttons Section */}
//         <div className="flex space-x-2">
//           <button className="w-1/3 bg-gradient-to-r from-teal-500 to-green-500 text-white font-semibold py-2 rounded-lg shadow-lg transition-all duration-300 hover:shadow-2xl hover:bg-gradient-to-l hover:from-green-500 hover:to-teal-500">
//             <span className="flex justify-center items-center gap-1 pr-3">
//               <IoIosCall className="text-xl" /> Call
//             </span>
//           </button>

//           {/* More Details Button */}
//           <button className="w-1/3 bg-gradient-to-r from-blue-400 to-indigo-600 text-white font-semibold py-2 rounded-lg shadow-lg transition-all duration-300 hover:shadow-2xl hover:bg-gradient-to-l hover:from-indigo-500 hover:to-blue-500">
//             <span className="flex justify-center items-center gap-1 pr-3">
//               <MdOutlineMailOutline className="text-xl" /> Email
//             </span>
//           </button>

//           {/* <button className="w-1/3 bg-gradient-to-r  font-semibold py-2 rounded-lg shadow-lg transition-all border-2 border-gray-800 hover:bg-gray-800 hover:text-white duration-300">
//             <span className="flex justify-center items-center gap-x-2 pr-3">
//               More <FaArrowRightLong className="text-xl" />
//             </span>
//           </button>
//            */}

//         </div>
//       </div>
//     </div>
//   );
// };

// export default PlotCard;

// //    https://chatgpt.com/c/674957ae-805c-8001-874f-6479df3e0bb2
