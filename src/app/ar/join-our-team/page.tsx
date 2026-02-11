import type { Metadata } from "next";
import PageBanner from "@/components/ar/Layout/PageBanner";
import Navbar from "@/components/ar/Layout/Navbar";
import TeamsSection from "@/components/ar/Common/TeamsSection";

export const metadata: Metadata = {
  title: "انضموا إلى فريق بنون – الابتكار، التعليم الطبي، الأبحاث ",
  description: "انضموا إلى فريق بنون الطبي. فرص عمل في مجالات الإخصاب والابتكار الطبي والتعليم والأبحاث في الرياض وجدة والأحساء.",
};

export default function JoinOurTeamPage() {
  return (
    <>
      <Navbar />

      <PageBanner bgImage="https://bnoon.blob.core.windows.net/website/images/join-our-team-ar.jpg" />

      <TeamsSection />
    </>
  );
}
