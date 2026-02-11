import type { Metadata } from "next";
import ClientDrFawazEdrisPage from "./page.client";

export const metadata: Metadata = {
  title: "د. فواز إدريس – أفضل طبيب أطفال الأنابيب والعقم في جدة| بنون ",
  description: "الدكتور فواز إدريس، استشاري أطفال الأنابيب والعقم في مركز بنون بجدة. خبرة واسعة في علاجات الإخصاب المساعد.",
};

export default function DrFawazEdrisPage() {
  return <ClientDrFawazEdrisPage />;
}
