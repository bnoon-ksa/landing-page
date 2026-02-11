import type { Metadata } from "next";
import ClientFertilityGuidePage from "./page.client";

export const metadata: Metadata = {
  title:"بنون – معلومات شاملة عن الخصوبة وعلاجات الإخصاب والحمل ",
  description: "دليل شامل عن الخصوبة من بنون. معلومات طبية موثوقة عن أسباب تأخر الحمل وعلاجات الإخصاب المتاحة ونصائح لتحسين فرص الحمل.",
};

export default function FertilityGuidePage() {
  return <ClientFertilityGuidePage />;
}
