import type { Metadata } from 'next';
import OptimizedPageBanner from '@/components/ui/OptimizedPageBanner';
import Navbar from '@/components/ar/Layout/Navbar';
import NationalDayOffer from '@/components/ar/Common/NationalDayOffer';
export const metadata: Metadata = {
  title: 'عرض يوم التأسيس - الحقن المجهري | بنون - الرياض وجدة والأحساء',
  description: '',
};

export default function FoundingDayDiscountPage() {
  return (
    <>
      <Navbar />
      <div style={{ position: 'relative' }}>
        <OptimizedPageBanner imageName="static-banner-ar" style={{ height: 360 }} />
        <div className="container">
          <div
            className="second-banner-content reveal-text text-banner"
            style={{
              position: 'absolute',
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 10,
            }}
          >
            <h1 style={{ color: '#004E78' }}>
              <span className="rowdies-font text-size">عرض يوم التأسيس للحقن المجهري</span>
            </h1>

            <p style={{ color: '#fff' }} className="special-desc"></p>

            <p style={{ color: '#fff' }} className="terms-text"></p>
          </div>
        </div>
      </div>
      <NationalDayOffer />
    </>
  );
}
