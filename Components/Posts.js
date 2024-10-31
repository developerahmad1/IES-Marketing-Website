import React, { useState, useEffect } from "react";
import Image from "next/image";
import bikeImg from "../public/Get Winning Electric bike_11zon.webp";
import postImg from "../public/royal swiss offer.jpg";
import postImg1 from "../public/Royal Swiss scoty.jpg";
import { MdOutlineCancel } from "react-icons/md";

const Posts = () => {
  const [visiblePosts, setVisiblePosts] = useState({
    post1: true,
    post2: false,
    post3: false,
  });

  const [animating, setAnimating] = useState({
    post1: false,
    post2: false,
    post3: false,
  });

  const handleClose = (postKey) => {
    // Set the post to be animating out
    setAnimating((prev) => ({ ...prev, [postKey]: true }));

    // Set the post to be invisible after the animation ends
    setTimeout(() => {
      setVisiblePosts((prev) => ({ ...prev, [postKey]: false }));
    }, 500); // Duration should match the exit animation duration
  };

  // Check if any posts are still visible
  const hasVisiblePosts = Object.values(visiblePosts).some((visible) => visible);

  // Function to handle animations
  const startAnimation = () => {
    setTimeout(() => {
      setVisiblePosts((prev) => ({ ...prev, post2: true }));
    }, 1500); // Show the second post after 1.5 seconds

    setTimeout(() => {
      setVisiblePosts((prev) => ({ ...prev, post3: true }));
    }, 3000); // Show the third post after 3 seconds
  };

  // Start the animation when the component mounts
  useEffect(() => {
    startAnimation();
  }, []);

  return (
    hasVisiblePosts && ( // Render overlay only if there are visible posts
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
        <div className="flex flex-col items-center justify-center space-y-4 p-4">
          {/* Post 1 */}
          {visiblePosts.post1 && (
            <div className={`relative ${animating.post1 ? 'animate-slide-out-left' : 'animate-slide-in-left'} w-[90vw] sm:w-[85vw] md:w-[70vw] lg:w-[60vw] xl:w-[50vw] h-[auto]`}>
              <MdOutlineCancel
                className="absolute top-2 right-2 text-white text-4xl cursor-pointer hover:text-red-500 transition duration-300"
                onClick={() => handleClose("post1")}
              />
              <Image
                src={postImg1}
                alt="Royal Swiss Offer"
                width={3600}
                height={1200}
                title="Royal Swiss Offer"
                className="w-full h-auto rounded-lg shadow-2xl"
              />
            </div>
          )}

          {/* Post 2 */}
          {visiblePosts.post2 && (
            <div className={`relative ${animating.post2 ? 'animate-slide-out-right' : 'animate-slide-in-right'} w-[90vw] sm:w-[85vw] md:w-[70vw] lg:w-[60vw] xl:w-[50vw] h-[auto]`}>
              <MdOutlineCancel
                className="absolute top-2 right-2 text-white text-4xl cursor-pointer hover:text-red-500 transition duration-300"
                onClick={() => handleClose("post2")}
              />
              <Image
                src={postImg}
                alt="Royal Swiss Offer"
                width={3600}
                height={1200}
                title="Royal Swiss Offer"
                className="w-full h-auto rounded-lg shadow-2xl"
              />
            </div>
          )}

          {/* Post 3 */}
          {visiblePosts.post3 && (
            <div className={`relative ${animating.post3 ? 'animate-slide-out-left' : 'animate-slide-in-left'} w-[90vw] sm:w-[85vw] md:w-[70vw] lg:w-[60vw] xl:w-[50vw] h-[auto]`}>
              <MdOutlineCancel
                className="absolute top-2 right-2 text-white text-4xl cursor-pointer hover:text-red-500 transition duration-300"
                onClick={() => handleClose("post3")}
              />
              <Image
                src={bikeImg}
                alt="Get a chance to win an electric bike"
                width={3600}
                height={1200}
                title="Get a chance to win an electric bike"
                className="w-full h-auto rounded-lg shadow-2xl"
              />
            </div>
          )}
        </div>
      </div>
    )
  );
};

export default Posts;
