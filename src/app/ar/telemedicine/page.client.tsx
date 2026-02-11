"use client";
import PageBanner from "@/components/ar/Layout/PageBanner";
import Navbar from "@/components/ar/Layout/Navbar";
import TelemedicineSection from "@/components/ar/Common/TelemedicineSection";
export default function ClientTelemedicinePage() {
  return (
    <>
      <Navbar />
      <PageBanner bgImage="/images/telemidicine-ar.jpg" />
      <TelemedicineSection />
    </>
  );
}
