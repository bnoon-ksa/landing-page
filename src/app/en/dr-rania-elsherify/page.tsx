import type { Metadata } from "next";
import ClientDrRaniaElsherifyPage from "./page.client";

export const metadata: Metadata = {
  title: "Dr. Rania Elsherify - OBGYN Doctor in Bnoon | Al Ahsa",
  description:
    "",
};

export default function ServerDrRaniaElsherifyPage() {
  return <ClientDrRaniaElsherifyPage />;
}


