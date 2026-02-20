import type { Metadata } from 'next';
import OptimizedPageBanner from '@/components/ui/OptimizedPageBanner';
import Navbar from '@/components/ar/Layout/Navbar';
import FeedbackSection from '@/components/ar/Common/FeedbackSection';

export const metadata: Metadata = {
  title: 'بنون – شاركونا تجربتكم ',
  description:
    'شاركونا تجربتكم مع مراكز بنون. ملاحظاتكم واقتراحاتكم تساعدنا في تحسين خدماتنا وتقديم أفضل رعاية صحية لكم.',
};

export default function SubmitFeedbackPage() {
  return (
    <>
      <Navbar />

      <OptimizedPageBanner imageName="feedback-banner-ar" />

      <FeedbackSection />
    </>
  );
}
