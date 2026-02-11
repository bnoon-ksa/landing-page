import type { Metadata } from "next";
import PageBanner from "@/components/Layout/PageBanner";
import Navbar from "@/components/Layout/Navbar";
import TreatmentsSection from "@/components/Common/TreatmentsSection";
import TreatmentsTabs from "@/components/Common/TreatmentsTabs";

export const metadata: Metadata = {
  title: "Bnoon- IVF, ICSI, Male Infertility, PGT, Gyne Laproscopy|KSA ",
  description: "Explore Bnoon's fertility treatments: IVF, ICSI, male infertility, preimplantation genetic testing, and gynecological laparoscopy in Saudi Arabia.",
};

export default function TreatmentsPage() {
  return (
    <>
      <Navbar />

      {/* PageBanner with static content */}
      <PageBanner bgImage="https://bnoon.blob.core.windows.net/website/images/treatments-banner.jpg" />
      <TreatmentsSection />
     <TreatmentsTabs />
    </>
  );
}
