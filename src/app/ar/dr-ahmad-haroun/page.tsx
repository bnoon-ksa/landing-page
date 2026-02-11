import type { Metadata } from "next";
import ClientDrAhmadHarounPage from "./page.client";

export const metadata: Metadata = {
  title: "د. أحمد هارون – أفضل طبيب أمراض الذكورة والعقم في جدة| بنون ",
  description: "الدكتور أحمد هارون، استشاري أمراض الذكورة والعقم في مركز بنون بجدة. خبرة واسعة في تشخيص وعلاج عقم الرجال.",
};

export default function DrAhmadHarounPage() {
  return <ClientDrAhmadHarounPage />;
}
