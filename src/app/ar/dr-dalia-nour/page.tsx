import type { Metadata } from "next";
import ClientDrDaliaNourPage from "./page.client";

export const metadata: Metadata = {
  title: "د. داليا عادل - طبيبة النسائية وتأخر الحمل في الرياض | بنون ",
  description: "الدكتورة داليا عادل، استشارية أمراض النساء وتأخر الحمل في مركز بنون بالرياض. خبرة واسعة في الإخصاب وصحة المرأة.",
};

export default function DrDaliaNourPage() {
  return <ClientDrDaliaNourPage />;
}
