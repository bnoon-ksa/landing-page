import type { Metadata } from "next";
import ClientDrWajdiAlomariPage from "./page.client";

export const metadata: Metadata = {
  title: "Dr. Wajdi Al Omari – Best Fertility Doctor in Riyadh | Bnoon ",
  description: "Dr. Wajdi Al Omari, fertility consultant at Bnoon Riyadh. Specialized in IVF, ICSI, and advanced infertility treatments.",
};

export default function ServerDrWajdiAlomariPage() {
  return <ClientDrWajdiAlomariPage />;
}
