import React from 'react'
import { Helmet } from 'react-helmet-async';
import { useAppContext } from '../../Context/AppContext';

import img1 from "../../assets/wapdaTownImg.jpg";
import img2 from "../../assets/wapdatown3.jpg";
import { Link } from 'react-router-dom';

const WapdaTown = () => {
    const { openLeadpoup } = useAppContext()

    return (
        <>
            <Helmet>
                <title>Smart Housing Multan</title>
                <meta name="description" content="Smart Housing Multan – . IES Marketing" />
            </Helmet>

            <div>
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
                                            Wapda Town Multan – Classic Comforts with Lasting Value
                                        </h2>
                                        <p className="max-w-3xl mx-auto mb-10 text-lg text-gray-300">
                                            Wapda Town Multan is a gated residential community developed to cater to the housing needs of employees of the Water and Power Development Authority (WAPDA).
                                        </p>
                                        <div onClick={openLeadpoup}>
                                            <a
                                                className="inline-block w-full md:w-auto mb-4 md:mr-6 py-5 px-8 text-sm font-bold uppercase border-2 border-transparent bg-gray-200 rounded hover:bg-gray-100 text-gray-800 transition duration-200"
                                                href="https://wa.me/923338400106?text=Hi.%20Sir%20I%20am%20interested%20in%20Wapda%20Town.%20Can%20get%20More%20Information%20About%20it%20?" target='_main'
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
                <div className="bg-white text-black text-justify min-h-screen py-12 px-4 md:px-20">
                    <div className="max-w-4xl mx-auto">

                        {/* Introduction Section */}
                        <section className="mb-2">
                            <h2 className="text-3xl font-bold mb-4">Introduction</h2>
                            <p className="text-lg leading-relaxed">
                                Smart Housing Multan (SHM) is a modern housing society in the City of Saints with cutting-edge automation systems and modern infrastructure. It is situated at a prime location as people can easily reach it by driving a few minutes from M5 Motorway Interchange, Nishter 2, and Muhammad Nawaz Sharif University of Agriculture. </p>
                            <p className='text-lg leading-relaxed'>
                                Moreover, it is located along the routes leading to Muzzafargarh, Shujabad, and Dera Ghazi Khan, making it an ideal spot for investment and residence. It has 220 feet wide main entrance and 110 feet main boulevard. The residents can enjoy exclusive perks, elite amenities, and upscale conveniences by choosing Smart Housing Society.
                            </p>
                        </section>
                        <img src={img2} alt=""  className='mb-12'/>

                        {/* Wapda Town Developer History and Owners Section */}
                        <section className="mb-12">
                            <h2 className="text-3xl font-bold mb-4 text-start">Wapda Town Multan Developer History and Owners</h2>
                            <p className="text-lg leading-relaxed">
                                Wapda Town is developed by the WAPDA Employees Cooperative Housing Society, which has developed several other successful housing projects across Pakistan. Moreover, this organization looks after the welfare of employees of any grade or job position. The developers have a reputation for delivering quality infrastructure and timely development with state-of-the-art amenities. Accordingly, WECHS has developed Wapda town very well and introduced all basic to advanced amenities in the society.
                            </p>
                        </section>

                        {/* Wapda Town Multan NOC Status */}
                        <section className="mb-12">
                            <h2 className="text-3xl font-bold mb-4 text-start">Wapda Town Multan NOC Status</h2>
                            <p className="text-lg leading-relaxed">
                                The Multan Development Authority (MDA) officially approved the NOC of Wapda Town Multan. This approval ensures that the project is legally compliant, making it safe for investment and residency. So, there is nothing to worry about regarding legal concerns, as MDA announced this society to be safe or secure for residential and commercial investment.
                            </p>
                        </section>

                        {/* Wapda Town Multan Development Status */}
                        <section className="mb-12">
                            <h2 className="text-3xl font-bold mb-4 text-start">
                                Wapda Town Multan Development Status
                            </h2>
                            <p className='text-lg leading-relaxed'>The developmental process of Wapda Town Multan is at its peak, as only a few plots are available for sale. Many families live there, and a large number of houses have been built there. Sewage disposal systems, underground electrification, and water resources are available. Moreover, wide carpeted roads, graveyard, grand mosque, club house, commercial hub, and other infrastructural developments can be seen there. This gated community also offers a 24/7 security system, health facilities, an education complex, and a community centre, allowing you to build your house and live an ideal life without facing any complications.
                            </p>
                        </section>

                        {/* Main Features of Wapda Town Multan */}
                        <section className="mb-12">
                            <h2 className="text-3xl font-bold mb-4 text-start">Main Features of Wapda Town Multan</h2>
                            <p className="text-lg leading-relaxed">
                                <p>Some prominent features of Wapda Town Multan are:</p>
                                <li>Grand Mosque</li>
                                <li>Eco-friendly environment</li>
                                <li>Graveyard</li>
                                <li>Water resources</li>
                                <li>Underground electrification</li>
                                <li>Quality development</li>
                                <li>Sewage disposal system</li>
                                <li>Education Complex</li>
                                <li>Affordability</li>
                                <li>Community center</li>
                                <li>Health facilities</li>
                                <li>Education Complex</li>
                                <li>Commercial hub</li>
                                <li>Secure community</li>
                                <li>High-quality infrastructure</li>
                                <li>Club House</li>
                                <li>Retail Area</li>
                                <li>Medical facilities</li>
                                <li>Sports Complex</li>
                                <li>24/7 Security</li>
                                <li>Gated-community</li>
                            </p>
                        </section>

                        {/* Location of Wapda Town Multan */}
                        <section className="mb-12">
                            <h2 className="text-3xl font-bold mb-4 text-start">
                                Location of Wapda Town Multan
                            </h2>
                            <p className="text-lg leading-relaxed">
                                Wapda Town Multan is located in a prime location in Multan, and residents can easily access commercial hubs and educational institutions. This location offers a balanced mix of urban convenience and suburban tranquility. You can reach it after a few minutes of driving from MPS Road, M.A. Jinnah Road, Bosan Road, and Northern Bypass.
                            </p>
                        </section>


                        {/* Wapda Town Multan Accessibilities */}
                        <section className="mb-12">
                            <h2 className="text-3xl font-bold mb-4 text-start">Wapda Town Multan Accessibilities</h2>
                            <p className="text-xl font-semibold mb-2">There are many routes to reach Wapda Town Multan, as it is located a few minutes away from popular landmarks.</p>
                            <li>Around a 2-minute drive from MPS Road</li>
                            <li>Almost a 3-minute drive from M.A Jinnah Road</li>
                            <li>Around a 5-minute drive from BZU Multan</li>
                            <li>Nearly a 6-minute drive from Bosan Road and ISP</li>
                            <li>Around an 8-minute drive from Southern Bypass Multan</li>
                        </section>


                        {/* popular land marks */}
                        <section className="mb-12">
                            <h2 className="text-3xl font-bold mb-4 text-start">Popular Landmarks near Wapda Town Multan</h2>
                            <p className="text-xl font-semibold mb-2">Some of the popular Landmarks present near Wapda Town are:</p>
                            {/* <p className="text-lg leading-relaxed"></p> */}
                            <ul className='list-disc'>
                                <li>Zakariya Town</li>
                                <li>PIA Employees Housing</li>
                                <li>Bahaudin Zakariya University, Multan</li>
                                <li>Institute of Southern Punjab</li>
                                <li>Multan Public School & College</li>
                                <li>Zakariya Town</li>
                                <li>NFC Institute of Engineering & Technology</li>
                                <li>Model Town</li>
                                <li>Royal Orchard Multan</li>
                                <li>Women's University, Mattital Campus</li>
                                <li>Bakhtawar Amin Medical and Dental College</li>
                            </ul>
                        </section>

                        {/* Wapda Town Multan Phases */}
                        <section className="mb-12">
                            <h2 className="text-3xl font-bold mb-4 text-start">
                                Wapda Town Multan Phases
                            </h2>
                            <p className="text-lg leading-relaxed">
                                Wapda Town Multan is divided into several phases to accommodate the growing demand for residential plots. The phase is a fully developed phase of Wapda Town, located near Northern Bypass Road. It is also present in Mouza Durana Langana and Babran Wala. It is divided into blocks A, B, C, D, and E. In addition, phase II is also located near Northern Bypass Road, but at some distance from the first phase I.
                            </p>
                            <p className="text-lg leading-relaxed">
                                It is present in Mouza Durana Langana and Bua Pur. It also has six blocks: P, Q, R, S, M, and N. After the successful development of Phases I and II, Phase III was launched to provide newer residential plots. It is located at Mattital, on LMQ road Multan, and promises modern facilities, including wide roads, green landscapes, parks, etc. This block was announced in 2013 and is present in Mouza Madina.
                            </p>
                        </section>


                        {/* Payment Plans */}
                        <section className='mb-12'>
                            <h2 className="text-3xl font-bold mb-4 text-start">Wapda Town Multan Payment Plan </h2>
                            <p className="text-lg leading-relaxed">
                                The residential and commercial plots in Wapda Town are not available in instalments as this society is mostly developed and occupied by residents. You can get 5, 7, 10 Marla, and 1 Kanal residential plots on cash payment. Per Marla rates of plots vary in different phases, so contact us to know the current prices of property in Wapda Town Multan.
                            </p>
                        </section>

                        {/* Conclusion */}
                        <section className='mb-12'>
                            <h2 className="text-3xl font-bold mb-4 text-start">Conclusion</h2>
                            <p className="text-lg leading-relaxed">
                                In conclusion, Wapda Town Multan is a well-established and legally approved housing society. Developed by the Wapda Employees Cooperative Housing Society, it has grown into a thriving community, providing a perfect living spot to government employees and the general public. Due to its strategic location, legal clearance, and reputation, Wapda Town Multan has emerged as a solid investment choice. It caters to end-users and investors, offering lucrative capital gains and rental income opportunities.
                            </p>
                            <p className="text-lg leading-relaxed">
                                Contact IES Marketing or visit the office for more details and better guidance. We will find the best plot for you thatfulfills the requirements of a dream house. We deal in many other popular housing schemes, including <Link to="/project/smart-housing" className='text-blue-500 hover:underline'>Smart Housing Multan</Link> , <Link to="/project/adams-housing" className='text-blue-500 hover:underline'>Adams Housing Multan</Link>, Multan Central, <Link to="/project/royal-swiss" className='text-blue-500 hover:underline'>Royal Swiss</Link>, <Link to="/project/royal-orchard" className='text-blue-500 hover:underline'>Royal Orchard</Link>, <Link to="/project/DHA-multan" className='text-blue-500 hover:underline'>DHA Multan</Link>, Model Town, and <Link to="/project/citi-housing" className='text-blue-500 hover:underline'>Citi Housing Multan</Link>. You can reach out to our team for bookings and suggestions related to investment.
                            </p>
                        </section>

                        {/* FAQS */}
                        <section className='mb-12'>
                            <h3 className="text-3xl font-bold mb-4 text-start">FAQS</h3>
                            <h3 className="text-xl font-semibold mt-3 text-start">Where is Wapda Town located in Multan?</h3>
                            <p className=" text-lg leading-relaxed">
                                Wapda Town Multan is located in a prime location in Multan, some distance from the Main Bosan Road. Its proximity to Bosan Road connects it to important hubs like Multan Public School Road and Northern Bypass. The first two phases are located on the Northern Bypass Road, while the third is at LMQ Road.
                            </p>
                            <h3 className="text-xl font-semibold mt-5 text-start">Who is the developer of Wapda Town Multan?</h3>
                            <p className="text-lg leading-relaxed">
                                It was developed by the Wapda Employees Cooperative Housing Society, Multan. This organization was established to provide housing solutions for the employees of the Water and Power Development Authority. Later, this project was expanded beyond Wapda employees to the general public.
                            </p>
                            <h3 className="text-xl font-semibold mt-5 text-start">Is Wapda Town Multan a legal society?</h3>
                            <p className="text-lg leading-relaxed">Wapda Town Multan is a legal society with a No Objection Certificate (NOC) approved by the Multan Developmental Authority (MDA). It is a safe and credible option for investment and residency. This legal status adds to its reputation and assures buyers and investors regarding their property rights.
                            </p>
                        </section>




                    </div>
                </div>



            </div>
        </>
    )
}

export default WapdaTown
