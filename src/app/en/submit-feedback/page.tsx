import type { Metadata } from "next";
import PageBanner from "@/components/Layout/PageBanner";
import Navbar from "@/components/Layout/Navbar";
import FeedbackSection from "@/components/Common/FeedbackSection";

export const metadata: Metadata = {
  title: "Bnoon – We’d Love to Hear From You ",
  description: "Share your experience with Bnoon. Your feedback and suggestions help us improve our services and provide the best healthcare for you.",
};

export default function SubmitFeedbackServer() {
  return (
    <>
      <Navbar />

      <PageBanner bgImage="https://bnoon.blob.core.windows.net/website/images/feedback-banner.jpg" />

      <FeedbackSection />
    </>
  );
}
