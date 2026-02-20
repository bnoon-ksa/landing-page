import Navbar from '@/components/Layout/Navbar';
import OptimizedPageBanner from '@/components/ui/OptimizedPageBanner';
import Jeddaharea from '@/components/Common/Jeddaharea';
export default function AboutPage() {
  return (
    <>
      <Navbar />
      <OptimizedPageBanner imageName="clinics-banner" />
      <Jeddaharea />
    </>
  );
}
