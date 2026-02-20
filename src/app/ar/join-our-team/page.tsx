import type { Metadata } from 'next';
import OptimizedPageBanner from '@/components/ui/OptimizedPageBanner';
import Navbar from '@/components/ar/Layout/Navbar';
import TeamsSection from '@/components/ar/Common/TeamsSection';

export const metadata: Metadata = {
  title: 'انضموا إلى فريق بنون – الابتكار، التعليم الطبي، الأبحاث ',
  description:
    'انضموا إلى فريق بنون الطبي. فرص عمل في مجالات الإخصاب والابتكار الطبي والتعليم والأبحاث في الرياض وجدة والأحساء.',
};

export default function JoinOurTeamPage() {
  return (
    <>
      <Navbar />

      <OptimizedPageBanner imageName="join-team-banner-ar" />

      <TeamsSection />
    </>
  );
}
