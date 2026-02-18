import type { Metadata } from "next";
import Navbar from "@/components/Layout/Navbar";
import PageBanner from "@/components/Layout/PageBanner";
import MensInfertilityCanpaign from "@/components/Common/MensInfertilityCanpaign";
import FoundingPageBanner from "@/components/Layout/FoundingPageBanner";
export const metadata: Metadata = {
  title: "Founding Day Offer for Andrology | Bnoon - Riyadh & Jeddah",
  description: "",
};

export default function NationalDayOfferPage() {
  return (
    <>
      <Navbar />

      {/* ✅ Only on this page: overlay text on banner (NO styled-jsx) */}
    <div style={{ position: "relative" }}>
  <FoundingPageBanner bgImage="/images/static-banner-en.jpeg" />

  <div
    className="second-banner-content reveal-text"
    style={{
      position: "absolute",
      top: "50%",
      left: "5%",
      transform: "translateY(-50%)",
      zIndex: 10,
    }}
  >
    <h1 style={{ color: "#004E78" }}>
      <span className="rowdies-font">
        FOUNDING DAY OFFER IN ANDROLOGY & MALE INFERTILITY SERVICES
      </span>
    </h1>

    <p style={{ color: "#fff" }} className="special-desc"></p>

    <p style={{ color: "#fff" }} className="terms-text"></p>
  </div>
</div>


      <MensInfertilityCanpaign />
    </>
  );
}
