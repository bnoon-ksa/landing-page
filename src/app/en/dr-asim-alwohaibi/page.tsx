import type { Metadata } from 'next';
import Navbar from '@/components/Layout/Navbar';
import DrAsimAlWohaibi from '@/components/Common/DrAsimAlWohaibi';

export const metadata: Metadata = {
  title: 'Dr. Asim AlWohaibi – Best Fertility Doctor in Riyadh | Bnoon',
  description:
    'Dr. Asim AlWohaibi, fertility consultant at Bnoon Riyadh. Specialized in IVF, ICSI, and advanced infertility treatments.',
};

export default function ServerDrAsimAlwohaibiPage() {
  return (
    <>
      <Navbar />
      <DrAsimAlWohaibi />
    </>
  );
}
