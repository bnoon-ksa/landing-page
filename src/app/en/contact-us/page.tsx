import type { Metadata } from 'next';
import Navbar from '@/components/Layout/Navbar';
import OptimizedPageBanner from '@/components/ui/OptimizedPageBanner';
import ContactUsSection from '@/components/Common/ContactUsSection';
import MediaSection from '@/components/Common/MediaSection';

export const metadata: Metadata = {
  title: 'Bnoon | Start Your Parenthood Journey – Contact Us ',
  description:
    "Contact Bnoon fertility and women's health centers. Book your appointment in Riyadh, Jeddah, or Al Ahsa and start your parenthood journey.",
};

export default function ContactUsPage() {
  return (
    <>
      <Navbar />

      <OptimizedPageBanner imageName="contact-us-banner" />
      <ContactUsSection />
      <MediaSection />
    </>
  );
}
