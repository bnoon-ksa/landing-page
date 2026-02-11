import type { Metadata } from "next";
import ClientAboutUsPage from "./page.client";

export const metadata: Metadata = {
  title: "About Us – Bnoon",
  description: "Learn about Bnoon, Saudi Arabia's leading fertility and women's health network. Advanced IVF and reproductive medicine across Riyadh, Jeddah, and Al Ahsa.",
};

export default function AboutUsPage() {
  return <ClientAboutUsPage />;
}
