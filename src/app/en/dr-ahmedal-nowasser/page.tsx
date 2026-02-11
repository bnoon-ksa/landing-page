import type { Metadata } from "next";
import ClientDrAhmedAlNowasserPage from "./page.client";

export const metadata: Metadata = {
  title: "Dr. Ahmed Al-Nowasser – Best Fertility Doctor in Al Ahsa | Bnoon ",
  description: "Dr. Ahmed Al-Nowasser, fertility consultant at Bnoon Al Ahsa. Specialized in IVF, ICSI, and advanced infertility treatments.",
};

export default function ServerDrAhmedAlNowasserPage() {
  return <ClientDrAhmedAlNowasserPage />;
}
