import type { Metadata } from "next";
import PageBanner from "@/components/ar/Layout/PageBanner";
import Navbar from "@/components/ar/Layout/Navbar";
import WaadSection from "@/components/ar/Common/WaadSection";

export const metadata: Metadata = {
  title: "برنامج وعد بنون – الحمل أو استرداد الرسوم ",
  description: "برنامج وعد بنون يضمن لكم الحمل أو استرداد الرسوم. تعرّفوا على تفاصيل البرنامج وشروط الاستفادة من ضمان نجاح أطفال الأنابيب.",
};

export default function WaadBnoonProgramPage() {
  return (
    <>
      <Navbar />

      {/* PageBanner with static content */}
      <PageBanner bgImage="https://bnoon.blob.core.windows.net/website/images/waad-bnoon-banner-ar.png" />
      <WaadSection />
     
    </>
  );
}
