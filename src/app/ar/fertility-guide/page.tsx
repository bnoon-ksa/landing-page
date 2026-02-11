import type { Metadata } from "next";
import PageBanner from "@/components/ar/Layout/PageBanner";
import Navbar from "@/components/ar/Layout/Navbar";
import FertilityTabs from "@/components/ar/Common/FertilityTabs";
import CustomList from "@/components/ar/Common/CustomList";

export const metadata: Metadata = {
  title:"بنون – معلومات شاملة عن الخصوبة وعلاجات الإخصاب والحمل ",
  description: "دليل شامل عن الخصوبة من بنون. معلومات طبية موثوقة عن أسباب تأخر الحمل وعلاجات الإخصاب المتاحة ونصائح لتحسين فرص الحمل.",
};

export default function FertilityGuidePage() {
  return (
    <>
      <Navbar />

      {/* PageBanner with static content */}
      <PageBanner bgImage="https://bnoon.blob.core.windows.net/website/images/fertility-guid-banner-ar.jpg" />
     <FertilityTabs />

     
    </>
  );
}
