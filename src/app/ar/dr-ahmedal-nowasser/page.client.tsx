import Navbar from "@/features/Layout/Navbar";
import PageBanner from "@/features/Layout/PageBanner";
import DrAhmedNowasser from "@/features/Common/DrAhmedNowasser";
export default function ClientDrAhmedNowasserPage() {
  return (
    <>
      <Navbar />
      <PageBanner bgImage="/images/clinics-banner-ar.jpg" />
       <DrAhmedNowasser />

    </>
  );
}
