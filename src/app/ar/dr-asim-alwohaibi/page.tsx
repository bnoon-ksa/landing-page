import type { Metadata } from "next";
import Navbar from "@/components/ar/Layout/Navbar";
import DrAsimAlWohaibi from "@/components/ar/Common/DrAsimAlWohaibi";

export const metadata: Metadata = {
  title:"د. عاصم الوهيبي - أفضل طبيب إخصاب في الرياض | بنون ",
  description: "الدكتور عاصم الوهيبي، استشاري الإخصاب وأطفال الأنابيب في مركز بنون بالرياض. خبرة واسعة في علاج العقم والحقن المجهري.",
};

export default function DrAsimAlwohaibiPage() {
  return (
    <>
      <Navbar />
       <DrAsimAlWohaibi  />

    </>
  );
}
