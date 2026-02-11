import type { Metadata } from "next";
import Feedbacks from "@/components/Common/Feedbacks";
import HowItWorks from "@/components/Common/HowItWorks";
import OurDoctors from "@/components/Common/OurDoctors";
import Benefits from "@/components/Common/Benefits";
import OurServices from "@/components/HomeDemo2/OurServices";
import HeroBanner from "@/components/HomeDemo2/HeroBanner";
import FrequentlyAskedQuestions from "@/components/HomeDemo1/FrequentlyAskedQuestions";
import OurBlog from "@/components/Common/OurBlog";
import Navbar from "@/components/Layout/Navbar";
import HowItWorksStyle2 from "@/components/Common/HowItWorksStyle2";
import AboutUs from "@/components/HomeDemo2/AboutUs";
import StayConnected from "@/components/Common/StayConnected";
import FertilityTeam from "@/components/Common/FertilityTeam";
import SearchBar from "@/components/Common/SearchBar";
import Popup from "@/components/Common/Popup";

export const metadata: Metadata = {
  title: "Bnoon | Saudi Arabia’s Best Fertility & Women’s Network ",
  description:
    "Bnoon Medical Center specializes in fertility, we provide the necessary examinations and treatments for the couple. We realize that every man and woman is unique, according their individual health problems. Depending on the individual circumstances of each case, we develop a specialized treatment plan as well as the emotional, physical and financial needs.",
};

export default function HomePage() {
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

      <OurDoctors />

      <FertilityTeam />

      <AboutUs />

      <Feedbacks />

      <FrequentlyAskedQuestions />

      <HowItWorks />

      <StayConnected />
    </>
  );
}
