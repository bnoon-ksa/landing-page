import type { Metadata } from "next";
import ClientDrWajdiAlomariPage from "./page.client";

export const metadata: Metadata = {
  title: "Dr. Wajdi Al Omari – Best Fertility Doctor in Riyadh | Bnoon ",
  description:
    "",
};

export default function ServerDrWajdiAlomariPage() {
  return <ClientDrWajdiAlomariPage />;
}
