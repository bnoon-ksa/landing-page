import type { Metadata } from "next";
import ClientYourVisitPage from "./page.client";

export const metadata: Metadata = {
  title: "Bnoon - Your Visit to Bnoon in Jeddah, Riyadh & Al Ahsa",
  description: "Everything you need to know about visiting Bnoon in Jeddah, Riyadh, and Al Ahsa. Appointments, preparation, and available services.",
};

export default function YourVisitPage() {
  return <ClientYourVisitPage />;
}
