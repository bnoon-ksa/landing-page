import type { Metadata } from "next";
import ClientDrAhmedNowasserPage from "./page.client";

export const metadata: Metadata = {
  title: "الدكتور أحمد النويصر – أفضل استشاري إخصاب وعقم في الأحساء | بنون",
  description: "الدكتور أحمد النويصر، استشاري الإخصاب وعلاج العقم في مركز بنون بالأحساء. خبرة واسعة في أطفال الأنابيب والحقن المجهري.",
};

export default function DrAhmedNowasser() {
  return <ClientDrAhmedNowasserPage />;
}

