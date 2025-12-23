"use client";
import PageBanner from "@/features/Layout/PageBanner";
import Navbar from "@/features/Layout/Navbar";
import TelemedicineSection from "@/features/Common/TelemedicineSection";
export default function ClientTelemedicinePage() {
  return (
    <>
      <Navbar />
      <PageBanner bgImage="/images/telemidicine-ar.jpg" />
      <TelemedicineSection />
    </>
  );
}
