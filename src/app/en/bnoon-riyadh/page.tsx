import type { Metadata } from "next";
import ClientBnoonRiyadhPage from "./page.client";

export const metadata: Metadata = {
  title: "Bnoon - Riyadh | The Fertility & Women Health Centers",
  description: "Bnoon fertility and women's health centers in Riyadh. IVF, ICSI, and infertility treatment services with an expert medical team.",
};

export default function BnoonRiyadhPage() {
  return <ClientBnoonRiyadhPage />;
}
