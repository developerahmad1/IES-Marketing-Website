import React from 'react'
import Link from 'next/link'

const BlogsCard = ({link, heading, img, alt, imgTitle,}) => {
    return (
        <div>
            <Link
                href={link}
                onClick={scrollToTop}
                className="relative flex flex-col cursor-pointer border border-gray-300 rounded-2xl transition-all duration-[0.5s] hover:border-blue-800 hover:shadow-2xl text-gray-700 bg-white bg-clip-border"
            >
                <div className="overflow-hidden text-white shadow-lg bg-clip-border rounded-t-xl bg-blue-gray-500 shadow-blue-gray-500/40">
                    <Image
                        src={img}
                        alt={alt}
                        title={imgTitle}  
                        className="w-full h-full rounded-t-2xl"
                    />
                </div>
                <div className="p-6">
                    <h2 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                        {heading}
                    </h2>
                    {/* <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                </p> */}
                </div>
                <div className="p-6 pt-0">
                    <button
                        className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                        type="button"
                    >
                        View More
                    </button>
                </div>
            </Link>

        </div>
    )
}

export default BlogsCard
