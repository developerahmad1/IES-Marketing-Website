import React from 'react'
import ApplicationForm from '../../Components/ApplicationForm';
import Head from 'next/head'

const BusinessDevelopmentExecutive = () => {
    return (
        <>
            <Head>
                <title>Business Development Executive Job - IES Marketing</title>
                <meta name="description" content="Business Development Executive – IES Marketing" />
            </Head>

            <div>
                <div className="bg-gray-900 text-white text-justify min-h-screen py-12 px-4 md:px-20">
                    <h5 className="text-4xl font-bold text-center mb-8">
                        Business Development Executive (Female)
                    </h5>


                    <div className="max-w-[1000px] mx-auto">
                        <section className="mb-12">
                            <p className="text-[15px] sm:text-lg leading-relaxed">
                                We are seeking a motivated and experienced Business Development Executive to join our team. The ideal candidate will have experience in real estate sales, building strong relationships with clients, and successfully closing deals.
                            </p>

                            <p className="mt-3 text-2xl font-bold text-[#ff8e2b] leading-relaxed">
                                Responsibilities:
                            </p>
                            <ul className="text-[15px] sm:text-lg leading-relaxed text-start">
                                <li>Develop and maintain relationships with potential clients.</li>
                                <li>Must have at least 2 years of experience in real estate sales.</li>
                                <li>Keep regular contact with existing clients to ensure ongoing business.</li>
                                <li>Oversee and manage the sales pipeline.</li>
                                <li>Study the market to identify competitive advantages.</li>
                                <li>Monitor performance metrics to meet sales targets.</li>
                            </ul>

                            <p className="mt-3 text-2xl font-bold text-[#ff8e2b] leading-relaxed">
                                Requirements:
                            </p>
                            <ul className="text-[15px] sm:text-lg leading-relaxed text-start">
                                <li>Bachelor’s degree with 3+ years of sales experience.</li>
                                <li>Proven success in managing the full sales process, from lead generation to closing deals.</li>
                                <li>Excellent negotiation skills.</li>
                                <li>Strong communication and presentation abilities.</li>
                            </ul>

                            <div className='my-5'>
                                <p className="text-[15px] sm:text-[18px] leading-relaxed">
                                    <span className='font-bold  text-[#ff8e2b] text-[20px]'>Job Category : </span> Business Development Officer
                                </p>
                                <p className="text-[15px] sm:text-[18px] leading-relaxed">
                                    <span className='font-bold  text-[#ff8e2b] text-[20px]'> Job Type : </span> Full Time
                                </p>
                                <p className="text-[15px] sm:text-[18px] leading-relaxed">
                                    <span className='font-bold  text-[#ff8e2b] text-[20px]'>Location : </span> Multan
                                </p>
                            </div>

                            <p className="text-[15px] sm:text-lg leading-relaxed">
                                If you’re a dynamic individual with the required experience, we encourage you to apply!
                            </p>
                        </section>
                    </div>
                </div>

                <ApplicationForm jobCategory="Business Development Executive" />
            </div>
        </>
    )
}

export default BusinessDevelopmentExecutive
