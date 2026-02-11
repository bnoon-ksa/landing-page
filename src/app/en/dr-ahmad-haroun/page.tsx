import type { Metadata } from "next";
import ClientDrAhmadHarounPage from "./page.client";

export const metadata: Metadata = {
  title: "Dr. Ahmad Haroun – Urologist/Andrologist in Jeddah | Bnoon ",
  description: "Dr. Ahmad Haroun, urologist and andrologist at Bnoon Jeddah. Specialized in diagnosing and treating male infertility.",
};

export default function ServerDrAhmadHarounPage() {
  return <ClientDrAhmadHarounPage />;
}
