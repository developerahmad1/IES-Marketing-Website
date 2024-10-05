import React, { useEffect } from 'react'
import img1 from "../../assets/DHA 1.jpg";
import img2 from "../../assets/DHA 2.jpg";
import img3 from "../../assets/DHA 3.jpg";
import img4 from "../../assets/DHA 4.jpg";
import img5 from "../../assets/DHA 5.jpg";
import img6 from "../../assets/DHA 6.jpg";
import img7 from "../../assets/DHA 7.jpg";
import OurProjects from '../OurProjects';
import { useAppContext } from '../../Context/AppContext';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const DHAMultan = () => {
    const { openLeadpoup } = useAppContext()
    useEffect(openLeadpoup, [])


    const images = [img1, img2, img3, img4, img5, img6, img7];


    return (
        <>
            <Helmet>
                <title>DHA Multan - IES Marketing</title>
                <meta name="description" content="DHA Multan stands out for high-quality amenities, development, and durability.  It offers a promising opportunity to invest and build a dream home." />
            </Helmet>

            <div className='mt-[87px]'>

                {/* Header */}
                <header className="mb-14">
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
                                        <h1 className="mt-8 mb-6 text-4xl lg:text-5xl font-bold text-gray-100">
                                            DHA Multan – Redefining Urban Elegance
                                        </h1>
                                        <p className="max-w-3xl mx-auto mb-10 text-lg  text-gray-300 text-center">
                                            Defense Housing Authority (DHA) is a prestigious residential community featuring well-planned residential plots and commercial areas equipped with modern infrastructure and provide a secure living environment.
                                        </p>
                                        <div onClick={openLeadpoup}>
                                            <a
                                                className="inline-block w-full md:w-auto mb-4 md:mr-6 py-5 px-8 text-sm font-bold uppercase border-2 border-transparent bg-gray-200 rounded hover:bg-gray-100 text-gray-800 transition duration-200"
                                                href="https://wa.me/923338400106?text=Hi.%20Sir%20I%20am%20interested%20in%20DHA%Multan.%20Can%20get%20More%20Information%20About%20it%20?" target='_main'
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
                                Defense Housing Authority (DHA) is a prestigious residential community featuring well-planned residential plots and commercial areas equipped with modern infrastructure and provide a secure living environment. Since 2019, DHA Multan stands as a symbol of contemporary living as it provides high standards of living to residents. It stands out for its strategic urban planning, high-quality amenities, development, and durability. Many plots are already developed, with ongoing construction and development enhancing the community’s appeal. It represents a promising investment opportunity and a desirable place to call home in Multan.
                            </p>
                        </section>

                        {/* History */}
                        <section className="mb-12">
                            <h2 className="text-3xl font-bold mb-4 text-start">DHA Multan Developer History and Owner</h2>
                            <p className="text-lg leading-relaxed">
                                DHA Multan is a housing project of one of the popular real estate developers in Pakistan, Defense Housing Authority, primarily established for military personnel. Overtime, the projects have expanded to cater civilians as well. DHA developer is known for planned infrastructure, amenities, and high standard of living. The owner of Defense Housing Authority operates under the jurisdiction of Pakistan Army or governed by the board of officers. The Defense Secretory of Pakistan, Lt, Gen Akhter Nawaz Satti, is a Chairman of DHA. DHA projects are known for their stringent security measures, providing a safe and secure environment for residents.
                            </p>
                        </section>



                        {/* Other Popular Projects of Defence Housing Authority  */}
                        <section className="mb-12">
                            <h2 className="text-3xl font-bold mb-4 text-start">Other Popular Projects of Defense Housing Authority</h2>
                            <p className="text-lg leading-relaxed">Defense Housing Authority (DHA) has a well-earned reputation for delivering high-quality residential projects across various cities in Pakistan. It has successfully completed many projects and is consistently raising the bar for luxury living. Their projects foster a sense of community and provides comprehensive amenities to the people. Some of their popular projects are:</p>
                            <p className="text-lg leading-relaxed">
                                <ul className='list-disc ml-5'>
                                    <li>DHA Gujranwala</li>
                                    <li>DHA Islamabad</li>
                                    <li>DHA Peshawar</li>
                                    <li>DHA Quetta</li>
                                    <li>DHA Hyderabad</li>
                                    <li>DHA Rawalpindi</li>
                                    <li>DHA Lahore</li>
                                    <li>DHA Karachi</li>
                                    <li>DHA Bahawalpur</li>
                                    <li>DHA Valley</li>
                                </ul>
                            </p>
                        </section>

                        {/* NOC Status */}
                        <section className="mb-12">
                            <h2 className="text-3xl font-bold mb-4 text-start">DHA Multan NOC Status</h2>
                            <p className="text-lg leading-relaxed">Some
                                DHA Multan has obtained the necessary “No Objection Certificate” from Multan Development Authority for a land area of over 10,000 acres divided into 30 sectors that ensures its legitimacy and legality. This project was launched in 2015 and got approval within a short time period. It is a sign of trustworthy development that helps gain trust of the potential buyers. With the NOC in place, DHA Multan can proceed with its developmental activities without legal hindrance. Moreover, it also boosts market confidence, making the project more attractive and reliable. The process of development started immediately after the approval and first balloting event was held in 2019 and second balloting took place in 2021.
                            </p>
                        </section>

                        {/* development Status */}
                        <section className="mb-12">
                            <h2 className="text-3xl font-bold mb-4 text-start">DHA Multan Development Status</h2>
                            <p className="text-lg leading-relaxed">
                                DHA Multan has made significant progress in the development, positioning itself as one of the premier residential communities in the region. The main boulevard and internal road networks are largely completed. Installation of essential utilities such as electricity, water supply, and sewage system is well under-way. Moreover, street lighting has been installed in several sectors. The possession of residential plots has been handed over to a significant number of allottees. Also, commercial plots have been allotted and development of buildings is in process. The Arena event complex and hotel, food court, rumanza golf course, DHA 360 Zoo, vet hospital, resuce 1122, monuments, parks, and many other developmental projects are completed.
                            </p>
                            <p className="text-lg leading-relaxed">
                                The balloting of DHA Rumanza Golf Club took place in 2020, while last balloting of residential and commercial plots was held in 2021. The developing projects include Rumanza Club House, Pakistan square, educational institutions, Serene Tower, and many others. The future projects of DHA Multan include waterpark, twin towers, mega malls, theme park, and cinemas. Furthermore, Kashmir Park, located in sector U, is also open to visitors for recreational activities.
                            </p>

                        </section>

                        {/* Key Features of DHA Multan */}
                        <section className="mb-12">
                            <h2 className="text-3xl text-start font-bold mb-4">Key Features of DHA Multan</h2>
                            <p className="text-lg leading-relaxed">
                                DHA Multan is one of the largest housing projects in Multan that covers several acres land area. It has more key features than any other society in the City of Saints and provides an excellent opportunity to locals and overseas clients to get a property in the well-planned community. Its key features are listed below:
                            </p>
                            <p className="text-lg leading-relaxed">
                                <ul className='list-disc ml-5'>
                                    <li>Main boulevard</li>
                                    <li>Miwaki forest</li>
                                    <li>DHA diagnostic lab</li>
                                    <li>Defense Orchard</li>
                                    <li>Arena Event Complex and Hotel</li>
                                    <li>Sewerage treatment plant</li>
                                    <li>Rumanza Golf Course</li>
                                    <li>DHA Food Court</li>
                                    <li>DHA 360 Zoo</li>
                                    <li>Water park</li>
                                    <li>DHAM Mega Mall</li>
                                    <li>Twin Towers</li>
                                    <li>Vet Hospital</li>
                                    <li>Monuments</li>
                                    <li>Sports Complex</li>
                                    <li>DHAM Nursery</li>
                                    <li>Mosque</li>
                                    <li>AM 99 Hospital</li>
                                    <li>Shopping Arcade</li>
                                    <li>School System</li>
                                    <li>DHA Villas Community</li>
                                    <li>Football and cricket stadium</li>
                                    <li>24 Hours CCTV Security</li>
                                    <li>Clean and green environment</li>
                                    <li>Bilal Masjid</li>
                                </ul>
                            </p>
                        </section>

                        {/* Location */}
                        <section className="mb-12">
                            <h2 className="text-3xl font-bold mb-4 text-start">DHA Multan Location</h2>
                            <p className="text-lg leading-relaxed">
                                DHA Multan is easily accessible from Bosan Road and connects to major routes and landmarks of the city. The residents can enjoy benefits from its proximity to essential amenities, like airport, railway station, hospital, and university. DHA Multan has 3 adjacent Mouzas, including Mouza Sangi, Mouza Kotla Sadaat, and Mouza Garay Wahaan. It has four main gates, allowing people to get an entry from four different routes. First gate is Shah Yousaf Gardez Gate that is present on the Bosan Road, while the second gate is Shah Shams Tabraiz Gate that can be accessed from the Mattital Road. Moreover, the second and third gates are Shah Rukn-e-Alam Gate and Bahauddin Zakariya Gate that allow people to get an entry into the society from National Highway and MPS Road.
                            </p>
                        </section>

                        {/* Accessibiulities */}
                        <section className="mb-12">
                            <h2 className="text-3xl font-bold mb-4 text-start">DHA Multan Accessibilities</h2>
                            <p className="text-lg leading-relaxed">
                                DHA Multan is present at a prime location in the Multan City, providing an excellent connectivity to residents, ensuring that they have easy access to key areas within and around Multan. Here are some key accessibilities of DHA Multan:
                            </p>
                            <p className="text-lg leading-relaxed">
                                <ul className='list-disc ml-5'>
                                    <li>Almost 2 minute drive from Buch Villas</li>
                                    <li>Almost 3 minute drive from Bahaudin Zakariya University</li>
                                    <li>Almost 9 minute drive from Model Town</li>
                                    <li>Almost 10 minute drive from Multan Airport</li>
                                    <li>Almost 13 minutes from Nawabpur Road</li>
                                    <li>Almost 15 minutes from Canal Road</li>
                                    <li>Almost 22 minutes from Khanewal Road</li>
                                    <li>Almost 30 minutes from Piran Ghaib Road</li>
                                </ul>
                            </p>
                        </section>

                        {/* DHA Multan Nearby Landmarks*/}
                        <section className="mb-12">
                            <h2 className="text-3xl font-bold mb-4 text-start">DHA Multan Nearby Landmarks</h2>
                            <p className="text-lg leading-relaxed">
                                DHA Multan is strategically located to offer easy access to a variety of landmarks and luxurious amenities in the Multan City. The nearby landmarks of DHA Multan are listed below:
                            </p>
                            <p className="text-lg leading-relaxed">
                                <ul className='list-disc ml-5'>
                                    <li>PIA Employees Housing</li>
                                    <li>MDA Officers Colony</li>
                                    <li>Wapda Town</li>
                                    <li>Shalimar Colony</li>
                                    <li>Hamid Nagar</li>
                                    <li>Bosan Road</li>
                                    <li>Multan Cantonment Area</li>
                                    <li>Citi Housing Multan</li>
                                </ul>
                            </p>
                        </section>

                        {/* DHA Multan Sectors */}
                        <section className="mb-12">
                            <h2 className="text-3xl font-bold mb-4 text-start">
                                DHA Multan Sectors
                            </h2>
                            <p className="text-lg leading-relaxed">
                                DHA Multan is divided into multiple sectors, each sector is designed to provide a high standard of living with a range of residential and commercial options. Most sectors feature residential plots with a mix of plot sizes, catering to different needs. Moreover, every sector provides residents with a blend of modern living and a secure environment. Its sectors are enlisted below:
                            </p>
                            <p className="text-lg leading-relaxed">
                                <ul className='list-disc ml-5'>
                                    <li>DHA Sector A</li>
                                    <li>DHA Sector B1</li>
                                    <li>DHA B2</li>
                                    <li>DHA C</li>
                                    <li>DHA D</li>
                                    <li>DHA E</li>
                                    <li>DHA F</li>
                                    <li>DHA G</li>
                                    <li>DHA H</li>
                                    <li>DHA I</li>
                                    <li>DHA J</li>
                                    <li>DHA K</li>
                                    <li>DHA L</li>
                                    <li>DHA M</li>
                                    <li>DHA N</li>
                                    <li>DHA O</li>
                                    <li>DHA P</li>
                                    <li>DHA Q</li>
                                    <li>DHA R</li>
                                    <li>DHA S</li>
                                    <li>DHA T</li>
                                    <li>DHA U</li>
                                    <li>DHA V</li>
                                    <li>DHA W1</li>
                                    <li>DHA W2</li>
                                    <li>DHA X</li>
                                    <li>DHA Y</li>
                                    <li>DHA Central Square</li>
                                    <li>DHA Education City</li>
                                    <li>DHA Villas Multan</li>
                                    <li>Rumanza Golf & Country Club</li>
                                </ul>
                            </p>

                            <p className="text-lg leading-relaxed mt-3">Most of these sectors have 1 kanal plots, while 8 Marla, 10 Marla, and 2 kanal plots are available in V, U, and N sector. In addition, 5 Marla plots are available in P, T, and V sectors. The DHA Villas are available in 6, 9, and 12 Marla. The residential plots, parks, playgrounds, mosques, and a few other features are present in almost every sector. In the B2 Sector, workshops and commercial hubs are present. DHA nursery, Jinnah gate, Shahra-e-Quaid-e-Azam, and a 35-floored serene tower are present in Sector C. This 35-floored tower has 640 apartments, gymnasium, penthouses, etc. Furthermore, Sector D of Defense Housing Authority offers residential plots of 1 Kanal cutting and features Mango Enclave, healthcare center, IMARAT Builders Mall, parks, playgrounds, and plots for residence and commercial purpose. In the center of sector I, K, M, N, DHA Central Square is present.
                            </p>
                        </section>


                        {/* Rumanza Golf Community */}
                        <section className="mb-12">
                            <h2 className="text-3xl font-bold mb-4 text-start">Rumanza Golf Community</h2>
                            <p className="text-lg leading-relaxed">
                                Rumanza golf community covering an area of 285 acres offers a lavish residential experience, indoor recreational activities, gym, pools, and green spaces. It has mosque to improve spiritual environment, a golf course, and a 5-star restaurant. The residential plots of 12 Marla, 1 Kanal, 2 Kanal, and 4 Kanal are available for sales and the homes will provide views of the golf course. Moreover, 80 feet wide ring roads provide quick access to 45 feet street roads linked to golf course. Golf community features Rumanza club house offering peninsula views, rooftop restaurant, recreational facilities. Its grey structure is complete and the construction is in process. It is a perfect venue to relax after a golf game, swimming, and exercise.
                            </p>
                        </section>


                        {/* Paymemnt Plans */}
                        <section className="mb-12">
                            <h2 className="text-3xl font-bold mb-4 text-start">
                                DHA Multan Payment Plan
                            </h2>
                            <p className="text-lg leading-relaxed">
                                There are no plots available on installments in  DHA Multan. You can get a plot on cash payment. For further details, contact <Link to="/" className='text-blue-500 hover:underline'>IES Marketing</Link> team.
                            </p>
                            {/* <div className='flex justify-start items-start mt-10 gap-3 flex-wrap'>
                    <img src={payementPlan1} alt="" className='mx-auto max-w-[400px] border rounded-2xl transition-all duration-[0.5s] hover:border-blue-800 hover:shadow-2xl' />
                    <img src={payementPlan2} alt="" className='mx-auto max-w-[400px] border rounded-2xl transition-all duration-[0.5s] hover:border-blue-800 hover:shadow-2xl' />
                </div> */}

                        </section>

                        {/* conclusion */}
                        <section className="mb-12">
                            <h2 className="text-3xl font-bold mb-4 text-start">
                                Conclusion
                            </h2>
                            <p className="text-lg leading-relaxed">
                                Defense Housing Authority is renowned for its high-quality projects and trustworthiness across Pakistan. Similarly, DHA Multan meets high standards of quality and reliability. It offers multitude of benefits to residents and investors because properties in DHA projects tend to increase over time due to high demand and quality of development. To make this community appealing and functional, several innovative or sustainable developmental practices are introduced by developer. Furthermore, the name of Defense Housing Authority carries weight and trust in real estate industry and makes sure that the investment is secure. You can contact IES Marketing for further guidance about investment and visit the office to seek help from our professional team.
                            </p>
                        </section>


                        {/* FAQS */}
                        <section className="mb-12">
                            <h2 className="text-3xl font-bold mb-4">
                                FAQS
                            </h2>
                            <h4 className="text-xl font-semibold mt-5 text-start">
                                Where is DHA Multan located?
                            </h4>
                            <p className="text-[15px] sm:text-lg leading-relaxed">
                                DHA Multan is connected to major routes and landmarks in Multan city allowing people to access popular places within a few minutes. Muza Sangi, Mouza Garay Wala, and Mouza Kotla are adjacent to DHA Multan. In addition, it can be accessed from four different gates, including Shah Yousaf Gardez, Shah Shams Tabraiz, Shah rukn-e-alam, and Bahaudin Zakariya Gates. Also, it will take around 30 minutes to reach from Piran Ghaib Road.
                            </p>
                            <h4 className="text-xl font-semibold mt-5 text-start">
                                Why should I invest in DHA Multan?
                            </h4>
                            <p className="text-[15px] sm:text-lg leading-relaxed">
                                Investing in DHA Multan offers several compelling reasons for short and long-term investment, but the primary reason is the credibility of DHA developers. Moreover, its speedy development, smart facilities, high-quality infrastructure, prime location, and eco-friendly atmosphere make it a worth investment. Furthermore, it provides a luxurious and affordable lifestyle to people.
                            </p>
                            <h4 className="text-xl font-semibold mt-5 text-start">
                                What amenities are present in DHA Multan?
                            </h4>
                            <p className="text-[15px] sm:text-lg leading-relaxed">
                                DHA Multan offers a combination of security, luxury, growth potential, and provides a wide range of amenities, like gated community, CCTV surveillance, wide main-boulevard and well-planned roads, recreational opportunities, and local markets or shopping malls. In addition, mosques, swimming pools, fitness centers, cinemas, and other modern facilities are also present to facilitate the residents of the DHA Multan.
                            </p>
                            <h4 className="text-xl font-semibold mt-5 text-start">
                                Is DHA Multan the largest DHA in Pakistan?
                            </h4>
                            <p className="text-[15px] sm:text-lg leading-relaxed">
                                DHA Multan is not the largest Defense Housing Authority’s project, but it covers almost 10,000 acres land area. This project started in 2013 to meet the housing standards of South Punjab. DHA Lahore is largest among all DHA projects across Pakistan and renamed as Lahore Cantonment Cooperative Housing Society, but subsequently converted to DHA Lahore in 1999.
                            </p>
                            <h4 className="text-xl font-semibold mt-5 text-start">
                                In which cities projects of Defense Housing Authority are present?
                            </h4>
                            <p className="text-[15px] sm:text-lg leading-relaxed">
                                DHA projects are present in ten different cities of Pakistan, but developers are planning to introduce an innovative urban living lifestyle in almost every city of Pakistan.  Their completed projects include:
                            </p>
                            <p className="text-[15px] sm:text-lg leading-relaxed">
                                <ul className='list-disc ml-5'>
                                    <li>DHA Islamabad</li>
                                    <li>DHA Karachi</li>
                                    <li>DHA Lahore</li>
                                    <li>DHA Rawalpindi</li>
                                    <li>DHA Bahawalpur</li>
                                    <li>DHA Quetta</li>
                                    <li>DHA Gujranwala</li>
                                    <li>DHA Peshawar</li>
                                    <li>DHA Hyderabad</li>
                                    <li>DHA Valley</li>
                                </ul>
                            </p>
                            <h4 className="text-xl font-semibold mt-5 text-start">
                                How many balloting events are held in DHA Multan?
                            </h4>
                            <p className="text-[15px] sm:text-lg leading-relaxed">
                                Until now, two balloting events are conducted in DHA Multan in which all of their plots were sold. First balloting event was held in 2019, while the second event was held 3 years before in 2021. Within 3 years, most of the development in DHA is completed while a few of the society’s projects are about to complete in a short time period.
                            </p>
                        </section>

                    </div>
                </div>

                {/* Images */}
                <section className='mb-12 px-2 sm:px-5'>
                    <h2 className="text-3xl font-bold mb-4 text-center pb-4">Images Of DHA Multan</h2>
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
                    <h2 className="text-3xl font-bold mb-4 text-start">Disclaimer</h2>
                    <p className="text-xl font-semibold mt-5">
                        We collect information from credible and authentic online sources to provide up-to-date property details. We make no representations or claims about the accuracy of the data. We do not claim liability in case of any financial and investment-related losses experienced by users. Potential buyers or users are urged to exercise caution and take full responsibility for their investment.
                    </p>
                </section>



                <OurProjects showHelmet={false} />

            </div>
        </>
    )
}

export default DHAMultan
