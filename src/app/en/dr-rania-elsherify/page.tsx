import type { Metadata } from "next";
import ClientDrRaniaElsherifyPage from "./page.client";

export const metadata: Metadata = {
  title: "Dr. Rania Elsherify is a highly experienced Obstetrics & Gynecology Registrar at Bnoon – Al Ahsa",
  description:
    "",
};

export default function ServerDrRaniaElsherifyPage() {
  return <ClientDrRaniaElsherifyPage />;
}

