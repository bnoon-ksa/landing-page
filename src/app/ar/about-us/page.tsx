import type { Metadata } from 'next';
import OptimizedPageBanner from '@/components/ui/OptimizedPageBanner';
import Navbar from '@/components/ar/Layout/Navbar';
import AboutusSection from '@/components/ar/Common/AboutusSection';
import WhoAreWe from '@/components/ar/Common/WhoAreWe';

export const metadata: Metadata = {
  title: 'نبذة عنّا – بنون',
  description:
    'تعرّفوا على بنون، شبكة مراكز الإخصاب وصحة المرأة الرائدة في السعودية. نقدم رعاية شاملة بأحدث التقنيات الطبية في الرياض وجدة والأحساء.',
};

export default function AboutUsPage() {
  return (
    <>
      <Navbar />
      <OptimizedPageBanner imageName="aboutus-banner-ar" />
      <AboutusSection />
      <WhoAreWe />
    </>
  );
}
