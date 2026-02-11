import type { Metadata } from "next";
import { Suspense } from "react";
import ClientOurExpertsPage from "./page.client";

export const metadata: Metadata = {
  title: "أطباء أطفال الأنابيب وأمراض النساء وأمراض الذكورة – بنون ",
  description: "تعرّفوا على أطباء بنون المتخصصين في أطفال الأنابيب وأمراض النساء والذكورة. فريق طبي خبير في الرياض وجدة والأحساء.",
};

export default function OurExpertsPage() {
  return(
    <Suspense fallback={null}>
      <ClientOurExpertsPage />;
      </Suspense>
  );
}
