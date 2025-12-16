import type { Metadata } from "next";
import ClientPatientsRightsPage from "./page.client";

export const metadata: Metadata = {
  title: "Patients Rights – Bnoon",
  description: "",
};

export default function ServerPatientsRightsPage() {
  return <ClientPatientsRightsPage />;
}
