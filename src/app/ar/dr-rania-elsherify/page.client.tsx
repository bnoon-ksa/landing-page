import Navbar from "@/components/ar/Layout/Navbar";
import PageBanner from "@/components/ar/Layout/PageBanner";
import DrRaniaAlsherify from "@/components/ar/Common/DrRaniaAlsherify";
export default function ClientDrRaniaAlsherifyPage() {
  return (
    <>
      <Navbar />
      <PageBanner bgImage="/images/clinics-banner-ar.jpg" />
       <DrRaniaAlsherify />

    </>
  );
}
