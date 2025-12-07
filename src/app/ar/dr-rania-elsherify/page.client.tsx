import Navbar from "@/features/Layout/Navbar";
import PageBanner from "@/features/Layout/PageBanner";
import DrRaniaAlsherify from "@/features/Common/DrRaniaAlsherify";
export default function ClientDrRaniaAlsherifyPage() {
  return (
    <>
      <Navbar />
      <PageBanner bgImage="/images/clinics-banner-ar.jpg" />
       <DrRaniaAlsherify />

    </>
  );
}
