import type { Metadata } from "next";
import Navbar from "@/components/ar/Layout/Navbar";
import PageBanner from "@/components/ar/Layout/PageBanner";
import AlahsaArea from "@/components/ar/Common/AlahsaArea";

export const metadata: Metadata = {
  title: "بنون - مركز الإخصاب وصحة المرأة في الأحساء",
  description: "مركز بنون للإخصاب وصحة المرأة في الأحساء. خدمات أطفال الأنابيب والحقن المجهري وعلاج العقم مع فريق طبي متخصص.",
};

export default function BnoonAlahsaPage() {
  return (
    <>
      <Navbar />
      <PageBanner bgImage="/images/clinics-banner-ar.jpg" />
       <AlahsaArea />

    </>
  );
}
