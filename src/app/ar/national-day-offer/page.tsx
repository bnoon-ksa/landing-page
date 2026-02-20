import Navbar from '@/components/ar/Layout/Navbar';
import OptimizedPageBanner from '@/components/ui/OptimizedPageBanner';
import NationalDayOffer from '@/components/ar/Common/NationalDayOffer';
export default function AboutPage() {
  return (
    <>
      <Navbar />
      <OptimizedPageBanner imageName="national-day-banner-ar" />
      <NationalDayOffer />
    </>
  );
}
