import React from 'react'
import img1 from "../assets/SmartHousing.jpg";
import img2 from "../assets/smarthousing2.jpg";
import img3 from "../assets/smarthousing3.jpg";
import img4 from "../assets/smarthousing4.jpg";
import img5 from "../assets/smarthousing5.jpg";
import img6 from "../assets/smarthousing6.jpg";
import img7 from "../assets/smarthousing7.jpg";
import img8 from "../assets/smarthousing8.jpg";
import img9 from "../assets/smarthousing9.jpg";
import img10 from "../assets/smarthousing10.jpg";

const Gallery = () => {
    // Array of image paths
    const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];

    return (
        <div>
            <section className='mb-12'>
                <h3 className="text-3xl font-bold mb-4 text-center pb-4">Images Of Smart Housing :</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {images.map((src, index) => (
                        <div key={index} className="w-full h-48 md:h-64 lg:h-80 bg-gray-200 flex items-center justify-center overflow-hidden border rounded-2xl transition-all duration-[0.5s] hover:border-blue-800 hover:shadow-2xl">
                            <img
                                className="max-w-full max-h-full object-contain"
                                src={src}
                                alt={`Gallery image ${index + 1}`}
                            />
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}

export default Gallery
