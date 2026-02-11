import type { Metadata } from "next";
import PageBanner from "@/components/ar/Layout/PageBanner";
import Navbar from "@/components/ar/Layout/Navbar";
import TelemedicineSection from "@/components/ar/Common/TelemedicineSection";

export const metadata: Metadata = {
  title: " الاستشارات عن بُعد – بنون",
  description: "استشارات طبية عن بُعد مع أطباء بنون المتخصصين في الإخصاب وصحة المرأة. احصلوا على استشارة مريحة من منزلكم في أي مكان بالسعودية.",
};

export default function TelemedicinePage() {
  return (
    <>
      <Navbar />
      <PageBanner bgImage="https://bnoon.blob.core.windows.net/website/images/telemidicine-ar.jpg" />
      <TelemedicineSection />
    </>
  );
}
