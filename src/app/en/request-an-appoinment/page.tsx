import type { Metadata } from 'next';
import OptimizedPageBanner from '@/components/ui/OptimizedPageBanner';
import Navbar from '@/components/Layout/Navbar';
import AppointmentSection from '@/components/Common/AppointmentSection';

export const metadata: Metadata = {
  title: 'Book an Appointment – Bnoon | Riyadh & Jeddah',
  description:
    "Book your appointment with Bnoon's fertility specialists in Riyadh, Jeddah, or Al Ahsa. Quick and easy booking for reproductive health consultations.",
};

export default function RequestAppointmentServer() {
  return (
    <>
      <Navbar />

      <OptimizedPageBanner imageName="request-appointment-banner" />

      <AppointmentSection />
    </>
  );
}
