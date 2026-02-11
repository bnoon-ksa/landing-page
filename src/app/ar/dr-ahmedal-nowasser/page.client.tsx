import Navbar from "@/components/ar/Layout/Navbar";
import PageBanner from "@/components/ar/Layout/PageBanner";
import DrAhmedNowasser from "@/components/ar/Common/DrAhmedNowasser";
export default function ClientDrAhmedNowasserPage() {
  return (
    <>
      <Navbar />
      <PageBanner bgImage="/images/clinics-banner-ar.jpg" />
       <DrAhmedNowasser />

    </>
  );
}
