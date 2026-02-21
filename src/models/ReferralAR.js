import mongoose from "mongoose";

const ReferralARSchema = new mongoose.Schema(
  {
    branch: { type: String, required: true },

    referringPhysicianName: { type: String, required: true },
    referringPhysicianPhone: { type: String, required: true },
    referringPhysicianEmail: { type: String, required: true },

    facilityName: { type: String, default: "" },
    organizationCity: { type: String, default: "" },
    district: { type: String, default: "" },

    patientName: { type: String, required: true },
    patientPhone: { type: String, required: true },
    dateOfBirth: { type: String, required: true },
    gender: { type: String, required: true },

    reason: { type: String, required: true },
    otherReasonText: { type: String, default: "" },

    recaptcha: { type: String, default: "" },
  },
  { timestamps: true }
);

export default mongoose.models.ReferralAR ||
  mongoose.model("ReferralAR", ReferralARSchema);