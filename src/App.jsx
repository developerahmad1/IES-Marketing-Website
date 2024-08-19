import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import AboutUs from './Components/AboutUs';
import OurProjects from './Components/OurProjects';
import Blogs from './Components/Blogs';
import ContactUS from './Components/ContactUS';
import Signup from './Components/Signup';
import Login from './Components/Login';
import ScrollToTop from './Components/ScrollToTop';
import Footer from './Components/Footer';
import ChatBot from './Components/ChatBot';
import Carrier from './Components/Carrier';
import OneBlog from './Components/OneBlog';
import Gallery from './Components/Gallery';

const App = () => {

  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <div className="mt-[86px]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/our-projects" element={<OurProjects />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/contact-us" element={<ContactUS />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/gallery" element={<Gallery/>} />
          <Route path="/carrier" element={<Carrier />} />
          <Route path="/blog/:id" element={<OneBlog />} />
        </Routes>
      </div>
      <div className=''>
        <ChatBot />
      </div>
      <Footer />
      <Toaster />
    </Router>
  );
};

export default App;







// #fa8b17    h #ff8200   Mustard   
// #2f3130    h 000000 Black
// #f8f2e6    White

//  #fff1e1    light mustard


// https://chatgpt.com/c/c649bf31-0f5c-42fb-9c42-42e931dcb522



// https://via.placeholder.com/350x200





// https://chatgpt.com/c/51aae938-c226-493c-b217-115b575e0da