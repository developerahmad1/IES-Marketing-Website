import React from 'react'
import ApplicationForm from '../../Components/ApplicationForm';
    import Head from 'next/head'

const SalesTeam = () => {
    return (
        <>
            <Head>
                <title>Sales Operation Coordinator Team - IES Marketing</title>
                <meta name="description" content="Sales Operation Coordinator Team – IES Marketing" />
            </Head>

            <div>
                <div className="bg-gray-900 text-white text-justify min-h-screen py-12 px-4 md:px-20">
                    <h5 className="text-4xl font-bold text-center mb-8">
                        Sales Operations Coordinator Job Description
                    </h5>


                    <div className="max-w-[1000px] mx-auto">
                        <section className="mb-12">
                            <p className="text-[15px] sm:text-lg leading-relaxed">
                                We are seeking a detail-oriented and organized Sales Operations Coordinator to join our real estate company. The ideal candidate will support the sales team by managing daily operations, ensuring smooth processes, and helping to achieve sales targets.
                            </p>

                            <p className="mt-3 text-2xl font-bold text-[#ff8e2b] leading-relaxed">
                                Responsibilities:
                            </p>
                            <ul className="text-[15px] sm:text-lg leading-relaxed text-start">
                                <li>Assist the sales team with managing daily operations and ensuring efficiency.</li>
                                <li>Coordinate and track the sales process from lead generation to deal closing.</li>
                                <li>Maintain accurate records of sales activities, client interactions, and pipeline updates.</li>
                                <li>Generate and analyze reports to track performance metrics and identify areas for improvement.</li>
                                <li>Work closely with the marketing and sales teams to align strategies and meet goals.</li>
                                <li>Ensure all sales documentation and contracts are properly processed and filed.</li>
                                <li>Manage communication between different departments to facilitate seamless sales operations.</li>
                                <li>Help develop and implement efficient workflows and processes to support sales growth.</li>
                            </ul>

                            <p className="mt-3 text-2xl font-bold text-[#ff8e2b] leading-relaxed">
                                Qualifications:
                            </p>
                            <ul className="text-[15px] sm:text-lg leading-relaxed text-start">
                                <li>Bachelor&apos;s degree or equivalent experience in sales or business administration.</li>
                                <li>2+ years of experience in sales operations or a similar role.</li>
                                <li>Strong organizational skills and attention to detail.</li>
                                <li>Ability to analyze data and generate reports.</li>
                                <li>Excellent communication and interpersonal skills.</li>
                                <li>Proficiency in Microsoft Office and CRM software.</li>
                                <li>Ability to work in a fast-paced environment and manage multiple tasks.</li>
                            </ul>

                            <div className='my-5'>
                                <p className="text-[15px] sm:text-[18px] leading-relaxed">
                                    <span className='font-bold  text-[#ff8e2b] text-[20px]'>Job Category : </span> Sales Team
                                </p>
                                <p className="text-[15px] sm:text-[18px] leading-relaxed">
                                    <span className='font-bold  text-[#ff8e2b] text-[20px]'> Job Type : </span> Full Time
                                </p>
                                <p className="text-[15px] sm:text-[18px] leading-relaxed">
                                    <span className='font-bold  text-[#ff8e2b] text-[20px]'>Location : </span> Multan
                                </p>
                            </div>

                            <p className="text-[15px] sm:text-lg leading-relaxed">
                                If you are organized, detail-focused, and passionate about supporting sales teams, we&apos;d love to hear from you!
                            </p>
                        </section>
                    </div>
                </div>

                <ApplicationForm jobCategory="Sales Team" />

            </div>
        </>
    )
}

export default SalesTeam
