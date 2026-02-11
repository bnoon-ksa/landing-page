import type { Metadata } from "next";
import Navbar from "@/components/Layout/Navbar";
import PageBanner from "@/components/Layout/PageBanner";
import AlahsaArea from "@/components/Common/AlahsaArea";

export const metadata: Metadata = {
  title: "Bnoon - Al Ahsa | The Fertility & Women Health Center",
  description: "Bnoon fertility and women's health center in Al Ahsa. IVF, ICSI, and infertility treatment services with an expert medical team.",
};

export default function BnoonAlahsaPage() {
  return (
    <>
      <Navbar />
      <PageBanner bgImage="/images/clinics-banner.jpg" />
       <AlahsaArea />

    </>
  );
}
