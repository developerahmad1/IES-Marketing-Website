import React from 'react'
import ApplicationForm from '../../Components/ApplicationForm';
import Head from 'next/head'
const VideoHost = () => {
    return (
        <>
            <Head>
                <title>Video Host Job - IES Marketing</title>
                <meta name="description" content="Video Host – IES Marketing" />
            </Head>

            <div>
                <div className="bg-gray-900 text-white text-justify min-h-screen py-12 px-4 md:px-20">
                    <h5 className="text-4xl font-bold text-center mb-8">
                        Video Host (Female) Job Description
                    </h5>


                    <div className="max-w-[1000px] mx-auto">
                        <section className="mb-12">
                            <p className="text-[15px] sm:text-lg leading-relaxed">
                                We are looking for confident and engaging female Video Hosts to join our real estate company. The ideal candidate will be comfortable on camera, presenting property listings, and providing informative content to our audience through video.
                            </p>

                            <p className="mt-3 text-2xl font-bold text-[#ff8e2b] leading-relaxed">
                                Responsibilities:
                            </p>
                            <ul className="text-[15px] sm:text-lg leading-relaxed text-start">
                                <li>Present property listings, market trends, and real estate-related content on video.</li>
                                <li>Host virtual property tours and showcase features of different real estate offerings.</li>
                                <li>Communicate effectively with potential buyers and clients through engaging video content.</li>
                                <li>Collaborate with the marketing team to create video content that aligns with company branding
                                    and goals.
                                </li>
                                <li>Be a confident and personable spokesperson for the company’s services and properties.</li>
                                <li>Research and stay updated on real estate market trends to provide relevant information to viewers.</li>
                                <li>Maintain a professional image and represent the company in a positive light.</li>
                            </ul>

                            <p className="mt-3 text-2xl font-bold text-[#ff8e2b] leading-relaxed">
                                Qualifications:
                            </p>
                            <ul className="text-[15px] sm:text-lg leading-relaxed text-start">
                                <li>Comfortable speaking on camera and presenting to an audience.</li>
                                <li>Strong communication and presentation skills.</li>
                                <li>Previous experience in hosting, media, or presenting is preferred but not required.</li>
                                <li>Basic knowledge of the real estate industry is a plus.</li>
                                <li>Enthusiastic, confident, and personable demeanor.</li>
                                <li>Ability to work in a team environment and take direction.</li>
                            </ul>

                            <div className='my-5'>
                                <p className="text-[15px] sm:text-[18px] leading-relaxed">
                                    <span className='font-bold  text-[#ff8e2b] text-[20px]'>Job Category : </span> Video Host
                                </p>
                                <p className="text-[15px] sm:text-[18px] leading-relaxed">
                                    <span className='font-bold  text-[#ff8e2b] text-[20px]'>Gender : </span> Female
                                </p>
                                <p className="text-[15px] sm:text-[18px] leading-relaxed">
                                    <span className='font-bold  text-[#ff8e2b] text-[20px]'> Job Type : </span> Full Time
                                </p>
                                <p className="text-[15px] sm:text-[18px] leading-relaxed">
                                    <span className='font-bold  text-[#ff8e2b] text-[20px]'>Location : </span> Multan
                                </p>
                            </div>

                            <p className="text-[15px] sm:text-lg leading-relaxed">
                                If you’re excited about real estate and have a talent for connecting with people on video, we encourage you to apply!
                            </p>
                        </section>
                    </div>
                </div>

                <ApplicationForm jobCategory="Video Host" />
            </div>
        </>
    )
}

export default VideoHost
