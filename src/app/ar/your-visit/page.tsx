import type { Metadata } from 'next';
import OptimizedPageBanner from '@/components/ui/OptimizedPageBanner';
import Navbar from '@/components/ar/Layout/Navbar';
import VisitTabs from '@/components/ar/Common/VisitTabs';

export const metadata: Metadata = {
  title: 'بنون – زيارتكم لمراكزنا في الرياض وجدة والأحساء ',
  description:
    'كل ما تحتاجون معرفته عن زيارتكم لمراكز بنون في الرياض وجدة والأحساء. معلومات عن المواعيد والتحضيرات والخدمات المتاحة.',
};

export default function YourVisitPage() {
  return (
    <>
      <Navbar />

      {/* PageBanner with static content */}
      <OptimizedPageBanner imageName="visit-banner-ar" />
      <VisitTabs />
    </>
  );
}
