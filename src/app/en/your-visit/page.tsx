import type { Metadata } from 'next';
import OptimizedPageBanner from '@/components/ui/OptimizedPageBanner';
import Navbar from '@/components/Layout/Navbar';
import VisitTabs from '@/components/Common/VisitTabs';

export const metadata: Metadata = {
  title: 'Bnoon - Your Visit to Bnoon in Jeddah, Riyadh & Al Ahsa',
  description:
    'Everything you need to know about visiting Bnoon in Jeddah, Riyadh, and Al Ahsa. Appointments, preparation, and available services.',
};

export default function YourVisitPage() {
  return (
    <>
      <Navbar />

      {/* PageBanner with static content */}
      <OptimizedPageBanner imageName="visit-banner" />
      <VisitTabs />
    </>
  );
}
