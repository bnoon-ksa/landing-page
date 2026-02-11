import type { Metadata } from "next";
import ClientSubmitFeedbackPage from "./page.client";

export const metadata: Metadata = {
  title: "Bnoon – We’d Love to Hear From You ",
  description: "Share your experience with Bnoon. Your feedback and suggestions help us improve our services and provide the best healthcare for you.",
};

export default function SubmitFeedbackServer() {
  return <ClientSubmitFeedbackPage />;
}
