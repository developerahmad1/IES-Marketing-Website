import React, { useState } from 'react';
import img1 from "../public/SmartHousing.webp";
import img2 from "../public/smarthousing2.webp";
import img3 from "../public/smarthousing3.webp";
import img4 from "../public/smarthousing4.webp";
import img5 from "../public/smarthousing5.webp";
import img6 from "../public/smarthousing6.webp";
import img7 from "../public/smarthousing7.webp";
import img8 from "../public/smarthousing8.webp";
import img9 from "../public/smarthousing9.webp";
import img11 from "../public/royal orchad 1.jpg";
import img12 from "../public/royal orchad 2.jpg";
import img13 from "../public/royal orchad 4.jpg";
import img14 from "../public/DHA 2.webp";
import img15 from "../public/smarthousing10.webp";
import img16 from "../public/DHA 3.webp";
import img17 from "../public/DHA 6.webp";
import img18 from "../public/AdamsHousing1.jpg";
import img19 from "../public/AdamsHousing2.jpg";
import loader from "../public/loader.gif";
import Head from 'next/head';
import Image from 'next/image';

const Gallery = () => {
    // Array of image paths
    const images = [
        img1, img2, img3, img4, img5, img6, img7, img8, img9,
        img11, img12, img13, img14, img15, img16, img17, img18, img19,
    ];

    // Array to hold the loading state for each image
    const [loading, setLoading] = useState(Array(images.length).fill(true));

    // Handle image load
    const handleImageLoad = (index) => {
        setLoading((prevLoading) => {
            const newLoading = [...prevLoading];
            newLoading[index] = false; // Set the loading state to false when the image is loaded
            return newLoading;
        });
    };

    return (
        <>
            <Head>
                <title>Images - IES Marketing</title>
                <meta name="description" content="Images of top societies in Multan." />
            </Head>

            <div>
                <section className='mb-12'>
                    <h3 className="text-3xl font-bold mb-4 text-center pb-4 mt-[120px]">Images Of societies</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {images.map((src, index) => (
                            <div
                                key={index}
                                className="w-full h-48 md:h-64 lg:h-80 bg-gray-200 flex items-center justify-center overflow-hidden border rounded-2xl transition-all duration-[0.5s] hover:border-blue-800 hover:shadow-2xl"
                            >
                                {/* Show loader if the image is still loading */}
                                {loading[index] && (
                                    <Image
                                        src={loader}
                                        alt="Loading..."
                                        className="w-28 h-28 object-contain"
                                    />
                                )}
                                <Image
                                    className={`max-w-full max-h-full object-contain ${loading[index] ? 'hidden' : 'block'}`}
                                    src={src}
                                    alt={`Gallery image ${index + 1}`}
                                    onLoad={() => handleImageLoad(index)}
                                    onError={() => handleImageLoad(index)}
                                />
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </>
    );
};

export default Gallery;
