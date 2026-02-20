import type { Metadata } from 'next';
import Navbar from '@/components/Layout/Navbar';
import OptimizedPageBanner from '@/components/ui/OptimizedPageBanner';
import Riyadharea from '@/components/Common/Riyadharea';

export const metadata: Metadata = {
  title: 'Bnoon - Riyadh | The Fertility & Women Health Centers',
  description:
    "Bnoon fertility and women's health centers in Riyadh. IVF, ICSI, and infertility treatment services with an expert medical team.",
};

export default function BnoonRiyadhPage() {
  return (
    <>
      <Navbar />
      <OptimizedPageBanner imageName="clinics-banner" />
      <Riyadharea />
    </>
  );
}
