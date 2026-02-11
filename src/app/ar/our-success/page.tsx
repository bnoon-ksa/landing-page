import type { Metadata } from "next";
import ClientOurSuccessPage from "./page.client";

export const metadata: Metadata = {
  title:"بنون – نسب نجاح الحمل، عمليات أطفال الأنابيب والحقن المجهري ",
  description: "اكتشفوا نسب نجاح عمليات أطفال الأنابيب والحقن المجهري في بنون. نسب حمل رائدة بفضل أحدث التقنيات وفريق طبي متميز.",
};

export default function OurSuccessPage() {
  return <ClientOurSuccessPage />;
}
