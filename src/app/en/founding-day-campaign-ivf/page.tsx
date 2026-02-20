import type { Metadata } from 'next';
import Navbar from '@/components/Layout/Navbar';
import OptimizedPageBanner from '@/components/ui/OptimizedPageBanner';
import NationalDayOffer from '@/components/Common/NationalDayOffer';

export const metadata: Metadata = {
  title: 'Founding Day Offer - IVF | Bnoon - Riyadh, Jeddah & Al Ahsa',
  description: '',
};

export default function NationalDayOfferPage() {
  return (
    <>
      <Navbar />

      <div style={{ position: 'relative' }}>
        <OptimizedPageBanner imageName="static-banner-en" style={{ height: 360 }} />
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
              <span className="rowdies-font text-size">
                FOUNDING DAY OFFER <br />
                ON IVF/ICSI CYCLES
              </span>
            </h1>
          </div>
        </div>
      </div>

      <NationalDayOffer />

      {/* ✅ Only this page mobile banner shift (plain style tag) */}
    </>
  );
}
