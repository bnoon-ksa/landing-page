"use client";

import PageBanner from "@/components/ar/Layout/PageBanner";
import Navbar from "@/components/ar/Layout/Navbar";
import FeedbackSection from "@/components/ar/Common/FeedbackSection";

export default function ClientSubmitFeedbackPage() {
  return (
    <>
      <Navbar />

      <PageBanner bgImage="/images/feedback-banner-ar.jpg" />

      <FeedbackSection />
    </>
  );
}

