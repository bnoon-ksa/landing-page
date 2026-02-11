import type { Metadata } from "next";
import ClientBnoonAlahsaPage from "./page.client";

export const metadata: Metadata = {
  title: "الدكتورة رانيا الشريفي - طبيبة أمراض النساء والولادة في بنون بالأحساء",
  description: "الدكتورة رانيا الشريفي، استشارية أمراض النساء والولادة في مركز بنون بالأحساء. خبرة واسعة في صحة المرأة والولادة.",
};

export default function BnoonAlahsaPage() {
  return <ClientBnoonAlahsaPage />;
}

