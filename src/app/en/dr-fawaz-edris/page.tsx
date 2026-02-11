import type { Metadata } from "next";
import ClientDrFawazEdrisPage from "./page.client";

export const metadata: Metadata = {
  title: "Dr. Fawaz Edris – Best IVF Doctor in Jeddah | Bnoon ",
  description: "Dr. Fawaz Edris, IVF and infertility consultant at Bnoon Jeddah. Specialized in assisted reproductive treatments and fertility care.",
};

export default function ServerDrFawazEdrisPage() {
  return <ClientDrFawazEdrisPage />;
}
