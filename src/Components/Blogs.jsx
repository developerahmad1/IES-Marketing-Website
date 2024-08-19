import React, { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { useAppContext } from '../Context/AppContext.jsx';
import { Link } from 'react-router-dom';

// const blogsData = [
//   {
//     id: 1,
//     imgSrc: 'https://pagedone.io/asset/uploads/1696244553.png',
//     title: 'Fintech 101: Exploring the Basics of Electronic Payments',
//     author: 'Harsh C.',
//     date: '2 year ago',
//   },
//   {
//     id: 2,
//     imgSrc: 'https://pagedone.io/asset/uploads/1696244579.png',
//     title: 'From Classroom to Cyberspace: The Growing Influence of EdTech in Fintech',
//     author: 'John D.',
//     date: '2 year ago',
//   },
//   {
//     id: 3,
//     imgSrc: 'https://pagedone.io/asset/uploads/1696244619.png',
//     title: 'Fintech Solutions for Student Loans: Easing the Burden of Education Debt',
//     author: 'Alexa H.',
//     date: '2 year ago',
//   },
//   // Additional 12 real estate blog entries
//   {
//     id: 4,
//     imgSrc: 'https://pagedone.io/asset/uploads/1696244619.png',
//     title: 'Exploring the Future of Urban Living',
//     author: 'Emily R.',
//     date: '1 year ago',
//   },
//   {
//     id: 5,
//     imgSrc: 'https://pagedone.io/asset/uploads/1696244619.png',
//     title: 'The Rise of Smart Homes: What to Expect',
//     author: 'Michael S.',
//     date: '1 year ago',
//   },
//   {
//     id: 6,
//     imgSrc: 'https://pagedone.io/asset/uploads/1696244619.png',
//     title: 'Investing in Real Estate: Tips for Beginners',
//     author: 'Sophia K.',
//     date: '1 year ago',
//   },
//   {
//     id: 7,
//     imgSrc: 'https://pagedone.io/asset/uploads/1696244619.png',
//     title: 'Sustainable Architecture Trends in 2024',
//     author: 'Daniel W.',
//     date: '1 year ago',
//   },
//   {
//     id: 8,
//     imgSrc: 'https://pagedone.io/asset/uploads/1696244619.png',
//     title: 'How to Choose the Right Neighborhood',
//     author: 'Olivia P.',
//     date: '1 year ago',
//   },
//   {
//     id: 9,
//     imgSrc: 'https://pagedone.io/asset/uploads/1696244619.png',
//     title: 'The Impact of Remote Work on Real Estate',
//     author: 'James T.',
//     date: '6 months ago',
//   },
//   {
//     id: 10,
//     imgSrc: 'https://pagedone.io/asset/uploads/1696244619.png',
//     title: 'Real Estate Market Predictions for 2025',
//     author: 'Isabella L.',
//     date: '6 months ago',
//   },
//   {
//     id: 11,
//     imgSrc: 'https://pagedone.io/asset/uploads/1696244619.png',
//     title: 'Top Renovation Projects That Add Value',
//     author: 'Aiden J.',
//     date: '6 months ago',
//   },
//   {
//     id: 12,
//     imgSrc: 'https://pagedone.io/asset/uploads/1696244619.png',
//     title: 'Understanding Real Estate Investment Trusts (REITs)',
//     author: 'Mia C.',
//     date: '6 months ago',
//   },
//   {
//     id: 13,
//     imgSrc: 'https://pagedone.io/asset/uploads/1696244619.png',
//     title: 'How to Finance Your Real Estate Investment',
//     author: 'Liam G.',
//     date: '3 months ago',
//   },
//   {
//     id: 14,
//     imgSrc: 'https://pagedone.io/asset/uploads/1696244619.png',
//     title: 'The Benefits of Living in a Gated Community',
//     author: 'Charlotte N.',
//     date: '3 months ago',
//   },
//   {
//     id: 15,
//     imgSrc: 'https://pagedone.io/asset/uploads/1696244619.png',
//     title: 'Exploring Historic Homes and Their Value',
//     author: 'Noah H.',
//     date: '3 months ago',
//   },
// ];

const Blogs = () => {
  const { blogsData } = useAppContext();
  const [visibleCards, setVisibleCards] = useState(6);
  const blogContainerRef = useRef(null);

  function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}
  const handleViewMore = () => {
    setVisibleCards((prev) => prev + 3);
  };

  useEffect(() => {
    // Select only newly added cards
    const newCards = Array.from(blogContainerRef.current.children).slice(visibleCards - 3);

    if (newCards.length > 0) {
      gsap.fromTo(
        newCards,
        { opacity: 0, y: 20 }, // Adjust starting position
        {
          opacity: 1,
          y: 0,
          duration: 0.3, // Faster animation
          stagger: 0.1, // Reduced stagger
        }
      );
    }
  }, [visibleCards]);

  return (
    <div>
      <section className="pb-24 pt-10 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-manrope text-4xl font-bold text-gray-900 text-center mb-8">Our popular blogs</h2>
          <div
            ref={blogContainerRef}
            className="grid gap-6 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1"
          >
            {blogsData.slice(0, visibleCards).map((blog) => (
              <Link to={`/blog/${blog.id}`}
                key={blog.id}
                className="group cursor-pointer border border-gray-300 rounded-2xl p-5 transition-all duration-[0.5s] hover:border-blue-800 hover:shadow-2xl"
                onClick={scrollToTop}
              >
                <div className="flex items-center mb-6">
                  <img src={blog.imgSrc} alt={`${blog.author} image`} className="rounded-lg w-full" />
                </div>
                <div className="block">
                  <h4 className="text-gray-900 font-medium leading-8 mb-9">{blog.title}</h4>
                  <div className="flex items-center justify-between font-medium">
                    <h6 className="text-sm text-gray-500">By {blog.author}</h6>
                    <span className="text-sm text-indigo-600">{blog.date}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          {visibleCards < blogsData.length && (
            <button
              onClick={handleViewMore}
              className="cursor-pointer rounded-full py-3.5 px-7 w-52 flex justify-center items-center text-gray-900 font-semibold mx-auto transition-all duration-[0.4s] hover:bg-gray-100 mt-8  hover:shadow-2xl border-black border-[1.3px]"
            >
              View More
            </button>
          )}
        </div>
      </section>
    </div>
  );
};

export default Blogs;
