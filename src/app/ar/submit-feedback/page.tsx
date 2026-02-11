import type { Metadata } from "next";
import ClientSubmitFeedbackPage from "./page.client";

export const metadata: Metadata = {
  title: "بنون – شاركونا تجربتكم ",
  description: "شاركونا تجربتكم مع مراكز بنون. ملاحظاتكم واقتراحاتكم تساعدنا في تحسين خدماتنا وتقديم أفضل رعاية صحية لكم.",
};

export default function SubmitFeedbackPage() {
  return <ClientSubmitFeedbackPage />;
}
