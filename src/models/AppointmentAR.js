import mongoose from 'mongoose';

const AppointmentARSchema = new mongoose.Schema(
  {
    interest: String,
    branch: String,
    visitType: String,
    doctor: String,
    name: String,
    isForYou: String,
    nationality: String,
    countryOfResidence: String,
    cityIfInSA: String,
    gender: String,
    mobile: String,
    email: String,
    preferredDate: String,
    preferredTime: String,
    howHeard: String,
    language: String, // optional
  },
  { timestamps: true },
);

const AppointmentAR =
  mongoose.models.AppointmentAR || mongoose.model('AppointmentAR', AppointmentARSchema);
export default AppointmentAR;
