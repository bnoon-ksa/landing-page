import type { Metadata } from "next";
import ClientBnoonRiyadhPage from "./page.client";

export const metadata: Metadata = {
  title: "بنون - مراكز الإخصاب وصحة المرأة في الرياض",
  description: "مراكز بنون للإخصاب وصحة المرأة في الرياض. خدمات أطفال الأنابيب والحقن المجهري وعلاج العقم مع فريق طبي متخصص.",
};

export default function BnoonRiyadhPage() {
  return <ClientBnoonRiyadhPage />;
}
