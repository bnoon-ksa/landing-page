import Navbar from "@/components/ar/Layout/Navbar";
import PageBanner from "@/components/ar/Layout/PageBanner";
import DrBassam from "@/components/ar/Common/DrBassam";
export default function ClientDrBassamPage() {
  return (
    <>
      <Navbar />
      <PageBanner bgImage="/images/clinics-banner-ar.jpg" />
       <DrBassam />

    </>
  );
}
