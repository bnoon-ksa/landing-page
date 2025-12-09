import type { Metadata } from "next";
import ClientBnoonJeddahPage from "./page.client";

export const metadata: Metadata = {
  title: "بنون - مركز الإخصاب وصحة المرأة في جدة",
  description:
   "",
};

export default function BnoonJeddahPage() {
  return <ClientBnoonJeddahPage />;
}
