import mongoose from "mongoose";

const AppointmentENSchema = new mongoose.Schema(
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
  },
  { timestamps: true }
);

const AppointmentEN = mongoose.models.AppointmentEN || mongoose.model("AppointmentEN", AppointmentENSchema);
export default AppointmentEN;
