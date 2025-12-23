import type { Metadata } from "next";
import ClientTelemedicinePage from "./page.client";

export const metadata: Metadata = {
  title: " الاستشارات عن بُعد – بنون",
  description:
    "",
};

export default function TelemedicinePage() {
  return <ClientTelemedicinePage />;
}
