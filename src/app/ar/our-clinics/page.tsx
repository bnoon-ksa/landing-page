import type { Metadata } from 'next';
import Navbar from '@/components/ar/Layout/Navbar';
import OptimizedPageBanner from '@/components/ui/OptimizedPageBanner';
import OurLocations from '@/components/ar/Common/OurLocations';

export const metadata: Metadata = {
  title: 'بنون - مراكز الإخصاب وصحة المرأة في الرياض وجدة والأحساء ',
  description:
    'اكتشفوا مراكز بنون للإخصاب وصحة المرأة في الرياض وجدة والأحساء. مواقع متعددة لتقديم أفضل خدمات علاج العقم وأطفال الأنابيب.',
};

export default function OurClinicsPage() {
  return (
    <>
      <Navbar />
      <OptimizedPageBanner imageName="clinics-banner-ar" />
      <OurLocations />
    </>
  );
}
