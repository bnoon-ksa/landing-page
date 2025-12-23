import type { Metadata } from "next";
import ClientTelemedicinePage from "./page.client";

export const metadata: Metadata = {
  title: "Telemedicine – Bnoon",
  description:
    "",
};
export default function TelemedicinePage() {
  return <ClientTelemedicinePage />;
}
