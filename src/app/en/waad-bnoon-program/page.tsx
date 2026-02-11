import type { Metadata } from "next";
import ClientWaadPage from "./page.client";

export const metadata: Metadata = {
  title: "Wa'ad Bnoon Program - Get Pregnant or Your Money Back ",
  description: "The Wa'ad Bnoon Program guarantees pregnancy or your money back. Learn about program details and eligibility for IVF success guarantee.",
};

export default function WaadPage() {
  return <ClientWaadPage />;
}
