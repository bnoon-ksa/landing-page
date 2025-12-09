import type { Metadata } from "next";
import ClientBnoonRiyadhPage from "./page.client";

export const metadata: Metadata = {
  title: "بنون - مراكز الإخصاب وصحة المرأة في الرياض",
  description:
   "",
};

export default function BnoonRiyadhPage() {
  return <ClientBnoonRiyadhPage />;
}
