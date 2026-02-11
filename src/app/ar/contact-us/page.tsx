import type { Metadata } from "next";
import ClientContactUsPage from "./page.client";

export const metadata: Metadata = {
  title: "بنون – رحلة الأمومة والأبوة مع بنون، تواصلوا معنا ",
  description: "تواصلوا مع مراكز بنون للإخصاب وصحة المرأة. احجزوا موعدكم في الرياض أو جدة أو الأحساء وابدأوا رحلة الأمومة والأبوة.",
};

export default function ContactUsPage() {
  return <ClientContactUsPage />;
}
