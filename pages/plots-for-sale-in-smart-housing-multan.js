import React, { useEffect, useRef } from "react";
import PlotCard from "@/Components/PlotCard";
import Link from "next/link";
import Head from "next/head";

const Plots_For_Sale_In_Multan = () => {
  let plotsData = [
    {
      imageUrl:
        "https://img.freepik.com/free-photo/aerial-view-rural-landscape-crops-field_23-2148346099.jpg?t=st=1732864146~exp=1732867746~hmac=89b2a1e9d572b1cc881472171780bae2618191844066f495b11fcc9d45d9fb58&w=1060",
      plotStatus: "Available",
      societyName: "Smart Housing Multan",
      blockName: "PREMIUM Block",
      plotSize: "3.5 Marla",
      paymentPlan: "18 Months",
      monthlyInstallments: "52,500",
      perMarla: "7,00,000",
      totalPrice: "24,50,000",
      downPayment: "6,12,500",
      confirmationAmount: "3,50,000",
      halfYearly: "2,50,810",
    },
    {
      imageUrl:
        "https://img.freepik.com/free-photo/aerial-view-rural-landscape-crops-field_23-2148346099.jpg?t=st=1732864146~exp=1732867746~hmac=89b2a1e9d572b1cc881472171780bae2618191844066f495b11fcc9d45d9fb58&w=1060",
      plotStatus: "Available",
      societyName: "Smart Housing Multan",
      blockName: "PREMIUM Block",
      plotSize: "5 Marla",
      downPayment: "8,75,000",
      monthlyInstallments: "75,000",
      confirmationAmount: "500,000",
      halfYearly: "3,58,300",
      totalPrice: "35,00,000",
      paymentPlan: "18 Months",
      perMarla: "7,00,000",
    },
    {
      imageUrl:
        "https://img.freepik.com/free-photo/aerial-view-rural-landscape-crops-field_23-2148346099.jpg?t=st=1732864146~exp=1732867746~hmac=89b2a1e9d572b1cc881472171780bae2618191844066f495b11fcc9d45d9fb58&w=1060",
      plotStatus: "Available",
      societyName: "Smart Housing Multan",
      blockName: "PREMIUM Block",
      plotSize: "7 Marla",
      downPayment: "12,25,000",
      monthlyInstallments: "1,05,000",
      confirmationAmount: "7,00,000",
      halfYearly: "5,01,620",
      totalPrice: "49,00,000",
      paymentPlan: "18 Months",
      perMarla: "7,00,000",
    },
    {
      imageUrl:
        "https://img.freepik.com/free-photo/aerial-view-rural-landscape-crops-field_23-2148346099.jpg?t=st=1732864146~exp=1732867746~hmac=89b2a1e9d572b1cc881472171780bae2618191844066f495b11fcc9d45d9fb58&w=1060",
      plotStatus: "Available",
      societyName: "Smart Housing Multan",
      blockName: "PREMIUM Block",
      plotSize: "10 Marla",
      downPayment: "1,750,000",
      monthlyInstallments: "1,50,000",
      confirmationAmount: "10,00,000",
      halfYearly: "7,16,600",
      totalPrice: "70,00,000",
      paymentPlan: "18 Months",
      perMarla: "7,00,000",
    },
    // Nishter Block
    {
      imageUrl:
        "https://img.freepik.com/free-photo/aerial-view-rural-landscape-crops-field_23-2148346099.jpg?t=st=1732864146~exp=1732867746~hmac=89b2a1e9d572b1cc881472171780bae2618191844066f495b11fcc9d45d9fb58&w=1060",
      plotStatus: "Available",
      societyName: "Smart Housing Multan",
      blockName: "NISHTAR Block",
      paymentPlan: "4 Years",
      plotSize: "3.5 Marla",
      totalPrice: "1,837,500",
      downPayment: "210,000",
      monthlyInstallments: "15,000",
      halfYearly: "100,000",
      ballotingAmount: "227,500",
    },
    {
      imageUrl:
        "https://img.freepik.com/free-photo/aerial-view-rural-landscape-crops-field_23-2148346099.jpg?t=st=1732864146~exp=1732867746~hmac=89b2a1e9d572b1cc881472171780bae2618191844066f495b11fcc9d45d9fb58&w=1060",
      plotStatus: "Available",
      societyName: "Smart Housing Multan",
      blockName: "NISHTAR Block",
      paymentPlan: "4 Years",
      plotSize: "5 Marla",
      totalPrice: "2,625,000",
      downPayment: "300,000",
      monthlyInstallments: "25,000",
      halfYearly: "125,000",
      ballotingAmount: "325,000",
    },
    {
      imageUrl:
        "https://img.freepik.com/free-photo/aerial-view-rural-landscape-crops-field_23-2148346099.jpg?t=st=1732864146~exp=1732867746~hmac=89b2a1e9d572b1cc881472171780bae2618191844066f495b11fcc9d45d9fb58&w=1060",
      plotStatus: "Available",
      societyName: "Smart Housing Multan",
      blockName: "NISHTAR Block",
      paymentPlan: "4 Years",
      plotSize: "7 Marla",
      totalPrice: "3,675,000",
      downPayment: "420,000",
      monthlyInstallments: "30,000",
      halfYearly: "200,000",
      ballotingAmount: "445,000",
    },
    {
      imageUrl:
        "https://img.freepik.com/free-photo/aerial-view-rural-landscape-crops-field_23-2148346099.jpg?t=st=1732864146~exp=1732867746~hmac=89b2a1e9d572b1cc881472171780bae2618191844066f495b11fcc9d45d9fb58&w=1060",
      plotStatus: "Available",
      societyName: "Smart Housing Multan",
      blockName: "NISHTAR Block",
      paymentPlan: "4 Years",
      plotSize: "10 Marla",
      totalPrice: "5,250,000",
      downPayment: "600,000",
      monthlyInstallments: "50,000",
      halfYearly: "250,000",
      ballotingAmount: "650,000",
    },
    {
      imageUrl:
        "https://img.freepik.com/free-photo/aerial-view-rural-landscape-crops-field_23-2148346099.jpg?t=st=1732864146~exp=1732867746~hmac=89b2a1e9d572b1cc881472171780bae2618191844066f495b11fcc9d45d9fb58&w=1060",
      plotStatus: "Available",
      societyName: "Smart Housing Multan",
      blockName: "B Block",
      paymentPlan: "3 Years",
      plotSize: "3.5 Marla",
      totalPrice: "1,625,000",
      downPayment: "325,000",
      monthlyInstallments: "15,000",
      halfYearly: "100,000",
      ballotingAmount: "250,000",
    },
  ];

  return (
    <>
      <Head>
        <title>
          Plots for Sale in Smart Housing Multan – Flexible Payment Plans
        </title>
        <meta name="keywords" content="" />
        <meta
          name="description"
          content="Find residential plots for sale in Smart Housing Multan. Get 3.5, 5, 7, and 10 Marla plots with competitive prices and easy installments at prime location."
        />
      </Head>

      <div className="bg-white">
        <div className="w-full flex justify-center items-center">
          <h1 className="py-2 md:py-8 text-4xl lg:text-5xl font-bold text-center max-w-4xl">
            Plots for Sale in Smart Housing Multan – Residential & Commercial
            Options
          </h1>
        </div>
        <div className="bg-white text-black text-justify px-4 md:px-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-[28px] text-gray-800 font-semibold mt-2 text-start mb-2">
              Introduction
            </h2>

            <p className="pb-6 text-xl">
              Explore plots for sale in various blocks of Smart Housing Multan.
              With diverse sizes and locations, these plots offer easy access to
              key landmarks like M5 Motorway and Nishter 2. Enjoy modern
              infrastructure, competitive prices, and flexible payment plans.
              Secure your investment in this rapidly growing community today!
            </p>
            <h2 className="text-2xl md:text-[28px] text-gray-800 font-semibold mt-2 text-start mb-2">
              Available Plot Sizes in Smart Housing Multan
            </h2>
            <p className="pb-6 text-xl">
              Smart Housing Multan is a modern residential community offering a
              blend of comfort, convenience, and affordability. With
              well-planned infrastructure, lush green surroundings, and a
              variety of plot sizes, it caters to diverse needs. The society&apos;s
              strategic location ensures growth and investment potential. Smart
              Housing Multan is the ideal choice for those looking to invest in
              a bright future. Read more about{" "}
              <Link href="/smart-housing" className="link">
                Smart Housing
              </Link>
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 py-10 p-3 bg-white">
          {plotsData.map((plotData, index) => (
            <PlotCard key={index} plotData={plotData} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Plots_For_Sale_In_Multan;
