import type { Metadata } from 'next';
import ArabicHomeClient from '@/components/ar/ArabicMeta/HomePage';

export const metadata: Metadata = {
  title: 'بنون | أفضل شبكة لمراكز الإخصاب وصحة المرأة في السعودية ',
  description:
    'مركز بنون الطبي متخصص في الإخصاب وصحة المرأة. نقدم الفحوصات والعلاجات اللازمة للزوجين مع خطط علاجية مخصصة تراعي الحالة الصحية والنفسية لكل حالة.',
};

export default function ArabicHomePage() {
  return <ArabicHomeClient />;
}
