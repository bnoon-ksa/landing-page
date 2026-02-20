import type { Metadata } from 'next';
import Navbar from '@/components/Layout/Navbar';
import DrRaniaElsherify from '@/components/Common/DrRaniaElsherify';

export const metadata: Metadata = {
  title: 'Dr. Rania Elsherify - OBGYN Doctor in Bnoon | Al Ahsa',
  description:
    "Dr. Rania Elsherify, OBGYN consultant at Bnoon Al Ahsa. Specialized in women's health, obstetrics, and gynecological care.",
};

export default function ServerDrRaniaElsherifyPage() {
  return (
    <>
      <Navbar />
      <DrRaniaElsherify />
    </>
  );
}
