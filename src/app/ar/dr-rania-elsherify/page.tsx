import type { Metadata } from "next";
import ClientBnoonAlahsaPage from "./page.client";

export const metadata: Metadata = {
  title: "الدكتورة رانيا الشريفي - طبيبة أمراض النساء والولادة في بنون بالأحساء",
  description:
   "",
};

export default function BnoonAlahsaPage() {
  return <ClientBnoonAlahsaPage />;
}

