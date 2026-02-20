import type { Metadata } from 'next';
import Navbar from '@/components/ar/Layout/Navbar';
import OptimizedPageBanner from '@/components/ui/OptimizedPageBanner';
import AlahsaArea from '@/components/ar/Common/AlahsaArea';

export const metadata: Metadata = {
  title: 'بنون - مركز الإخصاب وصحة المرأة في الأحساء',
  description:
    'مركز بنون للإخصاب وصحة المرأة في الأحساء. خدمات أطفال الأنابيب والحقن المجهري وعلاج العقم مع فريق طبي متخصص.',
};

export default function BnoonAlahsaPage() {
  return (
    <>
      <Navbar />
      <OptimizedPageBanner imageName="clinics-banner-ar" />
      <AlahsaArea />
    </>
  );
}
