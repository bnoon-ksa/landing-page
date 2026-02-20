import type { Metadata } from 'next';
import Navbar from '@/components/ar/Layout/Navbar';
import OptimizedPageBanner from '@/components/ui/OptimizedPageBanner';
import Jeddaharea from '@/components/ar/Common/Jeddaharea';

export const metadata: Metadata = {
  title: 'بنون - مركز الإخصاب وصحة المرأة في جدة',
  description:
    'مركز بنون للإخصاب وصحة المرأة في جدة. خدمات أطفال الأنابيب والحقن المجهري وعلاج العقم مع فريق طبي متخصص.',
};

export default function BnoonJeddahPage() {
  return (
    <>
      <Navbar />
      <OptimizedPageBanner imageName="clinics-banner-ar" />
      <Jeddaharea />
    </>
  );
}
