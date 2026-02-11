"use client";


import Navbar from "@/components/ar/Layout/Navbar";
import PageBanner from "@/components/ar/Layout/PageBanner";
import ContactUsSection from "@/components/ar/Common/ContactUsSection";
import MediaSection from "@/components/ar/Common/MediaSection";
export default function ClientContactUsPage() {
  return (
    <>
      <Navbar />

      <PageBanner
        bgImage="/images/contactus-banner-ar.jpg"
      />
       <ContactUsSection />
       <MediaSection />
    </>
  );
}
