import type { Metadata } from 'next';
import OptimizedPageBanner from '@/components/ui/OptimizedPageBanner';
import Navbar from '@/components/Layout/Navbar';
import FertilityTabs from '@/components/Common/FertilityTabs';
import CustomList from '@/components/Common/CustomList';

export const metadata: Metadata = {
  title: 'Bnoon - All Your Need to Know About Your Fertility ',
  description:
    'A comprehensive fertility guide from Bnoon. Reliable medical information on causes of infertility, available treatments, and tips to improve conception.',
};

export default function FertilityGuidePage() {
  return (
    <>
      <Navbar />

      {/* PageBanner with static content */}
      <OptimizedPageBanner imageName="fertility-guide-banner" />
      <FertilityTabs />
    </>
  );
}
