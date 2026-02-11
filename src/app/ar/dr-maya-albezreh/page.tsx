import type { Metadata } from "next";
import Navbar from "@/components/ar/Layout/Navbar";
import DrMayaAlbezreh from "@/components/ar/Common/DrMayaAlbezreh";

export const metadata: Metadata = {
  title: "د. مايا البزرة – طبيبة النساء والولادة والإخصاب في جدة| بنون ",
  description: "الدكتورة مايا البزرة، استشارية أمراض النساء والولادة والإخصاب في مركز بنون بجدة. خبرة واسعة في أطفال الأنابيب وصحة المرأة.",
};

export default function DrMayaAlbezrehPage() {
  return (
    <>
      <Navbar />
       <DrMayaAlbezreh   />

    </>
  );
}
