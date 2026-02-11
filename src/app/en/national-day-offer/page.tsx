import type { Metadata } from "next";
import ClientNationalDayOfferPage from "./page.client";

export const metadata: Metadata = {
  title: "National Day Offer at Bnoon",
  description: "Celebrate Saudi National Day with special offers from Bnoon fertility centers. Exclusive discounts on IVF treatments and reproductive health services.",
};

export default function NationalDayOfferPage() {
  return <ClientNationalDayOfferPage />;
}
