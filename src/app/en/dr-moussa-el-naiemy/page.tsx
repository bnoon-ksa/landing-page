import type { Metadata } from 'next';
import Navbar from '@/components/Layout/Navbar';
import DrMoussaElNaiemy from '@/components/Common/DrMoussaElNaiemy';

export const metadata: Metadata = {
  title: 'Dr. Mousa ElNaiemy – Urologist/Andrologist in Riyadh | Bnoon ',
  description:
    'Dr. Mousa ElNaiemy, urologist and andrologist at Bnoon Riyadh. Specialized in diagnosing and treating male infertility.',
};

export default function ServerDrMoussaElNaiemyPage() {
  return (
    <>
      <Navbar />
      <DrMoussaElNaiemy />
    </>
  );
}
