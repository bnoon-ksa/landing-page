import type { Metadata } from 'next';
import Navbar from '@/components/ar/Layout/Navbar';
import OptimizedPageBanner from '@/components/ui/OptimizedPageBanner';
import ContactUsSection from '@/components/ar/Common/ContactUsSection';
import MediaSection from '@/components/ar/Common/MediaSection';

export const metadata: Metadata = {
  title: 'بنون – رحلة الأمومة والأبوة مع بنون، تواصلوا معنا ',
  description:
    'تواصلوا مع مراكز بنون للإخصاب وصحة المرأة. احجزوا موعدكم في الرياض أو جدة أو الأحساء وابدأوا رحلة الأمومة والأبوة.',
};

export default function ContactUsPage() {
  return (
    <>
      <Navbar />

      <OptimizedPageBanner imageName="contact-us-banner-ar" />
      <ContactUsSection />
      <MediaSection />
    </>
  );
}
