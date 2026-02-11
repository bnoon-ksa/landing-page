import type { Metadata } from "next";
import ClientWaadBnoonProgramPage from "./page.client";

export const metadata: Metadata = {
  title: "برنامج وعد بنون – الحمل أو استرداد الرسوم ",
  description: "برنامج وعد بنون يضمن لكم الحمل أو استرداد الرسوم. تعرّفوا على تفاصيل البرنامج وشروط الاستفادة من ضمان نجاح أطفال الأنابيب.",
};

export default function WaadBnoonProgramPage() {
  return <ClientWaadBnoonProgramPage />;
}
