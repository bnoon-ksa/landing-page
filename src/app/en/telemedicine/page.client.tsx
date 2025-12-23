"use client";
import PageBanner from "@/components/Layout/PageBanner";
import Navbar from "@/components/Layout/Navbar";
import TelemedicineSection from "@/components/Common/TelemedicineSection";
export default function ClientTelemedicinePage() {
  return (
    <>
      <Navbar />
      {/* PageBanner with static content */}
      <PageBanner bgImage="/images/telemidicine-en.jpg" />
      <TelemedicineSection />
    </>
  );
}
