import type { Metadata } from "next";
import Navbar from "@/components/Layout/Navbar";
import DrAhmedAlshaikh from "@/components/Common/DrAhmedAlshaikh";

export const metadata: Metadata = {
  title: "Dr. Ahmed Alshaikh – Best Fertility Doctor in Jeddah | Bnoon ",
  description: "Dr. Ahmed Alshaikh, fertility consultant at Bnoon Jeddah. Specialized in IVF, ICSI, and advanced reproductive treatments.",
};

export default function ServerDrAhmedAlshaikhPage() {
  return (
    <>
      <Navbar />
       <DrAhmedAlshaikh  />

    </>
  );
}
