import type { Metadata } from "next";
import ClientBnoonBassamPage from "./page.client";

export const metadata: Metadata = {
  title: "بنون – الشبكة الرائدة لمراكز الإخصاب وصحة المرأة في السعودية ",
  description:
   "",
};

export default function BnoonBassamPage() {
  return <ClientBnoonBassamPage />;
}
