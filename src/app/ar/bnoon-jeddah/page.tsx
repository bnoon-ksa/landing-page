import type { Metadata } from "next";
import ClientBnoonJeddahPage from "./page.client";

export const metadata: Metadata = {
  title: "بنون - مركز الإخصاب وصحة المرأة في جدة",
  description: "مركز بنون للإخصاب وصحة المرأة في جدة. خدمات أطفال الأنابيب والحقن المجهري وعلاج العقم مع فريق طبي متخصص.",
};

export default function BnoonJeddahPage() {
  return <ClientBnoonJeddahPage />;
}
