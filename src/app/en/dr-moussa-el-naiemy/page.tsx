import type { Metadata } from "next";
import ClientDrMoussaElNaiemyPage from "./page.client";

export const metadata: Metadata = {
  title: "Dr. Mousa ElNaiemy – Urologist/Andrologist in Riyadh | Bnoon ",
  description: "Dr. Mousa ElNaiemy, urologist and andrologist at Bnoon Riyadh. Specialized in diagnosing and treating male infertility.",
};

export default function ServerDrMoussaElNaiemyPage() {
  return <ClientDrMoussaElNaiemyPage />;
}
