import type { Metadata } from "next";
import Navbar from "@/components/Layout/Navbar";
import DrAbdulAzizAlShahrani from "@/components/Common/DrAbdulAzizAlShahrani";

export const metadata: Metadata = {
  title: "Dr. AbdulAziz AlShahrani - Best IVF Doctor in Riyadh | Bnoon",
  description: "Dr. AbdulAziz AlShahrani, IVF and fertility consultant at Bnoon Riyadh. Specialized in ICSI and advanced reproductive medicine.",
};

export default function ServerDrAbdalazizPage() {
  return (
    <>
      <Navbar />
       <DrAbdulAzizAlShahrani  />

    </>
  );
}
