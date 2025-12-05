import type { Metadata } from "next";
import ClientDrWajdiAlomariPage from "./page.client";

export const metadata: Metadata = {
  title: "Dr. Rania El Sherify – Best Fertility Doctor in Riyadh | Bnoon",
  description: "",
};

export default function ServerPage() {
  return <ClientDrRaniaPage />;
}
