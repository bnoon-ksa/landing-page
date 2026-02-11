"use client";
import Image from "next/image";

import Navbar from "@/components/ar/Layout/Navbar";
import PageBanner from "@/components/ar/Layout/PageBanner";
import FertilityDoctor from "@/components/ar/Common/FertilityDoctor";
import OurExperts from "@/components/ar/Common/OurExperts";

export default function ClientOurExpertsPage() {
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
