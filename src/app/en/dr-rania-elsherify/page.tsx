import type { Metadata } from "next";
import ClientDrRaniaElsherifyPage from "./page.client";

export const metadata: Metadata = {
  title: "Dr. Rania Elsherify - OBGYN Doctor in Bnoon | Al Ahsa",
  description: "Dr. Rania Elsherify, OBGYN consultant at Bnoon Al Ahsa. Specialized in women's health, obstetrics, and gynecological care.",
};

export default function ServerDrRaniaElsherifyPage() {
  return <ClientDrRaniaElsherifyPage />;
}


