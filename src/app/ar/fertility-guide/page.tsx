import type { Metadata } from 'next';
import OptimizedPageBanner from '@/components/ui/OptimizedPageBanner';
import Navbar from '@/components/ar/Layout/Navbar';
import FertilityTabs from '@/components/ar/Common/FertilityTabs';
import CustomList from '@/components/ar/Common/CustomList';

export const metadata: Metadata = {
  title: 'بنون – معلومات شاملة عن الخصوبة وعلاجات الإخصاب والحمل ',
  description:
    'دليل شامل عن الخصوبة من بنون. معلومات طبية موثوقة عن أسباب تأخر الحمل وعلاجات الإخصاب المتاحة ونصائح لتحسين فرص الحمل.',
};

export default function FertilityGuidePage() {
  return (
    <>
      <Navbar />

      {/* PageBanner with static content */}
      <OptimizedPageBanner imageName="fertility-guide-banner-ar" />
      <FertilityTabs />
    </>
  );
}
