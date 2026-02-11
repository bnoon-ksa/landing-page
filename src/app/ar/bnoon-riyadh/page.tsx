import type { Metadata } from "next";
import Navbar from "@/components/ar/Layout/Navbar";
import PageBanner from "@/components/ar/Layout/PageBanner";
import Riyadharea from "@/components/ar/Common/Riyadharea";

export const metadata: Metadata = {
  title: "بنون - مراكز الإخصاب وصحة المرأة في الرياض",
  description: "مراكز بنون للإخصاب وصحة المرأة في الرياض. خدمات أطفال الأنابيب والحقن المجهري وعلاج العقم مع فريق طبي متخصص.",
};

export default function BnoonRiyadhPage() {
  return (
    <>
      <Navbar />
      <PageBanner bgImage="https://bnoon.blob.core.windows.net/website/images/clinics-banner-ar.jpg" />
       <Riyadharea />

    </>
  );
}
