import type { Metadata } from "next";
import Navbar from "@/components/ar/Layout/Navbar";
import PageBanner from "@/components/ar/Layout/PageBanner";
import Jeddaharea from "@/components/ar/Common/Jeddaharea";

export const metadata: Metadata = {
  title: "بنون - مركز الإخصاب وصحة المرأة في جدة",
  description: "مركز بنون للإخصاب وصحة المرأة في جدة. خدمات أطفال الأنابيب والحقن المجهري وعلاج العقم مع فريق طبي متخصص.",
};

export default function BnoonJeddahPage() {
  return (
    <>
      <Navbar />
      <PageBanner bgImage="https://bnoon.blob.core.windows.net/website/images/clinics-banner-ar.jpg" />
       <Jeddaharea />

    </>
  );
}
