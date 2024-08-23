import React from 'react'
import img1 from "../../assets/City Housing 1.jpg";
import img2 from "../../assets/City Housing 2.jpg";
import img3 from "../../assets/City Housing 3.jpg";
import img4 from "../../assets/City Housing 4.jpg";
import img5 from "../../assets/City Housing 5.jpg";
import img6 from "../../assets/City Housing 6.jpg";
import img7 from "../../assets/City Housing 7.jpg";
import img8 from "../../assets/City Housing 8.jpg";
import img9 from "../../assets/City Housing 9.jpg";
import img10 from "../../assets/City Housing 10.jpg";
import img11 from "../../assets/City Housing 11.jpg";
import img12 from "../../assets/City Housing 12.jpg";
import paymentPlan1 from "../../assets/CITI Housing Payment 1.png";
import OurProjects from '../OurProjects';

const CitiHousing = () => {
    const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12];


    return (
        <div className='mt-[100px]'>

            {/* Header Section */}
            <header className="my-24">
                <div
                    className="w-full bg-center bg-cover"
                    style={{
                        backgroundImage: `url(${img1})`  // Using the imported image
                    }}

                >
                    <div className="flex items-center justify-center w-full h-full bg-gray-900 bg-opacity-[0.7] py-12">
                        <div className="text-center">
                            <div className="container px-4 mx-auto">
                                <div className="max-w-4xl mx-auto text-center">
                                    {/* <span className="text-gray-200 font-semibold uppercase tracking-widest">IES Marketing</span> */}
                                    <h2 className="mt-8 mb-6 text-4xl lg:text-5xl font-bold text-gray-100">
                                        CITI Housing Multan – High-end Living in Elite Community
                                    </h2>
                                    <p className="max-w-3xl mx-auto mb-10 text-lg text-gray-300 text-center">
                                        Citi Housing Multan is an exclusive housing project in the City of Saints, aimed to bring modern living standards. Its leading-edge infrastructure ensures a comfortable lifestyle and high-quality amenities, boosting standard of living.</p>
                                    <a
                                        className="inline-block w-full md:w-auto mb-4 md:mr-6 py-5 px-8 text-sm font-bold uppercase border-2 border-transparent bg-gray-200 rounded hover:bg-gray-100 text-gray-800 transition duration-200"
                                        href="https://wa.me/923338400106?text=Hi.%20Sir%20I%20am%20interested%20in%20CITI%20Housing.%20Can%20get%20More%20Information%20About%20it%20?" target='_main'
                                    >
                                        Book Now
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* more details */}
            <div className="bg-white text-black text-justify min-h-screen py-12 px-4 md:px-20">
                <div className="max-w-4xl mx-auto">

                    {/* Introduction Section */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-4">Introduction</h2>
                        <p className="text-lg leading-relaxed">
                            Citi Housing Multan is an exclusive housing project in the City of Saints, aimed to bring modern living standards. This project offers residential plots, commercial areas, and recreational facilities to residents and investors. Its leading-edge infrastructure ensures a comfortable lifestyle and high-quality amenities, boosting standard of living. In addition, an advanced surveillance system, green living, quality construction, and prime location set this society apart from other local housing projects. It is a gated community featuring 120 to 180-foot main-boulevard. Furthermore, it provides world-class amenities, ultra-luxurious lifestyles, and entertainment facilities.
                        </p>

                        {/* <p className='text-lg leading-relaxed'>
                        </p> */}
                    </section>


                    {/* History */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-4 text-start">CITI Housing Multan Developer History and Owner</h2>
                        <p className="text-lg leading-relaxed">
                            Citi Housing (Pvt.) Limited is the developer of the Citi Housing Multan project. Citi Housing Group is known for transparent dealings with customers and focuses on the quality work. Mr. Amir Malik is the Chairman of the Citi Housing (Pvt.) Limited played a significant role in reshaping the housing landscape. As a son-in-law of Mr. Malik Riaz, Mr. Amir Malik got reputation and trust in the real estate industry because his father-in-law owns the largest projects of Pakistan, including Bahria town. Mr. Zoraiz Malik, CEO of Citi Housing Group, executed and managed many housing projects in different areas of Pakistan.
                        </p>
                    </section>

                    {/* OutStanding Projects */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-4 text-start">Outstanding projects of Citi Housing (Pvt.) Limited</h2>
                        <p className="text-lg leading-relaxed">Since 2011, Citi Housing Pvt. Limited has been delivering a luxurious lifestyle and world-class amenities to residents that were not previously seen in other societies. The Citi Housing Group has set new norms in Pakistan's real estate industry. It has a team of visionary leaders and dedicated workers, working day and night to facilitate people. Some of its remarkable projects executed in different areas of Pakistan are:
                        </p>
                        <p className="text-lg leading-relaxed">
                            <li>Citi Housing Gujranwala (2011)</li>
                            <li>Citi Housing Sialkot (2013)</li>
                            <li>Citi Housing Jhelum (2014)</li>
                            <li>Citi Housing Faisalabad Phase I (2015)</li>
                            <li>Citi Housing Faisalabad Phase II (2016)</li>
                            <li>Citi Housing Multan Phase I (2018)</li>
                            <li>Citi Housing Multan Phase II (2020)</li>
                            <li>Citi Housing Kharian (2022)</li>
                            <li>Citi Housing Peshawar (2023)</li>
                        </p>
                    </section>

                    {/* NOC Status */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-4 text-start">CITI Housing Multan NOC Status</h2>
                        <p className="text-lg leading-relaxed">
                            Citi Housing Multan has fulfilled all the legal requirements by developmental authorities and got approval for the sale of plots or development, electricity supply, and sui-gas. It received a 'No Objection Certificate' from Multan Developmental Authority, and the approval number is 84/DUP/MDA. The total land area reported in the NOC document is 2896 Kanal (362 Acre). Prospective buyers and investors can confirm their approval by visiting the official website of Multan Development Authority if they have any questions.
                        </p>
                    </section>

                    {/* development Status */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-4 text-start">CITI Housing Multan Development status</h2>
                        <p className="text-lg leading-relaxed">
                            The Citi Housing Multan project is near to completion as approximately 80% of the development is already finished in Phase I. Almost 50% of development is done in Phase II and the construction process is on peak as planned by the developer. The majority of the infrastructure, is in place, including roads, sewerage system, and utility services. Moreover, the construction of residential or commercial units is underway. Moreover, the community's lush parks, security systems, and recreational facilities are properly established and ready to serve residents.
                        </p>
                        <p className="text-lg leading-relaxed">
                            Nearly all plots have been sold, highlighting the developer's commitment to delivering a luxurious lifestyle quickly. The residents can currently enjoy the entertainment facilities, air-conditioned mosques, a fully-equipped hospital, lush green belts, and colorful flower beds. The extensive network of open and wide roads ensures that have a smooth and safe driving experience to residents. It has become a brand over a period of time due to rapid development and incorporation of advanced systems within society. Furthermore, the construction of mosques and the process of installation of overhead tanks is still in the process. It is expected to be completed within a short time period.
                        </p>

                    </section>

                    {/* Key Features */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-4 text-start">Key Features of CITI Housing Multan</h2>
                        <p className="text-lg leading-relaxed">
                            Some of the key features of the Citi Housing Multan project are listed below:
                        </p>
                        <p className="text-lg leading-relaxed">
                            <li>CITI Theme Park</li>
                            <li>CITI Grammar School</li>
                            <li>Artistic Jamia Mosque</li>
                            <li>CITI Medicare</li>
                            <li>Health & Fitness Center</li>
                            <li>Opera Cinema</li>
                            <li>Dancing Fountain</li>
                            <li>Carpeted Roads</li>
                            <li>Water Supply</li>
                            <li>Electricity and gas facilities</li>
                            <li>Lush Green Parks</li>
                            <li>24/7 Security & CCTV</li>
                            <li>Shopping Mart</li>
                            <li>Zoo</li>
                            <li>Eiffel Tower Replica</li>
                            <li>Water treatment plant</li>
                            <li>Hospital</li>
                            <li>Boundary wall</li>
                            <li>Graveyard</li>
                            <li>Petrol pumps</li>
                            <li>CITI Restaurant</li>
                            <li>Jogging Tracks</li>
                            <li>Solid Waste Management System</li>
                        </p>
                    </section>


                    {/* Location */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-4 text-start">CITI Housing Multan Location</h2>
                        <p className="text-lg leading-relaxed">
                            Citi Housing Multan has two phases that are located at prime locations in the City of Saints, formerly known as Kashep Puri, due to its historical significance. Phase I and II are connected to major routes and popular landmarks, making it an ideal choice for those looking for a modern and convenient living experience.
                        </p>

                        {/* location of phase1 */}
                        <h5 className="text-2xl mt-5 font-bold mb-1 text-start">Location of Citing Housing Multan Phase I</h5>
                        <p className="text-lg leading-relaxed">
                            Phase I of the Citi Housing Multan is situated on Bosan Road in Mouza Lutfabad near Bahaudin Zakariya University. It can be accessed from the following routes:
                        </p>
                        <p className='text-lg leading-relaxed'>
                            <li>Almost 8 minutes from Ring Road</li>
                            <li>Almost 10 minutes from Nawabpur Road</li>
                            <li>Almost 13 minutes from Canal Road</li>
                            <li>Almost 15 minutes from Mall of Multan</li>
                            <li>Almost 17 minutes from Mattital Road</li>
                            <li>Almost 22 minutes from Multan International Airport</li>
                            <li>Almost 24 minutes from Khanewal Road</li>
                            <li></li>
                        </p>
                        <p className="text-lg leading-relaxed">
                            The neighborhood areas of Citi Housing Multan Phase I are:
                            <li>Fatima Housing Society</li>
                            <li>Royal Orchard Multan</li>
                            <li>Chungi No. 6 Market</li>
                            <li>Institute of Southern Punjab</li>
                            <li>Green View Housing Scheme</li>
                            <li>DHA Multan</li>
                            <li>Wapda Town Multan</li>
                            <li>Rumanza Golf and Country Club</li>
                        </p>

                        {/* Location of Phase 2 */}
                        <h5 className="text-2xl mt-5 font-bold mb-1 text-start">Location of Citing Housing Multan Phase II</h5>
                        <p className="text-lg leading-relaxed">
                            Phase II of Citi Housing Multan is situated on Old Shujabad Road near the the M-5 Motorway. This Old Shujabad road serves as a major artery connecting Phase II of Citi Housing to various other parts of Multan City. Moreover, it is well-connected to public transportation networks, educational institutions, and medical facilities. Surrounding local routes and secondary routes provide additional entry points and alternative travel options.
                        </p>
                        <p className="text-lg leading-relaxed">Phase II can be accessed from the following routes:</p>
                        <p className='text-lg leading-relaxed'>
                            <li>Almost 5 minutes from Khokhran Road</li>
                            <li>Almost 8 minutes drive from M-4 Motorway</li>
                            <li>Almost 10 minutes drive from M-5 Motorway</li>
                            <li>Almost 12 minutes from Shalimar Road</li>
                            <li>Almost 18 minutes from Lar Shujabad Road</li>
                            <li>Almost 20 minutes from Fish Farm Road</li>
                            <p className="text-lg leading-relaxed">Popular landmarks near Citi Housing Multan Phase II are:</p>
                            <li>Nishter Hospital</li>
                            <li>Mouza Aliwala</li>
                            <li>Karimabad Housing Society</li>
                            <li>Cantt Avenue Housing Society</li>
                            <li>Green View Housing Scheme</li>
                            <li>Multan Cantonment</li>
                        </p>
                        <p className="text-lg leading-relaxed">
                            The neighborhood areas of Citi Housing Multan Phase I are:
                            <li>Fatima Housing Society</li>
                            <li>Royal Orchard Multan</li>
                            <li>Chungi No. 6 Market</li>
                            <li>Institute of Southern Punjab</li>
                            <li>Green View Housing Scheme</li>
                            <li>DHA Multan</li>
                            <li>Wapda Town Multan</li>
                            <li>Rumanza Golf and Country Club</li>
                        </p>

                    </section>

                    {/* Phases */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-4 text-start">CITI Housing Multan Phases</h2>
                        <p className="text-lg leading-relaxed">
                            Citi Housing Multan is divided into two distinct phases, and each phase is further divided into multiple blocks to manage resources efficiently and deliver sustainable communities. Both phases offer unique residential and commercial opportunities to potential investors and buyers.
                        </p>

                        {/* phase 1 */}
                        <div>
                            <h6 className="text-2xl mt-5 font-bold mb-1 text-start">Phase I</h6>
                            <p className="text-lg leading-relaxed">
                                Citi Housing Phase I was launched in 2018 and offered residential or commercial plots. Some other prominent features of the phase I include theme parks, banks, mosques, and restaurants. In addition, 5, 7, and 10 Marla residential plots and 2.5 Marla commercial plots are available for buyers. Citi Housing mart, gym, carpeted roads, and schools are a few other distinctive features of phase I. This phase is divided into 11 blocks that are listed below:
                            </p>

                            <p className="text-lg leading-relaxed">
                                <li>Block A</li>
                                <li>Block B</li>
                                <li>Block B extension</li>
                                <li>Block C</li>
                                <li>Block D</li>
                                <li>Block E</li>
                                <li>Block F</li>
                                <li>Block G</li>
                                <li>Block H</li>
                                <li>Block I</li>
                                <li>Jinnah Block</li>
                            </p>

                        </div>

                        {/* phase 2 */}
                        <div>
                            <h6 className="text-2xl mt-5 font-bold mb-1 text-start">Phase II</h6>
                            <p className="text-lg leading-relaxed">
                                Citi Housing Multan Phase II was launched in March 2020 and constitutes almost 1900 Kanal land area. It has public buildings, residential or commercial plots, petrol stations, schools, etc. The distinctive features of Phase II are the dancing fountain, Jamiya mosque, Allama Iqbal Park, Citi main office, and farmhouses. Block A, B, and E have 5 and 10 Marla residential plots for sale, while 7 Marla plots are available in Block C and D. Furthermore, 1 Kanal plots are only available in Block E, so choose the right block according to your requirements.
                            </p>
                            <p className='text-lg leading-relaxed'>Phase II is divided into 7 blocks that are listed below:</p>

                            <p className="text-lg leading-relaxed">
                                <li>Block A (5 and 10 Marla)</li>
                                <li>Block B (5 and 10 Marla)</li>
                                <li>Block C (7 Marla)</li>
                                <li>Block D (7 and 10 Marla)</li>
                                <li>Block E (5 and 10 Marla, or 1 Kanal)</li>
                                <li>Block F (5 Marla)</li>
                                <li>Block G (5 Marla)</li>
                            </p>

                        </div>

                    </section>

                    {/* Paymemnt Plans */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-4 text-start">
                            CITI Housing Multan Payment Plan
                        </h2>
                        <p className="text-lg leading-relaxed">
                            In Citi Housing Multan Phase I, plots are now offered on cash payment because major proportion of the society is in possession and houses are built for residence. In addition, Citi Housing Phase II is available on cash payment and monthly installments also.
                        </p>
                        <div className='flex justify-start items-start mt-10 gap-3 flex-wrap'>
                            <img src={paymentPlan1} alt="" className='mx-auto max-w-[400px] border rounded-2xl transition-all duration-[0.5s] hover:border-blue-800 hover:shadow-2xl' />
                            {/* <img src={payementPlan2} alt="" className='mx-auto max-w-[400px] border rounded-2xl transition-all duration-[0.5s] hover:border-blue-800 hover:shadow-2xl' /> */}
                        </div>

                    </section>


                    {/* conclusion */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-4 text-start">
                            Conclusion
                        </h2>
                        <p className="text-lg leading-relaxed">
                            Multan is a focal point for economic and infrastructural development due to rapid progress. Citi Housing Multan provides an excellent opportunity for homeowners and investors looking for a reliable project to invest their money on purchasing plots on easy installments and get long-term benefits. Citi Housing Multan is a worthwhile investment project with promising sustained value and increased property value. For better guidance and detailed information, contact IES marketing and approach our experienced team to make the right decision.
                        </p>
                    </section>


                    {/* FAQS */}
                    <section className="mb-12">
                        <h5 className="text-3xl font-bold mb-4">
                            FAQS
                        </h5>
                        <h3 className="text-xl font-semibold mt-3 text-start">
                            Who is the developer of Citi Housing Multan?
                        </h3>
                        <p className=" text-lg leading-relaxed">
                            Citi Housing Pvt. Limited is the developer of the Citi Housing Multan project and has executed multiple successful projects under Mr. Zoraiz Malik's leadership. Citi Housing Group completed the Multan project at a faster pace and provided a gated community to the locals of Multan. Potential buyers or investors can buy residential or commercial property by trusting the reputable Citi Housing Group, as they always do excellent work.
                        </p>
                        <h3 className="text-xl font-semibold mt-3 text-start">
                            What facilities are offered to Citi Housing Multan residents?
                        </h3>
                        <p className=" text-lg leading-relaxed">
                            Citi Housing projects are quite popular in Pakistan because the developer always meet the expectation of the clients. This project provides amazing investment opportunities due to its prime location and speedy development. Moreover, this society has a gated community with a high-quality infrastructure, a power-backup system and 120 to 180 feet main boulevard. Also, 40-foot-wide carpeted roads and an eco-friendly environment are its main features. The residents can get electricity, gas, and sewer facilities
                        </p>
                        <h3 className="text-xl font-semibold mt-3 text-start">
                            Is Citi Housing Multan an MDA-approved society?
                        </h3>
                        <p className=" text-lg leading-relaxed">
                            Citi Housing Phase I is approved from Multan Development Authority and the developmental process is near to completion. It has fulfilled all the legal requirements and met the standard of a society. However, the phase II is not approved from MDA, but the owners are trying to get the NOC for this phase soon.
                        </p>
                        <h3 className="text-xl font-semibold mt-3 text-start">
                            Where is Citi Housing Multan located?
                        </h3>
                        <p className=" text-lg leading-relaxed">
                            Citi Housing Multan is located at a prime location within Multan City and can be accessed via popular routes. Its Phase 1 is present on the Bosan road near BZU, Multan while Phase 2 is located on the Old Shujabad Road near M-5 motorway. The location of Citi Housing Phase 1 & 2 indicates the significance of project and provide a quick access to central Multan.                        </p>
                        <h3 className="text-xl font-semibold mt-3 text-start">
                            How many blocks are present in Citi Housing Multan?                        </h3>
                        <p className=" text-lg leading-relaxed">
                            It will take around 8 to 10 minutes to reach Citi Housing Multan Phase 1 from Ring road and Nawabpur road. From Multan airport and Khanewal road, it will take almost 22 to 24 minutes to reach phase I. However, Phase 2 is located near Khokhran road, but it will take around 12 to 18 minutes to reach there from Shalimar road and Lar Shujabad road.                        </p>
                        <h3 className="text-xl font-semibold mt-3 text-start">
                            How much time does it take to reach Citi Housing Multan?                        </h3>
                        <p className=" text-lg leading-relaxed">
                            It will take around 8 to 10 minutes to reach Citi Housing Multan Phase 1 from Ring road and Nawabpur road. From Multan airport and Khanewal road, it will take almost 22 to 24 minutes to reach phase I. However, Phase 2 is located near Khokhran road, but it will take around 12 to 18 minutes to reach there from Shalimar road and Lar Shujabad road.
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
                            <img
                                className="max-w-full max-h-full object-contain"
                                src={src}
                                alt={`Gallery image ${index + 1}`}
                            />
                        </div>
                    ))}
                </div>
            </section>

            {/* Disclaimer */}
            <section className='my-10 px-3 sm:px-20 text-justify'>
                <h2 className="text-3xl font-bold mb-4">Disclaimer</h2>
                <p className="text-xl font-semibold mt-5">
                    We collect information from credible and authentic online sources to provide up-to-date property details. We make no representations or claims about the accuracy of the data. We do not claim liability in case of any financial and investment-related losses experienced by users. Potential buyers or users are urged to exercise caution and take full responsibility for their investment.
                </p>
            </section>




            <OurProjects />
        </div>
    )
}

export default CitiHousing