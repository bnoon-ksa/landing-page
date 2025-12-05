import type { Metadata } from "next";
import ClientDrAhmedAlNowasserPage from "./page.client";

export const metadata: Metadata = {
  title: "Dr. Ahmed Al-Nowasser – Best Fertility Doctor in Al Ahsa | Bnoon ",
  description:
    "",
};

export default function ServerDrAhmedAlNowasserPage() {
  return <ClientDrAhmedAlNowasserPage />;
}
