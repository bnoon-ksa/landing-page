import type { Metadata } from "next";
import ClientBnoonAlahsaPage from "./page.client";

export const metadata: Metadata = {
  title: "Bnoon – Al Ahsa leading network for fertility & women’s health ",
  description:
    "",
};

export default function BnoonAlahsaPage() {
  return <ClientBnoonAlahsaPage />;
}
