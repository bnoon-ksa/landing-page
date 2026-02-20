import type { Metadata } from 'next';
import Navbar from '@/components/Layout/Navbar';
import OptimizedPageBanner from '@/components/ui/OptimizedPageBanner';
import Jeddaharea from '@/components/Common/Jeddaharea';

export const metadata: Metadata = {
  title: 'Bnoon - Jeddah | The Fertility & Women Health Center',
  description:
    "Bnoon fertility and women's health center in Jeddah. IVF, ICSI, and infertility treatment services with an expert medical team.",
};

export default function BnoonJeddahPage() {
  return (
    <>
      <Navbar />
      <OptimizedPageBanner imageName="clinics-banner" />
      <Jeddaharea />
    </>
  );
}
