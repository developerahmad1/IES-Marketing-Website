import React, { useEffect, useState } from "react";
import img1 from "../public/royal orchad 1.jpg";
import img2 from "../public/royal orchad 2.jpg";
import img4 from "../public/royal orchad 4.jpg";
import img5 from "../public/royal orchad 5.jpg";
import img6 from "../public/royal orchad 6.jpg";
import img7 from "../public/royal orchad 7.jpg";
import img8 from "../public/royal orchad 8.jpg";
import img9 from "../public/royal orchad 9.jpg";
import img10 from "../public/royal orchad 10.jpg";
import img11 from "../public/royal orchad 11.jpg";
import img12 from "../public/royal orchad 12.jpg";
import img13 from "../public/royal orchad 13.jpg";
import OurProjects from "@/Components/OurProjects";
import { useAppContext } from "../Context/AppContext";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";

const RoyalOrchad = () => {
  const { openLeadpoup } = useAppContext();
  useEffect(openLeadpoup, []);

  const images = [
    img1,
    img2,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
    img13,
  ];
  const altNames = [
    "Royal Orchard Fountain",
    "Royal Orchard commercial Area",
    "royal Orchad Masjid",
    "Royal Orchad mnodern Architecture",
    "Royal Orchard garden",
    "Royal Orchard Play Ground",
    "Main entrance",
    "Royal Orchard main boulevard",
    "Royal Orchard Greener Environment",
    "Royal Orchard Garden",
    "Royal Orchard Park",
    "Royal Orchard Wide Carpeted roads",
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

  console.log(img1);
  return (
    <>
      <Head>
        <title>Royal Orchard Multan - IES Marketing</title>
        <meta
          name="keywords"
          content="Royal Orchard, Royal Orchard Multan, Habib Rafiq PVT, Best Societies in Multan, Pakistan Real Estate, Real Estate Investment"
        />
        <meta
          name="description"
          content="Royal Orchard Multan, developed by HRL Group, provides a luxurious and comfortable lifestyle.  It has 4000 Kanal land area that is approved by MDA."
        />
      </Head>

      <div>
        <header className="mb-14">
          <div
            className="w-full bg-center bg-cover"
            style={{
              backgroundImage: "url('/royal orchad 1.jpg')",
              height: "100vh",
            }}
          >
            <div className="flex items-center justify-center w-full h-full bg-gray-900 bg-opacity-[0.7] py-12">
              <div className="text-center">
                <div className="container px-4 mx-auto">
                  <div className="max-w-4xl mx-auto text-center">
                    <h1 className="mt-8 mb-6 text-4xl lg:text-5xl font-bold text-gray-100">
                      Royal Orchard Multan – Premier Destination for Modern
                      Living
                    </h1>
                    <p className="max-w-4xl mx-auto mb-10 text-lg text-center text-gray-300">
                      Royal Orchard Multan provides a luxurious and comfortable
                      lifestyle in the fast-growing city of South Punjab with
                      modern infrastructure, including underground electricity,
                      wide roads, and a sewerage system, and follows
                      international community standards.
                    </p>
                    <div onClick={openLeadpoup}>
                      <a
                        className="inline-block w-full md:w-auto mb-4 md:mr-6 py-5 px-8 text-sm font-bold uppercase border-2 border-transparent bg-gray-200 rounded hover:bg-gray-100 text-gray-800 transition duration-200"
                        href="https://wa.me/923338400106?text=Hi.%20Sir%20I%20am%20interested%20in%20Royal%20Orchard.%20Can%20get%20More%20Information%20About%20it%20?"
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

        {/* more details */}
        <div className="bg-white text-black text-justify min-h-screen px-4 md:px-20">
          <div className="max-w-4xl mx-auto">
            {/* Introduction Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4">Introduction</h2>
              <p className="text-lg leading-relaxed">
                Royal Orchard Multan provides a luxurious and comfortable
                lifestyle in the fast-growing city of South Punjab. It offers
                various residential and commercial plots with modern
                infrastructure, including underground electricity, wide roads,
                and a sewerage system, and follows international community
                standards. This society features numerous amenities and provides
                a lucrative investment opportunity. Royal Orchard Multan has
                4000 Kanal land area divided into two main phases and several
                blocks.
              </p>
            </section>

            {/* History */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4 text-start">
                Royal Orchard Multan Developer History and Owner
              </h2>
              <p className="text-lg leading-relaxed">
                Royal Orchard Multan is a royal project of Habib Rafiq Private
                Limited (HRL Group) and Royal Developers and Builders Pvt.
                Limited. Both developers worked on this housing project with
                strong dedication and incorporated digitally smart features to
                make it one of the most successful projects in Multan City.
              </p>
            </section>

            {/* Habib Rafiq Private Limited */}
            <section className="mb-12">
              <h3 className="text-2xl font-bold mb-4 text-start">
                Habib Rafiq Private Limited
              </h3>
              <p className="text-lg leading-relaxed">
                Habib Rafiq Pvt. Limited is a well-established developer that
                has delivered many successful projects in Pakistan. It is known
                for its significant contributions to the real estate,
                infrastructure, and development sectors. Its diverse portfolio
                includes large-scale infrastructure projects, housing
                developments, and commercial projects. Moreover, HRL Group is an
                ISO 9001-certified developer focusing on quality work and
                incorporating innovation in construction and development.
                Furthermore, it has completed various commercial projects,
                including shopping malls, office complexes, etc. Some of their
                remarkable housing projects are:
              </p>
              <ul className="list-disc ml-5 text-lg leading-relaxed">
                <li>Royal Swiss Housing Multan</li>
                <li>Creek Vista Tower</li>
                <li>Capital Smart City</li>
                <li>Lahore Smart City</li>
                <li>Royal Pearl Enclave DG Khan</li>
                <li>Multan International Airport</li>
              </ul>
            </section>

            {/* Royal Developers and Builders Pvt. Limited */}
            <section className="mb-12">
              <h3 className="text-2xl font-bold mb-4 text-start">
                Royal Developers and Builders Pvt. Limited
              </h3>
              <p className="text-lg leading-relaxed">
                Royal Developers is a reputable and trustworthy real estate
                developer known for innovative housing projects across Pakistan.
                It is a sub-group of Habib Rafiq Pvt. Limited and provide
                well-planned communities. It meets the standards of quality and
                design for a community. Its skilled and professional team of
                engineers and architects tries to provide excellent living
                standards to residents. Royal Developers strives to create value
                for investors, clients, and communities. They aimed to provide
                world-class amenities in their upcoming projects in Lahore,
                Islamabad, Karachi, Peshawar, Rahim Yar Khan after successful
                projects listed below:
              </p>
              <ul className="list-disc ml-5 text-lg leading-relaxed">
                <li>Royal Orchard Sahiwal</li>
                <li>Royal Orchard Sargodha</li>
                <li>Royal Orchard Multan</li>
              </ul>
            </section>

            {/* NOC Status */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4 text-start">
                Royal Orchard Multan NOC Status
              </h2>
              <p className="text-lg leading-relaxed">
                Some Royal Orchard Multan is an MDA-approved society that has
                received NOC from the Multan Development Authority. This
                certification ensures that the development complies with local
                regulations and standards. According to the official document,
                the land area of 4000 Kanal of Royal Orchard has received No
                Objection Certificate. This approval validates the legitimacy of
                the project and allows the developer to commence the
                construction activities. Following the approval of NOC, Royal
                Orchard Multan started extensive infrastructure development at a
                fast rate.
              </p>
            </section>

            {/* development Status */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4 text-start">
                Royal Orchard Multan Development status
              </h2>
              <p className="text-lg leading-relaxed">
                Royal Orchard Multan has achieved several milestones in its
                development after getting NOC approval from higher developmental
                authorities. This housing society has two main phases, general
                and overseas, which are further subdivided into several blocks.
                The development in the general block is nearing completion, and
                almost all plots are sold on installment and cash payment. The
                grey structure of the community center is almost ready, and the
                construction process is expected to start soon. Royal villas,
                apartments, and commercial centers are in Phase I, while the
                residents can enjoy a luxurious lifestyle through modern
                amenities, like wide roads, 24x7 security systems, shopping
                malls, etc.
              </p>
              <p className="text-lg leading-relaxed">
                However, almost 60% to 65% of development is complete in Phase
                II, and the construction process is still ongoing. Basic
                infrastructure is developed in the second phase, including
                roads, underground utilities, and green spaces or parks are
                established. The development of advanced facilities, such as
                hospitals, malls, recreational areas, etc., is also underway.
                These developers are committed to developing the society within
                the planned time frame. This project is right on track to become
                the premier residential and commercial hub in the region. It
                offers modern infrastructure, luxurious amenities, and a secure
                living environment.
              </p>
            </section>

            {/* Main Features */}
            <section className="mb-12">
              <h2 className="text-3xl text-start font-bold mb-4">
                Key Features of Royal Orchard Multan
              </h2>
              <p className="text-lg leading-relaxed">
                The Master Plan of the Royal Orchard Multan ensures that the
                residents get all facilities and make a community productive.
                Some key features or amenities of the Royal Orchard Multan are:
              </p>
              <ul className="list-disc ml-5 text-lg leading-relaxed">
                <li>Al-Mustafa Jamia Mosque</li>
                <li>Royal Homes & Villas</li>
                <li>Majestic Entrance</li>
                <li>Main Boulevard</li>
                <li>CCTV Monitoring</li>
                <li>Sports</li>
                <li>Smart Homes</li>
                <li>Mini-golf Club</li>
                <li>24x7 Security System</li>
                <li>Food Court</li>
                <li>Shopping Plazas</li>
                <li>Cineplex Cinemas</li>
                <li>Smart Waste Management System</li>
              </ul>
            </section>

            {/* Location */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4 text-start">
                Royal Orchard Multan Location
              </h2>
              <p className="text-lg leading-relaxed">
                Royal Orchard Multan is located at a Multan Public School Road
                that can also be accessed from two other roads, including
                Mattital Road and Shakh-e-Madina Road, near Northern Bypass
                Chowk. Its central location makes it easily accessible to
                society and worth investment for investors. It is present close
                to essential services, such as schools, shopping centers, and
                recreational facilities. Located in a growing urban area, this
                society offers residents access to the amenities of city life.
              </p>
            </section>

            {/* Accessibiulities */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4 text-start">
                Royal Orchard Multan Accessibilities
              </h2>
              <p className="text-lg leading-relaxed">
                Royal Orchard Multan society can be accessed via these routes:
              </p>
              <ul className="list-disc ml-5 text-lg leading-relaxed">
                <li>Around 2 minutes drive from Southern Bypass Chowk</li>
                <li>Around 3 minutes from Wapda Town Phase I</li>
                <li>Around 4 minutes drive from Pak Fertilizer</li>
                <li>
                  Around 5 minutes drive from Bahaudin Zakariya University
                </li>
                <li>Around 6 minutes drive from Buch Executive Villas</li>
                <li>Around 9 minutes from Nishter Hospital</li>
                <li>
                  Around 10 minutes drive from Multan International Airport{" "}
                </li>
                <li>Around 12 minutes drive from Clock Tower</li>
              </ul>
            </section>

            {/* NearBy LandMarks */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4 text-start">
                Royal Orchard Multan Nearby Landmarks
              </h2>
              <p className="text-lg leading-relaxed">
                Popular places and nearby landmarks of Royal Orchard Multan are:
              </p>
              <ul className="list-disc ml-5 text-lg leading-relaxed">
                <li>Women&apos;s University Multan Mattital Campus</li>
                <li>Gymkhana & Sports Complex</li>
                <li>Pak Arab Fertilizer</li>
                <li>Multan Public School</li>
                <li>Wapda Town Phase II</li>
                <li>Head Muhammad Wala </li>
                <li>Dream Garden</li>
                <li>Pace City</li>
                <li>Cantt Avenue</li>
                <li>Judicial Complex</li>
                <li>Railway Station</li>
                <li>Buch Villas</li>
                <li>Bakhtawar Amin Medical & Dental College/Hospital</li>
              </ul>
            </section>

            {/* Blocks */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4 text-start">
                Royal Orchard Multan Blocks
              </h2>
              <p className="text-lg leading-relaxed">
                Royal Orchard Multan is divided into two main phases. The first
                phase has varying plot cuttings for residential or commercial
                purposes. The plots of 5, 10, and 12 Marla and 1 or 2 Kanal are
                available in Phase 1. It is a well-developed phase of the
                society that is 70% to 80% occupied by residents. Also,
                commercial plots cuttings of 2, 4, 6, 8, and 10 Marla plots are
                available on cash payment. This phase is further divided into
                seven blocks listed below:
              </p>
              <ul className="list-disc ml-5 text-lg leading-relaxed">
                <li>Block A</li>
                <li>Block B</li>
                <li>Block C</li>
                <li>Block D</li>
                <li>Block E</li>
                <li>Block F</li>
                <li>Block G</li>
              </ul>
              <p className="text-lg leading-relaxed">
                However, the second phase is also a combination of modernism and
                serenity and is currently undergoing steady development. Its
                entrance gate is just opposite the Women&apos;s University
                Mattital campus. In phase II, plots of 5, 6, 7, and 10 Marla or
                1 Kanal are available in easy installments and cash payment.
              </p>
            </section>

            {/* Paymemnt Plans */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4 text-start">
                Royal Orchard Multan Payment plan
              </h2>
              <p className="text-lg leading-relaxed">
                There are no plots available on installments in Royal Orchard
                Multan. You can get a plot on cash payment. For further details,
                contact{" "}
                <Link href="/" className="text-blue-500 hover:underline">
                  IES Marketing
                </Link>{" "}
                team.
              </p>
            </section>

            {/* conclusion */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4 text-start">Conclusion</h2>
              <p className="text-lg leading-relaxed">
                Royal Orchard Multan stands as a testament to modern living and
                quality development. Developed by the HRL Group, this project
                embodies a perfect blend of luxury and convenience. It is one of
                the safest, sustainable, and exclusive society in Multan due to
                its prime location, world-class amenities, and full-proof
                security system. It is not just a place to live, but a gated
                community fostering a high standard of living. For more
                information, contact IES Marketing and visit the office to seek
                guidance from an expert team.
              </p>
            </section>

            {/* FAQS */}
            <section className="mb-12">
              <h3 className="text-3xl font-bold mb-4">FAQS</h3>
              <h3 className="text-xl font-semibold mt-5 text-start">
                Who is the developer of Royal Orchard Multan?
              </h3>
              <p className="text-[15px] sm:text-lg leading-relaxed">
                The developers of Royal Orchard Multan Society are Habib Rafiq
                Pvt. Limited and Royal Developers. They have a significant
                reputation for developing high-quality residential and
                commercial projects nationwide. Both are known for their
                residential, commercial, and infrastructural development
                expertise. HRL Group is a name of trust in the real estate
                industry, and its housing projects ensure success.
              </p>
              <h3 className="text-xl font-semibold mt-5 text-start">
                What amenities are present in Royal Orchard Multan?
              </h3>
              <p className="text-[15px] sm:text-lg leading-relaxed">
                Royal Orchard Multan provides residents with all basic to
                advanced amenities and is considered a lavish society with a
                complete residential scheme. It provides an eco-friendly
                environment, water resources, health facilities, mosques,
                community centers, etc. Other features include an education
                complex, high-quality road infrastructure, a clubhouse, a
                boundary wall, and much more. It is a golden opportunity for
                Multan locals to invest and get residential plots in Royal
                Orchard Multan.
              </p>
              <h3 className="text-xl font-semibold mt-5 text-start">
                Is Royal Orchard Multan an affordable society?
              </h3>
              <p className="text-[15px] sm:text-lg leading-relaxed">
                Royal Orchard Multan is thought to be an expensive society,
                which is somehow true for phase I because the development
                process is near completion. However, plots in phase II are still
                available in easy installments that can be considered by people
                with a low budget. It is worth the investment as this gated
                community provides a luxurious lifestyle at cost-effective
                rates.
              </p>
              <h3 className="text-xl font-semibold mt-5 text-start">
                Is Royal Orchard Multan legal society?{" "}
              </h3>
              <p className="text-[15px] sm:text-lg leading-relaxed">
                Royal Orchard Multan is a legally-approved society as it has
                received ‘No Objection Certificate’ from developmental
                authorities in a short time due to its reputable developers.
                There is no fraud in this housing project and your amount will
                be in safe hands. This project ensures the satisfaction of
                clients and you will get all details on visit to the office.
              </p>
              <h3 className="text-xl font-semibold mt-5 text-start">
                Is Royal Orchard Multan worth investment?
              </h3>
              <p className="text-[15px] sm:text-lg leading-relaxed">
                Royal Orchard Multan is worth investment project because it is
                location at a prime location where you can get all basic to
                advanced facilities at a close distance. Multan public school,
                women university Multan, and other education, recreational, or
                healthcare facilities are available for residents. Moreover, it
                is also good to consider from investment or commercial purposes
                even if you do not want to get a residential plot there.
              </p>
              <h3 className="text-xl font-semibold mt-5 text-start">
                What is the location of Royal Orchard Multan?
              </h3>
              <p className="text-[15px] sm:text-lg leading-relaxed">
                Royal Orchard Multan has two gates; one is present on the
                Mattital road while the other is on Shakh-e-Madina road. It
                takes around 4 to 5 minutes to reach the society from Pak Arab
                Fertilizer and Bahaudin Zakariya University. From Nishter
                hospital and Multan airport, it will take around 9 to 10 minutes
                to reach Royal Orchard society.
              </p>
            </section>
          </div>
        </div>

        {/* Images */}
        <section className="mb-12 px-2 sm:px-5">
          <h3 className="text-3xl font-bold mb-4 text-center pb-4">
            Images Of Royal Orchad Multan
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
          <h2 className="text-3xl font-bold mb-4 text-start">Disclaimer</h2>
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

export default RoyalOrchad;
