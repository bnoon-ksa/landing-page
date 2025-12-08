import type { Metadata } from "next";
import ClientBnoonBassamPage from "./page.client";

export const metadata: Metadata = {
  title: "الدكتور بسام نصير – أفضل استشاري إخصاب وعقم في الأحساء | بنون",
  description:
   "",
};

export default function BnoonBassamPage() {
  return <ClientBnoonBassamPage />;
}

