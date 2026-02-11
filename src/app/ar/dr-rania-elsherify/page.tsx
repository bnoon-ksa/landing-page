import type { Metadata } from "next";
import Navbar from "@/components/ar/Layout/Navbar";
import PageBanner from "@/components/ar/Layout/PageBanner";
import DrRaniaAlsherify from "@/components/ar/Common/DrRaniaAlsherify";

export const metadata: Metadata = {
  title: "الدكتورة رانيا الشريفي - طبيبة أمراض النساء والولادة في بنون بالأحساء",
  description: "الدكتورة رانيا الشريفي، استشارية أمراض النساء والولادة في مركز بنون بالأحساء. خبرة واسعة في صحة المرأة والولادة.",
};

export default function BnoonAlahsaPage() {
  return (
    <>
      <Navbar />
      <PageBanner bgImage="/images/clinics-banner-ar.jpg" />
       <DrRaniaAlsherify />

    </>
  );
}
