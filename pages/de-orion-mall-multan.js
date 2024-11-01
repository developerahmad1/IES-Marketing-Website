import OurProjects from "@/Components/OurProjects";
import { useAppContext } from "../Context/AppContext";
import Head from "next/head";
import React from "react";
import { useEffect } from "react";
import Image from "next/image";
import img2 from "../public/De Orion Mall.webp";
import img3 from "../public/De orion construction.jpg";
import img6 from "../public/De Orion6.webp";
import img7 from "../public/De Orion7.webp";
import img8 from "../public/De Orion8.webp";
import img9 from "../public/De Orion9.webp";
import img10 from "../public/De Orion10.webp";
import img11 from "../public/De Orion11.webp";
import img12 from "../public/De Orion12.webp";
import img13 from "../public/De Orion13.webp";
import img14 from "../public/De Orion14.webp";
import img15 from "../public/De Orion15.webp";
import img16 from "../public/De Orion16.webp";
import Link from "next/link";

const De_Orion_Mall_Multan = () => {
  const { openLeadpoup } = useAppContext();
  useEffect(openLeadpoup, []);

  return (
    <div>
      <Head>
        {/* Primary Title */}
        <title>
          De-Orion Mall Gulgasht Multan – Luxury Apartments for Rent
        </title>

        {/* Meta Keywords */}
        <meta
          name="keywords"
          content="De Orion, De Orion Mall, De Orion Mall Multan, Gulgasht Multan, Shops in Multan, Apartments in Gulgasht Multan, Brand Road Multan Malls, Commercial investment in gulgasht Multan"
        />

        {/* Meta Description */}
        <meta
          name="description"
          content="De Orion Mall Multan is a remarkable new development located in the vibrant center of Multan, making it an ideal choice for those seeking prestigious lifestyles."
        />

        {/* Canonical Link */}
        <link
          rel="canonical"
          href="https://www.iesmkt.com/de-orion-mall-multan/"
        />

        {/* Open Graph (OG) Meta Tags for Facebook and Social Sharing */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="De-Orion Mall Gulgasht Multan – Luxury Apartments for Rent"
        />
        <meta
          property="og:description"
          content="De Orion Mall Multan is a remarkable new development located in the vibrant center of Multan, ideal for prestigious lifestyles."
        />
        <meta
          property="og:url"
          content="https://www.iesmkt.com/de-orion-mall-multan/"
        />
        <meta
          property="og:image"
          content="https://www.iesmkt.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2FDe%20Orion%20Mall.9e6f6873.webp&w=3840&q=75"
        />
        <meta property="og:site_name" content="IES Marketing" />
        <meta property="og:locale" content="en_PK" />

        {/* Twitter Card Meta Tags */}
        <meta
          name="twitter:title"
          content="De-Orion Mall Gulgasht Multan – Luxury Apartments for Rent"
        />
        <meta
          name="twitter:description"
          content="Discover luxurious apartments for rent in De Orion Mall, situated in the vibrant center of Multan, perfect for those seeking a prestigious lifestyle."
        />
        <meta
          name="twitter:image"
          content="https://www.iesmkt.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2FDe%20Orion%20Mall.9e6f6873.webp&w=3840&q=75"
        />
        {/* Optional: Meta Robots Tag */}
        <meta name="robots" content="index, follow" />
      </Head>

      <div className="mt[87px]">
        <header className="mb-14">
          <div
            className="w-full bg-center bg-cover"
            style={{
              backgroundImage: `url('/De Orion Mall.webp')`, // Using the imported image
            }}
          >
            <div className="flex items-center justify-center w-full h-full bg-gray-900 bg-opacity-[0.7] py-12">
              <div className="text-center">
                <div className="container px-4 mx-auto">
                  <div className="max-w-4xl mx-auto text-center">
                    {/* <span className="text-gray-200 font-semibold uppercase tracking-widest">IES Marketing</span> */}
                    <h1 className="mt-8 mb-6 text-4xl lg:text-5xl font-bold text-gray-100">
                      De-Orion Mall Gulgasht Multan – Luxury Apartments &
                      Business Opportunities
                    </h1>
                    <p className="max-w-3xl mx-auto mb-10 text-lg text-gray-300">
                      De Orion Mall Multan is a remarkable new development
                      located in the vibrant center of Multan. Designed as a
                      multi-purpose project, it offers a unique blend of
                      luxurious residential apartments and modern retail spaces,
                      creating a dynamic environment for residents and
                      businesses alike
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
            {/* Intro duction */}
            <section className="mb-2">
              <h2 className="text-3xl font-bold mb-4">Introduction</h2>
              <p className="pb-6">
                De Orion Mall Multan is a remarkable new development located in
                the vibrant center of Multan. Designed as a multi-purpose
                project, it offers a unique blend of luxurious residential
                apartments and modern retail spaces, creating a dynamic
                environment for residents and businesses alike. Its contemporary
                architecture and prime location make it an ideal choice for
                those seeking a prestigious lifestyle and promising business
                opportunities.
              </p>
              <p className="pb-6">
                Due to many reduction in convenience, including the choice of
                high foods, unique retail stores and a large number of parking
                spaces, Orion Mall will undoubtedly be the most important
                destination for Multan. While residents can live a smart and
                comfortable life in a convenient neighborhood, investors and
                entrepreneurs see it as a key location for lucrative projects.
              </p>
            </section>
            <Image
              src={img2}
              alt="De Orion Mall Multan"
              title="De Orion Mall Multan"
              className="mb-12 mx-auto"
            />
            {/* Developers */}
            <section>
              <h2 className="text-3xl font-bold mb-4">
                De Orion Mall Gulgasht Multan Developers
              </h2>
              <p className="pb-6">
                De Orion Mall is developed by Orion Builders Pvt. Ltd, a
                prominent name in the real estate industry known for delivering
                high-quality, innovative projects across Pakistan. Orion
                Builders has built a reputation for excellence with a portfolio
                of successful developments that emphasize modern architecture,
                sustainable practices, and vibrant community spaces. Led by a
                visionary team, Orion Builders is committed to transforming
                Multan&apos;s urban landscape, and De Orion Mall stands as a
                testament to their expertise and dedication. With a focus on
                creating lasting value for both investors and residents, Orion
                Builders Pvt. Ltd aims to make De Orion Mall a premier
                destination for luxury living and lucrative business
                opportunities in Multan.
              </p>
              <p className="pb-2">
                Some of the successful projects delivered by Orion Group are:
              </p>
              <ol className="list-disc ml-5">
                <li>Lodhran Mobile Center</li>
                <li>Orion Commercial Center</li>
                <li>Orion Town Bahawalpur</li>
                <li>Orion Town Lodhran</li>
                <li>Habib Town Lodhran</li>
              </ol>
            </section>

            {/* De Orion Mall Gulgasht Multan NOC Status */}
            <section>
              <h2 className="text-3xl font-bold">
                De Orion Mall Gulgasht Multan NOC Status
              </h2>
              <p className="pb-6">
                De Orion Mall proudly holds an official No Objection Certificate
                (NOC) from the Multan Development Authority (MDA), ensuring that
                the project meets all regulatory and legal standards required
                for development in the region. This MDA approval reinforces the
                credibility and reliability of the project, providing peace of
                mind for investors and future residents. With this
                certification, De Orion Mall stands as a secure and trustworthy
                investment opportunity, backed by full compliance with municipal
                guidelines and development regulations.
              </p>
            </section>

            {/* De Orion Mall Development Status */}
            <section>
              <h2 className="text-3xl font-bold">
                De Orion Mall Development Status
              </h2>
              <p className="pb-6">
                De Orion Mall&apos;s construction is advancing steadily, with the
                basement phase completed and significant progress visible on the
                ground floor. The development is now in its initial construction
                stages, showcasing dedicated 24-hour activity as the project
                rapidly takes shape. Pillars are beginning to tower from the
                ground, marking the mall&apos;s structural rise. Around the clock,
                teams are engaged in essential tasks such as steel cutting,
                placement, hammering, and welding, all signaling active growth
                and swift progress towards completion. The visible momentum
                highlights Orion Builders&apos; commitment to timely delivery and
                quality construction.
              </p>
            </section>

            <Image
              src={img3}
              alt="De Orion Mall Multan Construction"
              title="De Orion Mall Multan Construction"
              className="w-full mx-auto mb-8"
            />

            {/* Key Features of De Orion Mall  */}
            <section className="mb-6">
              <h2 className="text-3xl font-bold">
                Key Features of De Orion Mall
              </h2>
              <p className="pb-2 mt-3">
                Some prominent features of De Orion Mall Gulgasht Multan are:
              </p>
              <ul className="list-disc ml-5">
                <li>Retail Shops</li>
                <li>Luxury Apartments</li>
                <li>Food Courts</li>
                <li>Kiosks</li>
                <li>Mosque</li>
                <li>Gym</li>
                <li>Spacious Parking Area</li>
                <li>Garbage Disposal System</li>
                <li>Cargo Lift</li>
              </ul>
            </section>

            {/* Location of De Orion Mall Gulgasht Multan */}
            <section>
              <h2 className="text-3xl font-bold">
                Location of De Orion Mall Gulgasht Multan
              </h2>
              De Orion Mall is strategically located in Gulgasht Multan, a prime
              location known for its accessibility and vibrant community.
              Situated near key thoroughfares, the mall benefits from high foot
              traffic and excellent connectivity to various parts of the city.
              Its central position not only makes it easily reachable for
              residents and visitors but also places it in close proximity to
              important landmarks, educational institutions, and commercial
              hubs. This advantageous location is set to enhance the appeal of
              De Orion Mall as a premier destination for shopping, dining, and
              luxurious living in Multan.
            </section>

            {/* De Orion Mall Gulgasht Multan Accessibilities */}
            <section>
              <h2 className="text-3xl font-bold mt-6 pb-3">
                De Orion Mall Gulgasht Multan Accessibilities
              </h2>
              <p className="pb-3">
                De-Orion Mall Gulgasht Multan can be easily accessed from:
              </p>
              <ul className="list-disc ml-5">
                <li>Chungi # 9: 1 Minute Drive</li>
                <li>Multan International Airport: 8-minute drive </li>
                <li>Bahauddin Zakariya University: 4-minute drive </li>
                <li>Multan Fort: 3-minute drive</li>
                <li>City Railway Station: 7-minute drive</li>
                <li>Chowk Nawan Shehr: 8-minute drive </li>
                <li>Daewoo Express Terminal: 7-minute drive </li>
                <li>Multan Cantt: 5-minute drive</li>
                <li>DHA Multan: 10 minute drive</li>
              </ul>
            </section>

            {/* Popular Landmarks near De Orion Mall Gulgasht Multan */}
            <section className="mb-8">
              <h2 className="text-3xl font-bold mt-6 pb-3">
                Popular Landmarks near De Orion Mall Gulgasht Multan
              </h2>
              <p className="pb-3">
                Some of the popular landmarks and popular places near De Orion
                Mall are:
              </p>
              <ul className="list-disc ml-5">
                <li>Multan International Airport</li>
                <li>Bahauddin Zakariya University</li>
                <li>Multan Fort</li>
                <li>City Railway Station</li>
                <li>Chowk Nawan Shehar</li>
                <li>Daewoo Express Terminal</li>
                <li>Multan Cantt</li>
                <li>Gulgasht Colony Park</li>
                <li>Nishtar Medical University</li>
                <li>City Hospital, Multan</li>
                <li>KK Mart</li>
                <li>Mall of Multan</li>
                <li>Nishat Boys High School</li>
              </ul>
            </section>

            {/* De Orion Mall Gulgasht Multan Layout  */}
            <section>
              <h2 className="text-3xl font-bold">
                De Orion Mall Gulgasht Multan Layout{" "}
              </h2>
              <p className="pb-6">
                De Orion Mall, Gulgasht Multan is a mixed-used building having
                12 stories. First five floors are particularly designed for
                retail shops, while 6th floor is for the food court area. From
                7th to 11th floor, there are apartments, gym, and other
                facilities for people living there.
              </p>
              <p className="pb-6">
                Let&apos;s have a look on the layout of all floors and see what this
                building offers to people.
              </p>
            </section>

            {/* Layout Images */}
            <section className="my-4">
              <div className="flex justify-center items-center flex-wrap sm:flex-nowrap">
                <Image
                  src={img6}
                  alt="De Orion Mall Basement Layout"
                  title="De Orion Mall Basement Layout"
                  className="max-w-full"
                />
                <Image
                  src={img7}
                  alt="De Orion Mall Lower Ground Floor Layout"
                  title="De Orion Mall Lower Ground Floor Layout"
                  className="max-w-full"
                />
              </div>
              <div className="flex justify-center items-center flex-wrap sm:flex-nowrap">
                <Image
                  src={img8}
                  alt="De Orion Mall Ground Floor Layout"
                  title="De Orion Mall Ground Floor Layout"
                />
                <Image
                  src={img9}
                  alt="De Orion Mall 1st Floor Layout"
                  title="De Orion Mall 1st Floor Layout"
                />
              </div>
              <div className="flex justify-center items-center flex-wrap sm:flex-nowrap gap-x-5">
                <Image
                  src={img10}
                  alt="De Orion Mall 6th Floor Layout"
                  title="De Orion Mall 6th Floor Layout"
                />
                <Image
                  src={img11}
                  alt="De Orion Mall 7th Floor Layout"
                  title="De Orion Mall 7th Floor Layout"
                />
              </div>
            </section>

            {/* payment Plan */}
            <section className="my-5">
              <h2 className="text-3xl font-bold">
                De Orion Mall Gulgasht Multan Payment Plan
              </h2>
              <p className="pb-6">
                De Orion Mall in Gulgasht Multan offers a great opportunity to
                potential buyers for purchasing a shop or getting an apartment
                at a prime location of Multan. It has a flexible payment plan of
                almost 3 years with 36 monthly installments and 25% down payment
                or booking amount. Below, payment plans for residential
                apartments, commercial shops, kiosks, smart shops, and food
                courts are provided.
              </p>
            </section>

            {/* Images */}
            <section className="my-4">
              <div className="flex flex-col items-center justify-center md:gap-y-8 gap-y-4">
                <Image
                  src={img12}
                  alt="De Orion Mall Residential Apartments"
                  title="De Orion Mall Residential Apartments"
                />
                <Image
                  src={img13}
                  alt="De Orion Mall Commercial Shops"
                  title="De Orion Mall Commercial Shops"
                />
                <Image
                  src={img14}
                  alt="De Orion Mall Food Court"
                  title="De Orion Mall Food Court"
                />
                <Image
                  src={img15}
                  alt="De Orion Mall Kiosks"
                  title="De Orion Mall Kiosks"
                />
                <Image
                  src={img16}
                  alt="De Orion Mall smart shops"
                  title="De Orion Mall Smart Shops"
                  className="mb-6"
                />
              </div>
            </section>

            {/* Conclusion */}
            <section className="my-4">
              <h2 className="text-3xl font-bold mt-5">Conclusion</h2>
              <p className="pb-6">
                De Orion Mall in Gulgasht Multan stands as a transformative
                project that blends luxury living with vibrant commercial
                opportunities. Strategically positioned in a highly accessible
                area, it offers both residents and investors a unique experience
                through its modern design, upscale amenities, and prime location
                near essential landmarks. With the backing of Orion Builders
                Pvt. Ltd. and MDA approval, De Orion Mall ensures quality,
                security, and lasting value. This landmark development promises
                to elevate the lifestyle and business landscape of Multan,
                making it an ideal destination for those seeking an exceptional
                blend of convenience, comfort, and opportunity.
              </p>
              <p className="pb-6">
                Contact IES Marketing or visit the office for more details and
                better guidance. We will find the best housing society in
                Pakistan for you that fulfills the requirements of a dream
                house. We deal in many other popular housing schemes, including{" "}
                <Link
                  href={"/smart-housing/"}
                  className="text-blue-500 hover:underline"
                >
                  Smart Housing Multan
                </Link>
                ,{" "}
                <Link
                  href={"/adams-housing//"}
                  className="text-blue-500 hover:underline"
                >
                  Adams Housing Multan
                </Link>
                , Multan Central,{" "}
                <Link
                  href={"/royal-swiss/"}
                  className="text-blue-500 hover:underline"
                >
                  Royal Swiss
                </Link>
                ,{" "}
                <Link
                  href={"/royal-orchard-multan/"}
                  className="text-blue-500 hover:underline"
                >
                  Royal Orchard
                </Link>
                ,{" "}
                <Link
                  href={"/dha-multan/"}
                  className="text-blue-500 hover:underline"
                >
                  DHA Multan
                </Link>
                ,{" "}
                <Link
                  href={"/wapda-town//"}
                  className="text-blue-500 hover:underline"
                >
                  Wapda Town
                </Link>
                , and{" "}
                <Link
                  href={"/citi-housing-multan/"}
                  className="text-blue-500 hover:underline"
                >
                  Citi Housing Multan
                </Link>
                . You can reach out to our team for bookings and suggestions
                related to investment.
              </p>
            </section>

            {/* FAQS */}
            <section className="my-4">
              <h2 className="text-3xl font-bold">FAQS</h2>

              <h3 className="text-xl font-semibold mt-3 text-start">
                Where is De Orion Mall Gulgasht Multan located in Multan?
              </h3>
              <p className="text-[15px] sm:text-lg leading-relaxed">
                De Orion Mall is strategically located in Gulgasht Colony, one
                of Multan&apos;s most vibrant and sought-after areas. Positioned near
                popular landmarks like Bahauddin Zakariya University, Multan
                Fort, and Nishtar Medical University, the mall offers a central
                spot ideal for both residential and commercial pursuits.
              </p>

              <h3 className="text-xl font-semibold mt-3 text-start">
                Who is the developer of De Orion Mall Gulgasht Multan?
              </h3>
              <p className="text-[15px] sm:text-lg leading-relaxed">
                The developer of De Orion Mall in Gulgasht, Multan, is Orion
                Builders Pvt. Ltd., a reputable real estate company. Orion Group
                is recognized for its commitment to modern design, sustainable
                construction, and creating vibrant community spaces, making De
                Orion Mall a premier addition to Multan&apos;s skyline.
              </p>

              <h3 className="text-xl font-semibold mt-3 text-start">
                Is De Orion Mall Gulgasht Multan legal?
              </h3>
              <p className="text-[15px] sm:text-lg leading-relaxed">
                Yes, De Orion Mall in Gulgasht, Multan, is a legal project with
                full approval from the Multan Development Authority (MDA). This
                certification ensures that the mall complies with all regulatory
                standards, providing security and peace of mind for investors
                and residents. The MDA approval reinforces De Orion Mall&apos;s
                credibility as a safe and reliable investment.
              </p>

              <h3 className="text-xl font-semibold mt-3 text-start">
                What investment opportunities are offered by De Orion Mall,
                Multan?
              </h3>
              <p className="text-[15px] sm:text-lg leading-relaxed">
                De Orion Mall in Gulgasht, Multan, offers diverse investment
                opportunities, including high-end retail spaces, modern office
                units, and luxurious residential apartments. The mall&apos;s prime
                location in a busy commercial area enhances the potential for
                profitable returns, making it an ideal spot for retailers,
                business owners, and investors alike.
              </p>
            </section>

            <h2 className="text-3xl font-bold">Disclaimer</h2>
            <p className="pb-6">
              <span className="font-bold">Meta-Description:</span> De Orion Mall
              Multan is a remarkable new development located in the vibrant
              center of Multan. It offers a unique blend of luxurious
              residential apartments and modern retail spaces.
            </p>
          </div>
        </div>
      </div>
      <OurProjects showHead={false} heading="Our Other Real Estate Projects" />
    </div>
  );
};

export default De_Orion_Mall_Multan;
