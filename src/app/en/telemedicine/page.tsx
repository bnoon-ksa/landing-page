import type { Metadata } from "next";
import ClientTelemedicinePage from "./page.client";

export const metadata: Metadata = {
  title: "Telemedicine – Bnoon",
  description: "Book a telemedicine consultation with Bnoon's fertility and women's health specialists. Convenient virtual appointments from anywhere in Saudi Arabia.",
};
export default function TelemedicinePage() {
  return <ClientTelemedicinePage />;
}
