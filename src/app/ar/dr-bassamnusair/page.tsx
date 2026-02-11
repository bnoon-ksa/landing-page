import type { Metadata } from "next";
import Navbar from "@/components/ar/Layout/Navbar";
import PageBanner from "@/components/ar/Layout/PageBanner";
import DrBassam from "@/components/ar/Common/DrBassam";

export const metadata: Metadata = {
  title: "الدكتور بسام نصير – أفضل استشاري إخصاب وعقم في الأحساء | بنون",
  description: "الدكتور بسام نصير، استشاري الإخصاب وعلاج العقم في مركز بنون بالأحساء. خبرة واسعة في أطفال الأنابيب والحقن المجهري.",
};

export default function BnoonBassamPage() {
  return (
    <>
      <Navbar />
      <PageBanner bgImage="https://bnoon.blob.core.windows.net/website/images/clinics-banner-ar.jpg" />
       <DrBassam />

    </>
  );
}
