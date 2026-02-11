import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/Layout/Navbar";
import PageBanner from "@/components/Layout/PageBanner";
import FertilityDoctor from "@/components/Common/FertilityDoctor";
import OurExperts from "@/components/Common/OurExperts";

export const metadata: Metadata = {
  title: "Find the Best IVF, Gynecology & Andrology Doctors – Bnoon",
  description: "Meet Bnoon's expert team of IVF, gynecology, and andrology doctors. Experienced fertility specialists across Riyadh, Jeddah, and Al Ahsa.",
};

export default function OurExpertsPage() {
  return (
    <>
      <Navbar />

      <PageBanner
  bgImage="https://bnoon.blob.core.windows.net/website/images/experts-banner.jpg"
/>

      <OurExperts />
       <FertilityDoctor />
    </>
  );
}
