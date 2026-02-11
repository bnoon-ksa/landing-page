import type { Metadata } from "next";
import PageBanner from "@/components/ar/Layout/PageBanner";
import Navbar from "@/components/ar/Layout/Navbar";
import AboutusSection from "@/components/ar/Common/AboutusSection";
import WhoAreWe from "@/components/ar/Common/WhoAreWe";

export const metadata: Metadata = {
  title: "نبذة عنّا – بنون",
  description: "تعرّفوا على بنون، شبكة مراكز الإخصاب وصحة المرأة الرائدة في السعودية. نقدم رعاية شاملة بأحدث التقنيات الطبية في الرياض وجدة والأحساء.",
};

export default function AboutUsPage() {
  return (
    <>
      <Navbar />
      <PageBanner bgImage="/images/aboutus-ar-banner.jpg" />
      <AboutusSection />
      <WhoAreWe />
    </>
  );
}
