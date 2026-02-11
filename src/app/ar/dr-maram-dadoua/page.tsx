import type { Metadata } from "next";
import ClientDrMaramDadouaPage from "./page.client";

export const metadata: Metadata = {
  title:"د. مرام دعدوع - طبيبة أمراض النساء والولادة في جدة | بنون ",
  description: "الدكتورة مرام دعدوع، استشارية أمراض النساء والولادة في مركز بنون بجدة. خبرة واسعة في صحة المرأة والولادة.",
};

export default function DrMaramDadouaPage() {
  return <ClientDrMaramDadouaPage />;
}
