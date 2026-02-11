
"use client";

import Navbar from "@/components/ar/Layout/Navbar";
import PageBanner from "@/components/ar/Layout/PageBanner";

import OurLocations from "@/components/ar/Common/OurLocations";
export default function ClientOurClinicsPage() {
  return (
    <>
      <Navbar />
      <PageBanner bgImage="/images/clinics-banner-ar.jpg" />
      <OurLocations />
    </>
  );
}
