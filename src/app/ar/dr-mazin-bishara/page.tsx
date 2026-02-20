import type { Metadata } from 'next';
import Navbar from '@/components/ar/Layout/Navbar';
import DrMazinBishara from '@/components/ar/Common/DrMazinBishara';

export const metadata: Metadata = {
  title: 'د. مازن بشارة – أفضل طبيب أطفال الأنابيب والعقم في جدة| بنون ',
  description:
    'الدكتور مازن بشارة، استشاري أطفال الأنابيب والعقم في مركز بنون بجدة. خبرة واسعة في علاجات الإخصاب المساعد.',
};

export default function DrMazinBisharaPage() {
  return (
    <>
      <Navbar />
      <DrMazinBishara />
    </>
  );
}
