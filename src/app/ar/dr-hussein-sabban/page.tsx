import type { Metadata } from "next";
import ClientDrHusseinSabbanPage from "./page.client";

export const metadata: Metadata = {
  title: "د. حسين صبّان- أفضل طبيب أطفال الأنابيب والعقم في جدة| بنو",
  description: "الدكتور حسين صبّان، استشاري أطفال الأنابيب والعقم في مركز بنون بجدة. خبرة واسعة في علاجات الإخصاب المساعد.",
};

export default function DrHusseinSabbanPage() {
  return <ClientDrHusseinSabbanPage />;
}
