import type { Metadata } from "next";
import Navbar from "@/components/ar/Layout/Navbar";
import PageBanner from "@/components/ar/Layout/PageBanner";
import DrAhmedNowasser from "@/components/ar/Common/DrAhmedNowasser";

export const metadata: Metadata = {
  title: "الدكتور أحمد النويصر – أفضل استشاري إخصاب وعقم في الأحساء | بنون",
  description: "الدكتور أحمد النويصر، استشاري الإخصاب وعلاج العقم في مركز بنون بالأحساء. خبرة واسعة في أطفال الأنابيب والحقن المجهري.",
};

export default function DrAhmedNowasserPage() {
  return (
    <>
      <Navbar />
      <PageBanner bgImage="https://bnoon.blob.core.windows.net/website/images/clinics-banner-ar.jpg" />
       <DrAhmedNowasser />

    </>
  );
}
