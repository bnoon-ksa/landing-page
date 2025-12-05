import type { Metadata } from "next";
import ClientDrRaniaElsherifyPage from "./page.client";

export const metadata: Metadata = {
  title: "Dr. Rania El Sherify – Best Fertility Doctor in Al Ahsa | Bnoon ",
  description:
    "",
};

export default function ServerDrRaniaElsherifyPage() {
  return <ClientDrRaniaElsherifyPage />;
}
