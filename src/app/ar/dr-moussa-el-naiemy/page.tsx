import type { Metadata } from "next";
import ClientDrMoussaElNaiemyPage from "./page.client";

export const metadata: Metadata = {
  title: "د. موسى  النعمي–أفضل طبيب أمراض الذكورة والعقم في الرياض|بنون ",
  description: "الدكتور موسى النعمي، استشاري أمراض الذكورة والعقم في مركز بنون بالرياض. خبرة واسعة في تشخيص وعلاج عقم الرجال.",
};

export default function DrMoussaElNaiemyPage() {
  return <ClientDrMoussaElNaiemyPage />;
}
