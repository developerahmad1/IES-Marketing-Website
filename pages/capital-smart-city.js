import React from "react";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import { useState } from "react";
import { useEffect } from "react";
import { useAppContext } from "@/Context/AppContext";

const Capital_Smart_City = () => {
  const { openLeadpoup } = useAppContext();
  return (
    <div>
      <Head>
        {/* Basic SEO Meta Tags */}
        <title>
          Capital Smart City Islamabad – NOC, Location & Payment Plans
        </title>
        <meta
          name="description"
          content="Learn about Capital Smart City Islamabad: approved NOC, strategic location, smart features, and easy payment plans. Explore investment opportunities now!"
        />
        <meta
          name="keywords"
          content="Capital Smart City, Capital Smart City Islamabad, Smart City Islamabad, Capital Smart City NOC, Capital Smart City payment plans, Residential plots in Capital Smart City"
        />
        <meta name="author" content="IES Marketing" />
        <meta name="robots" content="index, follow" />

        {/* Canonical Tag */}
        <link
          rel="canonical"
          href="https://www.iesmkt.com/capital-smart-city/"
        />

        {/* Open Graph Meta Tags */}
        <meta
          property="og:title"
          content="Capital Smart City Islamabad – NOC, Location & Payment Plans"
        />
        <meta
          property="og:description"
          content="Discover Capital Smart City Islamabad with its prime location, residential and commercial blocks, modern infrastructure, and flexible payment plans. Learn why it’s a top investment choice."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.iesmkt.com/capital-smart-city/"
        />
        <meta
          property="og:image"
          content="https://www.iesmkt.com/capita-smart-city.webp"
        />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Capital Smart City Islamabad – NOC, Location & Payment Plans"
        />
        <meta
          name="twitter:description"
          content="Explore Capital Smart City Islamabad, Pakistan’s first smart city offering modern infrastructure, legal NOC status, prime location, residential & commercial blocks, and flexible payment plans."
        />
        <meta
          name="twitter:image"
          content="https://www.iesmkt.com/capita-smart-city.webp"
        />

        {/* FAQ Schema Markup */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Who is the owner of Capital Smart City?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "The owner of Capital Smart City is Future Development Holdings (FDH) in collaboration with Habib Rafiq (Pvt) Ltd, a renowned name in Pakistan's real estate and construction industry.",
                },
              },
              {
                "@type": "Question",
                name: "Is Capital Smart City legal?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, Capital Smart City is a legal housing society with an approved NOC (No Objection Certificate) from the Rawalpindi Development Authority (RDA).",
                },
              },
              {
                "@type": "Question",
                name: "How big is Capital Smart City Islamabad?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Capital Smart City Islamabad spans over 55,000 Kanal, making it one of the largest housing societies in Pakistan. The project is designed to expand further, with plans to reach approximately 80,000 Kanal in the future.",
                },
              },
              {
                "@type": "Question",
                name: "Is Capital Smart City a good investment?",
                acceptedAnswer: {
                  "@type": "Answer",
                text: "Capital Smart City Islamabad offers a prime location, smart technologies, modern amenities, and eco-friendly development, making it a high-potential investment opportunity.",
                },
              },
            ],
          })}
        </script>

        {/* Additional Meta Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />
      </Head>

      <div className="mt[87px]">
        <header className="mb-14">
          <div
            className="w-full bg-center bg-cover"
            style={{
              backgroundImage: `url('/capita-smart-city2.webp')`,
            }}
          >
            <div className="flex items-center justify-center w-full h-full bg-gray-900 bg-opacity-[0.8] py-12">
              <div className="text-center">
                <div className="container px-4 mx-auto">
                  <div className="max-w-4xl mx-auto">
                    {/* <span className="text-gray-200 font-semibold uppercase tracking-widest">IES Marketing</span> */}
                    <h1 className="mt-8 mb-6 text-4xl lg:text-5xl font-bold text-gray-100">
                      Capital Smart City Islamabad – A Comprehensive Guide to
                      Pakistan’s Premier Smart City
                    </h1>
                    <p className="max-w-3xl mx-auto mb-10 text-lg text-gray-300">
                      Capital Smart City (CSC) has set a new benchmark for
                      residential developments in Pakistan by providing modern
                      infrastructure, including a painstakingly planned
                      residential area that prioritizes sustainability, smart
                      urban planning, and eco-friendliness.
                    </p>
                    <div onClick={openLeadpoup}>
                      <a
                        className="inline-block w-full md:w-auto mb-4 md:mr-6 py-5 px-8 text-sm font-bold uppercase border-2 border-transparent bg-gray-200 rounded hover:bg-gray-100 text-gray-800 transition duration-200"
                        href="https://wa.me/923338400106?text=Hi.%20Sir%20I%20am%20interested%20in%20Wapda%20Town.%20Can%20get%20More%20Information%20About%20it%20?"
                        target="_main"
                      >
                        Book Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        <div className="bg-white text-black text-justify min-h-screen px-4 md:px-20">
          <div className="max-w-4xl mx-auto text-lg leading-relaxed">
            <h2 className="text-2xl md:text-[28px] text-gray-800 font-semibold mt-6 text-start">
              Introduction
            </h2>
            <p className="pb-6">
              Capital Smart City (CSC) has set a new benchmark for residential
              developments in Pakistan by providing modern infrastructure,
              including a painstakingly planned residential area that
              prioritizes sustainability, smart urban planning, and
              eco-friendliness. Individuals seeking contemporary lives, such as
              families, and entrepreneurs will appreciate the innovation,
              comfort, and affordable creative mixtures. Capital Smart City
              (CSC) is Pakistan&apos;s first smart city and the fourth in Asia. The
              idea is to improve city life by merging current technology,
              sustainability, and lavish amenities. The development, located
              near Islamabad, provides residents with a secure and modern living
              environment, as well as significant business opportunities for
              stakeholders.
            </p>
            <h2 className="text-2xl md:text-[28px] text-gray-800 font-semibold mt-6 text-start">
              Developers and Owners of Capital Smart City
            </h2>
            <p className="pb-4">
              Capital Smart City is a primary venture of Future Development
              Holdings (FDH) working together with Habib Rafiq Limited (HRL).
              Both companies are highly respected in the real estate industry
              for their successful completion of high-quality projects on time.
              FDH places importance on building smart and environmentally
              conscious communities in their developmental endeavors. Its
              dedication to urban development and high quality of life has
              propelled it to the top of the industry.
            </p>
            <p className="pb-8">
              Habib Rafiq Limited (HRL) is a well-known company in Pakistan,
              especially in the construction and real estate sectors. HRL is
              well-known for its creative infrastructure developments such as
              roads, airports, and residential communities like Bahria Town and
              DHA, accumulating over 6 decades of experience. This collaboration
              ensures that Capital Smart City offers exceptional quality,
              dependability, and high-quality development.
            </p>

            <h2 className="text-2xl md:text-[28px] text-gray-800 font-semibold mt-6 text-start">
              Designers of Capital Smart City
            </h2>
            <p className="pb-4">
              The design and master planning of Capital Smart City were carried
              out by internationally renowned firms, ensuring world-class
              standards and innovative concepts. Here are the key designers and
              consultants involved:
            </p>
            <p className="pb-4">
              <span className="font-bold">Surbana Jurong (SJ)</span> is a
              leading Singapore-based consultancy firm responsible for the
              master plan of Capital Smart City. Known for its expertise in
              smart and sustainable urban developments, SJ has designed a
              futuristic city layout with eco-friendly and modern living
              standards.
            </p>
            <p className="pb-4">
              <span className="font-bold">Arquivio Architects</span> is a
              renowned architectural firm that contributed to the design of
              residential and commercial spaces within the project. Their work
              ensures aesthetic appeal and functionality.
            </p>
            <p className="pb-4">
              <span className="font-bold">Trojan Group</span> is a reputable
              construction and development company that oversees infrastructure
              development to ensure high-quality execution.
            </p>
            <p className="pb-4">
              <span className="font-bold">Cracknell</span> is a global leader in
              landscaping design, responsible for creating lush green spaces,
              parks, and scenic views in Capital Smart City.
            </p>

            <p className="pb-8">
              <span className="font-bold">Harradine Golf</span> is a prestigious
              name in golf course design, tasked with developing the world-class
              golf course within the society.
            </p>

            <h2 className="text-2xl md:text-[28px] text-gray-800 font-semibold mt-6 text-start">
              Capital Smart City NOC Status
            </h2>
            <p className="pb-4">
              The Capital Smart City’s No Objection Certificate (NOC) has been
              approved by the Rawalpindi Development Authority (RDA). This
              authorization ensures that the project complies with the laws and
              regulations set forth by the authorities, making it a safe
              investment option. To guarantee openness and legitimacy in the
              development process, the Capital Smart City developers have
              scrupulously complied with all legal requirements. The NOC&apos;s
              approval of the society demonstrates its commitment to provide a
              dependable and controlled housing development. Because the project
              has the backing of the relevant authorities, investors and
              potential buyers can proceed with confidence.{" "}
            </p>
            <p className="pb-2">
              Here&apos;s a summary of the NOC approval milestones:
            </p>
            <ul className="list-disc ml-5">
              <li>
                On November 17, 2017, an NOC for 2,000 Kanal was granted.{" "}
              </li>
              <li>
                On September 21, 2019, the authorities approved an extended NOC
                for 7,376 Kanal.{" "}
              </li>
              <li>
                Authorities are now in the final stages of approving an
                additional 17,602 Kanal for the second revised and extended NOC.
              </li>
              <li>
                An NOC for about 17,000 Kanal of newly acquired land is still
                pending approval.
              </li>
            </ul>

            <p className="pb-8">
              With a total area of 160,000 Kanal approved, Capital Smart City is
              the largest NOC-approved housing society near the New Islamabad
              International Airport. These approvals underscore the project’s
              commitment to transparency and regulatory compliance, making it a
              secure investment option for potential buyers.
            </p>

            <h2 className="text-2xl md:text-[28px] text-gray-800 font-semibold mt-6 text-start">
              Location of Capital Smart City
            </h2>
            <p className="pb-7">
              The strategic location of Capital Smart City enhances its appeal
              among homeowners and investors. It is situated on the M2 Motorway,
              just 9.2 kilometers from Islamabad Toll Plaza, making it highly
              accessible from the twin cities of Islamabad and Rawalpindi.
            </p>

            <h2 className="text-2xl md:text-[28px] text-gray-800 font-semibold mt-6 text-start">
              Nearby Accessibilities of Capital Smart City
            </h2>
            <ul className="list-disc ml-5">
              <li>
                M2 Motorway: Direct access from Lahore-Islamabad Motorway.
              </li>
              <li>
                New Islamabad International Airport: Approximately 5–7 minutes
                away.
              </li>
              <li>Rawalpindi Ring Road: Connects CSC to other major areas.</li>
              <li>Chakri Interchange: Just a short drive away.</li>
              <li>Islamabad Toll Plaza – Located only 9.2 kilometers away.</li>
              <li>Blue Area, Islamabad – The central business hub nearby.</li>
              <li>
                Gulberg Greens – A prominent residential and commercial zone.
              </li>
              <li>
                Saddar Rawalpindi – A bustling commercial hub for retail and
                business.
              </li>
            </ul>

            <h2 className="text-2xl md:text-[28px] text-gray-800 font-semibold mt-6 text-start">
              Popular Landmarks near Capital Smart City
            </h2>

            <p className="pb-3">
              Capital Smart City is present at prime location, which not only
              ensures convenience but also enhances the investment value of the
              project.
            </p>
            <ul className="ml-5 list-disc pb-8">
              <li>Bahria Town Islamabad</li>
              <li>DHA Islamabad</li>
              <li>Saddar Rawalpindi </li>
              <li>New Islamabad International Airport </li>
              <li>Islamabad Toll Plaza </li>
              <li>Blue Area, Islamabad</li>
              <li>Gulberg Greens Islamabad</li>
              <li>Faisal Mosque</li>
              <li>Rawal Lake</li>
            </ul>

            <h2 className="text-2xl md:text-[28px] text-gray-800 font-semibold mt-6 text-start">
              Key Features of Capital Smart City
            </h2>
            <p className="pb-3">
              Capital Smart City stands out for its futuristic features that
              cater to modern living needs while prioritizing sustainability.
              Below are some of its standout features:
            </p>
            <ul className="list-disc ml-5 pb-8">
              <li>Automated Traffic Control </li>
              <li>24/7 Security</li>
              <li>Modern shopping malls and markets</li>
              <li>International Standard Schools and Hospitals </li>
              <li>Wide Carpeted Roads </li>
              <li>Sports Facilities </li>
              <li>Parks and Green Spaces </li>
              <li>Sustainable Water Supply </li>
              <li>Renewable Energy Solutions</li>
              <li>Convenient Accessibility</li>
              <li>Reliable Water Resources</li>
              <li>Luxurious Golf Farmhouses </li>
              <li>Stunning Entrance Design </li>
              <li>Energy-Efficient Solar Street Lighting </li>
              <li>Premium Quality Development</li>
              <li>Advanced Automated Traffic Management</li>
              <li>Modern Sewerage and Waste Disposal Systems </li>
              <li>Exceptional Infrastructure Development</li>
            </ul>

            <h2 className="text-2xl md:text-[28px] text-gray-800 font-semibold mt-6 text-start">
              Development Status of Capital Smart City
            </h2>
            <p className="pb-3">
              Capital Smart City is advancing quickly, with several sectors
              close to being finished and others in advanced stages of
              development. The project developers concentrated on ensuring
              top-notch infrastructure, following international standards, and
              meeting the committed timelines.
            </p>
            <p className="pb-3">
              Major road networks, including the Main Boulevard and connecting
              streets, are fully operational. Residential blocks, particularly
              in the Overseas Block, are well underway, with plot possession
              already granted in some areas. Commercial areas, parks, and
              community centers are currently under construction, showcasing the
              developers&apos; dedication to on-time completion.
            </p>
            <p className="pb-3">
              Additionally, essential services such as electricity, gas, and
              water have been set up in strategic locations, offering a
              convenient living environment for current residents. The progress
              of smart villas, recreational zones, and eco-friendly green spaces
              is constantly increasing the value of Capital Smart City,
              guaranteeing its transformation into a lively and prosperous
              community.
            </p>

            <h2 className="text-2xl md:text-[28px] text-gray-800 font-semibold mt-6 text-start">
              Capital Smart City Residential Blocks
            </h2>

            <h3 className="text-[20px] font-[600] md:text-[22px] text-start">
              Overseas Prime Block
            </h3>
            <p className="pb-2">
              Tailored for expatriates with modern amenities and spacious
              boulevards.
            </p>
            <p className="pb-3">
              <span className="font-bold">Plot Sizes:</span> 7 Marla, 10 Marla,
              1 Kanal, and more.
            </p>

            <h3 className="text-[20px] font-[600] md:text-[22px] text-start">
              Executive Block
            </h3>
            <p className="pb-2">
              Affordable options for diverse investors, equipped with essential
              facilities.
            </p>
            <p className="pb-3">
              <span className="font-bold">Plot Sizes: </span>5 Marla, 10 Marla,
              and larger plots.
            </p>

            <h3 className="text-[20px] font-[600] md:text-[22px] text-start">
              Overseas East & Central Blocks:
            </h3>
            <p className="pb-8">
              Premium plots with connectivity to main boulevards and luxury
              amenities.
            </p>

            <h2 className="text-2xl md:text-[28px] text-gray-800 font-semibold mt-6 text-start">
              Capital Smart City Commercial Blocks
            </h2>

            <h3 className="text-[20px] font-[600] md:text-[22px] text-start">
              Gate Precinct:
            </h3>
            <p className="pb-3">
              Entry point with 5-star hotels, retail outlets, and restaurants.
            </p>

            <h3 className="text-[20px] font-[600] md:text-[22px] text-start">
              CPEC Business Park:
            </h3>
            <p className="pb-3">
              A dedicated hub to enhance Pak-China economic relations.
            </p>

            <h3 className="text-[20px] font-[600] md:text-[22px] text-start">
              Silicon Valley:{" "}
            </h3>
            <p className="pb-3">
              A tech hub featuring cryptocurrency training, IT facilities, and
              commercial offices.
            </p>

            <h3 className="text-[20px] font-[600] md:text-[22px] text-start">
              La Mer & Crystal Lake:
            </h3>
            <p className="pb-8">
              Mixed-use developments with waterfront attractions, high-rise
              buildings, and cultural spaces.
            </p>

            <h2 className="text-2xl md:text-[28px] text-gray-800 font-semibold mt-6 text-start">
              Payment Plan of Capital Smart City
            </h2>
            <p className="pb-8">
              Capital Smart City offers flexible payment plans tailored to meet
              the financial needs of various buyers. Plots are available in
              residential, commercial, and farm categories. The payment
              structure includes easy installments spanning several years. For
              more information about the payment plan, you can contact our sales
              team.
            </p>

            <h2 className="text-2xl md:text-[28px] text-gray-800 font-semibold mt-6 text-start">
              Conclusion
            </h2>
            <p className="pb-8">
              Capital Smart City goes beyond being just a housing project; it
              offers a peek of what is to come. The combination of cutting-edge
              technology, eco-friendly methods, top-notch features, and
              strategic positioning all combine to making it a sought-after
              investment choice in Pakistan. Capital Smart City offers
              unparalleled value for individuals looking for the perfect house
              or a profitable investment. Capital Smart City is popular for
              modern living because of its competent developer team,
              high-quality infrastructure, and continual development
              advancements.{" "}
            </p>

            {/* contact  */}
            <section>
              <p className="pb-2 italic font-bold ">
                For more details and information, contact us on:
              </p>
              <p className="text-xl pb-3">
                {" "}
                <span className="font-bold">Email Address: </span>{" "}
                <a
                  href="mailto:iesmarketingpakistan@gmail.com"
                  className="text-blue-500 hover:underline"
                >
                  iesmarketingpakistan@gmail.com
                </a>
              </p>
              <p className="text-xl pb-3">
                {" "}
                <span className="font-bold">Phone: </span>{" "}
                <a
                  href="tel:923338400108"
                  className="text-blue-500 hover:underline"
                >
                  +92333-8400108{" "}
                </a>
                ,{" "}
                <a
                  href="tel:92333-8400106"
                  className="text-blue-500 hover:underline"
                >
                  +92333-8400106
                </a>
              </p>
            </section>

            {/* Faqs */}
            <section>
              <h2 className="text-2xl md:text-[28px] text-gray-800 font-semibold mt-6 text-start">
                FAQS
              </h2>
              <h3 className="text-[20px] font-[600] md:text-[22px] text-start">
                Who is the owner of Capital Smart City?
              </h3>
              <p className="pb-5">
                The owner of Capital Smart City is Future Development Holdings
                (FDH) in collaboration with Habib Rafiq (Pvt) Ltd, a renowned
                name in Pakistan&apos;s real estate and construction industry.
              </p>

              <h3 className="text-[20px] font-[600] md:text-[22px] text-start">
                Is Capital Smart City legal?
              </h3>
              <p className="pb-5">
                Yes, Capital Smart City is a legal housing society with an
                approved NOC (No Objection Certificate) from the Rawalpindi
                Development Authority (RDA).
              </p>

              <h3 className="text-[20px] font-[600] md:text-[22px] text-start">
                How big is Capital Smart City Islamabad?
              </h3>
              <p className="pb-5">
                Capital Smart City Islamabad spans over 55,000 Kanal, making it
                one of the largest housing societies in Pakistan. The project is
                designed to expand further, with plans to reach approximately
                80,000 Kanal in the future.
              </p>

              <h3 className="text-[20px] font-[600] md:text-[22px] text-start">
                Is Capital Smart City a good investment?
              </h3>
              <p className="pb-5">
                Capital Smart City Islamabad offers a prime location, smart
                technologies, modern amenities, and eco-friendly development,
                making it a high-potential investment opportunity.
              </p>

              <h2 className="text-2xl md:text-[28px] text-gray-800 font-semibold mt-6 text-start">
                Disclaimer
              </h2>
              <p className="pb-8">
                We do not deal in any unapproved society of Multan. The
                information provided in this blog is collected from different
                online sources to provide details about real estate.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Capital_Smart_City;

//  <h3 className="text-[20px] font-[600] md:text-[22px] text-start"></h3>
//   <h2 className="text-2xl md:text-[28px] text-gray-800 font-semibold mt-6 text-start"></h2>
