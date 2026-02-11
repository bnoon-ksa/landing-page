import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/ar/Layout/Navbar";
import PageBanner from "@/components/ar/Layout/PageBanner";
import FertilityDoctor from "@/components/ar/Common/FertilityDoctor";
import OurExperts from "@/components/ar/Common/OurExperts";

export const metadata: Metadata = {
  title: "أطباء أطفال الأنابيب وأمراض النساء وأمراض الذكورة – بنون ",
  description: "تعرّفوا على أطباء بنون المتخصصين في أطفال الأنابيب وأمراض النساء والذكورة. فريق طبي خبير في الرياض وجدة والأحساء.",
};

export default function OurExpertsPage() {
  return (
    <>
      <Navbar />

      <PageBanner
        bgImage="/images/experts-banner-ar.jpg"
      />

      <OurExperts />
      
      <FertilityDoctor />
    </>
  );
}
