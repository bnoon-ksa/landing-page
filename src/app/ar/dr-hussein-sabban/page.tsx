import type { Metadata } from "next";
import Navbar from "@/components/ar/Layout/Navbar";
import DrHusseinSabban from "@/components/ar/Common/DrHusseinSabban";

export const metadata: Metadata = {
  title: "د. حسين صبّان- أفضل طبيب أطفال الأنابيب والعقم في جدة| بنو",
  description: "الدكتور حسين صبّان، استشاري أطفال الأنابيب والعقم في مركز بنون بجدة. خبرة واسعة في علاجات الإخصاب المساعد.",
};

export default function DrHusseinSabbanPage() {
  return (
    <>
      <Navbar />
       <DrHusseinSabban  />

    </>
  );
}
