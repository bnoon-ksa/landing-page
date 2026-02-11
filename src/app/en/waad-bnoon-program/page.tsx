import type { Metadata } from "next";
import PageBanner from "@/components/Layout/PageBanner";
import Navbar from "@/components/Layout/Navbar";
import WaadSection from "@/components/Common/WaadSection";

export const metadata: Metadata = {
  title: "Wa'ad Bnoon Program - Get Pregnant or Your Money Back ",
  description: "The Wa'ad Bnoon Program guarantees pregnancy or your money back. Learn about program details and eligibility for IVF success guarantee.",
};

export default function WaadPage() {
  return (
    <>
      <Navbar />

      {/* PageBanner with static content */}
      <PageBanner bgImage="/images/waad-bnoon-banner.png" />
      <WaadSection />
     
    </>
  );
}
