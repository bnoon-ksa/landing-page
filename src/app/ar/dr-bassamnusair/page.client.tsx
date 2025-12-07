import Navbar from "@/features/Layout/Navbar";
import PageBanner from "@/features/Layout/PageBanner";
import DrBassam from "@/features/Common/DrBassam";
export default function ClientDrBassamPage() {
  return (
    <>
      <Navbar />
      <PageBanner bgImage="/images/clinics-banner-ar.jpg" />
       <DrBassam />

    </>
  );
}
