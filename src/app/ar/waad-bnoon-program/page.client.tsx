"use client";


import PageBanner from "@/components/ar/Layout/PageBanner";
import Navbar from "@/components/ar/Layout/Navbar";
import WaadSection from "@/components/ar/Common/WaadSection";
export default function ClientWaadBnoonProgramPage() {
  return (
    <>
      <Navbar />

      {/* PageBanner with static content */}
      <PageBanner bgImage="/images/waad-bnoon-banner-ar.png" />
      <WaadSection />
     
    </>
  );
}
