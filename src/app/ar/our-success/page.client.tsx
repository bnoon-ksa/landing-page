"use client";

import PageBanner from "@/components/ar/Layout/PageBanner";
import Navbar from "@/components/ar/Layout/Navbar";
import SuccessSection from "@/components/ar/Common/SuccessSection";

export default function ClientOurSuccessPage() {
  return (
    <>
      <Navbar />

      <PageBanner bgImage="/images/success-banner-ar.jpg" />

      <SuccessSection />
    </>
  );
}

