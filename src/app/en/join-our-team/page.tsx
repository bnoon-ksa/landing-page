import type { Metadata } from 'next';
import OptimizedPageBanner from '@/components/ui/OptimizedPageBanner';
import Navbar from '@/components/Layout/Navbar';
import TeamsSection from '@/components/Common/TeamsSection';

export const metadata: Metadata = {
  title: 'Join Bnoon – Innovation, Education & Research ',
  description:
    "Join Bnoon's medical team. Career opportunities in fertility medicine, innovation, education, and research across Riyadh, Jeddah, and Al Ahsa.",
};

export default function JoinOurTeamPage() {
  return (
    <>
      <Navbar />

      <OptimizedPageBanner imageName="join-team-banner" />

      <TeamsSection />
    </>
  );
}
