import type { Metadata } from "next";
import ClientDrAhmedAlShaikhPage from "./page.client";

export const metadata: Metadata = {
  title: "د. أحمد الشيخ – أفضل طبيب أطفال الأنابيب والعقم في جدة| بنون ",
  description: "الدكتور أحمد الشيخ، استشاري أطفال الأنابيب والعقم في مركز بنون بجدة. خبرة واسعة في علاجات الإخصاب المساعد.",
};

export default function DrAhmedAlShaikhPage() {
  return <ClientDrAhmedAlShaikhPage />;
}
