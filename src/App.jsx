import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import AboutUs from './Components/AboutUs';
import OurProjects from './Components/OurProjects';
import Blogs from './Components/Blogs';
import ContactUS from './Components/ContactUS';
// import Signup from './Components/Signup';
// import Login from './Components/Login';
import ScrollToTop from './Components/ScrollToTop';
import Footer from './Components/Footer';
// import ChatBot from './Components/ChatBot';
import OneBlog from './Components/OneBlog';
import Gallery from './Components/Gallery';
import OneProject from './Components/OurProjects/SmartHousing';
import SmartHousing from './Components/OurProjects/SmartHousing';
import RoyalSwiss from './Components/OurProjects/RoyalSwiss';
import Adamshousing from './Components/OurProjects/Adamshousing';
import AnyRoute404 from './Components/AnyRoute404';
import ChatWithWhatsapp from './Components/ChatWithWhatsapp';
import CityHousing from './Components/OurProjects/CitiHousing';
import DHAMultan from './Components/OurProjects/DHAMultan';
import RoyalOrchad from './Components/OurProjects/RoyalOrchard';
import Carreer from './Components/Carreer';
import RealEstateChallanges_1 from './Components/Blogs/RealEstateChallanges_1.jsx';
import RelationShipManager from './Components/Jobs/RelationShipManager.jsx';
import BusinessDevelopmentExecutive from './Components/Jobs/BusinessDevelopmentExecutive.jsx';
import VideoHost from './Components/Jobs/VideoHost.jsx';
import SalesTeam from './Components/Jobs/SalesTeam.jsx';
import LeadsPoup from './Components/LeadsPoup.jsx';
import EmergingTrendsinPakistansRealEstate_2 from './Components/Blogs/EmergingTrendsinPakistansRealEstate_2.jsx';
import BestTimeToInvestInRealEstate_3 from './Components/Blogs/BestTimeToInvestInRealEstate_3.jsx';
import Top11SocietiesInMultanToInvestIn2024_4 from './Components/Blogs/Top11SocietiesInMultanToInvestIn2024_4.jsx';
import NewBlockPremiumBlock from './Components/Blogs/NewBlockPremiumBlock_5.jsx';
import AComprehensiveGuideToInvestInRealEstate_6 from './Components/Blogs/AComprehensiveGuideToInvestInRealEstate_6.jsx';
import WapdaTown from './Components/OurProjects/WapdaTown.jsx';
import ProsAndConsOfBuyingAPropertyInSouth_7 from './Components/Blogs/ProsAndConsOfBuyingAPropertyInSouth_7.jsx';
import WhyIsSmartHousingMultanASmartChoiceForInvestors_8 from './Components/Blogs/WhyIsSmartHousingMultanASmartChoiceForInvestors_8.jsx';
import SmartPropertyCardRevolutionizingPropertyOwnershipinPakistan_9 from './Components/Blogs/SmartPropertyCardRevolutionizingPropertyOwnershipinPakistan_9.jsx';
import InvestmentOpportunitiesInDHAMultan_10 from './Components/Blogs/InvestmentOpportunitiesInDHAMultan_10.jsx';
import SectorMOfDHAMultana_11 from './Components/Blogs/SectorMOfDHAMultana_11.jsx';
import RumanzaGolfCommunityLuxuryLivingInDHAMultan_12 from './Components/Blogs/RumanzaGolfCommunityLuxuryLivingInDHAMultan_12.jsx';

const App = () => {

  return (
    <div className='overflow-x-hidden'>
      <Router>
        <ScrollToTop />
        <Navbar />
        <LeadsPoup />
        <div className="mt-[86px]">
          <Routes>
            <Route path="/*" element={<AnyRoute404 />} />
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/blogs" element={<Blogs heading="Our Popular Blogs"/>} />
            <Route path="/contact-us" element={<ContactUS />} />
            {/* <Route path="/signup" element={<Signup />} /> */}
            {/* <Route path="/login" element={<Login />} /> */}
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/our-projects" element={<OurProjects />} />
            {/* Projects */}
            <Route path="/smart-housing" element={<SmartHousing />} />
            <Route path="/royal-swiss" element={<RoyalSwiss />} />
            <Route path="/adams-housing" element={<Adamshousing />} />
            <Route path="/citi-housing-multan" element={<CityHousing />} />
            <Route path="/dha-multan" element={<DHAMultan />} />
            <Route path="/royal-orchard-multan" element={<RoyalOrchad />} />
            <Route path="/wapda-town" element={<WapdaTown />} />
            {/* jobs */}
            <Route path="/career" element={<Carreer />} />
            <Route path="/job/relationship-manager" element={<RelationShipManager />} />
            <Route path="/job/business-development-executive" element={<BusinessDevelopmentExecutive />} />
            <Route path="/job/video-host" element={<VideoHost />} />
            <Route path="/job/sales-team" element={<SalesTeam />} />
            {/* Blogs */}
            <Route path="/blog/real-estate-opportunities-1" element={<RealEstateChallanges_1 />} />
            <Route path="/blog/emerging-trends-in-pakistans-real-estate-2" element={<EmergingTrendsinPakistansRealEstate_2 />} />
            <Route path="/blog/best-time-to-invest-in-pakistan-real-estate" element={<BestTimeToInvestInRealEstate_3 />} />
            <Route path="/blog/top-11-societies-in-multan-to-invest-in-2024" element={<Top11SocietiesInMultanToInvestIn2024_4 />} />
            <Route path="/blog/new-block-launched-by-smart-housing-multan-premium-block" element={<NewBlockPremiumBlock />} />
            <Route path="/blog/a-comprehensive-guide-to-invest-in-real-estate" element={<AComprehensiveGuideToInvestInRealEstate_6 />} />
            <Route path="/blog/Pros-and-Cons-of-Buying-a-Property-In-South-Punjab" element={<ProsAndConsOfBuyingAPropertyInSouth_7 />} />
            <Route path="/blog/why-is-smart-housing-multan-a-smart-choice-for-investors" element={<WhyIsSmartHousingMultanASmartChoiceForInvestors_8 />} />
            <Route path="/blog/smart-property-card-revolutionizing-property-ownership-in-pakistan" element={<SmartPropertyCardRevolutionizingPropertyOwnershipinPakistan_9 />} />
            <Route path="/blog/investment-opportunities-in-dha-multan" element={<InvestmentOpportunitiesInDHAMultan_10 />} />
            <Route path="/blog/sector-m-of-dha-multan" element={<SectorMOfDHAMultana_11 />} />
            <Route path="/blog/rumanza-golf-community" element={<RumanzaGolfCommunityLuxuryLivingInDHAMultan_12 />} />
          </Routes>
        </div>
        <ChatWithWhatsapp />
        {/* <ChatBot /> */}
        <Footer />
        <Toaster />
      </Router>
    </div>
  );
};

export default App;



