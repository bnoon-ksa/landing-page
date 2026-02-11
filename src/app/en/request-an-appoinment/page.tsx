import type { Metadata } from "next";
import ClientRequestAppointmentPage from "./page.client";

export const metadata: Metadata = {
  title: "Book an Appointment – Bnoon | Riyadh & Jeddah",
  description: "Book your appointment with Bnoon's fertility specialists in Riyadh, Jeddah, or Al Ahsa. Quick and easy booking for reproductive health consultations.",
};

export default function RequestAppointmentServer() {
  return <ClientRequestAppointmentPage />;
}
