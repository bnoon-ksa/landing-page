import type { Metadata } from "next";
import OptimizedPageBanner from '@/components/ui/OptimizedPageBanner';
import Navbar from '@/components/ar/Layout/Navbar';
import ReferaPatient from '@/components/ar/Common/ReferaPatient';


export const metadata: Metadata = {
  title:  "طلب تحويل مريض لرعاية متقدمة للخصوبة | بنــون ",
  description:
    'اكتشفوا نسب نجاح عمليات أطفال الأنابيب والحقن المجهري في بنون. نسب حمل رائدة بفضل أحدث التقنيات وفريق طبي متميز.',
};

export default function ReferaPatientPage() {
  return (
    <>
      <Navbar />

      <OptimizedPageBanner imageName="referpaitent-banner-ar" />

      <ReferaPatient />
    </>
  );
}
