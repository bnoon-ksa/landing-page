import type { Metadata } from "next";
import ClientBnoonAlahsaPage from "./page.client";

export const metadata: Metadata = {
  title: "بنون - مركز الإخصاب وصحة المرأة في الأحساء",
  description:
   "",
};

export default function BnoonAlahsaPage() {
  return <ClientBnoonAlahsaPage />;
}

