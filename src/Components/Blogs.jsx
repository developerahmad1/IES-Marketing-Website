import React, { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { useAppContext } from '../Context/AppContext.jsx';
import { Link } from 'react-router-dom';

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
