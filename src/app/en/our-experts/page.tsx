import type { Metadata } from "next";
import { Suspense } from "react";
import ClientOurExpertsPage from "./page.client";

export const metadata: Metadata = {
  title: "Find the Best IVF, Gynecology & Andrology Doctors – Bnoon",
  description: "Meet Bnoon's expert team of IVF, gynecology, and andrology doctors. Experienced fertility specialists across Riyadh, Jeddah, and Al Ahsa.",
};

export default function OurExpertsPage() {
  return (
    <Suspense fallback={null}>
      <ClientOurExpertsPage />
    </Suspense>
  );
}
