import type { Metadata } from "next";
import ClientDrAhmedNowasserPage from "./page.client";

export const metadata: Metadata = {
  title: "بنون – الشبكة الرائدة لمراكز الإخصاب وصحة المرأة في السعودية ",
  description:
   "",
};

export default function DrAhmedNowasser() {
  return <ClientDrAhmedNowasserPage />;
}
