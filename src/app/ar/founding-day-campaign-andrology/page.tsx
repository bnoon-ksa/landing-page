
import type { Metadata } from "next";
import Navbar from "@/components/ar/Layout/Navbar";
import MensInfertilityTreatments from "@/components/ar/Common/MensInfertilityTreatments";
import FoundingPageBanner from "@/components/ar/Layout/FoundingPageBanner";

export const metadata: Metadata = {
  title: 
  "عرض يوم التأسيس بعلاجات أمراض الذكورة | بنون - الرياض وجدة",
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
      right: "6%",
      transform: "translateY(-50%)",
      zIndex: 10,
    }}
  >
    <h1 style={{ color: "#004E78" }}>
      <span className="rowdies-font">
      عرض يوم التأسيس لعلاجات  أمراض الذكورة
      </span>
    </h1>

    <p style={{ color: "#fff" }} className="special-desc"></p>

    <p style={{ color: "#fff" }} className="terms-text"></p>
  </div>
</div>

      <MensInfertilityTreatments />
    </>
  );
}
