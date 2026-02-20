import type { Metadata } from 'next';
import Navbar from '@/components/Layout/Navbar';
import OptimizedPageBanner from '@/components/ui/OptimizedPageBanner';
import MensInfertilityCanpaign from '@/components/Common/MensInfertilityCanpaign';

export const metadata: Metadata = {
  title: 'Founding Day Offer for Andrology | Bnoon - Riyadh & Jeddah',
  description: '',
};

export default function NationalDayOfferPage() {
  return (
    <>
      <Navbar />

      <div style={{ position: 'relative' }}>
           <OptimizedPageBanner
  imageName="ivf-banner-en"
  bannerPosition="100% 60%"
/>
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
                FOUNDING DAY OFFER IN <br/>ANDROLOGY & MALE <br/>INFERTILITY SERVICES
              </span>
            </h1>
          </div>
        </div>
      </div>

      <MensInfertilityCanpaign />

      {/* ✅ Only this page mobile banner shift (plain style tag) */}
    </>
  );
}
