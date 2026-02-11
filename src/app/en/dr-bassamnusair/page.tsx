import type { Metadata } from "next";
import ClientDrBassamPage from "./page.client";

export const metadata: Metadata = {
  title: "Dr. Bassam Nusair  – Best Fertility Doctor in Riyadh | Bnoon ",
  description: "Dr. Bassam Nusair, fertility consultant at Bnoon Al Ahsa. Specialized in IVF, ICSI, and advanced infertility treatments.",
};

export default function ServerDrBassamPage() {
  return <ClientDrBassamPage />;
}
