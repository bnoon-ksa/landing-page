import type { Metadata } from "next";
import ClientYourVisitPage from "./page.client";

export const metadata: Metadata = {
  title: "Bnoon - Your Visit to Bnoon in Jeddah, Riyadh & Al Ahsa",
  description:
    "",
};

export default function YourVisitPage() {
  return <ClientYourVisitPage />;
}
