import type { Metadata } from "next";
import Navbar from "@/components/Layout/Navbar";
import DrMazinBishara from "@/components/Common/DrMazinBishara";

export const metadata: Metadata = {
  title: "Dr. Mazin Bishara – Best IVF Doctor in Jeddah | Bnoon ",
  description: "Dr. Mazin Bishara, IVF and infertility consultant at Bnoon Jeddah. Specialized in assisted reproductive treatments and fertility care.",
};

export default function ServerDrMazinBisharaPage() {
  return (
    <>
      <Navbar />
       <DrMazinBishara  />

    </>
  );
}
