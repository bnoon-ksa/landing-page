import type { Metadata } from "next";
import PageBanner from "@/components/Layout/PageBanner";
import Navbar from "@/components/Layout/Navbar";
import AppointmentSection from "@/components/Common/AppointmentSection";

export const metadata: Metadata = {
  title: "Book an Appointment – Bnoon | Riyadh & Jeddah",
  description: "Book your appointment with Bnoon's fertility specialists in Riyadh, Jeddah, or Al Ahsa. Quick and easy booking for reproductive health consultations.",
};

export default function RequestAppointmentServer() {
  return (
    <>
      <Navbar />

      <PageBanner bgImage="/images/request-an-appointment.jpg" />

      <AppointmentSection />
    </>
  );
}
