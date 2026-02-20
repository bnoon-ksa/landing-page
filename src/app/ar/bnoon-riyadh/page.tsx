import type { Metadata } from 'next';
import Navbar from '@/components/ar/Layout/Navbar';
import OptimizedPageBanner from '@/components/ui/OptimizedPageBanner';
import Riyadharea from '@/components/ar/Common/Riyadharea';

export const metadata: Metadata = {
  title: 'بنون - مراكز الإخصاب وصحة المرأة في الرياض',
  description:
    'مراكز بنون للإخصاب وصحة المرأة في الرياض. خدمات أطفال الأنابيب والحقن المجهري وعلاج العقم مع فريق طبي متخصص.',
};

export default function BnoonRiyadhPage() {
  return (
    <>
      <Navbar />
      <OptimizedPageBanner imageName="clinics-banner-ar" />
      <Riyadharea />
    </>
  );
}
