import type { Metadata } from "next";
import ClientTelemedicinePage from "./page.client";

export const metadata: Metadata = {
  title: " الاستشارات عن بُعد – بنون",
  description: "استشارات طبية عن بُعد مع أطباء بنون المتخصصين في الإخصاب وصحة المرأة. احصلوا على استشارة مريحة من منزلكم في أي مكان بالسعودية.",
};

export default function TelemedicinePage() {
  return <ClientTelemedicinePage />;
}
