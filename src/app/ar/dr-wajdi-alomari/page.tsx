import type { Metadata } from "next";
import Navbar from "@/components/ar/Layout/Navbar";
import DrWajdiAlOmari from "@/components/ar/Common/DrWajdiAlOmari";

export const metadata: Metadata = {
  title: "د. وجدي العمري - أفضل طبيب أطفال الأنابيب في الرياض | بنون ",
  description: "الدكتور وجدي العمري، استشاري الإخصاب وأطفال الأنابيب في مركز بنون بالرياض. خبرة واسعة في علاج العقم والحقن المجهري.",
};

export default function DrWajdiAlOmariPage() {
  return (
    <>
      <Navbar />
       <DrWajdiAlOmari  />

    </>
  );
}
