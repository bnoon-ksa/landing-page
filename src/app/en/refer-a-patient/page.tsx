import type { Metadata } from "next";
import PageBanner from "@/components/Layout/PageBanner";
import Navbar from "@/components/Layout/Navbar";
import ReferaPatient from "@/components/Common/ReferaPatient";
import { CDN_URL } from "../../../utils/cdn";
export const metadata: Metadata = {
  title: "Refer a Patient – Bnoon | Riyadh & Jeddah",
  description: "Learn about Bnoon, Saudi Arabia's leading fertility and women's health network. Advanced IVF and reproductive medicine across Riyadh, Jeddah, and Al Ahsa.",
};

export default function ReferaPatientPage() {
  return (
    <>
      <Navbar />

       <PageBanner
        bgImage={`${CDN_URL}/images/banner/en/refer-a-paitent.jpg`}
      />
      <ReferaPatient />
     
    </>
  );
}

