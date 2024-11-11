import Head from "next/head";
import Link from "next/link.js";
import React from "react";
import Image from "next/image";
import SocialMediaSection from "../../Components/SocialMediaSection.js";
import img1 from "../../public/Blogs/Blog15.webp";

const Demo_Blog = () => {
  return (
    <div>
      <Head>
        <title>De Orion Mall</title>
        <meta
          name="description"
          content="Real Estate in Pakistan: Opportunities & Challenges"
        />

        <meta name="keywords" content="" />
        <link
          rel="canonical"
          href="https://www.iesmkt.com/blog/de-orion-mall/"
        />
      </Head>

      <div className="bg-white">
        <div className="max-w-screen-lg mx-auto">
          <main className="mt-">
            <div className="mb-4 md:mb-0 w-full mx-auto relative">
              <div className="px-4 py-2 sm:py-2 lg:px-0">
                <Image
                  src={img1}
                  alt="De Orion Mall Image"
                  title="De Orion Mall Image"
                  className="mx-auto"
                />
                <h1 className="text-3xl sm:text-4xl font-semibold text-gray-800 leading-tight mt-8">
                  De Orion Mall: Introducing a Perfect Hub for Business
                </h1>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row lg:space-x-12 text-justify">
              <div className="px-4 lg:px-0 mt-12 text-gray-700 text-lg leading-relaxed w-full lg:w-3/4">
                {/* Blog content Srart Here here */}
                <h2 className="text-3xl text-gray-800 font-semibold mt-4">
                  Introduction
                </h2>

                <h2 className="text-3xl text-gray-800 font-semibold mt-4">
                  Disclaimer
                </h2>
                <p className="pb-6">
                  We do not deal in any unapproved society of Multan. The
                  information provided in this blog is collected from different
                  online sources to provide details about real estate.
                </p>

                {/* Blog content Ends Here here */}
              </div>
              <SocialMediaSection />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Demo_Blog;


// &apos;