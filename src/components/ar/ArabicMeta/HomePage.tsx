'use client';

import Feedbacks from '@/components/ar/Common/Feedbacks';
import HowItWorks from '@/components/ar/Common/HowItWorks';
import OurDoctors from '@/components/ar/Common/OurDoctors';
import Benefits from '@/components/ar/Common/Benefits';
import OurServices from '@/components/ar/HomeDemo2/OurServices';
import HeroBanner from '@/components/ar/HomeDemo2/HeroBanner';
import FrequentlyAskedQuestions from '@/components/ar/HomeDemo1/FrequentlyAskedQuestions';
import OurBlog from '@/components/ar/Common/OurBlog';
import Navbar from '@/components/ar/Layout/Navbar';
import HowItWorksStyle2 from '@/components/ar/Common/HowItWorksStyle2';
import AboutUs from '@/components/ar/HomeDemo2/AboutUs';
import StayConnected from '@/components/ar/Common/StayConnected';
import FertilityTeam from '@/components/ar/Common/FertilityTeam';
import SearchBar from '@/components/ar/Common/SearchBar';
import Popup from '@/components/ar/Common/Popup';

export default function ArabicHomeClient() {
  return (
    <>
      <Navbar />
      <Popup />
      <HeroBanner />
      <SearchBar />
      <Benefits />
      <OurServices />
      <OurBlog />
      <HowItWorksStyle2 />
      <FertilityTeam />
      <OurDoctors />
      <AboutUs />
      <Feedbacks />
      <FrequentlyAskedQuestions />
      <HowItWorks />
      <StayConnected />
    </>
  );
}
