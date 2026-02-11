import type { Metadata } from "next";
import ClientFertilityGuidePage from "./page.client";

export const metadata: Metadata = {
  title: "Bnoon - All Your Need to Know About Your Fertility ",
  description: "A comprehensive fertility guide from Bnoon. Reliable medical information on causes of infertility, available treatments, and tips to improve conception.",
};

export default function FertilityGuidePage() {
  return <ClientFertilityGuidePage />;
}
