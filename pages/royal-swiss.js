import React, { useEffect, useState } from "react";
// import "../CSS/SmartHousing.css";
import img1 from "../public/royalswiss1.webp";
import img2 from "../public/royalswiss2.webp";
import img3 from "../public/royalswiss3.webp";
import img4 from "../public/royalswiss4.webp";
import img5 from "../public/royalswiss5.webp";
import img6 from "../public/royalswiss6.webp";
import img7 from "../public/royalswiss7.webp";
import img8 from "../public/royalswiss8.webp";
import paymentPlan from "../public/royal swiss payment plan 2.jpg";
import paymentPlan2 from "../public/royal swiss payment plan 2.jpg";
import OurProjects from "../Components/OurProjects";
import { useAppContext } from "../Context/AppContext";
import Head from "next/head";
import Image from "next/image";

const RoyalSwiss = () => {
  const { openLeadpoup } = useAppContext();
  useEffect(openLeadpoup, [openLeadpoup]);

  const images = [img1, img2, img3, img4, img5, img6, img7, img8];
  const altNames = [
    "Royal Swiss main Enterance",
    "Royal Swiss Drone view",
    "Royal Swiss pool area",
    "Royal Swiss pool area",
    "Royal Swiss pool area",
    "Royal Swiss 3D view",
    "Royal Swiss Play area",
    "Royal Swiss eco friendly environment",
  ];

   // State to track loading state for each image
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
    <>
      <Head>
        <title>Royal Swiss Multan - IES Marketing</title>
        <meta
          name="keywords"
          content="Royal Swiss Multan, Royal Swiss Housing Society, HRL group, Best Societies in Multan, Pakistan Real Estate, Real Estate Investment"
        />
        <meta
          name="description"
          content="Royal Swiss Multan, developed by HRL Group, is a latest project aimed to redefine urban living or revolutionize the standards of housing in the City of Saints."
        />
        <link rel="canonical" href="https://www.iesmkt.com/royal-swiss/" />
      </Head>

      <div>
        {/* Header */}
        <header className="mb-14">
          <div
            className="w-full bg-center bg-cover"
            style={{
              backgroundImage: `url('/royalswiss1.webp')`, // Using the imported image
            }}
          >
            <div className="flex items-center justify-center w-full h-full bg-gray-900 bg-opacity-[0.7] py-12">
              <div className="text-center">
                <div className="container px-4 mx-auto">
                  <div className="max-w-4xl mx-auto text-center">
                    {/* <span className="text-gray-200 font-semibold uppercase tracking-widest">IES Marketing</span> */}
                    <h1 className="mt-8 mb-6 text-4xl lg:text-5xl font-bold text-gray-100">
                      Royal Swiss Housing Multan – A Luxurious Enclave
                    </h1>
                    <p className="max-w-3xl mx-auto mb-10 text-lg text-gray-300">
                      Royal Swiss Housing is the latest project in Multan aimed
                      to revolutionize the standards of housing in the city.
                    </p>
                    <div onClick={openLeadpoup}>
                      <a
                        className="inline-block w-full md:w-auto mb-4 md:mr-6 py-5 px-8 text-sm font-bold uppercase border-2 border-transparent bg-gray-200 rounded hover:bg-gray-100 text-gray-800 transition duration-200"
                        href="https://wa.me/923338400106?text=Hi.%20Sir%20I%20am%20interested%20in%20Royal%20Swiss.%20Can%20get%20More%20Information%20About%20it%20?"
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
              <h2 className="text-3xl font-bold mb-4 text-start">
                Introduction
              </h2>
              <p className="text-lg leading-relaxed">
                Royal Swiss Housing is the latest project in Multan aimed to
                revolutionize the standards of housing in the city. This project
                promises to redefine urban living by providing a luxurious
                lifestyle, superior amenities, and a serene environment with
                modernity. This gated community features a 220-foot main
                boulevard and provides a wide range of residential options. It
                assures to provide a safe and secure space for families equipped
                with state-of-the-art facilities, including community centres,
                parks, commercial areas, fitness centres, etc. It is developing
                at a faster pace, and developmental standards are exemplary,
                featuring efficient drainage systems, wide roads, and reliable
                utility services.
              </p>
              {/* <p className='text-lg leading-relaxed'>
                        </p> */}
            </section>

            {/* Smart Housing Developer History and Owners Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4 text-start">
                Royal Swiss Housing Developer History and Owners
              </h2>
              <p className="text-lg leading-relaxed">
                Since 1962, HRL Group has provided services in different areas,
                like power and energy, buildings, oil and gas, airports and
                aviation, roads, housing, infrastructure, etc. It has a track
                record of successfully delivering notable projects in different
                cities of Pakistan and internationally. Each project reflects
                HRL&apos;s emphasis on superior craftsmanship and innovation in
                architectural design. Some of their popular projects are:
              </p>
            </section>

            {/* HRL Projects */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4 text-start">
                Successfully delivered HRL (Pvt.) projects
              </h2>
              <p className="text-lg leading-relaxed">
                Since 1962, HRL Group has provided services in different areas,
                like power and energy, buildings, oil and gas, airports and
                aviation, roads, housing, infrastructure, etc. It has a track
                record of successfully delivering notable projects in different
                cities of Pakistan and internationally. Each project reflects
                HRL&apos;s emphasis on superior craftsmanship and innovation in
                architectural design. Some of their popular projects are:
              </p>
              <ul className="text-lg leading-relaxed">
                <li>Laal Peer Plant</li>
                <li>Laal Peer Plant</li>
                <li>Ml-Motorway (Islamabad to Peshawar)</li>
                <li>Kot Adu Power Plant</li>
                <li>Layyah Taunsa Bridge</li>
                <li>Fort Munro Steel Bridge</li>
                <li>Multan International Airport</li>
                <li>Parco Qasba Gujrat</li>
                <li>Capital Smart City</li>
                <li>Lahore Smart City</li>
                <li>Stock Exchange Tower, Islamabad</li>
                <li>Bahria Town, Garden City</li>
                <li>Tricon Village, Lahore</li>
              </ul>
            </section>

            {/* Main Features of Smart Housing Society Section */}
            {/* <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-4">Main Features of Smart Housing Society</h2>
                        <p className="text-lg leading-relaxed">
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
                            <li>Smart officer's club</li>
                            <li>Smart surveillance system</li>
                            <li>Green belts</li>
                            <li>Playgrounds</li>
                            <li>Smart street lighting</li>
                            <li>Smart street lighting</li>
                            <li>Commercial hub</li>
                        </p>
                    </section> */}

            {/* NOC status */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4 text-start">
                Royal Swiss Housing NOC Status
              </h2>
              <p className="text-lg leading-relaxed">
                Royal Swiss Housing recently received approval from the Multan
                Development Authority (MDA) for 700 Kanal land area in the month
                of June and started offering plots on easy installments. This
                approval reaffirms their commitment and dedication to providing
                high-quality living spaces and meeting sustainability, safety,
                and urban planning standards. The construction process has
                started, and the project promises a modern community with
                top-tier amenities. The owners aimed to elevate the quality of
                life and set new standards in urban living. Interested
                candidates can get residential and commercial plots by becoming
                a member of the Royal Swiss Housing.
              </p>
            </section>

            {/* Development status */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4 text-start">
                Royal Swiss Housing Development Status
              </h2>
              <p className="text-lg leading-relaxed">
                This housing project aimed to provide an underground electricity
                set up to improve the living experience in the near future. This
                setup will provide reliable or safe power distribution. Their
                plans to develop quality infrastructure and swift developmental
                process are clear indicators of their capability to deliver a
                prestigious community to people. Furthermore, the sports complex
                is currently in the process of development, and basic utilities,
                like water, gas, and electricity, will be provided in the coming
                years. The current stage of Royal Swiss Housing exemplifies a
                thoughtful approach to development, aiming to create a
                harmonious blend of infrastructure, green spaces, and amenities.
              </p>
            </section>

            {/* Key hilights of Royal Swiss */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4 text-start">
                Key Highlights of Royal Swiss Housing
              </h2>
              <p className="text-lg leading-relaxed">
                Royal Swiss Housing will offer a wide range of features designed
                to enhance the quality of life. The notable features include:
              </p>
              <ul className="list-disc ml-5 text-lg leading-relaxed">
                <li>Mosque</li>
                <li>Parks and gym</li>
                <li>Sewerage line</li>
                <li>Education facilities</li>
                <li>Community Center</li>
                <li>Sports Complex</li>
                <li>Water filtration plant</li>
                <li>Eco-friendly society</li>
                <li>Street lights</li>
                <li>Golf course</li>
                <li>Carpeted roads</li>
                <li>40-feet roads</li>
                <li>Basic utilities</li>
                <li>220-feet main boulevard</li>
                <li>Full-proof Security system</li>
                <li>Healthcare facilities</li>
              </ul>
            </section>

            {/* Location */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4 text-start">
                Royal Swiss Housing Location
              </h2>
              <p className="text-lg leading-relaxed">
                Royal Swiss Housing Multan is situated at a prime location on
                Bahawalpur Bypass near Old Shujabad Road and Billiwala
                interchange. It can be accessed by covering a distance of 8km
                from Billiwala Interchange or Shah Shams Tabrez Interchange. It
                lies in the proximity of major routes, facilitating easy travel
                across Multan. It will take only a few minutes to reach the
                location of Royal Swiss Housing from popular spots of Multan
                City.
              </p>
            </section>

            {/* Map Location */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4 text-start">
                Location of Royal Swiss
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

            {/* Accessbilities */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4 text-start">
                Royal Swiss Housing Accessibilities
              </h2>
              <p className="text-lg leading-relaxed">
                Royal Swiss Housing is conveniently accessible from popular
                landmarks in Multan. Its prime location facilitates smooth
                commuting and easy options to travel to neighboring cities
              </p>
              {/* <p className="text-lg leading-relaxed"></p> */}

              <ul className="list-disc text-lg leading-relaxed">
                <li>Located on Bahawalpur Bypass</li>
                <li>Almost 6 minutes from Vehari Road</li>
                <li>About 10 minutes from Southern Bypass</li>
                <li>Almost 14 minutes from Piran Ghaib Road</li>
                <li>Almost 8km from Billiwala Interchange</li>
                <li>In close proximity to M4-Motorway (Multan-Faisalabad)</li>
                <li>Quick connectivity to Sui-gas Road</li>
              </ul>
            </section>

            {/* Popular Landmarks and places */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-start mb-4">
                Popular Landmarks and Places near Royal Swiss Housing
              </h2>
              <p className="text-lg leading-relaxed">
                Royal Swiss Housing is strategically positioned in the middle of
                many important landmarks and key locations in Multan City.
                Reputable educational institutions, transportation hubs,
                recreational areas, and historical sites are in the vicinity of
                this housing project to fulfill the needs of the residents.
              </p>
              {/* <p className="text-lg leading-relaxed"></p> */}

              <ul className="list-disc ml-5 text-lg leading-relaxed">
                <li>Multan International cricket stadium</li>
                <li>Allied College of Health Sciences</li>
                <li>Shah Rukn-e-alam Tomb</li>
                <li>Shah Rukn-e-alam Tomb</li>
                <li>Shah Rukn-e-Alam Colony</li>
                <li>Multan Larri Adda</li>
                <li>Jinnah Park</li>
                <li>Daewoo Terminal</li>
                <li>Zaitoon Garden Restaurant</li>
                <li>Muslim school and college</li>
                <li>Wing&apos;s Fitness Gym</li>
                <li>Maharana Uday Singh&apos;s playground</li>
                <li>Haram gate</li>
                <li>M4 motorway (Multan-Faisalabad)</li>
              </ul>
            </section>

            {/* Payment Plans */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4 text-start">
                Royal Swiss Housing Payment Plan{" "}
              </h2>
              <p className="text-lg leading-relaxed">
                Royal Swiss Housing offers a 5-year payment plan, providing an
                affordable opportunity to potential investors and residents.
                With competitive pricing and favorable terms, the payment plan
                allows for manageable monthly or half-year installment options
                to complete the total cost of the plot. The plots of 3.5, 5, 7,
                or 10 Marla and 1 or 2 Kanal are available in the Royal Swiss
                Housing project. In addition, commercial plots of 4 and 8 Marla
                can be purchased. You have to pay 10% of the total amount for
                booking and 10% for plot confirmation. After confirmation of the
                file, 10% of the amount needs to be paid at the time of
                balloting and another 10% for possession. Furthermore, you have
                to pay 58 monthly installments and nine bi-annual installments
                in this time frame.{" "}
              </p>
              <div className="flex justify-start items-start mt-10 gap-3 flex-wrap">
                <Image
                  src={paymentPlan}
                  alt="Royal Swiss Payment Plan"
                  className="mx-auto w-full sm:max-w-[400px] border rounded-xl transition-all duration-[0.5s] hover:border-black hover:shadow-2xl"
                />
                <Image
                  src={paymentPlan2}
                  alt="Royal Swiss Payment Plan"
                  className="mx-auto w-full sm:max-w-[400px] border rounded-xl transition-all duration-[0.5s] hover:border-black hover:shadow-2xl"
                />
              </div>
            </section>

            {/* Conclusion */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4 text-start">Conclusion</h2>
              <p className="text-lg leading-relaxed">
                Royal Swiss Housing is one of the big housing projects in Multan
                City that has established new benchmarks of residential
                excellence. It promotes a vibrant community lifestyle, fostering
                a sense of belonging among society&apos;s residents. It also
                emphasizes green living; that&apos;s why parks or landscape
                gardens are included in the society&apos;s design to provide a
                refreshing escape from the urban hustle and bustle. Contact IES
                Marketing and visit the office for further details and guidance
                on the project. Get Your Dream Home!
              </p>
            </section>

            {/* FAQS */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4 text-start">FAQS</h2>
              <h3 className="text-xl font-semibold mt-3 text-start">
                Where is Royal Swiss Housing located in Multan?
              </h3>
              <p className="text-[15px] sm:text-lg leading-relaxed">
                Royal Swiss Housing is located on Bahawalpur Bypass Road near
                Old Shujabad Road, offering a prime residential opportunity. It
                is easily accessible via an approximate 8km drive from either
                Billiwala interchange or lies in close proximity to M4-Motorway,
                Sui-gas Road, and Vehari Road.
              </p>
              <h3 className="text-xl font-semibold mt-5 text-start">
                What amenities are offered in Royal Swiss Housing?
              </h3>
              <p className="text-[15px] sm:text-lg leading-relaxed">
                Royal Swiss Housing Project offers a range of amenities to
                enhance the lifestyle of residents. It features parks, green
                spaces for recreation, a modern security system, and community
                centers. It also provides convenient access to essential
                services, like healthcare or education facilities. This housing
                project also features dedicated areas for sports or leisure
                activities, ensuring an enjoyable living experience.
              </p>
              <h3 className="text-xl font-semibold mt-5 text-start">
                Is the Royal Swiss Housing Multan legally approved?
              </h3>
              <p className="text-[15px] sm:text-lg leading-relaxed">
                Royal Swiss Housing is a legally approved project by legal
                authorities, which ensures that the project meets regulatory
                standards. NOC approval helped gain the confidence and trust of
                buyers in society because it made the investment process clear
                and legitimate. This housing society complies with the laws and
                regulations.
              </p>
              <h3 className="text-xl font-semibold mt-5 text-start">
                Who is the developer of Royal Swiss Housing Multan?
              </h3>
              <p className="text-[15px] sm:text-lg leading-relaxed">
                Habib Rafiq Pvt. Limited is the developer of Royal Swiss
                Housing, which is a well-recognized real estate company known
                for its extraordinary construction or housing projects across
                Pakistan. Mr. Shahid Rafiq, CEO of HRL Group, has also worked on
                international projects and put efforts to make HRL Group a
                reputed company in the real estate industry.{" "}
              </p>
              <h3 className="text-xl font-semibold mt-5 text-start">
                What size plots are available in Royal Swiss Housing Multan?
              </h3>
              <p className="text-[15px] sm:text-lg leading-relaxed">
                Royal Swiss Housing Multan has residential plots of 3.5, 5, 7,
                or 10 Marla and 1 or 2 Kanal that are ready for purchase at a
                payment plan of 5 years. Also, commercial plots of 4 and 8 Marla
                are also available for sale at an affordable plan of monthly,
                quarterly, and yearly installments. You can get plot files after
                paying booking amounts and confirmation amount needs +to be paid
                after 30 days.{" "}
              </p>
              <h3 className="text-xl font-semibold mt-5  text-start">
                Can I buy a plot on cash payment in Royal Swiss Housing Multan?
              </h3>
              <p className="text-[15px] sm:text-lg leading-relaxed">
                On cash payment, you can get a plot in Royal Swiss Housing
                society Multan. You can start construction of houses after
                completion of development in the society, which is in the
                process and gets complete in a few years. Secure your plot on
                installment or cash payment according to your budget and get
                benefit from the piece of property in the near future.
              </p>
            </section>
          </div>
        </div>

        {/* Images */}
        <section className="mb-12 px-2 sm:px-5">
      <h3 className="text-3xl font-bold mb-4 text-center pb-4">
        Images Of Royal Swiss
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
              className={`max-w-full max-h-full object-contain transition-opacity duration-500 ${loading[index] ? 'opacity-0' : 'opacity-100'}`}
              src={src}
              alt={altNames[index]}
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
          <h3 className="text-3xl font-bold mb-4 text-start">Disclaimer</h3>
          <p className="text-xl font-semibold mt-5">
            We collect information from credible and authentic online sources to
            provide up-to-date property details. We make no representations or
            claims about the accuracy of the data. We do not claim liability in
            case of any financial and investment-related losses experienced by
            users. Potential buyers or users are urged to exercise caution and
            take full responsibility for their investment.
          </p>
        </section>

        <OurProjects showHead={false}  heading="Our Other Real Estate Projects"/>
      </div>
    </>
  );
};

export default RoyalSwiss;
