import type { Metadata } from 'next';
import OptimizedPageBanner from '@/components/ui/OptimizedPageBanner';
import Navbar from '@/components/ar/Layout/Navbar';
import TelemedicineSection from '@/components/ar/Common/TelemedicineSection';

export const metadata: Metadata = {
  title: ' الاستشارات عن بُعد – بنون',
  description:
    'استشارات طبية عن بُعد مع أطباء بنون المتخصصين في الإخصاب وصحة المرأة. احصلوا على استشارة مريحة من منزلكم في أي مكان بالسعودية.',
};

export default function TelemedicinePage() {
  return (
    <>
      <Navbar />
      <OptimizedPageBanner imageName="telemedicine-banner-ar" />
      <TelemedicineSection />
    </>
  );
}
