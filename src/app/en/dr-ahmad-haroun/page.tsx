import type { Metadata } from "next";
import Navbar from "@/components/Layout/Navbar";
import DrAhmadHaroun from "@/components/Common/DrAhmadHaroun";

export const metadata: Metadata = {
  title: "Dr. Ahmad Haroun – Urologist/Andrologist in Jeddah | Bnoon ",
  description: "Dr. Ahmad Haroun, urologist and andrologist at Bnoon Jeddah. Specialized in diagnosing and treating male infertility.",
};

export default function ServerDrAhmadHarounPage() {
  return (
    <>
      <Navbar />
       <DrAhmadHaroun  />

    </>
  );
}
