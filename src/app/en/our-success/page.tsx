import type { Metadata } from "next";
import ClientOurSuccessPage from "./page.client";

export const metadata: Metadata = {
  title: "Bnoon - Leading Pregnancy Rates (IVF/ICSI) ",
  description: "Discover Bnoon's leading IVF and ICSI pregnancy success rates. Advanced reproductive technology and an expert medical team delivering results.",
};

export default function OurSuccessPage() {
  return <ClientOurSuccessPage />;
}
