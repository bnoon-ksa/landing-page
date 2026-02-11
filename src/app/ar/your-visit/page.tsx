import type { Metadata } from "next";
import ClientYourVisitPage from "./page.client";

export const metadata: Metadata = {
  title:  "بنون – زيارتكم لمراكزنا في الرياض وجدة والأحساء ",
  description: "كل ما تحتاجون معرفته عن زيارتكم لمراكز بنون في الرياض وجدة والأحساء. معلومات عن المواعيد والتحضيرات والخدمات المتاحة.",
};

export default function YourVisitPage() {
  return <ClientYourVisitPage />;
}
