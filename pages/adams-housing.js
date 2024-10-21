import React, { useEffect } from 'react'
import img1 from "../public/AdamsHousing1.jpg";
import img2 from "../public/AdamsHousing2.jpg";
import img3 from "../public/AdamsHousing3.jpg";
import img4 from "../public/AdamsHousing4.jpg";
import img5 from "../public/AdamsHousing5.jpg";
import img6 from "../public/AdamsHousing6.jpg";
import img7 from "../public/AdamsHousing7.jpg";
import img8 from "../public/AdamsHousing8.jpg";
import img9 from "../public/AdamsHousing9.jpg";
import img10 from "../public/AdamsHousing10.jpg";
import payementPlan1 from "../public/Adams payment Plan 1.jpg";
import payementPlan2 from "../public/Adams payment Plan 2.jpg";
import OurProjects from "@/Components/OurProjects";
import { useAppContext } from "../Context/AppContext";
import { FaOpenid } from 'react-icons/fa';
import Image from 'next/image';
import Head from 'next/head';


const Adamshousing = () => {
  const images = [img1, img2, img3, img4, img5, img6, img7, img8];
  const altNames = ["Adams main Enterance", "Adams main Enterance", "Adams Housing main Boulevard", "Adams Housing Multan City", "Adams Housing Multan", "Adams Housing Entrance Gate", "Adams Housng High quality infrastructure",  "Adams Houisng Development",]
  const { openLeadpoup } = useAppContext()
  // useEffect(openLeadpoup, [])

  return (
    <>
      <Head>
        <title>Adams Housing Multan - IES Marketing</title>
        <meta name="keywords" content="Adams Housing, Adams Housing Multan, Adams Housing Society, Best Societies in Multan, Pakistan Real Estate, Real Estate Investment" />
        <meta name="description" content="Adams Housing Multan, developed by Adams Group, stands as a beacon of modern living. It provides contemporary amenities and convenience" />
      </Head>
      <div>
        <header className="mb-14">
          <div
            className="w-full bg-center bg-cover"
            style={{
              backgroundImage: `url('/AdamsHousing1.jpg')`  // Using the imported image
            }}

          >
            <div className="flex items-center justify-center w-full h-full bg-gray-900 bg-opacity-[0.7] py-6">
              <div className="text-center">
                <div className="container px-4 mx-auto">
                  <div className="max-w-4xl mx-auto text-center">
                    {/* <span className="text-gray-200 font-semibold uppercase tracking-widest">IES Marketing</span> */}
                    <h1 className="mt-8 mb-6 text-4xl lg:text-5xl font-bold text-gray-100">
                      {`Adams Housing Multan – Modern Living Heaven with a Vibrant Lifestyle`}
                    </h1>
                    <p className="max-w-3xl mx-auto mb-10 text-lg text-justify text-gray-300">
                      {`Adams Housing Multan stands as a beacon of modern living that offers contemporary amenities and high-quality infrastructure and provides residents with convenient access to the city&apos;s landmarks and commercial hubs.`}
                    </p>
                    <div onClick={openLeadpoup}>
                      <a
                        className="inline-block w-full md:w-auto mb-4 md:mr-6 py-5 px-8 text-sm font-bold uppercase border-2 border-transparent bg-gray-200 rounded hover:bg-gray-100 text-gray-800 transition duration-200"
                        href="https://wa.me/923338400106?text=Hi.%20Sir%20I%20am%20interested%20in%20Adams%20Housing.%20Can%20get%20More%20Information%20About%20it%20?" target='_main'
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

            {/* Introduction of Smart Housing */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4">Introduction</h2>
              <p className="text-lg leading-relaxed">
                {`Adams Housing Multan stands as a beacon of modern living that offers contemporary amenities and high-quality infrastructure and provides residents with convenient access to the city&apos;s landmarks and commercial hubs. This society is located at a prime location on Matti Tal Road near New Katchery. It offers a serene and secure environment, reliable utility services, wider roads, and provides a peaceful lifestyle. Adams Housing prioritizes sustainability, incorporating green building practices, and ensuring ample green space for recreation.`}
              </p>
            </section>


            {/* History */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4 text-start">Adams Housing Multan Developer History and Owners</h2>
              <p className="text-lg leading-relaxed">
                {`Adams Housing Multan is a project of the reputable Adams Group, known for its commitment to quality, innovation, and client satisfaction. Over ten years of experience building attractive homes and highly functional societies has made Adams Group one of the most reliable developers in Pakistan. Adams Developers have an excellent track record of delivering high-quality projects and are working hard to complete the development process of Adams Housing Multan.`}
              </p>
              <p className="text-lg leading-relaxed">
                {`Moreover, their initial projects were focused on smaller residential projects, but they expanded their portfolio to include larger societies and commercial complexes in different cities in Pakistan. <span className='font-bold'> Mr. Riyaz Beryar </span> is the owner of Adams Housing and the CEO of Adams Developer Group. He is one of the prominent figures in the real estate industry. Mr. Beryar is a former marketing and development manager of Citi Housing Pvt. Ltd. He focuses on the integration of cutting-edge infrastructure and sustainable practices within society.`}
              </p>
            </section>

            {/* Delivered Projects */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4 text-start">Successfully delivered projects of Adams Group.</h2>
              <p className="text-lg leading-relaxed">{`Some of the successful projects of Adams Group are:`}</p>
                <ul className='list-disc ml-5 text-lg leading-relaxed'>
                  <li>	Adams housing Dera Ghazi Khan</li>
                  <li>	Adams housing Lahore</li>
                  <li>	Adams Housing Sahiwal</li>
                  <li>	Adams Villas</li>
                  <li>	Adams Trade Center</li>
                  <li>	Adams Green City</li>
                  <li>	Adams Commercial Complex</li>
                  <li>	Adams Farmhouses Multan</li>
                </ul>
            </section>

            {/* NOC Status */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4 text-start">Adams Housing Multan NOC Status</h2>
              <p className="text-lg leading-relaxed">Some
                {`Adams Housing Multan is an MDA-approved project in the heart of Multan City, legally verified by the Multan Development Authority and Directorate of Urban Development. In addition, this housing society has received a No Objection Certificate (NOC) for 1000 Kanal land area by adhering to legal standards and regulations. This approval ensures that this housing project complies with all zoning, planning, and developmental regulations set by the MDA. A valid NOC instills confidence among investors and buyers and increases the resale value of plots.`}
              </p>
            </section>

            {/* development Status */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4 text-start">Adams Housing Multan Development Status</h2>
              <p className="text-lg leading-relaxed">
                {`Adams Housing Multan has made significant progress in the development, and the construction process is in full swing. The roads within the housing society are fully developed. This includes main and secondary roads, ensuring smooth transportation and connectivity within the community. Moreover, the basic infrastructure, such as water supply, electricity, sewage system, and gas connection, is in place and ready for residents to livee. Basic amenities necessary for daily living, such as medical facilities and security services, are available in society.`}            </p>
              <p className="text-lg leading-relaxed">
                {`Interested people can get plots for cash payments and construct houses as the necessary groundwork and utilities are already established. The total land area is 1000 Kanal, while 700 Kanal is mostly developed, and the remaining 300 Kanal is going through a developmental process. So, the development of Adams Housing Multan is on track, with significant progress being made in infrastructure, utility services, and community facilities. For the latest updates and detailed information, it is better to visit the office or contact our experienced team for better guidance.`}            </p>

            </section>

            {/* Main Features */}
            <section className="mb-12">
              <h2 className="text-3xl text-start font-bold mb-4">Main features of Adams Housing Multan</h2>
              <p className="text-lg leading-relaxed">
                {`Adams Housing Multan offers a wide range of features to society&apos;s residents:`}
              </p>
                <ul className='list-disc ml-5 text-lg leading-relaxed'>
                  <li>Outdoor gym</li>
                  <li>Public parks</li>
                  <li>{`24/7 security`}</li>
                  <li>LED Street lights</li>
                  <li>Wide carpeted roads</li>
                  <li>Kid&apos;s play area</li>
                  <li>Overhead tanks</li>
                  <li>Filtration plants</li>
                  <li>Mosque</li>
                  <li>Swimming pool</li>
                  <li>Boundary wall</li>
                  <li>Luxurious community club</li>
                  <li>Underground electricity</li>
                  <li>Nature trails</li>
                  <li>Eco-friendly environment</li>
                  <li>Solar power plant</li>
                  <li>Re-harvesting of rainwater</li>
                  <li>{`Islamic research & education center`}</li>
                  <li>Health services</li>
                  <li>Spa & Fitness Center</li>
                  <li>Food court</li>
                </ul>
            </section>

            {/* Location */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4 text-start">Adams Housing Multan Location</h2>
              <p className="text-lg leading-relaxed">
                Adams Housing Multan Society is located near the Judicial Complex or New Katchery in Mouza Jahangirabad. It has two entrance gates on two main routes: Mattital Road and Northern Bypass Road opposite PIA Employees Housing. Additionally, this society became popular for its prime location, which allows easier access and ensures that residents are never far from essential services.
              </p>
            </section>


            {/* Accessibiulities */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4 text-start">Adams Housing Multan Accessibilities</h2>
              <p className="text-lg leading-relaxed">
                Adams Housing Multan offers a lucrative investment opportunity due to its robust infrastructure, modern amenities, and strategic location. Some nearest accessibilities to Adams Housing are:
              </p>
                <ul className='list-disc ml-5 text-lg leading-relaxed'>
                  <li>Opposite to PIA Employees Housing</li>
                  <li>Almost 1 minute distance from Judicial Complex</li>
                  <li>Almost 2 minutes from Bakhtawar Amin Medical and Dental Hospital</li>
                  <li>Almost 4 minutes from Multan Public School</li>
                  <li>Almost 15 minutes from GT Road</li>
                  <li>Almost 20 minutes from ChaseUp Mall</li>
                </ul>
            </section>


            {/* Populare Places */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4 text-start">Popular Places near Adams Housing Multan</h2>
              <p className="text-lg leading-relaxed">
                {`Adams housing is not just a place to live as it offers a perfect blend of modern comforts, healthcare facilities, educational facilities, and easier transportation routes. Some popular landmarks and places near Adams Housing are:`}
              </p>
                <ul className="list-disc ml-5 text-lg leading-relaxed">
                  <li>{`Bakhtawar Amin Medical & Dental Hospital`}</li>
                  <li>New katchery</li>
                  <li>Pak Arab Fertilizer Company</li>
                  <li>Women University Multan</li>
                  <li>Mukhtar-e-sheikh Hospital</li>
                  <li>Multan Public School</li>
                  <li>Memorial Hospital</li>
                  <li>Chase Up Mall</li>
                </ul>
            </section>


            {/* Other Near By Projects */}
            <section className="mb-12">
              <h3 className="text-3xl font-bold mb-4 text-start">
                Other Nearby Housing Projects
              </h3>
              <p className="text-lg leading-relaxed">
               {` Multan hosts several housing projects to meet residential and investment needs. Adams Housing Multan stands out among a few popular housing projects near it due to its modern infrastructure, comprehensive amenities, and investment potential. These nearby housing societies include:`}
              </p>
                <ul className='list-disc ml-5 text-lg leading-relaxed'>
                  <li>Royal Orchard Multan</li>
                  <li>Wapda Town Phase II</li>
                  <li>Model Town Multan</li>
                  <li>PIA Employees Housing</li>
                  <li>DHA Multan</li>
                  <li>Pace City Multan</li>
                  <li>BZU Employers Colony I</li>
                </ul>
            </section>



            {/* Blocks */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4 text-start">
                Adams Housing Multan Blocks
              </h2>
              <p className="text-lg leading-relaxed">
               {` Adams Housing Multan is divided into three blocks: A, B, and B-extension. Each block is designed to offer specific features and amenities, catering to residents different preferences and needs. They have a well-developed road network and basic amenities and both residential and commercial plots are available there. Parks, playgrounds, and community centers are added to the housing society for family activities. All three blocks are equipped with modern facilities and lifestyle amenities to support business activities.`}
              </p>
            </section>

            {/* Paymemnt Plans */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4 text-start">
                Adams Housing Multan Payment plan
              </h2>
              <p className="text-lg leading-relaxed">
              {`  Adams Housing Multan offers a flexible and convenient payment plan that is designed to accommodate the financial needs of buyers. It has offered a 4-year payment plan with easy monthly and quarterly installments so that buyers can purchase plots with ease. The residential plots of 5, 7, or 10 Marla and 1 Kanal are available for purchase on cash payment and in affordable installments. The buyers have to pay a down payment to get a file, followed by 48 monthly and 16 quarterly installments.`}
              </p>
              <div className='flex justify-start items-start mt-10 gap-5 flex-wrap'>
                <Image src={payementPlan1} alt="Adams Housing Payment Plan" className='mx-auto sm:max-w-[400px] border rounded-xl transition-all duration-[0.5s] hover:border-black hover:shadow-xl w-full' />
                <Image src={payementPlan2} alt="Adams Housing Payment Plan" className='mx-auto sm:max-w-[400px] border rounded-xl transition-all duration-[0.5s] hover:border-black hover:shadow-2xl w-full' />
              </div>

            </section>


            {/* Additional Notes */}
            <section className="mb-12">
              <h4 className="text-2xl font-bold mb-4 text-start">
                Additional notes:
              </h4>
                <ul className='list-disc ml-5 text-lg leading-relaxed'>
                  <li>10% extra for corner plots/park-facing plots</li>
                  <li>10% discount on full payment of plots</li>
                  <li>Confirmation amount needs to be paid within 30 days of booking</li>
                </ul>
            </section>


            {/* conclusion */}
            <section className="mb-12">
              <h3 className="text-3xl font-bold mb-4 text-start">
                Conclusion
              </h3>
              <p className="text-lg leading-relaxed">
                {`Adams Housing Multan offers a meticulously planned community designed to fulfill the diverse requirements of the residents. It is a premier residential project with top-notch amenities and ensures a comfortable and convenient lifestyle for residents. Adams Housing Multan features a variety of residential plots, green spaces, and commercial zones to promote a healthy lifestyle. It focuses on quality infrastructure and sustainable development. Contact IES Marketing for more details on the Adams Housing Multan Project and own a property with the guidance of experts.`}
              </p>
            </section>


            {/* FAQS */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-4">
               {` FAQS`}
              </h2>
              <h3 className="text-xl font-semibold mt-3 text-start">
                {`Who is the owner of the Adams Housing Multan?`}
              </h3>
              <p className="text-[15px] sm:text-lg leading-relaxed">
                {`Mr. Riyaz Beryar is the owner of the Adams Housing Multan and CEO of Adams Group. He is known for his visionary leadership and commitment to quality work and excellence. Moreover, Mr. Beryar has introduced this housing project to provide high-standard living spaces and offered a society with a blend of comprehensive amenities, modern infrastructure, and a community-centric environment.`}
              </p>
              <h3 className="text-xl font-semibold mt-5 text-start">
              {`  Where is Adams Housing located in Multan?`}
              </h3>
              <p className="text-[15px] sm:text-lg leading-relaxed">
               {` Adams Housing Multan is strategically located on the Mattital Road and Bypass Road in Mouza Jahangirabad. This prime location of Adams Housing provides residents with easy access to key areas of the city, including educational institutions, healthcare facilities, commercial centers, and major landmarks. Its location ensures that society benefits from excellent connectivity and convenience, making it an attractive choice.`}
              </p>
              <h3 className="text-xl font-semibold mt-5 text-start">
               {` Are Adams Housing Multan plots available on installments?`}
              </h3>
              <p className="text-[15px] sm:text-lg leading-relaxed">
                {`Adams Housing Multan offers plots on installment plans to facilitate potential buyers and investors. This payment plan allows individuals to purchase property with a flexible payment schedule. These plans generally require an initial down payment followed by monthly or quarterly installments. Also, interested people can get residential or commercial property with cash payment.`}
              </p>
              <h3 className="text-xl font-semibold mt-5 text-start">
               {` Is Adams Housing Multan legally approved society?`}
              </h3>
              <p className="text-[15px] sm:text-lg leading-relaxed">
                A{`dams Housing Multan is a legally approved society from Multan Developmental Authority. Its land area of 1000 Kanal is approved for development and sale. It received &apos;No Objection Certificate&apos; from developmental authorities of Multan to gain trust of investors and known as an authentic or legal society.`}
              </p>
              <h3 className="text-xl font-semibold mt-5 text-start">
               {` What is the payment plan of Adams Housing Multan?`}
              </h3>
              <p className="text-[15px] sm:text-lg leading-relaxed">
                {`Adams Housing Multan projects offers an affordable 4-year payment plan that involves 48 monthly installments and 16 quarterly installments. In addition, you have to pay the downpayment or booking amount to get the plot file, while you have to pay 10% extra amount if you are interested in buying corner plot.`}
              </p>
              <h3 className="text-xl font-semibold mt-5 text-start">
                {`Is Adams Housing fully developed society?`}
              </h3>
              <p className="text-[15px] sm:text-lg leading-relaxed">
                {`Most of the development process is complete in Adams Housing Society. The road structure, basic utilities, lights, healthcare centers, community centers, and many other facilities are available for residents. In addition, there are recreational opportunities for children as parks and playgrounds are present in the society&apos;s map.`}
              </p>
            </section>

          </div>
        </div>



        {/* Images */}
        <section className='mb-12 px-2 sm:px-5'>
          <h3 className="text-3xl font-bold mb-4 text-center pb-4">Images Of Smart Housing</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {images.map((src, index) => (
              <div key={index} className="w-full h-48 md:h-64 lg:h-80 bg-gray-200 flex items-center justify-center overflow-hidden border rounded-2xl transition-all duration-[0.5s] hover:border-blue-800 hover:shadow-2xl">
                <Image
                  className="max-w-full max-h-full object-contain"
                  src={src}
                  alt={altNames[index]}
                />
              </div>
            ))}
          </div>
        </section>



        {/* Disclaimer */}
        <section className='my-10 px-3 sm:px-20 text-justify'>
          <h2 className="text-3xl font-bold mb-4">Disclaimer</h2>
          <p className="text-xl font-semibold mt-5">
           {` We collect information from credible and authentic online sources to provide up-to-date property details. We make no representations or claims about the accuracy of the data. We do not claim liability in case of any financial and investment-related losses experienced by users. Potential buyers or users are urged to exercise caution and take full responsibility for their investment.`}
          </p>
        </section>

        <OurProjects showHead={false} />
      </div>
    </>
  )
}

export default Adamshousing
