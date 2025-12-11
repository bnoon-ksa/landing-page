import type { Metadata } from "next";
import ClientBnoonRiyadhPage from "./page.client";

export const metadata: Metadata = {
  title: "Bnoon - Riyadh | The Fertility & Women Health Centers",
  description:
    "",
};

export default function BnoonRiyadhPage() {
  return <ClientBnoonRiyadhPage />;
}
