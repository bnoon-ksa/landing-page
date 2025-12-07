import type { Metadata } from "next";
import ClientBnoonAlahsaPage from "./page.client";

export const metadata: Metadata = {
  title: "بنون – الشبكة الرائدة لمراكز الإخصاب وصحة المرأة في السعودية ",
  description:
   "",
};

export default function BnoonAlahsaPage() {
  return <ClientBnoonAlahsaPage />;
}
