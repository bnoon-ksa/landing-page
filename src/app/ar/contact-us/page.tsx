import type { Metadata } from "next";
import Navbar from "@/components/ar/Layout/Navbar";
import PageBanner from "@/components/ar/Layout/PageBanner";
import ContactUsSection from "@/components/ar/Common/ContactUsSection";
import MediaSection from "@/components/ar/Common/MediaSection";

export const metadata: Metadata = {
  title: "بنون – رحلة الأمومة والأبوة مع بنون، تواصلوا معنا ",
  description: "تواصلوا مع مراكز بنون للإخصاب وصحة المرأة. احجزوا موعدكم في الرياض أو جدة أو الأحساء وابدأوا رحلة الأمومة والأبوة.",
};

export default function ContactUsPage() {
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
