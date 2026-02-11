import type { Metadata } from "next";
import ClientOurClinicsPage from "./page.client";

export const metadata: Metadata = {
  title: "Bnoon | Fertility & Women Health Centers in Riyadh, Jeddah & Al Ahsa",
  description: "Visit Bnoon's fertility and women's health centers in Riyadh, Jeddah, and Al Ahsa. Multiple locations offering top IVF and infertility services.",
};

export default function OurClinicsPage() {
  return <ClientOurClinicsPage />;
}
