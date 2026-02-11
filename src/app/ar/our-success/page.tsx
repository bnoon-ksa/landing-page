import type { Metadata } from "next";
import PageBanner from "@/components/ar/Layout/PageBanner";
import Navbar from "@/components/ar/Layout/Navbar";
import SuccessSection from "@/components/ar/Common/SuccessSection";

export const metadata: Metadata = {
  title:"بنون – نسب نجاح الحمل، عمليات أطفال الأنابيب والحقن المجهري ",
  description: "اكتشفوا نسب نجاح عمليات أطفال الأنابيب والحقن المجهري في بنون. نسب حمل رائدة بفضل أحدث التقنيات وفريق طبي متميز.",
};

export default function OurSuccessPage() {
  return (
    <>
      <Navbar />

      <PageBanner bgImage="https://bnoon.blob.core.windows.net/website/images/success-banner-ar.jpg" />

      <SuccessSection />
    </>
  );
}
