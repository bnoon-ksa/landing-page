import type { Metadata } from "next";
import ClientTreatmentsPage from "./page.client";

export const metadata: Metadata = {
  title: "Bnoon- IVF, ICSI, Male Infertility, PGT, Gyne Laproscopy|KSA ",
  description: "Explore Bnoon's fertility treatments: IVF, ICSI, male infertility, preimplantation genetic testing, and gynecological laparoscopy in Saudi Arabia.",
};

export default function TreatmentsPage() {
  return <ClientTreatmentsPage />;
}
