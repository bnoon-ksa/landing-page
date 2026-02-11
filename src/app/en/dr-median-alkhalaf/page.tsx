import type { Metadata } from "next";
import Navbar from "@/components/Layout/Navbar";
import DrMedianAlkhalaf  from "@/components/Common/DrMedianAlkhalaf";

export const metadata: Metadata = {
  title: "Dr. Median Alkhalaf - OBGYN Consultant in Bnoon | Al Ahsa",
  description: "Dr. Median Alkhalaf, OBGYN consultant at Bnoon Al Ahsa. Specialized in women's health, obstetrics, and gynecological care.",
};

export default function ServerDrMedianAlkhalafPage() {
  return (
    <>
      <Navbar />
       <DrMedianAlkhalaf  />

    </>
  );
}
