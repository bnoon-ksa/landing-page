import type { Metadata } from 'next';
import OptimizedPageBanner from '@/components/ui/OptimizedPageBanner';
import Navbar from '@/components/Layout/Navbar';
import ReferaPatient from '@/components/Common/ReferaPatient';

export const metadata: Metadata = {
  title: 'Refer a Patient for Expert Fertility Care | Bnoon ',
  description:
    "Learn about Bnoon, Saudi Arabia's leading fertility and women's health network. Advanced IVF and reproductive medicine across Riyadh, Jeddah, and Al Ahsa.",
};

export default function ReferaPatientPage() {
  return (
    <>
      <Navbar />

      <div style={{ position: 'relative' }}>
        <OptimizedPageBanner imageName="refer-patient-banner" />

        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: 0,
            width: '100%',
            transform: 'translateY(-50%)',
            textAlign: 'left',
            color: '#004E78 !important',
            zIndex: 2,
            pointerEvents: 'none',
          }}
        >
          <div className="container ">
           <h2
  className="section-title"
  style={{
    fontSize: 'clamp(14px, 5vw, 55px)',
    fontWeight: 600,
    margin: 0,
    color: '#004E78',
  }}
>
  REFER A PATIENT
</h2>
          </div>
        </div>
      </div>

      <ReferaPatient />
    </>
  );
}
