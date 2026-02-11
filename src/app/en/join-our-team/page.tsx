import type { Metadata } from "next";
import ClientJoinOurTeamPage from "./page.client";

export const metadata: Metadata = {
  title: "Join Bnoon – Innovation, Education & Research ",
  description: "Join Bnoon's medical team. Career opportunities in fertility medicine, innovation, education, and research across Riyadh, Jeddah, and Al Ahsa.",
};

export default function JoinOurTeamPage() {
  return <ClientJoinOurTeamPage />;
}
