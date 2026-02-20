'use client';

import FrequentlyAskedQuestions from '@/components/Common/FrequentlyAskedQuestions';
import OurBlog from '@/components/Common/OurBlog';
import OurDoctorsStyle2 from '@/components/Common/OurDoctorsStyle2';
import WhyChooseUs from '@/components/Common/WhyChooseUs';
import Navbar from '@/components/Layout/Navbar';

export default function Home2() {
  return (
    <>
      <Navbar />

      <div className="linear-gradient-inner">
        <WhyChooseUs />

        <OurDoctorsStyle2 />

        <FrequentlyAskedQuestions />
      </div>

      <div className="smoke-bg-color">
        <OurBlog />
      </div>
    </>
  );
}
