import React from 'react';
import ApplicationForm from '../../Components/ApplicationForm';
import Head from 'next/head';

const RelationShipManager = () => {
    return (
        <>
            <Head>
                <title>Relationship Manager Job - IES Marketing</title>
                <meta name="description" content="Relationship Manager – IES Marketing" />
            </Head>

            <div>
                <div className="bg-gray-900 text-white text-justify min-h-screen py-12 px-4 md:px-20">
                    <h5 className="text-4xl font-bold text-center mb-8">Real Estate Manager Job Description</h5>

                    <div className="max-w-[1000px] mx-auto">
                        <section className="mb-12">
                            <p className="text-2xl font-bold text-[#ff8e2b] leading-relaxed">
                                Responsibilities:
                            </p>
                            <ul className="text-[15px] sm:text-lg leading-relaxed text-start">
                                <li>Engage in activities related to lead generation and public relations.</li>
                                <li>Focus on attracting professionals and potential clients interested in purchasing offices, apartments,
                                    retail, and commercial spaces.</li>
                                <li>Ensure timely execution of deals.</li>
                                <li>Assess and develop new relationships to expand business opportunities.</li>
                                <li>Participate in strategic decisions regarding commercial plans and updates.</li>
                                <li>Offer tailored cross-selling options to potential buyers.</li>
                                <li>Evaluate market demand for real estate properties.</li>
                                <li>Identify ways to enhance company value through real estate assets and solutions.</li>
                                <li>Analyze competitors and offer creative solutions for potential buyers.</li>
                                <li>Work towards achieving business growth targets as set by the Commercial Director.</li>
                            </ul>
                            <p className="mt-3 text-2xl font-bold text-[#ff8e2b] leading-relaxed">
                                Requirements:
                            </p>
                            <ul className="text-[15px] sm:text-lg leading-relaxed text-start">
                                <li>Bachelor’s degree preferred.</li>
                                <li>Strong network and public relations skills.</li>
                                <li>Residence in Islamabad/Rawalpindi.</li>
                                <li>Real estate experience is a plus.</li>
                            </ul>

                            <div className='my-5'>
                                <p className="text-[15px] sm:text-[18px] leading-relaxed">
                                    <span className='font-bold text-[#ff8e2b] text-[20px]'>Job Category:</span> Relationship Manager
                                </p>
                                <p className="text-[15px] sm:text-[18px] leading-relaxed">
                                    <span className='font-bold text-[#ff8e2b] text-[20px]'>Job Type:</span> Full Time
                                </p>
                                <p className="text-[15px] sm:text-[18px] leading-relaxed">
                                    <span className='font-bold text-[#ff8e2b] text-[20px]'>Location:</span> Multan
                                </p>
                            </div>

                            <p className="text-[15px] sm:text-lg leading-relaxed">If you meet these qualifications and are excited about this opportunity, we&apos;d love to hear from you!</p>
                        </section>
                    </div>
                </div>

                {/* ApplicationForm component with jobCategory prop */}
                <ApplicationForm jobCategory="Relationship Manager" />
            </div>
        </>
    );
};

export default RelationShipManager;
