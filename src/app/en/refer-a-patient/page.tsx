import type { Metadata } from 'next';
import OptimizedPageBanner from '@/components/ui/OptimizedPageBanner';
import Navbar from '@/components/Layout/Navbar';
import ReferaPatient from '@/components/Common/ReferaPatient';
import { CDN_URL } from '../../../utils/cdn';
export const metadata: Metadata = {
  title: 'Refer a Patient for Expert Fertility Care | Bnoon ',
  description:
    "Learn about Bnoon, Saudi Arabia's leading fertility and women's health network. Advanced IVF and reproductive medicine across Riyadh, Jeddah, and Al Ahsa.",
};

export default function ReferaPatientPage() {
  return (
    <>
      <Navbar />

      <OptimizedPageBanner imageName="refer-patient-banner" />
      <ReferaPatient />
    </>
  );
}
