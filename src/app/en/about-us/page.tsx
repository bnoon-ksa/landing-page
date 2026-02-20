import type { Metadata } from 'next';
import OptimizedPageBanner from '@/components/ui/OptimizedPageBanner';
import Navbar from '@/components/Layout/Navbar';
import AboutusSection from '@/components/Common/AboutusSection';
import WhoAreWe from '@/components/Common/WhoAreWe';

export const metadata: Metadata = {
  title: 'About Us – Bnoon',
  description:
    "Learn about Bnoon, Saudi Arabia's leading fertility and women's health network. Advanced IVF and reproductive medicine across Riyadh, Jeddah, and Al Ahsa.",
};

export default function AboutUsPage() {
  return (
    <>
      <Navbar />

      {/* PageBanner with static content */}
      <OptimizedPageBanner imageName="aboutus-banner" />
      <AboutusSection />
      <WhoAreWe />
    </>
  );
}
