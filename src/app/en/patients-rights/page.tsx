import type { Metadata } from "next";
import ClientPatientsRightsPage from "./page.client";

export const metadata: Metadata = {
  title: "Patients Rights – Bnoon",
  description: "Learn about your rights as a patient at Bnoon. We are committed to transparent, fair medical care that respects your privacy and dignity.",
};

export default function ServerPatientsRightsPage() {
  return <ClientPatientsRightsPage />;
}
