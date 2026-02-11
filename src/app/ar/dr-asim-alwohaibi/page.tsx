import type { Metadata } from "next";
import ClientDrAsimAlwohaibiPage from "./page.client";

export const metadata: Metadata = {
  title:"د. عاصم الوهيبي - أفضل طبيب إخصاب في الرياض | بنون ",
  description: "الدكتور عاصم الوهيبي، استشاري الإخصاب وأطفال الأنابيب في مركز بنون بالرياض. خبرة واسعة في علاج العقم والحقن المجهري.",
};

export default function DrAsimAlwohaibiPage() {
  return <ClientDrAsimAlwohaibiPage />;
}
