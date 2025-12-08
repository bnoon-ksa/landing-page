import type { Metadata } from "next";
import ClientDrMedianAlkhalafPage from "./page.client";

export const metadata: Metadata = {
  title: "Dr. Median Alkhalaf - OBGYN Consultant in Bnoon | Al Ahsa",
  description:
    "",
};

export default function ServerDrMedianAlkhalafPage() {
  return <ClientDrMedianAlkhalafPage />;
}

