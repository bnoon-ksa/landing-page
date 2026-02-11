import type { Metadata } from "next";
import Navbar from "@/components/Layout/Navbar";
import DrMaramDadoua from "@/components/Common/DrMaramDadoua";

export const metadata: Metadata = {
  title: "Dr. Maram Dadoua - Best OBGYN Doctor in Jeddah| Bnoon ",
  description: "Dr. Maram Dadoua, OBGYN consultant at Bnoon Jeddah. Specialized in women's health, obstetrics, and gynecological care.",
};

export default function ServerDrMaramDadouaPage() {
  return (
    <>
      <Navbar />
       <DrMaramDadoua   />

    </>
  );
}
