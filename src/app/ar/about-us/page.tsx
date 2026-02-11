import type { Metadata } from "next";
import ClientAboutUsPage from "./page.client";

export const metadata: Metadata = {
  title: "نبذة عنّا – بنون",
  description: "تعرّفوا على بنون، شبكة مراكز الإخصاب وصحة المرأة الرائدة في السعودية. نقدم رعاية شاملة بأحدث التقنيات الطبية في الرياض وجدة والأحساء.",
};

export default function AboutUsPage() {
  return <ClientAboutUsPage />;
}
