import type { Metadata } from "next";
import ClientOurClinicsPage from "./page.client";

export const metadata: Metadata = {
  title: "بنون - مراكز الإخصاب وصحة المرأة في الرياض وجدة والأحساء ",
  description: "اكتشفوا مراكز بنون للإخصاب وصحة المرأة في الرياض وجدة والأحساء. مواقع متعددة لتقديم أفضل خدمات علاج العقم وأطفال الأنابيب.",
};

export default function OurClinicsPage() {
  return <ClientOurClinicsPage />;
}
