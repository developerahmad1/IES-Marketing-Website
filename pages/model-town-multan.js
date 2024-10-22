import React from "react";
import Head from "next/head";
import { useAppContext } from "@/Context/AppContext";
import Image from "next/image";
import Link from "next/link";
import OurProjects from "@/Components/OurProjects";
// import img2 from

const ModelTownMultan = () => {
  const { openLeadpoup } = useAppContext();
  return (
    <div>
      <Head>
        <title>Model Town Multan - IES Marketing</title>
        <meta
          name="keywords"
          content="Model Town multan, model town blocks, model town, multan real estate, multan property, modle town block A, modle town block B, modle town block C "
        />
        <meta
          name="description"
          content="Model Town Multan is a meticulously designed housing complex that seeks to provide the ideal living environment for families and people looking for high-quality accommodation at a reasonable price."
        />
      </Head>

      <div>
        <header className="mb-1">
          <div
            className="w-full bg-center bg-cover"
            style={{
              backgroundImage: "url('/Model-town.webp')",
              height: "100vh",
            }}
          >
            <div className="flex items-center justify-center w-full h-full bg-gray-900 bg-opacity-[0.8] py-12">
              <div className="text-center">
                <div className="container px-4 mx-auto">
                  <div className="max-w-4xl mx-auto text-center">
                    <h1 className="mt-8 mb-6 text-4xl lg:text-5xl font-bold text-gray-100">
                      Model Town Multan – An Ideal Family Heaven
                    </h1>
                    <p className="max-w-4xl mx-auto mb-10 text-lg text-center text-gray-300">
                      Model Town Multan is a meticulously designed housing
                      complex that seeks to provide the ideal living environment
                      for families and people looking for high-quality
                      accommodation at a reasonable price.
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
            <section className="mb-12">
              {/* Introduction Section */}
              <h2 className="text-3xl font-bold mb-4 mt-4">Introduction</h2>
              <p className="text-lg leading-relaxed">
                Model Town Multan is a meticulously designed housing complex
                that seeks to provide the ideal living environment for families
                and people looking for high-quality accommodation at a
                reasonable price. It is one of Multan&apos;s most popular residential
                areas, thanks to its strategic position and modern amenities.
                Model Town, which focuses on serene yet cheap living, combines
                urban convenience with suburban calm. It is located near the
                Northern Bypass and connects to the Bosan Road. The total land
                area of Model Town Multan is around 99 acres, and there are
                three blocks that provide around 700 plots.
              </p>
            </section>

            <Image
              src="/modeltown-2.webp"
              width={800}
              height={800}
              loading="lazy"
              className="mx-auto"
            />
            {/* History */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4 text-start mt-8">
                Model Town Multan Developer History and Owners
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                A respectable team of developers with a track record of
                completing prosperous residential buildings is behind the
                development of Model Town Multan. The Evacuee Trust Property
                Board (ETPB) and the development department of Multan (MDA)
                cooperated to create the Multan Block A and B of the Model City.
                The developers have remained committed to providing the promised
                facilities on schedule, building with high quality materials,
                and urban planning. ETPB is the owner of 99 acres, which were
                approved by the government in 1999.
              </p>
              <p className="text-lg leading-relaxed">
                The owners of each of the 490 plots have successfully received
                their plots. During these phases, all infrastructure
                developments, including roads, electricity, water supply, and
                sanitation, have been completed. Block C is a self-sustaining
                revenue-generating initiative of MDA, which was started in 2005.
                It includes 226 plots covering an area of 41 acres. This phase
                will also include the completion of landscaping works, including
                the installation of necessary communications and utilities. Both
                investors and end users have expressed a great deal of interest
                in the project because of its well-thought-out layout and
                design, which demonstrates their skill and experience.
              </p>
            </section>

            {/* NOC Status */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4 text-start">
                Model Town Multan NOC Status
              </h2>
              <p className="text-lg leading-relaxed">
                A No Objection Certificate (NOC) is a key element when investing
                in a construction project, and Model Town Multan has received
                NOCs from the necessary development authorities, who confirm
                that the project meets all legal requirements. According to
                sources, the Multan Development Authority (MDA) had approved the
                No Objection Certificate (NOC) for Model Town Multan along with
                all necessary planning permissions in 1999. This approval gives
                investors peace of mind by proving that the project is genuine
                and meets the city&apos;s zoning, safety, and planning standards. For
                complete information, check the official MDA website regarding
                the NOC.
              </p>
            </section>

            {/* development Status */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4 text-start">
                Model Town Multan Development Status
              </h2>
              <p className="text-lg leading-relaxed">
                Model Town Multan is a fully developed residential community
                with all the necessary infrastructure and facilities. The first
                and second phases have been completed, and residents have been
                provided with modern public facilities such as water,
                electricity, and gas, as well as a well-developed sewage
                treatment system. The roads are fully paved, and the lush green
                parks provide a peaceful environment. The development also
                includes a community center, a mosque, and a commercial area to
                meet the daily needs of the residents. All 490 lots in blocks A
                and B have been successfully handed over to owners, and the area
                is thriving as the community continues to grow.
              </p>
              <p className="text-lg leading-relaxed">
                Block C of Model Town project, launched in 2005, has also made
                significant progress. The 41-acre, 226-lot phase is fully
                developed with all utilities and infrastructure in place. The
                completion of roads, water systems, and other basic services
                makes it an attractive area in which to invest and live. The
                overall development reflects the high standards set by the
                Multan Development Authority (MDA) to ensure a comfortable and
                safe living experience for the residents.
              </p>
            </section>

            {/* Main Features */}
            <section className="mb-12">
              <h2 className="text-3xl text-start font-bold mb-4">
                Main Features of Model Town Multan
              </h2>
              <p className="text-lg leading-relaxed">
                Some prominent features of Model Town Multan are:
              </p>
              <ul className="list-disc ml-5 text-lg leading-relaxed">
                <li>Grand Mosque</li>
                <li>Community Centers</li>
                <li>Mosques</li>
                <li>Security facilities</li>
                <li>Modern infrastructure</li>
                <li>Lush green parks</li>
                <li>Utility services</li>
                <li>Medical care</li>
                <li>Wide streets</li>
                <li>Utility services</li>
              </ul>
            </section>

            {/* Location */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4 text-start">
                Location of Model Town Multan
              </h2>
              <p className="text-lg leading-relaxed">
                Model Town Multan boasts a prime location, making it easily
                accessible from different parts of the city. Situated near the
                city&apos;s major commercial and residential hubs, it provides
                excellent connectivity through well-maintained roads. The
                project is located close to Multan Public School Road, making it
                convenient for residents to commute to nearby areas.
              </p>
            </section>
            <Image
              src="/modeltown_3.webp"
              loading="lazy"
              width={500}
              height={500}
              className="mx-auto"
            />
            <p className="text-center">Source : Multan Development Authority</p>

            {/* Accessibiulities */}
            <section className="mb-12 mt-6">
              <h2 className="text-3xl font-bold mb-4 text-start">
                Model Town Multan Accessibilities
              </h2>
              <p className="text-lg leading-relaxed">
                There are many routes to reach Model Town Multan, as it is
                located a few minutes away from popular landmarks.
              </p>
              <ul className="list-disc ml-5 text-lg leading-relaxed">
                <li>Around a 2-minute drive from MPS Road</li>
                <li>Multan International Airport: 15-minute drive</li>
                <li>Multan Cantt Railway Station: 20-minute drive</li>
                <li>Bahauddin Zakariya University (BZU): 10-minute drive</li>
                <li>Nishtar Medical University: 15-minute drive</li>
              </ul>
            </section>

            {/* NearBy LandMarks */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4 text-start">
                Popular Landmarks near Model Town Multan
              </h2>
              <p className="text-lg leading-relaxed">
                Some of the popular landmarks present near Model Town are:
              </p>
              <ul className="list-disc ml-5 text-lg leading-relaxed">
                <li>Zakariya Town</li>
                <li>Multan Public School</li>
                <li>Universal Cinema</li>
                <li>Buch International Hospital</li>
                <li>Metro Mall</li>
                <li>Royal Orchard Multan</li>
                <li>Wapda Town Multan</li>
                <li>Bahauddin Zakariya University</li>
                <li>Chase Up</li>
              </ul>
              <p className="pb-6">
                These accessibilities make Model Town Multan a perfect choice
                for those looking to enjoy the convenience of nearby schools,
                hospitals, shopping centers, and entertainment venues.
              </p>
            </section>

            {/* Blocks */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4 text-start">
                Model Town Multan Blocks
              </h2>
              <p className="text-lg leading-relaxed">
                Model Town Multan has 3 blocks, covering a land area of almost
                99 acres. Firstly, A and B blocks were developed earlier and the
                third block, covering an area of 41 acres, was launched later in
                2005.
              </p>
              <ul className="list-disc ml-5 text-lg leading-relaxed">
                <li>Block A</li>
                <li>Block B</li>
                <li>Block C</li>
              </ul>
              <h5 className="text-xl font-bold mt-3">Block A</h5>
              <p className="pb-6">
                Located near the Northern Bypass and easily accessible via
                Education Avenue, Block A is the central and most prominent
                section of Model Town Multan. It is known for its lush green
                landscapes and well-developed infrastructure, offering a
                peaceful and modern living environment. Plots within the block
                are available for both residential and commercial use, making it
                an ideal choice for families and businesses. The block is
                well-maintained, presenting a clean and appealing atmosphere.
              </p>
              <h5 className="text-xl font-bold">Block B</h5>
              <p className="pb-6">
                Block B, the second established block of Model Town Multan, is
                fully built up with infrastructure and modern amenities,
                exhibiting a high standard of living. It offers a luxurious and
                enjoyable life to its residents and is designed to suit modern
                housing needs. Block B is strategically located near the
                Northern Bypass and is also close to prominent residential
                locations like DHA Multan and Wapda Town. This is a highly
                sought-after investment location due to its excellent structural
                development, attracting interest from both investors and
                potential homeowners looking for long-term value.
              </p>
              <h5 className="text-xl font-bold mt-3">Block C</h5>
              <p className="pb-6">
                Out of the two blocks, block C is the one that has undergone the
                most recent development. This block offers amenities and a high
                level that are on par with any freshly constructed housing
                society in Pakistan. It consists of lovely, well-kept, verdant
                parks with kid-friendly play spaces. It has 226 residential
                plots with all of the most modern amenities. It is on the
                Northern Bypass, across from Block A. Families can provide their
                loved ones with a safe and tranquil atmosphere in this
                well-maintained and developed block.
              </p>
            </section>

            {/* Paymemnt Plans */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4 text-start">
                Model Town Multan Payment Plan
              </h2>
              <p className="text-lg leading-relaxed">
                One of the most attractive features of Model Town Multan is the
                investor-friendly price of the property. The project offers a
                range of plot sizes, from 5 Marla, 10 Marla, and even 1 Kanal.
                Currently, you can get property or houses on cash payment in the
                Model Town of Multan, as most of the residential and commercial
                plots are already sold. For more information, you can contact
                us.
              </p>
            </section>

            {/* conclusion */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4 text-start">Conclusion</h2>
              <p className="text-lg leading-relaxed pb-5">
                One of the city&apos;s most organized and easily accessible
                residential developments is Model Town Multan. It provides the
                perfect atmosphere for both residents and investors because of
                its advantageous location, authorized NOC, dependable
                developers, and customer-focused payment schemes. Model Town
                Multan has something to offer everyone, regardless of whether
                you are trying to build your ideal house or are just looking for
                a reliable real estate investment opportunity.{" "}
              </p>
              <p className="pb-6">
                Contact IES Marketing or visit the office for more details and
                better guidance. We will find the best housing society in
                Pakistan for you that fulfills the requirements of a dream
                house. We deal in many other popular housing schemes, including{" "}
                <Link
                  href="/smart-housing"
                  className="text-blue-500 hover:underline"
                >
                  {" "}
                  Smart Housing Multan
                </Link>
                ,{" "}
                <Link
                  href="/adams-housing"
                  className="text-blue-500 hover:underline"
                >
                  Adams Housing Multan
                </Link>
                , Multan Central,
                <Link
                  href="/royal-swiss"
                  className="text-blue-500 hover:underline"
                >
                  {" "}
                  Royal Swiss
                </Link>
                ,{" "}
                <Link
                  href="/royal-orchard-multan"
                  className="text-blue-500 hover:underline"
                >
                  Royal Orchard
                </Link>
                ,{" "}
                <Link
                  href="/dha-multan"
                  className="text-blue-500 hover:underline"
                >
                  DHA Multan
                </Link>
                ,{" "}
                <Link
                  href="/wapda-town"
                  className="text-blue-500 hover:underline"
                >
                  Wapda Town
                </Link>
                , and{" "}
                <Link
                  href="/citi-housing-multan/"
                  className="text-blue-500 hover:underline"
                >
                  Citi Housing Multan
                </Link>
                . You can reach out to our team for bookings and suggestions
                related to investment.
              </p>
            </section>

            {/* FAQS */}
            <section className="mb-12">
              <h3 className="text-3xl font-bold mb-4">FAQS</h3>
              <h3 className="text-xl font-semibold mt-5 text-start">
                Where is Model Town located in Multan?
              </h3>
              <p className="text-[15px] sm:text-lg leading-relaxed">
                Model Town Multan is located near the Northern Bypass, offering
                easy access to key areas of the city. It is positioned close to
                prominent residential societies like DHA Multan and Wapda Town.
                The project is well-connected to major roads, making commuting
                convenient for residents.
              </p>
              <h3 className="text-xl font-semibold mt-5 text-start">
                Who is the developer of Model Town Multan?
              </h3>
              <p className="text-[15px] sm:text-lg leading-relaxed">
                Model Town Multan is jointly developed by the Multan Development
                Authority (MDA) and the Evacuee Trust Property Board (ETPB).
                Phase III, however, is solely a project of the MDA.
              </p>
              <h3 className="text-xl font-semibold mt-5 text-start">
                Is Model Town Multan a legal society?
              </h3>
              <p className="text-[15px] sm:text-lg leading-relaxed">
                Yes, Model Town Multan is a legal housing society. It has
                received its No Objection Certificate (NOC) from the relevant
                development authorities, ensuring that the project complies with
                all legal and regulatory standards.
              </p>
            </section>
          </div>
        </div>
      </div>
      <OurProjects showHead={false} />
    </div>
  );
};

export default ModelTownMultan;