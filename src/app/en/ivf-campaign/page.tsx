import type { Metadata } from "next";
import Navbar from "@/components/Layout/Navbar";
import PageBanner from "@/components/Layout/FoundingPageBanner";
import NationalDayOffer from "@/components/Common/NationalDayOffer";

export const metadata: Metadata = {
  title: "Founding Day Offer for Andrology | Bnoon - Riyadh & Jeddah",
  description:
    "",
};

export default function NationalDayOfferPage() {
  return (
    <>
      <Navbar />

   <PageBanner />


      <NationalDayOffer />
    </>
  );
}
