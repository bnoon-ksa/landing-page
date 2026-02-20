import type { Metadata } from 'next';
import Navbar from '@/components/ar/Layout/Navbar';
import DrRazanGhaith from '@/components/ar/Common/DrRazanGhaith';

export const metadata: Metadata = {
  title: 'د. رزان غيث – طبيبة النساء والولادة والإخصاب في جدة | بنون ',
  description:
    'الدكتورة رزان غيث، استشارية أمراض النساء والولادة والإخصاب في مركز بنون بجدة. خبرة واسعة في أطفال الأنابيب وصحة المرأة.',
};

export default function DrRazanGhaithPage() {
  return (
    <>
      <Navbar />
      <DrRazanGhaith />
    </>
  );
}
