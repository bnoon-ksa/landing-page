import type { Metadata } from "next";
import Navbar from "@/components/Layout/Navbar";
import PageBanner from "@/components/Layout/PageBanner";
import Riyadharea from "@/components/Common/Riyadharea";

export const metadata: Metadata = {
  title: "Bnoon - Riyadh | The Fertility & Women Health Centers",
  description: "Bnoon fertility and women's health centers in Riyadh. IVF, ICSI, and infertility treatment services with an expert medical team.",
};

export default function BnoonRiyadhPage() {
  return (
    <>
      <Navbar />
      <PageBanner bgImage="https://bnoon.blob.core.windows.net/website/images/clinics-banner.jpg" />
       <Riyadharea />

    </>
  );
}
