"use client";

import PageBanner from "@/components/ar/Layout/PageBanner";
import Navbar from "@/components/ar/Layout/Navbar";
import AppointmentSection from "@/components/ar/Common/AppointmentSection";

export default function ClientRequestAppointmentPage() {
  return (
    <>
      <Navbar />

      <PageBanner bgImage="/images/request-an-appointment-ar.jpg" />

      <AppointmentSection />
    </>
  );
}

