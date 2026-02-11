import type { Metadata } from "next";
import ClientContactUsPage from "./page.client";

export const metadata: Metadata = {
  title: "Bnoon | Start Your Parenthood Journey – Contact Us ",
  description: "Contact Bnoon fertility and women's health centers. Book your appointment in Riyadh, Jeddah, or Al Ahsa and start your parenthood journey.",
};

export default function ContactUsPage() {
  return <ClientContactUsPage />;
}
