"use client";

import PageBanner from "@/components/ar/Layout/PageBanner";
import Navbar from "@/components/ar/Layout/Navbar";
import TeamsSection from "@/components/ar/Common/TeamsSection";

export default function ClientJoinOurTeamPage() {
  return (
    <>
      <Navbar />

      <PageBanner bgImage="/images/join-our-team-ar.jpg" />

      <TeamsSection />
    </>
  );
}

