import React, { useState, useRef, useEffect } from 'react'
import { RxCross2 } from "react-icons/rx";
import { useAppContext } from '../Context/AppContext';
import { Howl } from 'howler'; // Import Howler
import "./CSS/LeadsPoup.css"


const LeadsPoup = () => {
    const { closeLeadpoup, isLeadPoupOpen } = useAppContext();
    const popupRef = useRef(null);
    const [shakePopup, setShakePopup] = useState(false);

    // Function to play the sound using Howler
    const playSound = () => {
        const sound = new Howl({
            src: ['/path-to-your-sound.mp3'], // Replace with your sound file path
            volume: 0.5, // Adjust the volume as needed
        });
        sound.play();
    };

    useEffect(() => {
        // Function to handle clicks outside the popup
        const handleClickOutside = (event) => {
            if (popupRef.current && !popupRef.current.contains(event.target)) {
                // Shake the popup and play sound
                setShakePopup(true);
                playSound(); // Play the sound when user clicks outside

                // Remove the shake class after the animation is complete
                setTimeout(() => {
                    setShakePopup(false);
                }, 500); // Adjust the duration based on your animation duration
            }
        };

        // Add event listener when popup is open
        if (isLeadPoupOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        // Clean up the event listener when the component is unmounted or popup is closed
        return () => {
            if (isLeadPoupOpen) {
                document.removeEventListener('mousedown', handleClickOutside);
            }
        };
    }, [isLeadPoupOpen]);

    return (
        isLeadPoupOpen ?
            <div className='w-full h-[100vh] fixed flex justify-center items-center z-[10000000000] bg-transparent'>

                <div className='flex justify-center bg-blue-700 max-w-full max-h-full fixed'>
                    <div className='w-10 '>

                    </div>
                </div>

                <div
                    ref={popupRef}
                    className={`w-[400px] h-[300px] bg-white shadow-2xl fixed mx-auto mt-20 z-[10000000000000000] px-3 hover:border-[1px] rounded-2xl transition-all duration-[0.5s] hover:border-gray-900 hover:shadow-2xl ${shakePopup ? 'shake' : ''
                        }`}
                >
                    <RxCross2 className='text-[30px] text-black relative float-right cursor-pointer' onClick={closeLeadpoup} />

                    <form className="space-y-4 md:space-y-6 pt-8">
                        <p className='text-xl font-bold text-center'>User Details</p>
                        <input
                            type="text"
                            className="bg-gray-50 border rounded-full border-gray-800 text-gray-900 focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Enter your name ...."
                        />
                        <input
                            type="text"
                            className="bg-gray-50 border rounded-full border-gray-800 text-gray-900 focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Enter your contact no ...."
                        />
                        <button
                            type="submit"
                            className="block bg-white text-black border-2 border-black px-4 py-2 rounded-full text-center bg-black-800 hover:bg-black hover:text-white hover:bg-black-900 transition duration-[0.5s] w-full"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
            :
            null
    );
};

export default LeadsPoup;
