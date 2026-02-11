import type { Metadata } from "next";
import ClientBnoonBassamPage from "./page.client";

export const metadata: Metadata = {
  title: "الدكتور بسام نصير – أفضل استشاري إخصاب وعقم في الأحساء | بنون",
  description: "الدكتور بسام نصير، استشاري الإخصاب وعلاج العقم في مركز بنون بالأحساء. خبرة واسعة في أطفال الأنابيب والحقن المجهري.",
};

export default function BnoonBassamPage() {
  return <ClientBnoonBassamPage />;
}

