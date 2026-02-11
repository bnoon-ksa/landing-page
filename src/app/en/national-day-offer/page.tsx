import type { Metadata } from "next";
import Navbar from "@/components/Layout/Navbar";
import PageBanner from "@/components/Layout/PageBanner";
import NationalDayOffer from "@/components/Common/NationalDayOffer";

export const metadata: Metadata = {
  title: "National Day Offer at Bnoon",
  description: "Celebrate Saudi National Day with special offers from Bnoon fertility centers. Exclusive discounts on IVF treatments and reproductive health services.",
};

export default function NationalDayOfferPage() {
  return (
    <>
      <Navbar />
      <PageBanner bgImage="/images/national-day-banner.jpg" />
       <NationalDayOffer />

    </>
  );
}
