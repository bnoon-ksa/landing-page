import type { Metadata } from "next";
import ClientBnoonJeddahPage from "./page.client";

export const metadata: Metadata = {
  title: "Bnoon – KSA’s leading network for fertility & women’s health ",
  description:
    "",
};

export default function BnoonJeddahPage() {
  return <ClientBnoonJeddahPage />;
}
