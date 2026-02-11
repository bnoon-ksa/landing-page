import type { Metadata } from "next";
import PageBanner from "@/components/ar/Layout/PageBanner";
import Navbar from "@/components/ar/Layout/Navbar";
import FeedbackSection from "@/components/ar/Common/FeedbackSection";

export const metadata: Metadata = {
  title: "بنون – شاركونا تجربتكم ",
  description: "شاركونا تجربتكم مع مراكز بنون. ملاحظاتكم واقتراحاتكم تساعدنا في تحسين خدماتنا وتقديم أفضل رعاية صحية لكم.",
};

export default function SubmitFeedbackPage() {
  return (
    <>
      <Navbar />

      <PageBanner bgImage="https://bnoon.blob.core.windows.net/website/images/feedback-banner-ar.jpg" />

      <FeedbackSection />
    </>
  );
}
