import type { Metadata } from "next";
import Navbar from "@/components/Layout/Navbar";
import PageBanner from "@/components/Layout/PageBanner";
import OurLocations from "@/components/Common/OurLocations";

export const metadata: Metadata = {
  title: "Bnoon | Fertility & Women Health Centers in Riyadh, Jeddah & Al Ahsa",
  description: "Visit Bnoon's fertility and women's health centers in Riyadh, Jeddah, and Al Ahsa. Multiple locations offering top IVF and infertility services.",
};

export default function OurClinicsPage() {
  return (
    <>
      <Navbar />
      <PageBanner bgImage="https://bnoon.blob.core.windows.net/website/images/clinics-banner.jpg" />
       <OurLocations />

    </>
  );
}
