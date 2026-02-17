import type { Metadata } from "next";
import Navbar from "@/components/ar/Layout/Navbar";
import PageBanner from "@/components/ar/Layout/FoundingPageBanner";
import NationalDayOffer from "@/components/ar/Common/NationalDayOffer";

export const metadata: Metadata = {
  title: 
  "عرض يوم التأسيس بعلاجات أمراض الذكورة | بنون - الرياض وجدة",
  description:
    "",
};

export default function FoundingDayDiscountPage() {
  return (
    <>
      <Navbar />
      <PageBanner />
      <NationalDayOffer />
    </>
  );
}
