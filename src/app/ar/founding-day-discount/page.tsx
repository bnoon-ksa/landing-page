import type { Metadata } from "next";
import Navbar from "@/components/ar/Layout/Navbar";
import PageBanner from "@/components/ar/Layout/FoundingPageBanner";
import NationalDayOffer from "@/components/ar/Common/NationalDayOffer";

export const metadata: Metadata = {
  title: "عرض يوم التأسيس - الحقن المجهري | بنون - الرياض وجدة والأحساء",
  description:
    "تعرّفوا على بنون، شبكة مراكز الإخصاب وصحة المرأة الرائدة في السعودية. نقدم رعاية شاملة بأحدث التقنيات الطبية في الرياض وجدة والأححساء.",
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
