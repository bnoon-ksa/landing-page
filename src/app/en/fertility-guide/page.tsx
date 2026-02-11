import type { Metadata } from "next";
import PageBanner from "@/components/Layout/PageBanner";
import Navbar from "@/components/Layout/Navbar";
import FertilityTabs from "@/components/Common/FertilityTabs";
import CustomList from "@/components/Common/CustomList";

export const metadata: Metadata = {
  title: "Bnoon - All Your Need to Know About Your Fertility ",
  description: "A comprehensive fertility guide from Bnoon. Reliable medical information on causes of infertility, available treatments, and tips to improve conception.",
};

export default function FertilityGuidePage() {
  return (
    <>
      <Navbar />

      {/* PageBanner with static content */}
      <PageBanner bgImage="/images/fertility-guid-banner.jpg" />
     <FertilityTabs />

     
    </>
  );
}
