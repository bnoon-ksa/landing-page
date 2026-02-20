import type { Metadata } from 'next';
import Navbar from '@/components/Layout/Navbar';
import DrRazanGhaith from '@/components/Common/DrRazanGhaith';

export const metadata: Metadata = {
  title: 'Dr. Razan Ghaith - Best OBGYN & IVF Doctor in Jeddah| Bnoon ',
  description:
    "Dr. Razan Ghaith, OBGYN and IVF consultant at Bnoon Jeddah. Specialized in IVF, women's health, and reproductive medicine.",
};

export default function ServerDrRazanGhaithPage() {
  return (
    <>
      <Navbar />
      <DrRazanGhaith />
    </>
  );
}
