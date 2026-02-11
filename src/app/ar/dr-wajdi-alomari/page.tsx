import type { Metadata } from "next";
import ClientDrWajdiAlOmariPage from "./page.client";

export const metadata: Metadata = {
  title: "د. وجدي العمري - أفضل طبيب أطفال الأنابيب في الرياض | بنون ",
  description: "الدكتور وجدي العمري، استشاري الإخصاب وأطفال الأنابيب في مركز بنون بالرياض. خبرة واسعة في علاج العقم والحقن المجهري.",
};

export default function DrWajdiAlOmariPage() {
  return <ClientDrWajdiAlOmariPage />;
}
