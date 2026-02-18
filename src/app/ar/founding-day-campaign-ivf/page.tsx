import type { Metadata } from "next";
import PageBanner from "@/components/ar/Layout/PageBanner";
import Navbar from "@/components/ar/Layout/Navbar";
import NationalDayOffer from "@/components/ar/Common/NationalDayOffer";
import FoundingPageBanner from "@/components/ar/Layout/FoundingPageBanner";
export const metadata: Metadata = {
  title: 
  "عرض يوم التأسيس - الحقن المجهري | بنون - الرياض وجدة والأحساء",
  description:
    "",
};

export default function FoundingDayDiscountPage() {
  return (
    <>
      <Navbar />
        <div style={{ position: "relative" }}>
  <FoundingPageBanner bgImage="/images/static-banner-ar.jpeg" />

  <div
    className="second-banner-content reveal-text"
    style={{
      position: "absolute",
      top: "50%",
      right: "8%",
      transform: "translateY(-50%)",
      zIndex: 10,
    }}
  >
    <h1 style={{ color: "#004E78" }}>
      <span className="rowdies-font">
      عرض يوم التأسيس للحقن المجهري
      </span>
    </h1>

    <p style={{ color: "#fff" }} className="special-desc"></p>

    <p style={{ color: "#fff" }} className="terms-text"></p>
  </div>
</div>

      <NationalDayOffer />
    </>
  );
}
