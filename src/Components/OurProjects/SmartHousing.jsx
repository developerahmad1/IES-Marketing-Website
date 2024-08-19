import React from 'react';
import "../Css/SmartHousing.css";
import { useParams } from 'react-router-dom';
import img1 from "../../assets/SmartHousing.jpg";  // Importing the image
import OurProjects from '../OurProjects';

const SmartHousing = () => {
    const { id } = useParams();
    console.log("id : ", id);

    return (
        <div className='mt-[100px]'>
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
                                        Smart Housing Multan  – Innovative Urban Living                                    </h2>
                                    <p className="max-w-3xl mx-auto mb-10 text-lg text-gray-300">
                                    Smart Housing Society Multan is a trustable and transparent society, offering contemporary living and urban convenience with a rapidly developing landscape.                                    </p>
                                    <a
                                        className="inline-block w-full md:w-auto mb-4 md:mr-6 py-5 px-8 text-sm font-bold uppercase border-2 border-transparent bg-gray-200 rounded hover:bg-gray-100 text-gray-800 transition duration-200"
                                        href="#"
                                    >
                                        Book Now
                                    </a>
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
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-4">Introduction</h2>
                        <p className="text-lg leading-relaxed">
                        Smart Housing Multan (SHM) is a modern housing society in the City of Saints with cutting-edge automation systems and modern infrastructure. It is situated at a prime location as people can easily reach it by driving a few minutes from M5 Motorway Interchange, Nishter 2, and Muhammad Nawaz Sharif University of Agriculture.                         </p>
                        Moreover, it is located along the routes leading to Muzzafargarh, Shujabad, and Dera Ghazi Khan, making it an ideal spot for investment and residence. It has 220 feet wide main entrance and 110 feet main boulevard. The residents can enjoy exclusive perks, elite amenities, and upscale conveniences by choosing Smart Housing Society.
                    </section>

                    {/* Smart Housing Developer History and Owners Section */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-4">Smart Housing Developer History and Owners</h2>
                        <p className="text-lg leading-relaxed">
                        The owner and developer of Smart Housing Society is Mr. Malik Muhammad Zafar, CEO of M Zafar & Company (MZ&Co.). Mr. Malik Muhammad Akhter is a Managing Director of the company and Mr, Malik Muhammad Safdar Dirctor Sales and Marketing, working on this housing project. It is the 7th project of Mr. Zafar & Company that gained recognition in the real estate industry by working on multiple top-notch projects and fulfilling its promise to provide land for everyone. This company was established in 2014 and promised to provide a luxurious and comfortable lifestyle in Pakistan.                        </p>
                    </section>

                    {/* Smart Housing NOC Status Section */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-4">Smart Housing NOC Status</h2>
                        <p className="text-lg leading-relaxed">
                        Smart Housing is an authentic project verified by the development authorities and got technical approval in accordance with the Punjab Development Authorities Private Housing Scheme Rules 2021. On 24th November 2022, the society's owners applied for a "No Objection Certificate" from the Multan Development Authority (MDA) and got approval from the Directorate of Urban Approval on 1st February 2023. Its total land area is 224 Kanal, according to the data provided in the official document approved by the government authorities. The developers are directed to accelerate the development process and introduce basic facilities into society within a few months.                        </p>
                    </section>

                    {/* Smart Housing Development Status Section */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-4"></h2><p>Smart housing development is ongoing, and advanced technologies are integrated to establish a luxurious and comfortable living environment. It has all the basic facilities, including water supply, education and sports complexes, hospitals, and mosques. In addition, it features a smart and captivating entrance design crafted with appealing lights and modern materials. Smart Officers Club provides many facilities to residents. This smart club also serves as an ideal venue for professional and social engagements, like seminars, corporate events, musical evenings, etc.
                        A smart Islamic centre and Jamia masjid are also present in the Smart Housing that is accessible by visitors or society residents and contributes to their spiritual growth. Their remarkable architecture and commitment to sustainable living make it an essential part of the landscape. Additionally, it also features smart street lights with motion sensors that alter the light intensity according to traffic flow on the road. Smart Surveillance System utilizes the latest CCTV technology for real-time monitoring. Homeowners can monitor their houses through their smartphones. These cameras provide quick alerts when unusual activities are detected
                        </p>
                    </section>

                    {/* Main Features of Smart Housing Society Section */}
                    <section className="mb-12">
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
                    </section>

                    {/* Smart Housing Location Section */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-4">Smart Housing Location</h2>
                        <p className="text-lg leading-relaxed">
                        Smart Housing is located in Mouza Alamgir near Nag Shah Chowk and M5 Motorway on Main Shujabad Road in Multan City. This housing project is 5 to 30 minutes away from popular spots in Multan, like Multan Cantt, Multan Bypass, Multan International Airport, etc., catering to the diverse needs of its residents.                        </p>
                    </section>

                    {/* Smart Housing Multan Block Section */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-4">Smart Housing Multan Block</h2>
                        <p className="text-xl font-semibold mb-2">Smart Housing Multan can be accessed from multiple routes:</p>
                        <li>Just 2 minutes from Nag Shah Chowk</li>
                        <li>Just 5 minutes from Zakariya Road</li>
                        <li>Just 6 minutes from M4 Motorway (Multan-Faisalabad)</li>
                        <li>Just 7 minutes from M5 Motorway (Multan-Sukkur)</li>
                        <li>Just 10 minutes from Khudadad Road</li>
                        <li>Just 10 minutes from Khudadad Road</li>
                        <li>Just 12 minutes from Multan Cantt</li>
                        <li>Just 15 minutes from Sher Shah Road</li>
                    </section>
                </div>
            </div>


            <OurProjects />
        </div>
    );
};

export default SmartHousing;
