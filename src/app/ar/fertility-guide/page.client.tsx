"use client";


import PageBanner from "@/components/ar/Layout/PageBanner";
import Navbar from "@/components/ar/Layout/Navbar";
import FertilityTabs from "@/components/ar/Common/FertilityTabs";
import CustomList from "@/components/ar/Common/CustomList";
export default function ClientFertilityGuidePage() {
  return (
    <>
      <Navbar />

      {/* PageBanner with static content */}
      <PageBanner bgImage="/images/fertility-guid-banner-ar.jpg" />
     <FertilityTabs />

     
    </>
  );
}
