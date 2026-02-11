"use client";

import PageBanner from "@/components/ar/Layout/PageBanner";
import Navbar from "@/components/ar/Layout/Navbar";
import AboutusSection from "@/components/ar/Common/AboutusSection";
import WhoAreWe from "@/components/ar/Common/WhoAreWe";

export default function ClientAboutUsPage() {
  return (
    <>
      <Navbar />
      <PageBanner bgImage="/images/aboutus-ar-banner.jpg" />
      <AboutusSection />
      <WhoAreWe />
    </>
  );
}
