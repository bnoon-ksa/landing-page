import type { Metadata } from "next";
import Navbar from "@/components/ar/Layout/Navbar";
import DrMaramDadoua from "@/components/ar/Common/DrMaramDadoua";

export const metadata: Metadata = {
  title:"د. مرام دعدوع - طبيبة أمراض النساء والولادة في جدة | بنون ",
  description: "الدكتورة مرام دعدوع، استشارية أمراض النساء والولادة في مركز بنون بجدة. خبرة واسعة في صحة المرأة والولادة.",
};

export default function DrMaramDadouaPage() {
  return (
    <>
      <Navbar />
       <DrMaramDadoua   />

    </>
  );
}
