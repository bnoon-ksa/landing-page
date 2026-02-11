import type { Metadata } from "next";
import PageBanner from "@/components/ar/Layout/PageBanner";
import Navbar from "@/components/ar/Layout/Navbar";
import AppointmentSection from "@/components/ar/Common/AppointmentSection";

export const metadata: Metadata = {
  title: "طلب موعد مع طبيب – بنون في الرياض وجدة ",
  description: "احجزوا موعدكم مع أطباء بنون في الرياض أو جدة أو الأحساء. حجز سهل وسريع لاستشارات الإخصاب وصحة المرأة.",
};

export default function RequestAppointmentPage() {
  return (
    <>
      <Navbar />

      <PageBanner bgImage="/images/request-an-appointment-ar.jpg" />

      <AppointmentSection />
    </>
  );
}
