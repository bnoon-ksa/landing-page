import type { Metadata } from "next";
import ClientDrMedianAlkhalafPage from "./page.client";

export const metadata: Metadata = {
  title: "الدكتور مدين الخلف - استشاري أمراض النساء والولادة في بنون بالأحساء",
  description:
   "",
};

export default function DrMedianAlkhalaf() {
  return <ClientDrMedianAlkhalafPage />;
}

