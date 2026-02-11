import type { Metadata } from "next";
import PageBanner from "@/components/Layout/PageBanner";
import Navbar from "@/components/Layout/Navbar";
import TelemedicineSection from "@/components/Common/TelemedicineSection";

export const metadata: Metadata = {
  title: "Telemedicine – Bnoon",
  description: "Book a telemedicine consultation with Bnoon's fertility and women's health specialists. Convenient virtual appointments from anywhere in Saudi Arabia.",
};

export default function TelemedicinePage() {
  return (
    <>
      <Navbar />
      {/* PageBanner with static content */}
      <PageBanner bgImage="/images/telemidicine-en.jpg" />
      <TelemedicineSection />
    </>
  );
}
