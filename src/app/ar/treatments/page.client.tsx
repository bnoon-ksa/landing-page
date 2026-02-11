"use client";


import PageBanner from "@/components/ar/Layout/PageBanner";
import Navbar from "@/components/ar/Layout/Navbar";
import TreatmentsSection from "@/components/ar/Common/TreatmentsSection";
import TreatmentsTabs from "@/components/ar/Common/TreatmentsTabs";
export default function ClientTreatmentsPage() {
  return (
    <>
      <Navbar />

      {/* PageBanner with static content */}
      <PageBanner bgImage="/images/treatments-banner-ar.jpg" />
      <TreatmentsSection />
     <TreatmentsTabs />
    </>
  );
}
