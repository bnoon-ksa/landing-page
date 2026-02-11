import type { Metadata } from "next";
import ClientRequestAppointmentPage from "./page.client";

export const metadata: Metadata = {
  title: "طلب موعد مع طبيب – بنون في الرياض وجدة ",
  description: "احجزوا موعدكم مع أطباء بنون في الرياض أو جدة أو الأحساء. حجز سهل وسريع لاستشارات الإخصاب وصحة المرأة.",
};

export default function RequestAppointmentPage() {
  return <ClientRequestAppointmentPage />;
}
