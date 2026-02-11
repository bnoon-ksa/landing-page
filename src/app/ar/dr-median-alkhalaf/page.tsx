import type { Metadata } from "next";
import ClientDrMedianAlkhalafPage from "./page.client";

export const metadata: Metadata = {
  title: "الدكتور مدين الخلف - استشاري أمراض النساء والولادة في بنون بالأحساء",
  description: "الدكتور مدين الخلف، استشاري أمراض النساء والولادة في مركز بنون بالأحساء. خبرة واسعة في صحة المرأة والولادة.",
};

export default function DrMedianAlkhalaf() {
  return <ClientDrMedianAlkhalafPage />;
}

