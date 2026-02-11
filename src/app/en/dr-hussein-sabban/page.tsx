import type { Metadata } from "next";
import Navbar from "@/components/Layout/Navbar";
import DrHusseinSabban from "@/components/Common/DrHusseinSabban";

export const metadata: Metadata = {
  title: "Dr. Hussein Sabban - Best IVF Doctor in Jeddah | Bnoon",
  description: "Dr. Hussein Sabban, IVF and infertility consultant at Bnoon Jeddah. Specialized in assisted reproductive treatments and fertility care.",
};

export default function ServerDrHusseinSabbanPage() {
  return (
    <>
      <Navbar />
       <DrHusseinSabban  />

    </>
  );
}
