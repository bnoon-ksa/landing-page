import type { Metadata } from "next";
import ClientDrMazinBisharaPage from "./page.client";

export const metadata: Metadata = {
  title:"د. مازن بشارة – أفضل طبيب أطفال الأنابيب والعقم في جدة| بنون ",
  description: "الدكتور مازن بشارة، استشاري أطفال الأنابيب والعقم في مركز بنون بجدة. خبرة واسعة في علاجات الإخصاب المساعد.",
};

export default function DrMazinBisharaPage() {
  return <ClientDrMazinBisharaPage />;
}
