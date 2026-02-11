import type { Metadata } from "next";
import PageBanner from "@/components/ar/Layout/PageBanner";
import Navbar from "@/components/ar/Layout/Navbar";
import TreatmentsSection from "@/components/ar/Common/TreatmentsSection";
import TreatmentsTabs from "@/components/ar/Common/TreatmentsTabs";

export const metadata: Metadata = {
  title: "بنون - أطفال الأنابيب والحقن المجهري والعقم وفحوصات الجينات ",
  description: "تعرّفوا على علاجات بنون: أطفال الأنابيب، الحقن المجهري، علاج العقم عند الرجال، فحوصات الجينات، ومنظار النساء. خطط علاج مخصصة في السعودية.",
};

export default function TreatmentsPage() {
  return (
    <>
      <Navbar />

      {/* PageBanner with static content */}
      <PageBanner bgImage="https://bnoon.blob.core.windows.net/website/images/treatments-banner-ar.jpg" />
      <TreatmentsSection />
     <TreatmentsTabs />
    </>
  );
}
