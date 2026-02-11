import type { Metadata } from "next";
import ClientBnoonAlahsaPage from "./page.client";

export const metadata: Metadata = {
  title: "Bnoon - Al Ahsa | The Fertility & Women Health Center",
  description: "Bnoon fertility and women's health center in Al Ahsa. IVF, ICSI, and infertility treatment services with an expert medical team.",
};

export default function BnoonAlahsaPage() {
  return <ClientBnoonAlahsaPage />;
}


