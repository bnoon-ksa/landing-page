import type { Metadata } from 'next';
import Navbar from '@/components/Layout/Navbar';
import PostEmbryoTransfer from '@/components/Common/PostEmbryoTransfer';

export const metadata: Metadata = {
  title: 'Patients Rights – Bnoon',
  description:
    'Learn about your rights as a patient at Bnoon. We are committed to transparent, fair medical care that respects your privacy and dignity.',
};

export default function ServerPatientsRightsPage() {
  return (
    <div className="">
      <Navbar />
      <PostEmbryoTransfer />
    </div>
  );
}
