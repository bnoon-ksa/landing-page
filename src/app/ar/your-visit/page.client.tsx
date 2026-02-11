"use client";


import PageBanner from "@/components/ar/Layout/PageBanner";
import Navbar from "@/components/ar/Layout/Navbar";
import VisitTabs from "@/components/ar/Common/VisitTabs";
export default function ClientYourVisitPage() {
  return (
    <>
      <Navbar />

      {/* PageBanner with static content */}
      <PageBanner bgImage="/images/visit-banner-ar.jpg" />
     <VisitTabs />

     
    </>
  );
}
