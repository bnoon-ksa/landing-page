import type { Metadata } from "next";
import Navbar from "@/components/Layout/Navbar";
import PageBanner from "@/components/Layout/PageBanner";
import NationalDayOffer from "@/components/Common/NationalDayOffer";
import FoundingPageBanner from "@/components/Layout/FoundingPageBanner";

export const metadata: Metadata = {
  title: "Founding Day Offer - IVF | Bnoon - Riyadh, Jeddah & Al Ahsa",
  description: "",
};

export default function NationalDayOfferPage() {
  return (
    <>
      <Navbar />

      <div style={{ position: "relative" }}>
       <FoundingPageBanner bgImage="/images/static-banner-en.jpeg" />

        <div
          className="second-banner-content reveal-text text-banner"
          style={{
            position: "absolute",
            top: "50%",
            left: "9%",
            transform: "translateY(-50%)",
            zIndex: 10,
          }}
        >
          <h1 style={{ color: "#004E78" }}>
            <span className="rowdies-font text-size">
              FOUNDING DAY OFFER ON<br /> IVF/ICSI CYCLES
            </span>
          </h1>
        </div>
      </div>

      <NationalDayOffer />

      {/* ✅ Only this page mobile banner shift (plain style tag) */}
   
    </>
  );
}
