import Navbar from "@/components/ar/Layout/Navbar";
import PageBanner from "@/components/ar/Layout/PageBanner";
import NationalDayOffer from "@/components/ar/Common/NationalDayOffer";
export default function AboutPage() {
  return (
    <>
      <Navbar />
      <PageBanner bgImage="/images/national-day-banner-ar.jpg" />
       <NationalDayOffer />

    </>
  );
}
