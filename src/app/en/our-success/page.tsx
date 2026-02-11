import type { Metadata } from "next";
import PageBanner from "@/components/Layout/PageBanner";
import Navbar from "@/components/Layout/Navbar";
import SuccessSection from "@/components/Common/SuccessSection";

export const metadata: Metadata = {
  title: "Bnoon - Leading Pregnancy Rates (IVF/ICSI) ",
  description: "Discover Bnoon's leading IVF and ICSI pregnancy success rates. Advanced reproductive technology and an expert medical team delivering results.",
};

export default function OurSuccessPage() {
  return (
    <>
      <Navbar />

      <PageBanner bgImage="/images/success-banner.jpg" />

      <SuccessSection />
    </>
  );
}
