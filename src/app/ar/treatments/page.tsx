import type { Metadata } from "next";
import ClientTreatmentsPage from "./page.client";

export const metadata: Metadata = {
  title: "بنون - أطفال الأنابيب والحقن المجهري والعقم وفحوصات الجينات ",
  description: "تعرّفوا على علاجات بنون: أطفال الأنابيب، الحقن المجهري، علاج العقم عند الرجال، فحوصات الجينات، ومنظار النساء. خطط علاج مخصصة في السعودية.",
};

export default function TreatmentsPage() {
  return <ClientTreatmentsPage />;
}
