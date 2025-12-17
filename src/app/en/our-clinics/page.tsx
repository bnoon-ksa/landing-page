import type { Metadata } from "next";
import ClientOurClinicsPage from "./page.client";

export const metadata: Metadata = {
  title: "Bnoon | Fertility & Women Health Centers in Riyadh, Jeddah & Al Ahsa",
  description:
    "",
};

export default function OurClinicsPage() {
  return <ClientOurClinicsPage />;
}
