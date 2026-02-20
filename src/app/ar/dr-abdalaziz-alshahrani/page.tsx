import type { Metadata } from 'next';
import Navbar from '@/components/ar/Layout/Navbar';
import DrAbdulAzizAlShahrani from '@/components/ar/Common/DrAbdulAzizAlShahrani';

export const metadata: Metadata = {
  title: 'د. عبدالعزيز الشهراني  – أفضل طبيب إخصاب في الرياض | بنون ',
  description: '',
};

export default function DrAbdalazizAlshahraniPage() {
  return (
    <>
      <Navbar />
      <DrAbdulAzizAlShahrani />
    </>
  );
}
