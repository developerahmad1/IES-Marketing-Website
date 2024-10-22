import React, { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';

const Gallery = () => {
    const images = [
        "/SmartHousing.webp", "/smarthousing2.webp", "/smarthousing3.webp", "/smarthousing4.webp", "/smarthousing5.webp",
        "/smarthousing6.webp", "/smarthousing7.webp", "/smarthousing8.webp", "/smarthousing9.webp",
        "/royal orchad 1.jpg", "/royal orchad 2.jpg", "/royal orchad 4.jpg",
        "/DHA 2.webp", "/smarthousing10.webp", "/DHA 3.webp", "/DHA 6.webp",
        "/AdamsHousing1.jpg", "/AdamsHousing2.jpg"
    ];

    const [loading, setLoading] = useState(Array(images.length).fill(true));

    const handleImageLoad = (index) => {
        setLoading((prevLoading) => {
            const newLoading = [...prevLoading];
            newLoading[index] = false;
            return newLoading;
        });
    };

    return (
        <div className='-mt-[90px]'>
            <Head>
                <title>Images Of Multan Societies</title>
                <meta name="description" content="Images of top societies in Multan." />
                <meta name='keywords' content='Multan Images, Multan Societies, Multan Societies images'/>
            </Head>

            <div>
                <section className='mb-12'>
                    <h1 className="text-3xl font-bold mb-4 text-center pb-4 mt-[120px]">Images Of Multan Societies</h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {images.map((src, index) => (
                            <div
                                key={index}
                                className="relative w-full h-48 md:h-64 lg:h-80 bg-gray-200 flex items-center justify-center overflow-hidden border rounded-2xl transition-all duration-[0.5s] hover:border-blue-800 hover:shadow-2xl"
                            >
                                {loading[index] && (
                                    <div className="absolute inset-0 flex items-center justify-center z-10">
                                        <Image
                                            src="/loader.gif"
                                            alt="Loading..."
                                            width={50}
                                            height={50}
                                            className="w-28 h-28 object-contain"
                                        />
                                    </div>
                                )}
                                <Image
                                    className={`absolute inset-0 object-contain transition-opacity duration-300 ${loading[index] ? 'opacity-0' : 'opacity-100'}`}
                                    src={src}
                                    alt={`Gallery image ${index + 1}`}
                                    layout="fill"
                                    objectFit="contain"
                                    onLoad={() => handleImageLoad(index)}
                                    onError={() => handleImageLoad(index)}
                                    unoptimized={true} // Disable Next.js image optimization
                                />
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Gallery;
