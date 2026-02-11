import type { Metadata } from "next";
import Navbar from "@/components/Layout/Navbar";
import DrMayaAlbezreh from "@/components/Common/DrMayaAlbezreh";

export const metadata: Metadata = {
  title: "Dr. Maya Albezreh - Best OBGYN & IVF Doctor in Jeddah| Bnoon ",
  description: "Dr. Maya Albezreh, OBGYN and IVF consultant at Bnoon Jeddah. Specialized in IVF, women's health, and reproductive medicine.",
};

export default function ServerDrMayaAlbezrehPage() {
  return (
    <>
      <Navbar />
       <DrMayaAlbezreh   />

    </>
  );
}
