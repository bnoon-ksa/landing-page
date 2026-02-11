import type { Metadata } from "next";
import ClientBnoonJeddahPage from "./page.client";

export const metadata: Metadata = {
  title: "Bnoon - Jeddah | The Fertility & Women Health Center",
  description: "Bnoon fertility and women's health center in Jeddah. IVF, ICSI, and infertility treatment services with an expert medical team.",
};

export default function BnoonJeddahPage() {
  return <ClientBnoonJeddahPage />;
}
