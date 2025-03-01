import React, { useEffect, useState } from "react";
import img1 from "../public/SmartHousing.webp";
import img2 from "../public/smarthousing2.webp";
import img3 from "../public/smarthousing3.webp";
import img4 from "../public/smarthousing4.webp";
import img5 from "../public/smarthousing5.webp";
import img6 from "../public/smarthousing6.webp";
import img7 from "../public/smarthousing7.webp";
import img8 from "../public/smarthousing8.webp";
import img9 from "../public/smarthousing9.webp";
import img10 from "../public/smarthousing10.webp";
import paymentPlan from "../public/smartHousing-payments.jpg";
import paymentPlan2 from "../public/smartHousing-payments2.jpg";
import OurProjects from "@/Components/OurProjects";
import { useAppContext } from "../Context/AppContext";
import Head from "next/head";
import Image from "next/image";

const SmartHousing = () => {
  const { openLeadpoup } = useAppContext();
  useEffect(openLeadpoup, [openLeadpoup]);

  const images = [img1, img2, img3, img4, img6, img7, img8, img9, img10];
  const altImagesNames = [
    "Smart Housing main boulevard",
    "Smart Housing Multan 3D view",
    "Smart Housing nishter block main entrance",
    "Smart Housing Islamic Center",
    "Smart Housing green spaces",
    "Smart Housing wide roads",
    "Smart Housing recreational spaces",
    "Smart Housing islamic center",
    "Smart Housing residential community",
  ];

  const [loading, setLoading] = useState(Array(images.length).fill(true));

  // Function to handle when image is loaded
  const handleImageLoad = (index) => {
    setLoading((prevLoading) => {
      const newLoading = [...prevLoading];
      newLoading[index] = false;
      return newLoading;
    });
  };

  return (
    <div>
      <Head>
        <title>Smart Housing Multan – Best Real Estate Society in Multan</title>
        <meta
          name="keywords"
          content="Smart Housing Multan, Smart Housing, Smart Housing Society, Investment in Smart Housing, Smart Housing Multan Plots, Buy Property in Smart Housing Multan"
        />
        <meta
          name="description"
          content="Explore Smart Housing Multan – a top real estate society offering prime location, modern living, and investment opportunities in Multan."
        />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:title"
          content="Smart Housing Multan – Best Real Estate Society in Multan"
        />
        <meta
          property="og:description"
          content="Explore Smart Housing Multan – a top real estate society offering prime location, modern living, and investment opportunities in Multan."
        />
        <meta
          property="og:image"
          content="https://www.iesmkt.com/SmartHousing.webp"
        />
        <meta
          property="og:url"
          content="https://www.iesmkt.com/smart-housing/"
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Smart Housing Multan – Best Real Estate Society in Multan"
        />
        <meta
          name="twitter:description"
          content="Explore Smart Housing Multan – a top real estate society offering prime location, modern living, and investment opportunities in Multan."
        />
        <meta
          name="twitter:image"
          content="https://www.iesmkt.com/SmartHousing.webp"
        />
        <link rel="canonical" href="https://www.iesmkt.com/smart-housing/" />
      </Head>
      <div>
        <header className="mb-14">
          <div
            className="w-full bg-center bg-cover"
            style={{
              backgroundImage: `url('/SmartHousing.webp')`, // Using the imported image
            }}
          >
            <div className="flex items-center justify-center w-full h-full bg-gray-900 bg-opacity-[0.7] py-12">
              <div className="text-center">
                <div className="container px-4 mx-auto">
                  <div className="max-w-4xl mx-auto text-center">
                    {/* <span className="text-gray-200 font-semibold uppercase tracking-widest">IES Marketing</span> */}
                    <h1 className="mt-8 mb-6 text-4xl lg:text-5xl font-bold text-gray-100">
                    Smart Housing Multan – Best Real Estate Society in Multan
                    </h1>
                    <p className="max-w-3xl mx-auto mb-10 text-lg text-gray-300">
                      Smart Housing Society Multan is a trustable and
                      transparent society, offering contemporary living and
                      urban convenience with a rapidly developing landscape.
                    </p>
                    <div onClick={openLeadpoup}>
                      <a
                        className="inline-block w-full md:w-auto mb-4 md:mr-6 py-5 px-8 text-sm font-bold uppercase border-2 border-transparent bg-gray-200 rounded hover:bg-gray-100 text-gray-800 transition duration-200"
                        href="https://wa.me/923326030828?text=Hi.%20Sir%20I%20am%20interested%20in%20Smart%20Housing.%20Can%20get%20More%20Information%20About%20it%20?"
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

        {/* More Details */}
        <div className="bg-white text-black text-justify min-h-screen px-4 md:px-20">
          <div className="max-w-4xl mx-auto">
            {/* Introduction Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4">Introduction</h2>
              <p className="text-lg leading-relaxed">
                Smart Housing Multan (SHM) is a modern housing society in the
                City of Saints with cutting-edge automation systems and modern
                infrastructure. It is situated at a prime location as people can
                easily reach it by driving a few minutes from M5 Motorway
                Interchange, Nishter 2, and Muhammad Nawaz Sharif University of
                Agriculture.{" "}
              </p>
              <p className="text-lg leading-relaxed">
                Moreover, it is located along the routes leading to
                Muzzafargarh, Shujabad, and Dera Ghazi Khan, making it an ideal
                spot for investment and residence. It has 220 feet wide main
                entrance and 110 feet main boulevard. The residents can enjoy
                exclusive perks, elite amenities, and upscale conveniences by
                choosing Smart Housing Society.
              </p>
            </section>

            {/* Smart Housing Developer History and Owners Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4 text-start">
                Smart Housing Developer History and Owners
              </h2>
              <p className="text-lg leading-relaxed">
                The owner and developer of Smart Housing Society is Mr. Malik
                Muhammad Zafar, CEO of M Zafar & Company (MZ&Co.). Mr. Malik
                Muhammad Akhter is a Managing Director of the company and Mr,
                Malik Muhammad Safdar Dirctor Sales and Marketing, working on
                this housing project. It is the 7th project of Mr. Zafar &
                Company that gained recognition in the real estate industry by
                working on multiple top-notch projects and fulfilling its
                promise to provide land for everyone. This company was
                established in 2014 and promised to provide a luxurious and
                comfortable lifestyle in Pakistan.{" "}
              </p>
            </section>

            {/* Smart Housing NOC Status Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4 text-start">
                Smart Housing NOC Status
              </h2>
              <p className="text-lg leading-relaxed">
                {`Smart Housing is an authentic project verified by the development authorities and got technical approval in accordance with the Punjab Development Authorities Private Housing Scheme Rules 2021. On 24th November 2022, the societys owners applied for a "No Objection Certificate" from the Multan Development Authority (MDA) and got approval from the Directorate of Urban Approval on 1st February 2023. Its total land area is 224 Kanal, according to the data provided in the official document approved by the government authorities. The developers are directed to accelerate the development process and introduce basic facilities into society within a few months.`}{" "}
              </p>
            </section>

            {/* Smart Housing Development Status Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4 text-start">
                Smart Housing Development Status
              </h2>
              <p className="text-lg leading-relaxed pb-3">
                Smart housing development is ongoing, and advanced technologies
                are integrated to establish a luxurious and comfortable living
                environment. It has all the basic facilities, including water
                supply, education and sports complexes, hospitals, and mosques.
                In addition, it features a smart and captivating entrance design
                crafted with appealing lights and modern materials. Smart
                Officers Club provides many facilities to residents. This smart
                club also serves as an ideal venue for professional and social
                engagements, like seminars, corporate events, musical evenings,
                etc.
              </p>
              <p className="text-lg leading-relaxed">
                A smart Islamic centre and Jamia masjid are also present in the
                Smart Housing that is accessible by visitors or society
                residents and contributes to their spiritual growth. Their
                remarkable architecture and commitment to sustainable living
                make it an essential part of the landscape. Additionally, it
                also features smart street lights with motion sensors that alter
                the light intensity according to traffic flow on the road. Smart
                Surveillance System utilizes the latest CCTV technology for
                real-time monitoring. Homeowners can monitor their houses
                through their smartphones. These cameras provide quick alerts
                when unusual activities are detected
              </p>
            </section>

            {/* Main Features of Smart Housing Society Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4 text-start">
                Main Features of Smart Housing Society
              </h2>
              <ul className="list-disc ml-5 text-lg leading-relaxed">
                <li>Main boulevard (110 feet)</li>
                <li>Family parks</li>
                <li>Smart entrance (220 feet)</li>
                <li>Cafes and restaurants</li>
                <li>File verification app</li>
                <li>Green belt</li>
                <li>Islamic center and Jamia masjid</li>
                <li>Water supply</li>
                <li>Education Complex</li>
                <li>Sport complex</li>
                <li>Smart street lights</li>
                <li>Smart officer&apos;s club</li>
                <li>Smart surveillance system</li>
                <li>Green belts</li>
                <li>Playgrounds</li>
                <li>Smart street lighting</li>
                <li>Smart street lighting</li>
                <li>Commercial hub</li>
              </ul>
            </section>

            {/* Smart Housing Location Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4 text-start">
                Smart Housing Location
              </h2>
              <p className="text-lg leading-relaxed">
                Smart Housing is located in Mouza Alamgir near Nag Shah Chowk
                and M5 Motorway on Main Shujabad Road in Multan City. This
                housing project is 5 to 30 minutes away from popular spots in
                Multan, like Multan Cantt, Multan Bypass, Multan International
                Airport, etc., catering to the diverse needs of its residents.
              </p>
            </section>

            {/* Map Location */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4 text-start">
                Location of Smart Housing
              </h2>
              <div>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13812.318492705257!2d71.44402929246822!3d30.063252069052993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8b66bb588cb3c26b%3A0xf56b38f814d92751!2sSmart%20Housing%20Multan!5e0!3m2!1sen!2s!4v1724130783166!5m2!1sen!2s"
                  height="450"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full"
                ></iframe>
              </div>
            </section>

            {/* Smart Housing Multan Assessbelities */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4 text-start">
                Smart Housing Multan Accessibilities
              </h2>
              <p className="text-xl font-semibold mb-2">
                Smart Housing Multan can be accessed from multiple routes:
              </p>
              <ul className="list-disc ml-5 text-lg leading-relaxed">
                <li>Just 2 minutes from Nag Shah Chowk</li>
                <li>Just 5 minutes from Zakariya Road</li>
                <li>Just 6 minutes from M4 Motorway (Multan-Faisalabad)</li>
                <li>Just 7 minutes from M5 Motorway (Multan-Sukkur)</li>
                <li>Just 10 minutes from Khudadad Road</li>
                <li>Just 10 minutes from Khudadad Road</li>
                <li>Just 12 minutes from Multan Cantt</li>
                <li>Just 15 minutes from Sher Shah Road</li>
              </ul>
            </section>

            {/* popular land marks */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4 text-start">
                Popular landmarks near Smart Housing Multan
              </h2>
              <p className="text-xl font-semibold mb-2">
                {" "}
                Smart Housing Multan can be accessed from multiple routes:
              </p>
              {/* <p className="text-lg leading-relaxed"></p> */}
              <ul className="list-disc ml-5">
                <li>M5 Motorway Interchange</li>
                <li>Al-Khidmat charity hospital</li>
                <li>DHQ Multan Vehari Road</li>
                <li>Multan University of science and technology</li>
                <li>MNS Agriculture University</li>
                <li>Nishter 2 hospital</li>
                <li>Cantt Avenue Housing Scheme</li>
                <li>Multan International Airport</li>
                <li>Multan Cantt</li>
                <li>Dream Gardens Housing Society</li>
                <li>Nishat Boys School</li>
                <li>Beacon House School</li>
                <li>Karimabad Housing Society</li>
              </ul>
            </section>

            {/* Blocks */}
            <section className="mb-12">
              <h2 className="text-4xl font-bold mb-4 text-start">
                Smart Housing Multan Blocks
              </h2>
              <p className="text-lg leading-relaxed">
                Smart Housing Society has launched four blocks: A-block,
                B-block, A-block extension, and Nishter block. Get residential
                or commercial plots at cash payment in A-block, B-block, and A-
                A-extension block.
              </p>
              {/* A Block */}
              <h3 className="text-xl mt-5 font-semibold">A Block </h3>
              <p className="text-lg leading-relaxed">
                A-Block is actively under development, with significant progress
                being made in infrastructure and utility installations. Most of
                the plots were distributed to participants in the balloting and
                were sold for a 3-year payment plan initially with an 18% down
                payment; the remaining plots are now sold at cash payment. This
                block features 4, 5, 6, and 10 Marla residential plots and 2.65
                or 3 Marla commercial plots. A-block offers attractive
                opportunities due to its strategic location, modern amenities,
                and sustainable design features.
              </p>
              {/* A-extension Block */}
              <h3 className="text-xl mt-5 font-semibold ">A-extension Block</h3>
              <p className="text-lg leading-relaxed">
                A-extension block of Smart Housing Multan is an exclusive
                addition designed to meet modern living standards with
                residential options. It offers plots of 5 and Marla with monthly
                installments of 36 months. It is popular for its wide carpeted
                roads, smart security system, smart street lights, Jamia Masjid,
                and many other top-notch amenities. Its balloting will be
                conducted for the second time on 20th July along with B-block
                and Nishter Block.
              </p>
              {/* B Block */}
              <h3 className="text-xl font-semibold mt-5">B Block</h3>
              <p className="text-lg leading-relaxed">
                B-block is situated near Nag Shah Chowk and offers easy access
                to major roads and highways. The developers introduced all
                modern amenities of other blocks into this block design, too,
                like family parks, masjids, commercial hubs, etc. It offered
                plots of 3.5, 5, and 10 Marla or 1 Kanal plot. A wide range of
                buyers can get plots at affordable rates by paying a down
                payment. This project is progressing steadily with
                infrastructure development and essential utilities to
                accommodate buyers&apos; residential or commercial needs.
              </p>
              {/* Nishter Block */}
              <h3 className="text-[24px] font-semibold mt-5">Nishter Block</h3>
              <p className="text-lg leading-relaxed">
                Nishter block is the largest block of the Smart Housing Project,
                launched in 2023. It offers residential plots of 3.5, 5, 7, and
                10 Marla plots that are available in easy four-year
                installments. Its first balloting will be held on July 20th,
                2024, to ensure transparent and equitable allocation of plots.
                It is not a highly{" "}
              </p>
              {/* Premium Block */}
              <h3 className="text-[24px] font-semibold mt-5">Premium Block</h3>
              <p className="text-lg leading-relaxed">
                Smart Housing society has recently launched a new premium block
                and promised to provide all the modern facilities and amenities
                to people in a few next years. In this block, residential plots
                of size 3.5, 5, 7, and 10 Marla and commercial plots are
                available on easy installments of 18 months. You can get
                possession of your plot by paying most of the amount. Get around
                15% discount on paying full payment of the plot.
              </p>
            </section>

            {/* Payment Plans */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4 text-start">
                Smart Housing Society Payment Plan{" "}
              </h2>
              <p className="text-lg leading-relaxed">
                Smart Housing Society Multan offered budget-friendly payment
                plans for locals and interested people from different cities. It
                has a 4-year plan with 40 monthly and 8 quarterly installments.
                Almost 18% of the plot&apos;s total price needs to be paid as a
                down payment. The total price of 3.5 and 5 Marla plots is PKR
                2,450,000 and PKR 3,500,000, respectively. Moreover, the total
                price of 7 and 10 Marla plots also seem affordable. Interested
                buyers also have to pay the balloting amount and quarterly
                installments to take possession of the plot.
              </p>
              <div className="flex justify-start items-start mt-10 gap-3 flex-wrap">
                <Image
                  src={paymentPlan}
                  alt="Smart Housing Nishter Block Payment Plan"
                  title="Smart Housing Nishter Block Payment Plan"
                  className="mx-auto border w-full sm:max-w-[400px] transition-all duration-[0.5s] hover:shadow-2xl"
                />
                <Image
                  src={paymentPlan2}
                  alt="Smart Housing Premium payment Plan"
                  title="Smart Housing Premium payment Plan"
                  className="mx-auto w-full sm:max-w-[400px] border transition-all duration-[0.5s]  hover:shadow-2xl"
                />
              </div>
            </section>

            {/* Conclusion */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4 text-start">Conclusion</h2>
              <p className="text-lg leading-relaxed">
                {`Smart Housing Society Multan is a trustable and transparent society, offering contemporary living and urban convenience with a rapidly developing landscape. It is the best option to consider for those interested in investing or looking for multana property for living purposes. We can provide the latest updates about payment plans and society&apos;s future development goals. Please get in touch with our cooperative team! Contact IES Marketing for detailed information and guidance on amenities and society&apos;s future development plans to ensure informed investment decisions. Grab the Chance, and Don't Let this Slip away!`}{" "}
              </p>
            </section>

            {/* FAQS */}
            <section className="mb-12">
              <h3 className="text-3xl font-bold mb-4 text-start">FAQS</h3>
              <h3 className="text-xl font-semibold mt-3 text-start">
                Is it safe to invest in Smart Housing Multan?
              </h3>
              <p className="text-[15px] sm:text-lg leading-relaxed">
                It is completely safe to invest in the Smart Housing Multan
                Project because it is verified by government authorities. The
                investors can potentially buy commercial or residential plots in
                this emerging residential community without any legal concerns.
                Smart Housing Multan presents a favorable prospect for those
                looking to secure a stable and potentially lucrative real estate
                investment in Multan City.
              </p>
              <h3 className="text-xl font-semibold mt-5 text-start">
                Is Smart Housing Multan NOC approved?
              </h3>
              <p className="text-[15px] sm:text-lg leading-relaxed">
                Smart Housing Multan is an NOC-approved project that signifies
                its compliance with local regulations and ensures that it meets
                the required development standards. Investors can proceed with
                confidence, knowing that Smart Housing has secured the essential
                approvals. This No Objection Certificate contributes to the
                project&apos;s credibility and integrity in the real estate
                market.
              </p>
              <h3 className="text-xl font-semibold mt-5 text-start">
                Is Smart Housing Multan good for long-term investment?
              </h3>
              <p className="text-[15px] sm:text-lg leading-relaxed">
                Smart Housing Multan appears to be a promising option for
                long-term investment due to its enhanced potential in the near
                future. The project&apos;s approval and the successful history
                of the developers contribute to its reliability. However, it is
                crucial for investors to assess market trends and consider
                financial goals before making any investment. The planned
                amenities and ongoing infrastructure development are clear
                indicators that it will be good to consider to seek long-term
                benefits.
              </p>
              <h3 className="text-xl font-semibold mt-5 text-start">
                How can I buy a plot in Smart Housing Society Multan?
              </h3>
              <p className="text-[15px] sm:text-lg leading-relaxed">
                It is an easy process to get a plot file in Smart Housing
                Society Multan. Ask a reliable marketing company to get plot
                file or visit the on-site office of Smart Housing for detailed
                information about payment plans, pricing, and types of plots. Do
                not forget to bring required documents with you. These documents
                include CNIC, photographs, domicile and other important
                documents specified by the society. Choose a plot that suits
                your budget and needs and get a payment plan. Pay the down
                payment and get your plot file in your hand.
              </p>
              <h3 className="text-xl font-semibold mt-5 text-start">
                How many balloting events have been conducted in Smart Housing
                Society Multan?
              </h3>
              <p className="text-[15px] sm:text-lg leading-relaxed">
                Two balloting events have been conducted in Smart Housing
                Society Multan and the second one is recently conducted on 20th
                July 2024 for three blocks; A-extension, B, and Nishter block.
                Plot numbers are assigned to members of society who purchased a
                plot in this block before the event. All data regarding the
                owners of plots, plot number, and location are uploaded on their
                website.
              </p>
              <h3 className="text-xl font-semibold mt-5 text-start">
                How much time will Smart Housing Society Multan take to develop?
              </h3>
              <p className="text-[15px] sm:text-lg leading-relaxed">
                Smart Housing Society Multan is developing at a faster pace and
                promises to provide a well-developed community equipped with
                smart features and luxurious amenities in a short time period.
                A-block is ready for construction of houses, while B,
                A-extension, and Nishter block are at the initial stages of
                development.
              </p>
            </section>
          </div>
        </div>

        {/* Images */}
        <section className="mb-12 px-2 sm:px-5">
          <h3 className="text-3xl font-bold mb-4 text-center pb-4">
            Images Of Smart Housing
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {images.map((src, index) => (
              <div
                key={index}
                className="w-full h-48 md:h-64 lg:h-80 bg-gray-200 flex items-center justify-center overflow-hidden border rounded-2xl transition-all duration-[0.5s] hover:border-blue-800 hover:shadow-2xl relative"
              >
                {/* Loading Spinner */}
                {loading[index] && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
                  </div>
                )}

                {/* Image */}
                <Image
                  className={`max-w-full max-h-full object-contain transition-opacity duration-500 ${
                    loading[index] ? "opacity-0" : "opacity-100"
                  }`}
                  src={src}
                  alt={altImagesNames[index]}
                  title={altImagesNames[index]}
                  loading="lazy"
                  onLoad={() => handleImageLoad(index)}
                  onError={() => handleImageLoad(index)} // In case image fails to load
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            ))}
          </div>
        </section>

        {/* Disclaimer */}
        <section className="my-10 px-3 sm:px-20 text-justify">
          <h2 className="text-3xl font-bold mb-4">Disclaimer</h2>
          <p className="text-xl font-semibold mt-5">
            We collect information from credible and authentic online sources to
            provide up-to-date property details. We make no representations or
            claims about the accuracy of the data. We do not claim liability in
            case of any financial and investment-related losses experienced by
            users. Potential buyers or users are urged to exercise caution and
            take full responsibility for their investment.
          </p>
        </section>

        {/* <OurProjects
          showHead={false}
          heading="Our Other Real Estate Projects"
        /> */}
      </div>
    </div>
  );
};

export default SmartHousing;
