import type { Metadata } from "next";
import ClientPatientsRightsPage from "./page.client";

export const metadata: Metadata = {
  title: "حقوق المرضى – بنون",
  description: "تعرّفوا على حقوقكم كمرضى في مراكز بنون. نلتزم بتقديم رعاية طبية شفافة وعادلة تحترم خصوصيتكم وكرامتكم وفقاً للمعايير الصحية السعودية.",
};

export default function ServerPatientsRightsPage() {
  return <ClientPatientsRightsPage />;
}
