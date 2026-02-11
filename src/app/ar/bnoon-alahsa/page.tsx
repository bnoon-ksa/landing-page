import type { Metadata } from "next";
import ClientBnoonAlahsaPage from "./page.client";

export const metadata: Metadata = {
  title: "بنون - مركز الإخصاب وصحة المرأة في الأحساء",
  description: "مركز بنون للإخصاب وصحة المرأة في الأحساء. خدمات أطفال الأنابيب والحقن المجهري وعلاج العقم مع فريق طبي متخصص.",
};

export default function BnoonAlahsaPage() {
  return <ClientBnoonAlahsaPage />;
}

