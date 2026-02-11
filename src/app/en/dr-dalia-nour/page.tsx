import type { Metadata } from "next";
import ClientDrDaliaNourPage from "./page.client";

export const metadata: Metadata = {
  title: "Dr. Dalia Adel – Best OBGYN & IVF Doctor in Riyadh | Bnoon",
  description: "Dr. Dalia Adel, OBGYN and IVF consultant at Bnoon Riyadh. Specialized in women's health, fertility, and reproductive medicine.",
};

export default function ServerDrDaliaNourPage() {
  return <ClientDrDaliaNourPage />;
}
