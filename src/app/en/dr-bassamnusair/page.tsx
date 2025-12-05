import type { Metadata } from "next";
import ClientDrBassamPage from "./page.client";

export const metadata: Metadata = {
  title: "Dr. Bassam Nusair  – Best Fertility Doctor in Riyadh | Bnoon ",
  description:
    "",
};

export default function ServerDrBassamPage() {
  return <ClientDrBassamPage />;
}
