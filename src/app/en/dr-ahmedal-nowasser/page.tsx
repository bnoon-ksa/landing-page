import type { Metadata } from 'next';
import Navbar from '@/components/Layout/Navbar';
import DrAhmedAlNowasser from '@/components/Common/DrAhmedAlNowasser';

export const metadata: Metadata = {
  title: 'Dr. Ahmed Al-Nowasser – Best Fertility Doctor in Al Ahsa | Bnoon ',
  description:
    'Dr. Ahmed Al-Nowasser, fertility consultant at Bnoon Al Ahsa. Specialized in IVF, ICSI, and advanced infertility treatments.',
};

export default function ServerDrAhmedAlNowasserPage() {
  return (
    <>
      <Navbar />
      <DrAhmedAlNowasser />
    </>
  );
}
